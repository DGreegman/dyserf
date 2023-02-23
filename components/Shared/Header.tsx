import { Heading, HeadingProps, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

export const HeroHeader = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading
      fontFamily={globalStyles.fontFamily}
      fontWeight={globalStyles.headerFontWeight}
      lineHeight={{ base: 1.6, xl: 1.3 }}
      color={globalStyles.headerTextColor}
      fontSize={globalStyles.heroHeader}
      textAlign={{ base: 'left', lg: 'center' }}
      maxW={{ base: '100%', md: '75%', lg: '1210px', '2xl': '1110px' }}
      px={globalStyles.px}
      bg='transparent'
      letterSpacing='0.015em'
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
    <Text
      color={globalStyles.headerTextColor}
      fontSize={globalStyles.cardHeader}
      lineHeight={1.4}
      bg='transparent'
      {...rest}
    >
      {children}
    </Text>
  );
};
