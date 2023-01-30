import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import {
  Flex,
  LinkBox,
  VStack,
  Spacer,
  Stack,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import { ArrowForwardIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { navLinks } from '../../store';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { useSideBar } from '../../context';
import { ButtonComp, IconBtn } from '../Button';

const SideBar = () => {
  // Hooks
  const { updateShow, show } = useSideBar();
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    isLargerThan992 && updateShow(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLargerThan992]);

  // renders
  const renderNavLinks = navLinks.map(({ path, title }, i) => {
    return (
      <LinkBox
        key={`${title}-${i}`}
        color={globalStyles.whiteColor}
        _hover={{
          color: globalStyles.primaryColor,
        }}
        onClick={() => updateShow(false)}
        className={globalStyles.className}
      >
        <Link href={path} className={globalStyles.className}>
          {title}
        </Link>
      </LinkBox>
    );
  });

  return (
    <VStack
      width={globalStyles.width}
      minHeight='527px'
      position='absolute'
      zIndex={3000}
      top={0}
      align='flex-start'
      transition='linear all .3s'
      transform={show ? 'translate(0%)' : 'translate(-100%)'}
      pt={2}
      pb={5}
      px={2}
      boxShadow='2px 2px 100px 50px rgba(0, 0, 0, 0.07)'
    >
      <Flex width={globalStyles.width} align='center' px={4} pt={2}>
        <Link href={DyserfRoutes.homepage} onClick={() => updateShow(false)}>
            <Image src={logo} alt={globalStyles.alt} quality='100' />
        </Link>

        <Spacer />

        <IconBtn
          aria-label='menu icon'
          onClick={() => updateShow(false)}
          icon={
            <CloseIcon fontSize='1.25rem' className={globalStyles.className} />
          }
          display={{ base: 'flex', lg: 'none' }}
          fontSize='1.8rem'
        />
      </Flex>

      <Stack
        width={globalStyles.width}
        justify='flex-start'
        px={4}
        pt={10}
        gap='50px'
      >
        {renderNavLinks}
      </Stack>

      <Box pt='50px' pl={4}>
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
              className='cursor'
            />
          }
        />
      </Box>
    </VStack>
  );
};

export default SideBar;
