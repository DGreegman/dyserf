import Link from 'next/link';
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';
import hero4 from '../../assets/images/hero4.png';
import { Icon, Text } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { DyserfRoutes } from '../../utils';
import { CustomBtn } from '../Button';
import { HeroTags, HeroTexts } from '../Shared';
import { FaPlay } from 'react-icons/fa';
import { globalStyles } from '../../styles';

const HomeHero = () => {
  return (
    <SectionContainer pt={globalStyles.sectionPt} gap={5} position='relative'>
      <HeroTexts
        desc='Dyserf is an innovative team that builds digital experiences, which
        accelerate business growth and make life activities easier and faster.'
      >
        Your innovative Ux partner <br />
        <Text
          bgClip='text'
          bgGradient={globalStyles.buttonGradient}
          fontSize={{ base: '2rem', xl: '4rem' }}
        >
          for Project Development
        </Text>
      </HeroTexts>

      <Link href={DyserfRoutes.works}>
        <CustomBtn
          text='How we work'
          width='150px'
          bg='#182341'
          addBorderGradient
          rightIcon={<Icon as={FaPlay} color='white' ml={3} />}
        />
      </Link>

      <HeroTags icon={hero1} top='45%' left={0} />
      <HeroTags icon={hero2} bottom='-40%' left='300px' />
      <HeroTags icon={hero3} bottom='-20%' right='300px' />
      <HeroTags icon={hero4} top='5%' right='-60px' />
    </SectionContainer>
  );
};

export default HomeHero;
