import { Grid } from '@chakra-ui/react';
import { offers } from '../../store';
import { globalStyles } from '../../styles';
import { DescCard, DifferentBg, SectionTexts } from '../Shared';

const WhatWeOffer = () => {
  const renderCards = offers.map((offer) => (
    <DescCard key={offer.id} {...offer} minH='330px' />
  ));

  return (
    <DifferentBg
      w='full'
      borderRadius={0}
      flexProps={{ align: 'center', gap: '50px' }}
      minH='488px'
    >
      <SectionTexts
        desc='A smooth technology experience that lets you concentrate on your
          business'
        header='What we offer'
        pt='40px'
        pb='30px'
      />

      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(3,1fr)',
        }}
        gap='7'
        pb={20}
        w={{ base: globalStyles.width, xl: '950px' }}
        bg='transparent'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {renderCards}
      </Grid>
    </DifferentBg>
  );
};

export default WhatWeOffer;
