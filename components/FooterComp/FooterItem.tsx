import Link from 'next/link';
import Image from 'next/image';
import footerlogo from '../../assets/images//footerlogo.svg';
import { Flex, Text, HStack, Icon, Box } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { globalStyles } from '../../styles/customStyles';
import { dyserfRoutes } from '../../utils/routes';

const FooterItem = () => {
  return (
    <Flex
      sx={globalStyles.sectionStyle}
      backgroundColor={globalStyles.secondaryColor}
      minHeight={{ base: '50px', xl: '138px' }}
    >
      <Flex
        width={globalStyles.containerWidth}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Link href={dyserfRoutes.homepage}>
          <a>
            <Box
              width={{ base: '50px', xl: '120px' }}
              height={{ base: '50px', xl: '120px' }}
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
          fontSize={{ base: 8, xl: globalStyles.smallTextFontSize }}
          color={globalStyles.whiteColor}
          lineHeight={'21px'}
        >
          &copy; Dyserf Professional Services. All Rights Reserved
        </Text>

        <HStack gap={{ base: 1, xl: 5 }}>
          <Icon
            as={FaFacebook}
            color={globalStyles.whiteColor}
            fontSize={{ base: 14, xl: 20 }}
            cursor={'pointer'}
          />
          <Icon
            as={FaTwitter}
            color={globalStyles.whiteColor}
            fontSize={{ base: 14, xl: 20 }}
            cursor={'pointer'}
          />
          <Icon
            as={FaLinkedin}
            color={globalStyles.whiteColor}
            fontSize={{ base: 14, xl: 20 }}
            cursor={'pointer'}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default FooterItem;
