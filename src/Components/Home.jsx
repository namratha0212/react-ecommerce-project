import React from 'react';
import '../assets/styles/home.css';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/usersportal/products'); // Navigate to the UsersPortal products page
  };

  return (
    <div className="homepage">

      <div className="hero">

        <div className="hero-text">
          <h1>Welcome to ShopEase</h1>
          <p>
            Discover amazing products at the best prices.
            Shop smarter, faster, and easier with ShopEase.
          </p>

          <button className="shop-btn" onClick={goToProducts}>
            Start Shopping <ArrowForwardIcon style={{ marginLeft: '8px' }} />
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="shopping"
          />
        </div>

      </div>

    </div>
  );
};

export default Home;