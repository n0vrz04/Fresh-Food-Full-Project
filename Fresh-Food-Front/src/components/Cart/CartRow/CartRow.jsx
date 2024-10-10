import { useState, useEffect } from 'react';
import './CartRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartRow = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  const deleteProductFromCart = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  }

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(cartItems);

    const initialQuantities = cartItems.reduce((acc, product) => {
      acc[product.id] = product.quantity;
      return acc;
    }, {});

    setQuantities(initialQuantities);
  }, []);

  const increment = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: quantities[id] + 1 };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const decrement = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));

      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: quantities[id] - 1 };
        }
        return product;
      });

      setProducts(updatedProducts);
      localStorage.setItem('cart', JSON.stringify(updatedProducts));
    }
  };

  const calculateTotalPrice = (price, id) => {
    const numericPrice = parseFloat(price.split(" ")[0]);
    return (quantities[id] * numericPrice).toFixed(2) + " EUR";
  };

  const calculateAllTotalPrice = () => {
    return products.reduce((acc, product) => {
      const numericPrice = parseFloat(product.newprice.split(" ")[0]);
      return acc + quantities[product.id] * numericPrice;
    }, 0).toFixed(2) + " EUR";
  };

  return (
    <div className="m-5">
      <table className="table">
        <thead>
          <tr>
            <th className="product-column">Product Photo</th>
            <th className="product-column">Product Name</th>
            <th className="product-column">Price</th>
            <th className="product-column">Quantity</th>
            <th className="product-column">Delete</th>
            <th className="product-column">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} width="100" />
              </td>
              <td>{product.name}</td>
              <td>{product.newprice}</td>
              <td>
                <div className="quantity-selector gap-2 d-flex">
                  <div className='d-flex align-items-center'>
                    <button className="decrement-btn" onClick={() => decrement(product.id)}>-</button>
                    <span className="quantity-value">{quantities[product.id]}</span>
                    <button className="increment-btn" onClick={() => increment(product.id)}>+</button>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-primary" onClick={()=>deleteProductFromCart(product.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
              </td>

              <td>{calculateTotalPrice(product.newprice, product.id)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end">Total Price:</td>
            <td>{calculateAllTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartRow;
