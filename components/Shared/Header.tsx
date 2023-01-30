import { Heading, HeadingProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

export const HeroHeader = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading
      fontFamily={globalStyles.fontFamily}
      fontWeight={globalStyles.headerFontWeight}
      lineHeight={globalStyles.lineHeight}
      color={globalStyles.textColor}
      fontSize={globalStyles.heroHeader}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export const SectionHeader = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading
      fontFamily={globalStyles.fontFamily}
      fontWeight={globalStyles.bold}
      fontSize='3rem'
      lineHeight={globalStyles.lineHeight}
      letterSpacing='0.015em'
      color={globalStyles.textColor}
      textAlign='center'
      {...rest}
    >
      {children}
    </Heading>
  );
};

export const CardHeader = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading
      fontFamily={globalStyles.fontFamily}
      fontWeight={globalStyles.semibold}
      lineHeight='48px'
      color={globalStyles.textColor}
      fontSize={globalStyles.cardHeader}
      {...rest}
    >
      {children}
    </Heading>
  );
};
