import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { CustomBtn } from '../Button';
import { HeroTexts } from '../Shared';

const AboutHero = () => {
  return (
    <SectionContainer pt={globalStyles.sectionPt} gap={5}>
      <HeroTexts
        desc='Dyserf is an innovative team that builds digital experiences, accelerate
        business growth, personal development and make life activities easier
        and faster. We are team of experts from different background that have
        built solutions and digital experiences that affect over 100,000 people,
        globally. The TEWAM approach is our unique agile methodology that helps
        us translate your business goals and objectives into solution.'
      >
        Demystifying Service Functionalities(Dyserf)
      </HeroTexts>

      <Box
        alignSelf={{ base: 'flex-start', lg: 'center' }}
        px={{ base: 4, xl: 0 }}
      >
        <Link href={DyserfRoutes.blog}>
          <CustomBtn
            text='Our blog'
            width='150px'
            bg='#182341'
            addBorderGradient
          />
        </Link>
      </Box>

    </SectionContainer>
  );
};

export default AboutHero;
