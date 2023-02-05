import { Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { visionCards } from '../../store';
import { globalStyles } from '../../styles';
import { DescCard } from '../Shared';

const Visions = () => {
  const renderCards = visionCards.map((e) => <DescCard {...e} key={e.id} />);

  return (
    <SectionContainer>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', xl: 'repeat(2,1fr)' }}
        px={globalStyles.px}
        gap='7'
        pb={20}
        maxW={{ base: globalStyles.width, xl: '1020px' }}
      >
        {renderCards}
      </Grid>
    </SectionContainer>
  );
};

export default Visions;
