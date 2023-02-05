import CustomBtn from './CustomBtn';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { globalStyles } from '../../styles';
import { Box } from '@chakra-ui/react';
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
      top='50%'
      right={5}
      zIndex={5}
      display={{ base: showBtn ? 'block' : 'none', xl: 'none' }}
    >
      <CustomBtn
        width='45px'
        height='45px'
        bg={globalStyles.buttonGradient}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        borderRadius='full'
        rightIcon={
          <ChevronUpIcon
            bgColor='transparent'
            fontSize='2rem'
            className={globalStyles.className}
          />
        }
      />
    </Box>
  );
};

export default ScrollTop;
