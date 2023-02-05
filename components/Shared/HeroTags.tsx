import Image, { StaticImageData } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  icon: StaticImageData;
}

const HeroTags = ({ icon, ...res }: Props) => {
  return (
    <Box
      {...res}
      bg='transparent'
      position='absolute'
      display={{ base: 'none', xl: 'block' }}
    >
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
