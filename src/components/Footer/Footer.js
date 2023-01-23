import React, { useContext } from 'react';
import MainFooter from './MainFooter';
import Copyright from './Copyright';
import { AuthContext } from '../context/auth-context';

const Footer = props => {
  const auth = useContext(AuthContext);

  return (
    <footer className='mt-auto padtop100'> 
    {!auth.isLoggedIn && (<MainFooter />)}
      
      <Copyright />
    </footer>
  );
};

export default Footer;
