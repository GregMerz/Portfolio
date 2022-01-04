import Home from './pages/Home.js';
import Sidebar from './components/Sidebar.js';
import Navbar from './components/Navbar.js';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}

function App() {
  const scroll = useScroll();

  return (
    <Router>
      <Sidebar scroll={scroll}/>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
