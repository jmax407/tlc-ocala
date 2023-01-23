import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'animate.css';
import './components/Button.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Footer from './components/Footer/Footer';
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
import { AuthContext } from './components/context/auth-context';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound';
import { CurrentPageContext } from './components/context/currentPage-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);


  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/give' element={<Give />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog'>
          <Route index element={ <Blog />} />
          <Route path='new' element={ <NewBlogPost />} />
          <Route path=':postId' element={<Post />} />
          <Route path=':postId/edit' element={<UpdateBlogPost />} />
        </Route>
        <Route path='/messages' element={<Messages />} />
        <Route path='/messages/:postId' element={<Messages />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/give' element={<Give />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:postId' element={<Post />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        
      <Router>
        {!isLoggedIn && (
          <Navigation />
        )}
        
        <div className='content'>
          <Routes>{routes}</Routes>
        </div>
        {!isLoggedIn && (
          <Footer />
        )}
        {!isLoggedIn && (
        <TopBtn />
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
