import React from 'react'

import './LastestFromBlog.css';

import blogImage1 from '../../../assets/pictures/lastestBlog/blogImage1.jpg';
import blogImage2 from '../../../assets/pictures/lastestBlog/blogImage2.jpg';
import blogImage3 from '../../../assets/pictures/lastestBlog/blogImage3.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
      id: 1,
      title: 'Learn On Organic Farms',
      author: 'freshfood-store Admin',
      comments: 2,
      image: blogImage1,
    },
    {
      id: 2,
      title: 'What is organic farming?',
      author: 'freshfood-store Admin',
      comments: 0,
      image: blogImage2, 
    },
    {
      id: 3,
      title: 'Advantages of Organic Meat',
      author: 'Trương Nguyễn Công',
      comments: 0,
      image: blogImage3, 
    },
  ];

const LastestFromBlog = () => {
  return (
    <section className="blog-section my-3">
      <h2 className='blog-section-header'>Lastest From Blog</h2>
      <div className="blog-container">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} />
            <div className="blog-details">
              <h3>{post.title}</h3>
              <p className="author">Posted by <span>{post.author}</span> - {post.comments} Comments</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/blogs" className="view-all-btn">View All</Link>

    </section>
  )
}

export default LastestFromBlog
