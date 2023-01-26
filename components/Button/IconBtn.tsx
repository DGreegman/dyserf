import React from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';

interface Props extends IconButtonProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const IconBtn = ({ icon, onClick, ...rest }: Props) => {
  return (
    <IconButton
      {...rest}
      icon={icon}
      bgColor='transparent'
      _hover={{
        bgColor: 'transparent',
      }}
      _active={{
        transform: 'scale(.95)',
        bgColor: 'transparent',
      }}
      onClick={onClick}
      className='cursor'
    />
  );
};

export default IconBtn;
