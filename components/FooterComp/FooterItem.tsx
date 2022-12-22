import Link from 'next/link';
import Image from 'next/image';
import footerlogo from '../../assets/images//footerlogo.png';
import { Flex, Text, HStack, Icon, Box } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';

const FooterItem = () => {
  // Renders
  const renderIcons = [FaFacebook, FaTwitter, FaLinkedin].map((item, i) => (
    <a href='#' key={i}>
      <Icon
        as={item}
        color={globalStyles.whiteColor}
        fontSize={{ base: globalStyles.smallTextFontSize, xl: '1.25rem' }}
      />
    </a>
  ));

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      backgroundColor={globalStyles.secondaryColor}
      minHeight={{ base: '50px', xl: '138px' }}
    >
      <Flex
        width={globalStyles.containerWidth}
        justifyContent='space-between'
        align='center'
      >
        <Link href={DyserfRoutes.homepage}>
          <a>
            <Box
              width={{ base: '50px', md: '60px', xl: '120px' }}
              height={{ base: '50px', md: '60px', xl: '120px' }}
              position={'relative'}
            >
              <Image
                src={footerlogo}
                alt='DYSERF'
                layout='fill'
                objectFit='contain'
              />
            </Box>
          </a>
        </Link>

        <Text
          fontSize={{
            base: 9,
            md: globalStyles.smallTextFontSize,
            xl: globalStyles.smallTextFontSize,
          }}
          color={globalStyles.whiteColor}
          lineHeight='21px'
        >
          &copy; Dyserf Professional Services. All Rights Reserved
        </Text>

        <HStack gap={{ base: 1, xl: 5 }}>{renderIcons}</HStack>
      </Flex>
    </Flex>
  );
};

export default FooterItem;
