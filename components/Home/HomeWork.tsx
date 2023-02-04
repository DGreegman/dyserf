import { Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { workItems } from '../../store';
import { WorksShowCaseCard, TagCard, SectionTexts } from '../Shared';

const HomeWork = () => {
  const renderWorksItem = workItems.map((e) => <TagCard key={e}>{e}</TagCard>);

  return (
    <SectionContainer gap='50px' position='relative'>
      <SectionTexts
        header='Our works'
        desc='From startups in need of MVP to large corporations, institutions, and
          government in need of technical firepower, we are here for you.'
      />

      <Grid templateColumns='repeat(6,1fr)' w='max-content' gap='11px'>
        {renderWorksItem}
      </Grid>

      <WorksShowCaseCard />
    </SectionContainer>
  );
};

export default HomeWork;
