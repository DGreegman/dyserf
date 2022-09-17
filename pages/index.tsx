import WhyWork from '../components/Home/WhyWork';
import Consultancy from '../components/Home/Consultancy';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import type { NextPage } from 'next';
import FirePower from '../components/Home/FirePower';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Consultancy />
      <WhyWork />
      <Services />
      <FirePower />
    </>
  );
};

export default Home;
