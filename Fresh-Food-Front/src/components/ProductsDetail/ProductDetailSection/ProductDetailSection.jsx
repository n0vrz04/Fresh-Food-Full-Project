import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductDetailSection.css';

const ProductDetailSection = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  
  const [count, setCount] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('http://localhost:3090/products/getall')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const productsWithImages = response.data.map((product) => {
            if (product.image && product.image.data) {
              const base64String = btoa(
                String.fromCharCode(...new Uint8Array(product.image.data))
              );
              return {
                ...product,
                image: `data:image/jpeg;base64,${base64String}`,
              };
            }
            return product;
          });
          setProducts(productsWithImages);
        } else {
          console.error('Unexpected response structure:', response.data);
          setError('Unexpected response structure');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  const product = products.find((p) => p.id === productId);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += count; 
    } else {
      cartItems.push({ ...product, quantity: count }); 
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${product.name} has been added to the cart!`);
  };

  const addToWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingProduct = wishlistItems.find(item => item.id === product.id);

    if (existingProduct) {
      alert(`${product.name} is already in your wishlist!`);
    } else {
      wishlistItems.push({ ...product });
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      alert(`${product.name} has been added to the wishlist!`);
    }
  };
  
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <Container className="product-detail">
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h1 className="product-name-detail text-center">{product.name}</h1>
          <div className='d-flex justify-content-between align-items-start'>
            <div className="product-pricing">
              <p className="old-price-detail"><s>{product.oldprice} EUR</s></p>
              <p className="new-price-detail">{product.newprice} EUR</p>
            </div>
            <div className="quantity-selector d-flex flex-column">
              <p className="quantity-label">Quantity:</p>
              <div className='d-flex align-items-center'>
                <button className="decrement-btn" onClick={decrement}>-</button>
                <span className="quantity-value">{count}</span>
                <button className="increment-btn" onClick={increment}>+</button>
              </div>
            </div>
          </div>
          <p className="product-description">This is a high-quality union bed made from premium materials.</p>

          <div className="product-actions d-flex justify-content-center">
            <Button className="me-3" onClick={addToCart}>
              <FontAwesomeIcon icon={faShoppingBasket} className="me-2" />
              Add to Cart
            </Button>
            <Button onClick={addToWishlist}>
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Add to Wishlist
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailSection;
