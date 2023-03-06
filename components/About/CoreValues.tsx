import { Grid, GridItem } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { coreValues } from '../../store';
import { globalStyles } from '../../styles';
import { DescCard, SectionTexts } from '../Shared';

export const CoreValues = () => {
  const renderValues = coreValues.map((e) => (
    <GridItem key={e.id} bg='transparent' rowSpan={e.isDouble ? 2 : 1}>
      <DescCard {...e} minH={e.isDouble ? '100%' : '180px'} radius={10} />
    </GridItem>
  ));

  return (
    <SectionContainer gap='50px'>
      <SectionTexts
        header='Core Values'
        desc='These values are true to our heart. It defines who we are as a team.'
      />

      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        templateRows='repeat(2,1fr)'
        maxW={{ base: globalStyles.width, xl: '1200px' }}
        gap={6}
        px={globalStyles.px}
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {renderValues}
      </Grid>
    </SectionContainer>
  );
};

