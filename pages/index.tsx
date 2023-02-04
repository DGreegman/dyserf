import {
  HomeHero,
  HomeWork,
  ListOfCompanies,
  WhatWeOffer,
} from '../components';
import FeedBack from '../components/Shared/FeedBack';

const Home = () => {
  return (
    <>
      <HomeHero />
      <ListOfCompanies />
      <WhatWeOffer />
      <HomeWork />
      <FeedBack />
    </>
  );
};

export default Home;
