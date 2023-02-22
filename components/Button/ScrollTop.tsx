import { ChevronUpIcon } from '@chakra-ui/icons';
import { globalStyles } from '../../styles';
import { Box, Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowBtn(window.scrollY >= 115);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setShowBtn(false);
      });
    };
  }, [showBtn]);

  return (
    <Box
      position='fixed'
      bottom='80px'
      right={5}
      zIndex={5}
      display={{ base: showBtn ? 'block' : 'none' }}
      bg={globalStyles.buttonGradient}
      borderRadius='full'
      boxShadow='md'
    >
      <Center
        width='45px'
        height='45px'
        bg='transparent'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={globalStyles.className}
      >
        <ChevronUpIcon
          bgColor='transparent'
          fontSize='2rem'
          className={globalStyles.className}
        />
      </Center>
    </Box>
  );
};

export default ScrollTop;
