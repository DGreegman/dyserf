import {
  Consultancy,
  FirePower,
  Hero,
  Review,
  Services,
  Team,
  WhyWork,
} from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <Consultancy />
      <WhyWork />
      <Services background='#E7E7FA' />
      <FirePower showBtn />
      <Team />
      <Review />
    </>
  );
};

export default Home;
