import Link from 'next/link';
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';
import hero4 from '../../assets/images/hero4.png';
import { Icon, Text } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { DyserfRoutes } from '../../utils';
import { CustomBtn } from '../Button';
import { HeroHeader, DescriptionText, HeroTags } from '../Shared';
import { FaPlay } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <SectionContainer pt='120px' gap={5} position='relative'>
      <HeroHeader maxW='1031px'>
        Your innovative Ux partner <br />
        <Text
          bgClip='text'
          bgGradient='linear-gradient(269.49deg, #AD00FF -13.36%, #001AFF 73.24%);'
        >
          for Project Development
        </Text>
      </HeroHeader>

      <DescriptionText textAlign='center' maxW='1031px' pb={3}>
        Dyserf is an innovative team that builds digital experiences, which
        accelerate business growth and make life activities easier and faster.
      </DescriptionText>

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
