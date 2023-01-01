import { useEffect } from 'react';

import Leadership from '../components/Card/Leadership';
import Mission from '../components/Home/Mission';
import Vision from '../components/Home/Vision';
import Intro from '../components/Home/Intro';
import Services from '../components/Home/Services';



const Home = ({ isHome, setIsHome }) => {
  useEffect(() => {
    setIsHome(true);
  }, []);

  return (
    <>
      <Intro />
      <Vision />
      <Mission />
      <Leadership />
      <Services />
    </>
  );
};

export default Home;
