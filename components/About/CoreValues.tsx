import AboutCard from './AboutCard';
import { Grid, GridItem, Stack } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { coreValues } from '../../store';
import { DescriptionText, SectionHeader } from '../Shared';

const CoreValues = () => {
  const renderValues = coreValues.map((e) => (
    <GridItem
      key={e.id}
      bg='transparent'
      maxH={e.isDouble ? '473px' : '180px'}
      rowSpan={e.isDouble ? 2 : 1}
    >
      <AboutCard {...e} minH={e.isDouble ? '100%' : '180px'} radius={10} />
    </GridItem>
  ));

  return (
    <SectionContainer gap='50px'>
      <Stack>
        <SectionHeader>Core Values</SectionHeader>
        <DescriptionText>
          These values are true to our heart. It defines who we are as a team.
        </DescriptionText>
      </Stack>

      <Grid
        templateColumns='repeat(3,1fr)'
        templateRows='repeat(2,1fr)'
        maxW='1200px'
        gap={6}
      >
        {renderValues}
      </Grid>
    </SectionContainer>
  );
};

export default CoreValues;
