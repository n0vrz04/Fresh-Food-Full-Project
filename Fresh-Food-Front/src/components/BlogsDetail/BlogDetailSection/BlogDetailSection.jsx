import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './BlogDetailSection.css'; 

const BlogDetailSection = () => {
  const { id } = useParams(); 
  const blogId = parseInt(id);
  
  const [count, setCount] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('https://vercel-back-project-fresh-food.vercel.app/blogs/getall')
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
        console.error('Error fetching blogs:', error);
        setError('Error fetching blogs');
        setLoading(false);
      });
  }, []);
     
    
  

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <Container className="blog-detail my-5">
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <img src={blog.image} alt={blog.title} className="img-fluid rounded" />
        </Col>

        <Col md={6} >
          <h1 className="blog-name-detail text-center">{blog.title}</h1>
          <p className="blog-description">{blog.description}</p>
          <div className='d-flex flex-column align-items-center'>
            <div className="blog-author-date">
              <p className="blog-author">Posted by <span className='fw-bold text-dark'>{blog.author}</span></p>
              <p className="blog-date">{blog.date}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetailSection;
