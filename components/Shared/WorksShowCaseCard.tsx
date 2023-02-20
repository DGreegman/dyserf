import WorkCard from '../works/WorkCard';
import { Grid, Box } from '@chakra-ui/react';
import { workData } from '../../store';

const WorksShowCaseCard = () => {
  const renderWorks = workData.map((e) => {
    return <WorkCard key={e.id} item={e} />;
  });

  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        gridAutoRows='1fr'
        columnGap={6}
        bg='transparent'
        rowGap='54px'
        pt='30px'
        px={{ base: 0, md: 4 }}
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {renderWorks}
      </Grid>

      <Box
        position='absolute'
        w='277px'
        h='279px'
        zIndex={1}
        bottom={0}
        opacity={0.2}
        filter='blur(100px)'
        background='linear-gradient(269.49deg, #AD00FF -13.36%, #182DEA 73.24%)'
      />
    </>
  );
};

export default WorksShowCaseCard;
