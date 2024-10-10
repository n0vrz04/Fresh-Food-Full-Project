import React from 'react'
import './BlogCards.css'
import { Link, useNavigate } from 'react-router-dom'

import blogImage1 from '../../../assets/pictures/lastestBlog/blogImage1.jpg';
import blogImage2 from '../../../assets/pictures/lastestBlog/blogImage2.jpg';
import blogImage3 from '../../../assets/pictures/lastestBlog/blogImage3.jpg';
import blogImage4 from '../../../assets/pictures/lastestBlog/blogImage4.jpg';
import blogImage5 from '../../../assets/pictures/lastestBlog/blogImage5.jpg';
import blogImage6 from '../../../assets/pictures/lastestBlog/blogImage6.jpg';
import blogImage7 from '../../../assets/pictures/lastestBlog/blogImage7.jpg';
import blogImage8 from '../../../assets/pictures/lastestBlog/blogImage8.jpg';
import blogImage9 from '../../../assets/pictures/lastestBlog/blogImage9.jpg';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import { useEffect, useState } from 'react'



const BlogCards = () => {
    
    const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3090/blogs/getall')
      .then((response) => {
        
        if (response.data && Array.isArray(response.data)) {

          const blogsWithImages = response.data.map((blog) => {
            if (blog.image && blog.image.data) {
              const base64String = btoa(
                String.fromCharCode(...new Uint8Array(blog.image.data))
              );
              return {
                ...blog,
                image: `data:image/jpeg;base64,${base64String}`, 
              };
            }
            return blog;
          });
          setBlogs(blogsWithImages);
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
  
  
  
  const showBlogDetail = (id) => {
    navigate(`/blogs/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (blogs.length === 0) {
    return <p>No products available.</p>;
  }
  return (
    <div>
      <div className="container-fluid p-4  my-5">
        <div className="d-flex flex-wrap gap-4 justify-content-center">
            {blogs.map(blog => (
                <div key={blog.id} className="blog-cards">
                    <div className="card">
                        <img src={blog.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className='my-1'>{blog.date}</p>
                            <h5 className="card-title my-2">{blog.title}</h5>
                            <p className="card-text my-2">{blog.description}</p>
                            <p className='my-2'>Posted by <span className='text-dark fw-bold'>{blog.author}</span></p>
                            <div className='btn-container'>
                                <Button onClick={() => showBlogDetail(blog.id)} className='view-all-btn'>Read More</Button>
                            </div>
                        </div>
                    </div>  
                </div>       
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogCards
