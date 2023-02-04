import {
  FeedBack,
  HomeHero,
  HomeWork,
  ListOfCompanies,
  TeamCard,
  WhatWeOffer,
} from '../components';

const Home = () => {
  return (
    <>
      <HomeHero />
      <ListOfCompanies />
      <WhatWeOffer />
      <HomeWork />
      <TeamCard />
      <FeedBack />
    </>
  );
};

export default Home;
