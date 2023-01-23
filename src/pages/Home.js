import { useEffect } from 'react';

import Leadership from '../components/Home/Leadership';
import Mission from '../components/Home/Mission';
import Vision from '../components/Home/Vision';
import Intro from '../components/Home/Intro';
import Services from '../components/Home/Services';



const Home = ({ isHome, setIsHome, setIsGivePage }) => {
  useEffect(() => {
    setIsHome(true);
    setIsGivePage(false)
  });

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
