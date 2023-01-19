import Navigation from './components/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import 'animate.css';
import './components/Button.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import Give from './pages/Give';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './components/Blog/Post';
import Messages from './pages/Messages';
import Login from './pages/Login/Login';
import NewBlogPost from './pages/NewBlogPost';
import UpdateBlogPost from './pages/UpdateBlogPost';
import TopBtn from './components/TopBtn';



function App() {
    const [isHome, setIsHome] = useState(false)
    const [isGivePage, setIsGivePage] = useState(false)
    
  return (
    <Router >
    <Navigation isHome={isHome} setIsHome={setIsHome} isGivePage={isGivePage} setIsGivePage={setIsGivePage} />
    <div className="content">

        <Routes>
            <Route path="/" element={<Home isHome={isHome} setIsHome={setIsHome} isGivePage={isGivePage} setIsGivePage={setIsGivePage} />} />
            <Route path="/give" element={<Give isHome={isHome} setIsHome={setIsHome} isGivePage={isGivePage} setIsGivePage={setIsGivePage} />} />
            <Route path="/contact" element={<Contact  isHome={isHome} setIsHome={setIsHome} isGivePage={isGivePage} setIsGivePage={setIsGivePage} />} />
            <Route path="/blog" element={<Blog  isHome={isHome} setIsHome={setIsHome} isGivePage={isGivePage} setIsGivePage={setIsGivePage} />} />
            <Route path="/blog/new" element={<NewBlogPost />} />
            <Route path="/blog/:postId" element={<Post />} />
            <Route path="/blog/:postId/edit" element={<UpdateBlogPost />} />
            <Route path="/messages" element={<Messages />}  />
            <Route path="/messages/:postId" element={<Messages />}  />
            <Route path="/login" element={<Login />} />
            
        </Routes>
    </div>
    <Footer />
    <TopBtn />
    </Router>
  );
}

export default App;
