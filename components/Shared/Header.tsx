import { Heading, Text, VStack } from '@chakra-ui/react';
import { bodyHeaderStyle, bodyTextStyle, globalStyles } from '../../styles';

type Props = {
  header: string;
  text: string;
};

const Header = ({ header, text }: Props) => {
  return (
    <VStack align='flex-start' w={globalStyles.width} gap={5}>
      <Heading sx={bodyHeaderStyle}>{header}</Heading>
      <Text sx={bodyTextStyle}>{text}</Text>;
    </VStack>
  );
};

export default Header;
