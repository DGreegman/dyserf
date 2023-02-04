import { Box, BoxProps } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

interface Props extends BoxProps {
  icon: StaticImageData;
}

const HeroTags = ({ icon, ...res }: Props) => {
  return (
    <Box {...res} bg='transparent' position='absolute'>
      <Image
        src={icon}
        alt='Dyserf'
        style={{
          background: 'transparent',
        }}
      />
    </Box>
  );
};

export default HeroTags;
