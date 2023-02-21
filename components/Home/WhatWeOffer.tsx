import { Grid } from '@chakra-ui/react';
import { offers } from '../../store';
import { globalStyles } from '../../styles';
import { DescCard, DifferentBg, SectionTexts } from '../Shared';

const WhatWeOffer = () => {
  const renderCards = offers.map((offer) => (
    <DescCard key={offer.id} {...offer} minH='300px' />
  ));

  return (
    <DifferentBg
      w='full'
      borderRadius={0}
      flexProps={{ align: 'center', gap: '50px' }}
    >
      <SectionTexts
        desc='A smooth technology experience that lets you concentrate on your
          business'
        header='What we offer'
        pb='30px'
        pt='40px'
      />

      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(3,1fr)',
        }}
        gap='7'
        w={{ base: globalStyles.width, xl: '950px' }}
        bg='transparent'
        data-aos='fade-up'
        data-aos-duration='1000'
        pb='30px'
      >
        {renderCards}
      </Grid>
    </DifferentBg>
  );
};

export default WhatWeOffer;
