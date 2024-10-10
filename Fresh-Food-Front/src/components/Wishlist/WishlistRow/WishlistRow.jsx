import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket , faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './WishlistRow.css'; 

import { useNavigate } from 'react-router-dom';

const WishlistRow = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  
  const deleteProductFromWishlist = (product) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== product.id);
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
  }; 
  
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

  useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(wishlistItems);
  }, []);

  return (
    <div className="m-5">
      <table className="table">
        <thead>
          <tr>
            <th className="product-column">Product Photo</th>
            <th className="product-column">Product Name</th>
            <th className="product-column">Old Price</th>
            <th className="product-column">New Price</th>
            <th className="product-column">Delete</th>
            <th className="product-column">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} width="100" />
              </td>
              <td>{product.name}</td>
              <td><s>{product.oldprice}</s></td>
              <td>{product.newprice}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>deleteProductFromWishlist(product)}><FontAwesomeIcon icon={faTrashCan}/></button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={()=>AddToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistRow;
