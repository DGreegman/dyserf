import Image from 'next/image';
import SideBar from './SideBar';
import Link from 'next/link';
import hamburger from '../../assets/images/hamburger.png';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { logo, navLinks } from '../../store';
import { useSideBar } from '../../context';
import { NavBtn } from '../Button';
import { NavItem } from './NavItem';

const Nav = () => {
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
        <Link href={DyserfRoutes.homepage}>
          <Image
            src={logo}
            alt={globalStyles.alt}
            priority
            quality='100'
            className={globalStyles.className}
            style={{
              background: transparent,
            }}
          />
        </Link>

        <Spacer bg={transparent} />

        <Flex
          gap='70px'
          pr='80px'
          display={{ base: 'none', lg: 'flex' }}
          bg={transparent}
        >
          {renderNav}
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }}>
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

export default Nav;
