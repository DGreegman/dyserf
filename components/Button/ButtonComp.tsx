import { Button, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { globalStyles } from '../../styles';

type Props = {
  text: string;
  width: string;
  height: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  borderRadius?: string;
  border?: string;
  bg?: string;
  color?: string;
  rightIcon?: ReactElement;
};

const ButtonComp = ({
  text,
  width,
  height,
  type,
  borderRadius,
  onClick,
  border,
  bg,
  color,
  rightIcon,
}: Props) => {
  const style = {
    width: width,
    height: height,
    borderRadius: borderRadius ?? '5px',
    padding: '10px',
    bg: bg ?? globalStyles.primaryColor,
    color: color ?? globalStyles.whiteColor,
    fontSize: globalStyles.smallTextFontSize,
    fontWeight: globalStyles.mediumbold,
    border: border ?? 'none',
  };

  return (
    <Button
      sx={style}
      type={type}
      onClick={onClick}
      className='cursor'
      _hover={{
        backgroundBlendMode: bg ?? globalStyles.primaryColor,
      }}
      _active={{
        background: bg ?? globalStyles.primaryColor,
        transform: 'scale(.99)',
      }}
      _focus={{
        background: bg ?? globalStyles.primaryColor,
      }}
    >
      <Flex bgColor='transparent' alignItems='center' className='cursor'>
        {text} {rightIcon}
      </Flex>
    </Button>
  );
};

export default ButtonComp;
