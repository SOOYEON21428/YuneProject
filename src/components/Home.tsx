import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button onClick={() => navigate('/infinite-scroll')}>Infinite Scroll</button>
      <button onClick={() => navigate('/pagination')}>Pagination</button>
      <button onClick={() => navigate('/solution')}>Solution</button>
    </div>
  );
};

export default Home;
