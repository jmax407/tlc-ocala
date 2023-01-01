import Navigation from './components/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import 'animate.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import Give from './pages/Give';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetails from './components/BlogDetails';
import Messages from './pages/Messages';





function App() {
    const [isHome, setIsHome] = useState(false)
    
  return (
    <Router >
    <Navigation isHome={isHome} setIsHome={setIsHome} />
    <div className="content">
        <Routes>
            <Route path="/" element={<Home isHome={isHome} setIsHome={setIsHome} />} />
            <Route path="/give" element={<Give isHome={isHome} setIsHome={setIsHome} />} />
            <Route path="/contact" element={<Contact  isHome={isHome} setIsHome={setIsHome} />} />
            <Route path="/blogs" element={<Blogs  isHome={isHome} setIsHome={setIsHome} />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/messages" element={<Messages />}  />
            <Route path="/messages/:id" element={<Messages />}  />
        </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
