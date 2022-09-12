import Consultancy from '../components/Home/Consultancy';
import Hero from '../components/Home/Hero';
import type { NextPage } from 'next';
import { globalStyles } from '../styles/customStyles';

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: globalStyles.width,
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Hero />
      <Consultancy />
    </div>
  );
};

export default Home;
