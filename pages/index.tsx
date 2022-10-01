import WhyWork from '../components/Home/WhyWork';
import Consultancy from '../components/Home/Consultancy';
import Hero from '../components/Home/Hero';
import FirePower from '../components/Home/FirePower';
import Team from '../components/Home/Team';
import Services from '../components/Home/Services';
import Review from '../components/Home/Review';

const Home = () => {
  return (
    <>
      <Hero />
      <Consultancy />
      <WhyWork />
      <Services background={'#E7E7FA'} />
      <FirePower showBtn={true} />
      <Team />
      <Review />
    </>
  );
};

export default Home;
