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
import { useEffect } from 'react';
import { navLinks } from '../../store';
import { useRouter } from 'next/router';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { useSideBar } from '../../context';

const SideBar = () => {
  // Hooks
  const router = useRouter();
  const { updateShow, show } = useSideBar();
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    isLargerThan992 && updateShow(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLargerThan992]);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    show
      ? ((body[0].style.overflow = 'hidden'), (body[0].style.height = '100%'))
      : (body[0].style.overflow = 'auto'),
      (body[0].style.height = 'auto');
  }, [show]);

  // renders
  const renderNavLinks = navLinks.map(({ path, title }, i) => {
    const isActive = router.pathname.includes(path);

    return (
      <LinkBox
        key={i}
        lineHeight='21px'
        color={isActive ? globalStyles.primaryColor : globalStyles.blackColor}
        _hover={{
          color: globalStyles.primaryColor,
        }}
        onClick={() => updateShow(false)}
      >
        <Link href={path}>{title}</Link>
      </LinkBox>
    );
  });

  return (
    <VStack
      width={globalStyles.width}
      minHeight='100vh'
      position='absolute'
      backgroundColor={globalStyles.whiteColor}
      zIndex={3000}
      top={0}
      align='flex-start'
      transition='linear all .3s'
      transform={show ? 'translate(0%)' : 'translate(-100%)'}
      pt={2}
      pb={5}
      px={2}
      boxShadow='2px 2px 100px 50px rgba(0, 0, 0, 0.05)'
    >
      <Flex width={globalStyles.width} align='center' px={4} pt={2}>
        <Link href={DyserfRoutes.homepage}>
          <a style={{ cursor: 'pointer' }} onClick={() => updateShow(false)}>
            <Image src={logo} alt={globalStyles.alt} priority quality='100' />
          </a>
        </Link>

        <Spacer />

        <Center
          cursor='pointer'
          _active={{
            transform: 'scale(.95)',
          }}
          userSelect='none'
          onClick={() => updateShow(false)}
          pb={3}
        >
          <CloseIcon fontSize='1.25rem' />
        </Center>
      </Flex>

      <Stack
        width={globalStyles.width}
        justify='flex-start'
        px={4}
        pt={10}
        gap='31px'
        flex={1}
      >
        {renderNavLinks}
      </Stack>

      <Box width={{ base: '90%', md: '50%' }} alignSelf='center' pt={10}>
        <ButtonComp
          width={globalStyles.width}
          height='44px'
          text='Hire Us'
          borderRadius='5px'
          link={DyserfRoutes.gmail}
        />
      </Box>
    </VStack>
  );
};

export default SideBar;
