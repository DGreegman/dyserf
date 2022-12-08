import ButtonComp from '../Button/ButtonComp';
import Image from 'next/future/image';
import SideBar from './SideBar';
import logo from '../../assets/images/logo.png';
import Link from 'next/link';
import { Box, Flex, HStack, Icon, Spacer, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { navLinks } from '../../store';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { useSideBar } from '../../context';

const Nav = () => {
  // Hooks
  const path = useRouter().pathname;
  const { updateShow } = useSideBar();

  // Renders
  const renderNav = navLinks.map((item, i) => {
    const isActive = path.includes(item.path);

    return (
      <Link href={item.path} key={`${item.title}-${i}`}>
        <a>
          <Text
            color={
              isActive ? globalStyles.secondaryColor : globalStyles.textColor
            }
            fontSize={globalStyles.textFontSize.base}
            fontWeight={isActive ? globalStyles.mediumbold : 400}
          >
            {item.title}
          </Text>
        </a>
      </Link>
    );
  });

  return (
    <Flex
      width={globalStyles.width}
      bg={globalStyles.whiteColor}
      px={globalStyles.px}
      align='center'
      justifyContent='center'
      position='fixed'
      shadow='2px 2px 100px 50px rgba(0, 0, 0, 0.06)'
      py={{ base: 2, xl: 4 }}
      zIndex={3000}
    >
      <HStack width={globalStyles.containerWidth}>
        <Link href={DyserfRoutes.homepage}>
          <a>
            <Image src={logo} alt={globalStyles.alt} priority quality='100' />
          </a>
        </Link>

        <Spacer />

        <Flex gap='70px' pr='91px' display={{ base: 'none', lg: 'flex' }}>
          {renderNav}
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }}>
          <ButtonComp
            width='135px'
            height='44px'
            text='Hire Us'
            link='mailto:officialdyserf@gmail.com'
          />
        </Box>

        <Icon
          as={FiMenu}
          display={{ base: 'flex', lg: 'none' }}
          pl={3}
          cursor='pointer'
          fontSize='2.25rem'
          _active={{
            transform: 'scale(.95)',
          }}
          onClick={() => updateShow(true)}
        />
      </HStack>

      <SideBar />
    </Flex>
  );
};

export default Nav;
