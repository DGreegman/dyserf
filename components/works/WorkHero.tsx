import c from '../../assets/images/fire2.png';
import { WorkCard } from '..';
import { SectionContainer } from '../../layout';
import { HeroHeader, DescriptionText } from '../Shared';
import { Box, Grid } from '@chakra-ui/react';

const WorkHero = () => {
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
    <SectionContainer pt='120px' gap={5} position='relative'>
      <HeroHeader maxW='1031px'>Easy tech for businesses</HeroHeader>

      <DescriptionText textAlign='center' maxW='1031px' pb={3}>
        From startups in need of MVP to large corporations, institutions, and
        government in need of technical firepower, we are here for you.
      </DescriptionText>

      <Grid
        templateColumns='repeat(2,1fr)'
        columnGap={6}
        bg='transparent'
        rowGap='54px'
        pt='54px'
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
    </SectionContainer>
  );
};

export default WorkHero;
