import { Heading, HeadingProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

export const HeroHeader = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading
      fontFamily={globalStyles.fontFamily}
      fontWeight={globalStyles.headerFontWeight}
      lineHeight={globalStyles.lineHeight}
      color={globalStyles.headerTextColor}
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
      lineHeight={globalStyles.lineHeight}
      color={globalStyles.headerTextColor}
      fontSize={globalStyles.sectionHeader}
      letterSpacing='0.015em'
      bg='transparent'
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
      color={globalStyles.headerTextColor}
      fontSize={globalStyles.cardHeader}
      lineHeight='48px'
      {...rest}
    >
      {children}
    </Heading>
  );
};
