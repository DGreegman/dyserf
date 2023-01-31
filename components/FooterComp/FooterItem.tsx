import Link from 'next/link';
import Image from 'next/image';
import { Text, HStack, Box, Flex } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { logo, socialIcons } from '../../store';

const FooterItem = () => {
  // Renders
  const renderIcons = socialIcons.map((item, i) => (
    <Box key={i} className={globalStyles.className}>
      <a href='#'>
        <Image
          src={item}
          alt={globalStyles.alt}
          quality='100'
          className={globalStyles.className}
        />
      </a>
    </Box>
  ));

  return (
    <Flex
      w={globalStyles.width}
      alignItems='center'
      justifyContent='space-between'
      py={5}
    >
      <Link href={DyserfRoutes.homepage}>
        <Image
          src={logo}
          alt={globalStyles.alt}
          priority
          quality='100'
          className={globalStyles.className}
        />
      </Link>

      <Text
        fontSize={{
          base: 10,
          md: globalStyles.textFontSize,
          xl: globalStyles.textFontSize,
        }}
        color={globalStyles.whiteColor}
        textAlign='center'
        display={{ base: 'none', md: 'inline' }}
      >
        &copy; Dyserf Professional Services. All Rights Reserved
      </Text>

      <HStack gap={{ base: 3, xl: 5 }}>{renderIcons}</HStack>
    </Flex>
  );
};

export default FooterItem;
