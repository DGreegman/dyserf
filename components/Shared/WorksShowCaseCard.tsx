import WorkCard from '../works/WorkCard';
import c from '../../assets/images/fire2.png';
import { Grid, Box } from '@chakra-ui/react';


const WorksShowCaseCard = () => {
  const renderWorks = Array(4)
    .fill('-')
    .map((e, i) => {
      return (
        <WorkCard
          key={i}
          item={{
            icon: c,
            description: e,
            header: '',
            id: 1,
          }}
        />
      );
    });

  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', xl: 'repeat(2,1fr)' }}
        columnGap={6}
        bg='transparent'
        rowGap='54px'
        pt='30px'
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
