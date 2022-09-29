import Link from 'next/link';
import Image from 'next/image';
import ButtonComp from '../Button/ButtonComp';
import logo from '../../assets/images/logo.png';
import {
  Flex,
  LinkBox,
  VStack,
  Center,
  Spacer,
  Stack,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useContext, useEffect } from 'react';
import { navLinks } from '../../store';
import { useRouter } from 'next/router';
import { globalStyles } from '../../styles/customStyles';
import { dyserfRoutes } from '../../utils/routes';
import { SideBarContext } from '../../context/Sidebar';

const SideBar = () => {
  // Hooks
  const showNav = useContext(SideBarContext);
  const router = useRouter();
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    isLargerThan992 && showNav?.setShow(false);
  }, [isLargerThan992]);

  // renders
  const renderNavLinks = navLinks.map(({ path, title }, i) => {
    const isActive = router.asPath.includes(path);

    return (
      <LinkBox
        key={i}
        lineHeight={'21px'}
        color={isActive ? globalStyles.primaryColor : globalStyles.blackColor}
        _hover={{
          color: globalStyles.primaryColor,
        }}
        onClick={() => showNav?.setShow(false)}
      >
        <Link href={path}>{title}</Link>
      </LinkBox>
    );
  });

  return (
    <VStack
      width={globalStyles.width}
      minHeight={'388px'}
      position={'absolute'}
      backgroundColor={globalStyles.whiteColor}
      zIndex={3000}
      top={0}
      align={'flex-start'}
      transition={'linear all .3s'}
      transform={showNav?.show ? 'translate(0%)' : 'translate(-100%)'}
      pt={2}
      pb={10}
      px={2}
    >
      <Flex width={globalStyles.width} align={'center'} px={4} pt={4}>
        <Link href={dyserfRoutes.homepage}>
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => showNav?.setShow(false)}
          >
            <Image src={logo} alt={'DYSERF'} priority quality={'100'} />
          </a>
        </Link>

        <Spacer />

        <Center
          cursor={'pointer'}
          _active={{
            transform: 'scale(.95)',
          }}
          userSelect={'none'}
          onClick={() => showNav?.setShow(false)}
        >
          <CloseIcon fontSize={'20px'} />
        </Center>
      </Flex>

      <Stack
        width={globalStyles.width}
        justify={'center'}
        px={4}
        pt={10}
        gap={'31px'}
      >
        {renderNavLinks}
      </Stack>

      <Box
        width={{ base: globalStyles.width, md: '50%' }}
        alignSelf={{ base: 'left', md: 'center' }}
        pt={10}
      >
        <ButtonComp
          width={globalStyles.width}
          height={'44px'}
          text={'Hire Us'}
          borderRadius={'5px'}
          link={'mailto:officialdyserf@gmail.com'}
        />
      </Box>
    </VStack>
  );
};

export default SideBar;
