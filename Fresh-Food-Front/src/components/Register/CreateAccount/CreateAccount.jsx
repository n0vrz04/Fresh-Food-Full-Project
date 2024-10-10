import React, { useState } from 'react';
import './CreateAccount.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3090/register', formData);
      
      // Handle success response
      if (response.data && response.data.success) {
        setSuccess('Account created successfully!');
        setError(''); // Clear error if there was one
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
      setSuccess(''); // Clear success message if there was an error
      console.error(err);
    }
  };

  return (
    <div className="form-container my-5 px-5 register-container">
      <h2 className='my-2 text-dark'>CREATE ACCOUNT</h2>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />

        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
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

        <button type="submit" className="create-button">CREATE</button>
        <div className='d-flex justify-content-start mt-2'>
            <a href="/login" className='register-link text-start nav-link'>Login</a>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
