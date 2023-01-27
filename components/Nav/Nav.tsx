import ButtonComp from '../Button/ButtonComp';
import Image from 'next/future/image';
import SideBar from './SideBar';
import Link from 'next/link';
import hoops from '../../assets/images/hoops.png';
import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { logo, navLinks } from '../../store';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { useSideBar } from '../../context';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IconBtn } from '../Button';

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
        <Link href={item.path}>
          <a
            style={{
              position: isActive ? 'absolute' : 'relative',
              zIndex: 3000,
            }}
          >
            <Text
              color={globalStyles.whiteColor}
              fontSize={globalStyles.textFontSize.base}
              className={globalStyles.className}
            >
              {item.title}
            </Text>
          </a>
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
      backdropFilter={globalStyles.backDropFilter}
      shadow={globalStyles.boxShadow}
      align='center'
      justifyContent='center'
      position='fixed'
      py={{ base: 3, xl: 4 }}
      zIndex={3000}
    >
      <HStack width={globalStyles.containerWidth}>
        <Link href={DyserfRoutes.homepage}>
          <a>
            <Image
              src={logo}
              alt={globalStyles.alt}
              priority
              quality='100'
              className={globalStyles.className}
            />
          </a>
        </Link>

        <Spacer />

        <Flex gap='70px' pr='80px' display={{ base: 'none', lg: 'flex' }}>
          {renderNav}
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }}>
          <ButtonComp
            width='140px'
            height='47px'
            text='Let’s Collab'
            bg='linear-gradient(269.49deg, #AD00FF -13.36%, #182DEA 73.24%)'
            rightIcon={
              <ArrowForwardIcon
                bgColor='transparent'
                ml={1}
                fontSize='1.15rem'
                className={globalStyles.className}
              />
            }
          />
        </Box>

        <IconBtn
          aria-label='menu icon'
          onClick={() => updateShow(true)}
          icon={<FiMenu className={globalStyles.className} />}
          display={{ base: 'flex', lg: 'none' }}
          fontSize='1.8rem'
        />
      </HStack>

      <SideBar />
    </Flex>
  );
};

export default Nav;
