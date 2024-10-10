import React from 'react';
import './LastestProducts.css';

import grande from '../../../assets/pictures/grande.jpg';
import gobelek from '../../../assets/pictures/gobelek.jpg';
import karalyok from '../../../assets/pictures/karalyok.jpg';
import pomidor from '../../../assets/pictures/pomidor.jpg';
import { Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Qara Qaragat', oldPrice: '€50.00', newPrice: '€37.00', image: grande },
  { id: 2, name: 'Gobelek', oldPrice: '€24.00', newPrice: '€21.00', image: gobelek },
  { id: 3, name: 'Karalyok', oldPrice: '€66.00', newPrice: '€51.00', image: karalyok },
  { id: 4, name: 'Pomidor', oldPrice: '€20.00', newPrice: '€15.00', image: pomidor },
  
];

const LastestProducts = () => {
  return (
    <section className="featured-products mt-3">
      <h2 className="featured-heading">Lastest Products</h2>
      <div className="product-grid row my-3 mx-4 gap-0">
      {products.map((product) => (
        <div className="product-card col-sm-6 col-md-4 col-lg-3 mb-2" key={product.id}>
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <div className="product-info px-3 my-0">
            <p className="product-name">{product.name}</p>
            <div className='product-prices'>
                <p className="old-price"><s>{product.oldPrice}</s></p>
                <p className="new-price">{product.newPrice}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>

      <Link to="/products" className="view-all-btn">View All</Link>
    </section>
  );
};

export default LastestProducts;