import Link from 'next/link';
import { SectionContainer } from '../../layout';
import { DyserfRoutes } from '../../utils';
import { CustomBtn } from '../Button';
import { DescriptionText, HeroHeader } from '../Shared';

const AboutHero = () => {
  return (
    <SectionContainer pt='120px' pb='200px' gap={5}>
      <HeroHeader maxW='1031px'>
        Demystifying Service Functionalities(Dyserf)
      </HeroHeader>

      <DescriptionText textAlign='center' maxW='1031px' pb={3}>
        Dyserf is an innovative team that builds digital experiences, accelerate
        business growth, personal development and make life activities easier
        and faster. We are team of experts from different background that have
        built solutions and digital experiences that affect over 100,000 people,
        globally. The TEWAM approach is our unique agile methodology that helps
        us translate your business goals and objectives into solution.
      </DescriptionText>

      <Link href={DyserfRoutes.blog}>
        <CustomBtn
          text='Our blog'
          width='150px'
          bg='#182341'
          addBorderGradient
        />
      </Link>
    </SectionContainer>
  );
};

export default AboutHero;
