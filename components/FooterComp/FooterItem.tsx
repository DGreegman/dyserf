import Link from 'next/link';
import Image from 'next/image';
import { Text, HStack, Icon, Box } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';
import { logo } from '../../store';
import { SectionContainer } from '../../layout';

const FooterItem = () => {
  // Renders
  const renderIcons = [FaFacebook, FaTwitter, FaLinkedin].map((item, i) => (
    <Box key={i} className={globalStyles.className}>
      <a href='#'>
        <Icon
          as={item}
          color={globalStyles.whiteColor}
          fontSize={{ base: globalStyles.smallTextFontSize, xl: '1.25rem' }}
          className={globalStyles.className}
        />
      </a>
    </Box>
  ));

  return (
    <SectionContainer alignItems='center' justifyContent='space-between' py={5}>
      <Link href={DyserfRoutes.homepage}>
        <a className={globalStyles.className}>
          <Image
            src={logo}
            alt={globalStyles.alt}
            priority
            quality='100'
            className={globalStyles.className}
          />
        </a>
      </Link>

      <Text
        fontSize={{
          base: 9,
          md: globalStyles.smallTextFontSize,
          xl: globalStyles.smallTextFontSize,
        }}
        color={globalStyles.whiteColor}
      >
        &copy; Dyserf Professional Services. All Rights Reserved
      </Text>

      <HStack gap={{ base: 1, xl: 5 }}>{renderIcons}</HStack>
    </SectionContainer>
  );
};

export default FooterItem;
