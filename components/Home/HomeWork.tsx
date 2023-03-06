import { Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { workItems } from '../../store';
import { WorksShowCaseCard, TagCard, SectionTexts } from '../Shared';

export const HomeWork = () => {
  const renderWorksItem = workItems.map((e) => <TagCard key={e}>{e}</TagCard>);

  return (
    <SectionContainer gap='50px' position='relative'>
      <SectionTexts
        header='Our works'
        desc='From startups in need of MVP to large corporations, institutions, and
          government in need of technical firepower, we are here for you.'
      />

      <Grid
        templateColumns={{ base: 'repeat(3,1fr)', lg: 'repeat(6,1fr)' }}
        w='max-content'
        gap='11px'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {renderWorksItem}
      </Grid>

      <WorksShowCaseCard />
    </SectionContainer>
  );
};

