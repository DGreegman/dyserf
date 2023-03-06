import { Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { visionCards } from '../../store';
import { globalStyles } from '../../styles';
import { DescCard } from '../Shared';

export const Visions = () => {
  const renderCards = visionCards.map((e) => <DescCard {...e} key={e.id} />);

  return (
    <SectionContainer>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        px={globalStyles.px}
        gap='7'
        data-aos='fade-up'
        data-aos-duration='1000'
        gridAutoRows='1fr'
        maxW={{ base: globalStyles.width, xl: '1020px' }}
      >
        {renderCards}
      </Grid>
    </SectionContainer>
  );
};

