import { Text, TextProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

export const DescriptionText = ({ children, ...rest }: TextProps) => {
  return (
    <Text
      {...rest}
      fontSize={globalStyles.textFontSize}
      color={globalStyles.textColor}
      textAlign='center'
      opacity={0.8}
      bg='transparent'
    >
      {children}
    </Text>
  );
};
export const CardText = ({ children, ...rest }: TextProps) => {
  return (
    <Text
      {...rest}
      fontSize={globalStyles.textFontSize}
      color={globalStyles.textColor}
      opacity={0.8}
      bg='transparent'
    >
      {children}
    </Text>
  );
};
