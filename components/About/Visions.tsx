import { Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { visionCards } from '../../store';
import { DescCard } from '../Shared';

const Visions = () => {
  const renderCards = visionCards.map((e) => <DescCard {...e} key={e.id} />);

  return (
    <SectionContainer>
      <Grid templateColumns='repeat(2,1fr)' gap='7' pb={20} maxW='1020px'>
        {renderCards}
      </Grid>
    </SectionContainer>
  );
};

export default Visions;
