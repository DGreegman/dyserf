import {
  BackgroundProps,
  BorderProps,
  Button,
  ColorProps,
  Flex,
  LayoutProps,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { globalStyles } from '../../styles';

type Props = {
  text?: string;
  width: LayoutProps['width'];
  height?: LayoutProps['height'];
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  borderRadius?: BorderProps['borderRadius'];
  border?: BorderProps['border'];
  borderColor?: BorderProps['borderColor'];
  bg?: BackgroundProps['bg'];
  color?: ColorProps['color'];
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  addBorderGradient?: boolean;
  addActive?: boolean;
  isLoading?: boolean;
  loadingText?: string;
};

export const CustomBtn = ({
  text,
  width,
  height,
  type,
  borderRadius,
  onClick,
  bg,
  color,
  rightIcon,
  borderColor,
  addBorderGradient,
  leftIcon,
  addActive,
  isLoading,
  loadingText,
}: Props) => {
  const style = {
    width: width,
    height: height ?? '47px',
    borderRadius: borderRadius ?? globalStyles.radius,
    padding: '10px',
    bg: bg ?? globalStyles.bgColor,
    color: color ?? globalStyles.whiteColor,
    fontSize: globalStyles.textFontSize,
    fontWeight: globalStyles.semibold,
  };

  return (
    <div
      className={addBorderGradient ? 'module-border-wrap' : ''}
      style={{
        background: addBorderGradient ? undefined : 'transparent',
      }}
    >
      <Button
        sx={style}
        type={type}
        onClick={onClick}
        borderColor={borderColor}
        isLoading={isLoading}
        loadingText={loadingText}
        className={`${globalStyles.className}`}
        transition='all 0.3s linear'
        _hover={{
          background: bg ?? globalStyles.bgColor,
          transform: addActive ? 'scale(1.03)' : '',
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
          {leftIcon}
          {text}
          {rightIcon}
        </Flex>
      </Button>
    </div>
  );
};

