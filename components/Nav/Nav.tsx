import Image from 'next/image';
import hamburger from '../../assets/images/hamburger.png';
import { SideBar } from './SideBar';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { navLinks } from '../../store';
import { useSideBar } from '../../context';
import { NavBtn } from '../Button';
import { NavItem } from './NavItem';
import { HeroLogo } from './shared';

export const Nav = () => {
  // Hooks
  const transparent = 'transparent';
  const { updateShow } = useSideBar();

  // Renders
  const renderNav = navLinks.map((item, i) => {
    return <NavItem key={`${item.path}_${i}`} {...item} />;
  });

  return (
    <Flex
      width={globalStyles.width}
      bg={globalStyles.gradientBg}
      backdropFilter={globalStyles.backDropFilter}
      px={globalStyles.px}
      shadow={globalStyles.boxShadow}
      align='center'
      justifyContent='center'
      position='fixed'
      py={{ base: 2, xl: 4 }}
      zIndex={3000}
    >
      <HStack width={globalStyles.containerWidth} bg={transparent}>
        <HeroLogo />

        <Spacer bg={transparent} />

        <Flex
          gap='70px'
          pr='80px'
          display={{ base: 'none', lg: 'flex' }}
          bg={transparent}
        >
          {renderNav}
        </Flex>

        <Box
          display={{ base: 'none', lg: 'flex' }}
          background='transparent'
          borderRadius={5}
        >
          <NavBtn />
        </Box>

        <Box
          onClick={() => updateShow(true)}
          display={{ base: 'flex', lg: 'none' }}
        >
          <Image
            src={hamburger}
            alt='hamburger'
            priority
            quality={100}
            onClick={() => updateShow(true)}
          />
        </Box>
      </HStack>

      <SideBar />
    </Flex>
  );
};
