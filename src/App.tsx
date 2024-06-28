import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InfiniteScroll from './pages/InfiniteScroll';
import Pagination from './pages/Pagination';
import Solution from './pages/Solution';
import GlobalStyles from './styles/GlobalStyles';
import './styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Link to="/infinite-scroll"><button>Infinite Scroll</button></Link>
      <Link to="/pagination"><button>Pagination</button></Link>
      <Link to="/solution"><button>Solution</button></Link>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/solution" element={<Solution />}/>
      </Routes>
    </Router>
  );
};

export default App;
