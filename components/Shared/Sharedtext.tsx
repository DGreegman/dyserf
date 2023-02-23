import { Text, TextProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

export const DescriptionText = ({ children, ...rest }: TextProps) => {
  return (
    <Text
      {...rest}
      fontSize={rest.fontSize ?? globalStyles.textFontSize}
      color={globalStyles.textColor}
      px={globalStyles.px}
      letterSpacing='0.05em'
      fontWeight={400}
      lineHeight={1.7}
      opacity={0.7}
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
      fontSize={globalStyles.cardText}
      color={globalStyles.textColor}
      lineHeight={1.8}
      opacity={0.8}
      bg='transparent'
    >
      {children}
    </Text>
  );
};
