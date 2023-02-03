import { SectionContainer } from '../../layout';
import { HeroHeader, DescriptionText, WorksShowCaseCard } from '../Shared';

const WorkHero = () => {
  return (
    <SectionContainer pt='120px' gap={5} position='relative'>
      <HeroHeader maxW='1031px'>Easy tech for businesses</HeroHeader>

      <DescriptionText textAlign='center' maxW='1031px' pb='54px'>
        From startups in need of MVP to large corporations, institutions, and
        government in need of technical firepower, we are here for you.
      </DescriptionText>

      <WorksShowCaseCard />
    </SectionContainer>
  );
};

export default WorkHero;
