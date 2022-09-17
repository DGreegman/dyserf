import Link from 'next/link';
import Image from 'next/image';
import footerlogo from '../../assets/images//footerlogo.svg';
import { Flex, Text, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { globalStyles } from '../../styles/customStyles';
import { dyserfRoutes } from '../../utils/routes';

const FooterItem = () => {
  return (
    <Flex
      sx={globalStyles.sectionStyle}
      backgroundColor={'#061173'}
      minHeight={'138px'}
    >
      <Flex
        width={globalStyles.containerWidth}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Link href={dyserfRoutes.homepage}>
          <a>
            <Image src={footerlogo} alt={'DYSERF'} />
          </a>
        </Link>

        <Text
          fontSize={{ base: '10px', xl: globalStyles.smallTextFontSize }}
          color={globalStyles.whiteColor}
          lineHeight={'21px'}
        >
          &copy; Dyserf Professional Services. All Rights Reserved
        </Text>

        <HStack gap={5}>
          <Icon
            as={FaFacebook}
            color={globalStyles.whiteColor}
            fontSize={20}
            cursor={'pointer'}
          />
          <Icon
            as={FaTwitter}
            color={globalStyles.whiteColor}
            fontSize={20}
            cursor={'pointer'}
          />
          <Icon
            as={FaLinkedin}
            color={globalStyles.whiteColor}
            fontSize={20}
            cursor={'pointer'}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default FooterItem;
