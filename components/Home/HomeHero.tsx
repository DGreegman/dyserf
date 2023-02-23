import Link from 'next/link';
import { Box, Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { DyserfRoutes } from '../../utils';
import { CustomBtn, NavBtn } from '../Button';
import { HeroTexts } from '../Shared';
import { FaPlay } from 'react-icons/fa';
import { globalStyles } from '../../styles';
import { BsPlayCircle } from 'react-icons/bs';

const HomeHero = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <SectionContainer pt={globalStyles.sectionPt} gap={5} position='relative'>
      <HeroTexts>
        Your world-class digital product development partner <br />
        <Text
          bgClip='text'
          bgGradient={globalStyles.buttonGradient}
          fontSize={{ base: '2rem', xl: '3.5rem' }}
        >
          crafting intuitive experience
        </Text>
      </HeroTexts>

      <Flex
        align='center'
        alignSelf={{ base: 'flex-start', lg: 'center' }}
        gap={2}
        px={globalStyles.px}
      >
        <Box display={{ base: 'block', xl: 'none' }}>
          <NavBtn />
        </Box>

        <Link href={DyserfRoutes.works}>
          <CustomBtn
            text='How we work'
            width='150px'
            bg={globalStyles.btnBg}
            addBorderGradient={isLargerThan1280}
            rightIcon={
              <Icon
                as={FaPlay}
                color='white'
                ml={3}
                display={{ base: 'none', xl: 'flex' }}
              />
            }
            leftIcon={
              <Icon
                as={BsPlayCircle}
                color='white'
                mr={2}
                fontSize='1.5rem'
                display={{ base: 'flex', xl: 'none' }}
              />
            }
          />
        </Link>
      </Flex>
    </SectionContainer>
  );
};

export default HomeHero;
