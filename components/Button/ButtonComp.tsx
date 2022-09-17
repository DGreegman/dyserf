import React from 'react';
import { Button, Link as ChakraLink, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles/customStyles';

type Props = {
  text: string;
  width: string;
  height: string;
  type?: boolean;
  onClick?: () => void;
  link?: string;
  borderRadius?: string;
  border?: string;
  bg?: string;
  color?: string;
};

const ButtonComp = ({
  text,
  width,
  height,
  link,
  type,
  borderRadius,
  onClick,
  border,
  bg,
  color,
}: Props) => {
  return (
    <Button
      width={width}
      height={height}
      borderRadius={borderRadius ?? '5px'}
      padding={'10px'}
      bg={bg ?? globalStyles.primaryColor}
      color={color ?? globalStyles.whiteColor}
      fontSize={globalStyles.smallTextFontSize}
      fontWeight={globalStyles.headerFontWeight}
      type={type ? 'submit' : 'button'}
      border={border ?? 'none'}
      onClick={onClick}
      lineHeight={'24px'}
      _hover={{
        backgroundColor: bg ?? globalStyles.primaryColor,
      }}
      _active={{
        backgroundColor: bg ?? globalStyles.primaryColor,
        transform: 'scale(.99)',
      }}
      _focus={{
        backgroundColor: bg ?? globalStyles.primaryColor,
      }}
    >
      {link ? (
        <ChakraLink
          rel={'noopener noreferrer'}
          _hover={{ textDecoration: 'none' }}
          target={'_blank'}
          href={link}
        >
          {text}
        </ChakraLink>
      ) : (
        <Text>{text}</Text>
      )}
    </Button>
  );
};

export default ButtonComp;
