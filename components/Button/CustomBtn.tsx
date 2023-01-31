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

const CustomBtn = ({
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
    borderRadius: borderRadius ?? globalStyles.radius,
    padding: '10px',
    bg: bg ?? globalStyles.bgColor,
    color: color ?? globalStyles.whiteColor,
    fontSize: globalStyles.textFontSize,
    fontWeight: globalStyles.semibold,
    border: border ?? 'none',
  };

  return (
    <Button
      sx={style}
      type={type}
      onClick={onClick}
      className={globalStyles.className}
      _hover={{
        background: bg ?? globalStyles.bgColor,
      }}
      _active={{
        background: bg ?? globalStyles.bgColor,
        transform: 'scale(.99)',
      }}
      _focus={{
        background: bg ?? globalStyles.bgColor,
      }}
    >
      <Flex
        bgColor='transparent'
        alignItems='center'
        className={globalStyles.className}
      >
        {text} {rightIcon}
      </Flex>
    </Button>
  );
};

export default CustomBtn;
