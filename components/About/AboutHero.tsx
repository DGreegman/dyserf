import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { CustomBtn } from '../Button';
import { HeroTexts } from '../Shared';
import { useLayoutEffect, useState } from 'react';

const AboutHero = () => {
  const [mediaQuery, setMediaQuery] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    setMediaQuery(media.matches);
  }, [mediaQuery]);


  return (
    <SectionContainer pt={globalStyles.sectionPt} gap={5}>
      <HeroTexts desc='Dyserf, a leading UX design and project development firm, specializes in building exceptional digital experiences for businesses and organizations. With a team of experienced UX designers, researchers, and developers, we offer a range of services to help our clients improve their user engagement and achieve their business goals. The TEWAM approach is our unique agile methodology that helps us translate your business goals and objectives into solution.'>
        Demystifying Service Functionalities{!mediaQuery ? <br /> : null}
        (Dyserf)
      </HeroTexts>

      <Box
        alignSelf={{ base: 'flex-start', lg: 'center' }}
        px={{ base: 4, xl: 0 }}
      >
        <Link href={DyserfRoutes.blog}>
          <CustomBtn
            text='Our blog'
            width='150px'
            bg={globalStyles.btnBg}
            addBorderGradient
          />
        </Link>
      </Box>
    </SectionContainer>
  );
};

export default AboutHero;
