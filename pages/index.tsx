import {
  FeedBack,
  HomeHero,
  HomeWork,
  ListOfCompanies,
  WhatWeOffer,
} from '../components';

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
