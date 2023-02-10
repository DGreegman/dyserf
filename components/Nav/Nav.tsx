import Image from 'next/image';
import SideBar from './SideBar';
import Link from 'next/link';
import hoops from '../../assets/images/hoops.png';
import hamburger from '../../assets/images/hamburger.png';
import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { logo, navLinks } from '../../store';
import { useRouter } from 'next/router';
import { useSideBar } from '../../context';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { CustomBtn } from '../Button';

const Nav = () => {
  // Hooks
  const { updateShow } = useSideBar();
  const path = useRouter().pathname;

  // Renders
  const renderNav = navLinks.map((item, i) => {
    const isActive = path.includes(item.path);

    return (
      <Flex
        key={`${item.title}-${i}`}
        position='relative'
        align='center'
        justify='center'
        minW='100px'
      >
        <Link
          href={item.path}
          style={{
            position: isActive ? 'absolute' : 'relative',
            zIndex: 3000,
          }}
        >
          <Text
            color={globalStyles.whiteColor}
            fontSize={globalStyles.textFontSize}
            className={globalStyles.className}
            _hover={{
              opacity: !isActive ? 0.7 : 1,
            }}
          >
            {item.title}
          </Text>
        </Link>

        <Box
          opacity={isActive ? 1 : 0}
          transition='all ease-in-out 250ms'
          position='absolute'
        >
          <Image src={hoops} alt={globalStyles.alt} />
        </Box>
      </Flex>
    );
  });

  return (
    <Flex
      width={globalStyles.width}
      bgColor={globalStyles.gradientBg}
      px={globalStyles.px}
      shadow={globalStyles.boxShadow}
      align='center'
      justifyContent='center'
      position='fixed'
      py={{ base: 2, xl: 4 }}
      zIndex={3000}
    >
      <HStack width={globalStyles.containerWidth}>
        <Link href={DyserfRoutes.homepage}>
          <Image
            src={logo}
            alt={globalStyles.alt}
            priority
            quality='100'
            className={globalStyles.className}
          />
        </Link>

        <Spacer />

        <Flex gap='70px' pr='80px' display={{ base: 'none', lg: 'flex' }}>
          {renderNav}
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }}>
          <Link href={DyserfRoutes.sendMessage}>
            <CustomBtn
              width='140px'
              height='47px'
              text='Let’s Collab'
              bg={globalStyles.buttonGradient}
              rightIcon={
                <ArrowForwardIcon
                  bgColor='transparent'
                  ml={1}
                  fontSize='1.15rem'
                  className={globalStyles.className}
                />
              }
            />
          </Link>
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
