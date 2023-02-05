import { ReactElement } from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

interface Props extends IconButtonProps {
  icon: ReactElement;
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
      className={globalStyles.className}
    />
  );
};

export default IconBtn;
