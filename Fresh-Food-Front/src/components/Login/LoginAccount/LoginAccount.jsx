import React, { useState ,useEffect } from 'react';
import './LoginAccount.css'; 
import axios from 'axios';
import { useNavigate ,useLocation } from 'react-router-dom';

const LoginAccount = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [redirectedFromProtected, setRedirectedFromProtected] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user was redirected from a protected route
    if (location.state && location.state.fromProtectedRoute) {
      setRedirectedFromProtected(true);
    }
  }, [location]);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3090/login', formData);

      if (response.data && response.data.success) {
        // Store both token and username
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('username', formData.username);
        
        setSuccess('Login successful!');
        setError('');

        // Redirect to home
        navigate('/');
      } else {
        setError(response.data.message || 'Incorrect username or password.');
        setSuccess('');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed!');
      setSuccess('');
      console.error(error);
    }
  };

  return (
    <div className="form-container my-5 px-5 login-container">
      <h2 className="my-2 text-dark">LOGIN ACCOUNT</h2>

      {redirectedFromProtected && (
        <p className='text-light p-2 bg-danger'>
          You must login if you want to see products and blogs
        </p>
      )}

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button type="submit" className="create-button">LOGIN</button>
        <div className="d-flex justify-content-start mt-2">
          <a href="/register" className="register-link text-start nav-link">Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginAccount;
