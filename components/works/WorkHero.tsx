import { SectionContainer } from '../../layout';
import { globalStyles } from '../../styles';
import { WorksShowCaseCard, HeroTexts } from '../Shared';

const WorkHero = () => {
  return (
    <SectionContainer pt={globalStyles.sectionPt} gap={5} position='relative'>
      <HeroTexts
        desc='  From startups in need of MVP to large corporations, institutions, and
        government in need of technical firepower, we are here for you.'
      >
        Easy tech for businesses
      </HeroTexts>

      <WorksShowCaseCard />
    </SectionContainer>
  );
};

export default WorkHero;
