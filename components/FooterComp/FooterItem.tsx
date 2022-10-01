import Link from 'next/link';
import Image from 'next/image';
import footerlogo from '../../assets/images//footerlogo.png';
import { Flex, Text, HStack, Icon, Box } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { globalStyles } from '../../styles';
import { dyserfRoutes } from '../../utils';

const FooterItem = () => {
  return (
    <Flex
      sx={globalStyles.sectionStyle}
      backgroundColor={globalStyles.secondaryColor}
      minHeight={{ base: '50px', xl: '138px' }}
    >
      <Flex
        width={globalStyles.containerWidth}
        justifyContent={'space-between'}
        align={'center'}
      >
        <Link href={dyserfRoutes.homepage}>
          <a>
            <Box
              width={{ base: '50px', md: '60px', xl: '120px' }}
              height={{ base: '50px', md: '60px', xl: '120px' }}
              position={'relative'}
            >
              <Image
                src={footerlogo}
                alt={'DYSERF'}
                layout={'fill'}
                objectFit={'contain'}
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
          lineHeight={'21px'}
        >
          &copy; Dyserf Professional Services. All Rights Reserved
        </Text>

        <HStack gap={{ base: 1, xl: 5 }}>
          <a href="#">
            <Icon
              as={FaFacebook}
              color={globalStyles.whiteColor}
              fontSize={{ base: globalStyles.smallTextFontSize, xl: '1.25rem' }}
            />
          </a>
          <a href="#">
            <Icon
              as={FaTwitter}
              color={globalStyles.whiteColor}
              fontSize={{ base: globalStyles.smallTextFontSize, xl: '1.25rem' }}
            />
          </a>
          <a href="#">
            <Icon
              as={FaLinkedin}
              color={globalStyles.whiteColor}
              fontSize={{ base: globalStyles.smallTextFontSize, xl: '1.25rem' }}
            />
          </a>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default FooterItem;
