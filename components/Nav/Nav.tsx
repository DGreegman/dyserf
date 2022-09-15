import ButtonComp from '../Button/ButtonComp';
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import Link from 'next/link';
import { Box, Flex, HStack, Icon, Spacer, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles/customStyles';
import { dyserfRoutes } from '../../utils/routes';
import { navLinks } from '../../store';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';

const Nav = () => {
  // Hooks
  const router = useRouter();
  const path = router.asPath;

  // Renders
  const renderNav = navLinks.map((item, i) => {
    const isActive = path.includes(item.path);

    return (
      <Link href={item.path} key={`${item.title}-${i}`}>
        <a>
          <Text
            color={
              isActive ? globalStyles.primaryColor : globalStyles.textColor
            }
            fontSize={globalStyles.smallTextFontSize}
            transition={'all linear .3s'}
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
      align={'center'}
      justifyContent={'center'}
      position={'fixed'}
      shadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
      py={4}
      zIndex={3000}
    >
      <HStack width={globalStyles.containerWidth}>
        <Link href={dyserfRoutes.homepage}>
          <a style={{ cursor: 'pointer' }}>
            <Image src={logo} alt={'DYSERF'} priority quality={'100'} />
          </a>
        </Link>

        <Spacer />

        <Flex gap={'70px'} pr={'91px'} display={{ base: 'none', lg: 'flex' }}>
          {renderNav}
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }}>
          <ButtonComp
            width={'135px'}
            height={'44px'}
            text={'Hire Us'}
            link={'mailto:officialdyserf@gmail.com'}
          />
        </Box>

        <Icon
          as={FiMenu}
          display={{ base: 'flex', lg: 'none' }}
          pl={3}
          cursor={'pointer'}
          fontSize={36}
          _active={{
            transform: 'scale(.95)',
          }}
        />
      </HStack>
    </Flex>
  );
};

export default Nav;
