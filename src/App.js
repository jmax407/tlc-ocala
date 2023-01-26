import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'animate.css';
import './components/Button.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Blogs from './pages/Dashboard/Blogs/Blogs';
import Alerts from './pages/Dashboard/Alerts/Alerts';
import Inbox from './pages/Dashboard/Inbox/Inbox'
import Settings from './pages/Dashboard/Settings/Settings';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import Events from './pages/Dashboard/Events/Events'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let location = useLocation();
  location = location.pathname;

  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/give' element={<Give />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog'>
          <Route index element={<Blog />} />
          <Route path='new' element={<NewBlogPost />} />
          <Route path=':postId' element={<Post />} />
          <Route path=':postId/edit' element={<UpdateBlogPost />} />
        </Route>
        <Route path='/messages' element={<Messages />} />
        <Route path='/messages/:postId' element={<Messages />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='Inbox' element={<Inbox />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='alerts' element={<Alerts />} />
          <Route path='events' element={<Events />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
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
        <Route path='*' element={<NotFound />} />
        
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      {!isLoggedIn && <Navigation />}

      <div className='content'>
        <Routes>{routes}</Routes>
      </div>

      {!isLoggedIn && location !== '/login' && <Footer />}
      {!isLoggedIn && location === '/' && <TopBtn />}
    </AuthContext.Provider>
  );
}

export default App;
