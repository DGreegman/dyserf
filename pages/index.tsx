import {
  FeedBack,
  HomeHero,
  HomeWork,
  ListOfCompanies,
  OurApproach,
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
      <OurApproach />
      <TeamCard />
      <FeedBack />
    </>
  );
};

export default Home;
