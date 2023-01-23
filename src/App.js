import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'animate.css';
import './components/Button.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { useState, useCallback } from 'react';
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
import { AuthContext } from './components/context/auth-context';

function App() {
  const [isHome, setIsHome] = useState(false);
  const [isGivePage, setIsGivePage] = useState(false);
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
        <Route
          path='/'
          element={
            <Home
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route
          path='/give'
          element={
            <Give
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route
          path='/contact'
          element={
            <Contact
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route path="/blog">
          <Route index element={
            <Blog isHome={isHome}
                setIsHome={setIsHome}
                isGivePage={isGivePage}
                setIsGivePage={setIsGivePage}  />
            } />
            <Route path='new' element={
                <NewBlogPost
                  isHome={isHome}
                  setIsHome={setIsHome}
                  isGivePage={isGivePage}
                  setIsGivePage={setIsGivePage}
                />
              }
            />
           <Route path=':postId' element={<Post />} />
            <Route path=':postId/edit' element={<UpdateBlogPost />} />
            
        </Route>

        
        
        <Route path='/messages' element={<Messages />} />
        <Route path='/messages/:postId' element={<Messages />} />

      </>
    );
  } else {
    routes = (
      <>
        <Route
          path='/'
          element={
            <Home
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route
          path='/give'
          element={
            <Give
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route
          path='/contact'
          element={
            <Contact
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route
          path='/blog'
          element={
            <Blog
              isHome={isHome}
              setIsHome={setIsHome}
              isGivePage={isGivePage}
              setIsGivePage={setIsGivePage}
            />
          }
        />
        <Route path='/blog/:postId' element={<Post />} />
        <Route path='/login' element={<Login />} />

      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Navigation
          isHome={isHome}
          setIsHome={setIsHome}
          isGivePage={isGivePage}
          setIsGivePage={setIsGivePage}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div className='content'>
          <Routes>{routes}</Routes>
        </div>
        <Footer />
        <TopBtn />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
