import Link from 'next/link';
import {
  Flex,
  VStack,
  Spacer,
  Stack,
  Box,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { navLinks } from '../../store';
import { globalStyles } from '../../styles';
import { useSideBar } from '../../context';
import { IconBtn, NavBtn } from '../Button';
import { HeroLogo } from './shared';

export const SideBar = () => {
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
      <Link
        href={path}
        className={globalStyles.className}
        key={`${title}-${i}`}
      >
        <Text
          color={globalStyles.whiteColor}
          _hover={{
            color: globalStyles.primaryColor,
          }}
          onClick={() => updateShow(false)}
          className={globalStyles.className}
        >
          {title}
        </Text>
      </Link>
    );
  });

  return (
    <VStack
      width={globalStyles.width}
      minHeight={globalStyles.fullHeight}
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
        <HeroLogo onClick={() => updateShow(false)} />

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
        <NavBtn onClick={() => updateShow(false)} />
      </Box>
    </VStack>
  );
};
