import Link from 'next/link';
import { Icon, Text } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { DyserfRoutes } from '../../utils';
import { CustomBtn } from '../Button';
import { HeroHeader, DescriptionText } from '../Shared';
import { FaPlay } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <SectionContainer pt='120px' gap={5}>
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
    </SectionContainer>
  );
};

export default HomeHero;
