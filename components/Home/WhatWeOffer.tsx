import { Grid, Stack } from '@chakra-ui/react';
import { offers } from '../../store';
import {
  DescCard,
  DescriptionText,
  DifferentBg,
  SectionHeader,
} from '../Shared';

const WhatWeOffer = () => {
  const renderCards = offers.map((offer) => (
    <DescCard key={offer.id} {...offer} minH='330px' />
  ));

  return (
    <DifferentBg
      w='full'
      borderRadius={0}
      flexProps={{ align: 'center', gap: '50px' }}
      //   Remove later
      marginTop='100px'
      minH='488px'
    >
      <Stack bg='transparent' pt='40px' pb='30px'>
        <SectionHeader>What we offer</SectionHeader>
        <DescriptionText>
          A smooth technology experience that lets you concentrate on your
          business
        </DescriptionText>
      </Stack>

      <Grid
        templateColumns='repeat(3,1fr)'
        gap='7'
        pb={20}
        maxW='1200px'
        bg='transparent'
      >
        {renderCards}
      </Grid>
    </DifferentBg>
  );
};

export default WhatWeOffer;
