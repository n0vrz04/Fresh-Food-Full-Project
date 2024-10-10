import React, { useState, useEffect } from 'react';
import './ProductGrid.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faHeart, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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


  const AddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
    alert(`${product.name} has been added to the cart!`);
  }

  const AddToWishlist = (product) => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingProduct = wishlistItems.find((item) => item.id === product.id);
    if (existingProduct) {
      alert('Product already in wishlist');
    } else {
      const updatedWishlistItems = [...wishlistItems, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
      alert(`${product.name} has been added to the wishlist!`);
    }
  }

  
  
  
  const showProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-grid row my-3 mx-4 gap-0">
      {products.map((data) => (
        <div className="product-card col-sm-6 col-md-4 col-lg-3 mb-2" key={data.id}>
          <div className="product-image-container">
            <img src={data.image} alt={data.name} className="product-image" />
            <div className="hover-actions">
              <button className="action-btn" onClick={()=>AddToCart(data)}><FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
              <button className="action-btn" onClick={()=>AddToWishlist(data)}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
            </div>
          </div>
          <div className="product-info my-0">
            <div className='left-product-info'>
              <p className="product-name">{data.name}</p>
              <div className='product-prices'>
                <p className="old-price"><s>{data.oldprice} €</s></p>
                <p className="new-price">{data.newprice} €</p>
              </div>
            </div>
            <Button className='detail-button' onClick={() => showProductDetail(data.id)}>
              <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
