import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products'; 
import ProductsDetail from './components/ProductsDetail/ProductsDetail';
import Error404 from './components/404/404'; 
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import BlogsDetail from './components/BlogsDetail/BlogsDetail';




function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={
          <ProtectedRoute>
          <Products/>
          </ProtectedRoute>
          } />
        <Route path="/products/:id" element={
          <ProtectedRoute>
          <ProductsDetail/>
          </ProtectedRoute>
          } />
        <Route path="/blogs" element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        } />
        <Route path="/blogs/:id" element={
          <ProtectedRoute>
          <BlogsDetail/>
          </ProtectedRoute>
          } />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/wishlist" element={
          <ProtectedRoute>
          <Wishlist/>
          </ProtectedRoute>
          } />
        <Route path="/cart" element={
          <ProtectedRoute>
          <Cart/>
          </ProtectedRoute>
          } />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<Error404/>} />
      </Routes>
      
    </Router>
  );
}

export default App;