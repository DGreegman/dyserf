import Image from 'next/future/image';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { ServiceModel } from '../../../models';
import { globalStyles } from '../../../styles';

type Props = {
  service: ServiceModel;
};

const ServiceItem = ({ service }: Props) => {
  return (
    <Stack
      minHeight={'308px'}
      borderRadius={10}
      padding={'30px 23px 30px 23px'}
      boxShadow={' 2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
      data-aos={'zoom-in-up'}
      data-aos-duration={'1000'}
      bg={globalStyles.whiteColor}
    >
      <Box
        width={'122px'}
        height={'51px'}
        position={'relative'}
        alignSelf={'center'}
      >
        <Image
          src={service.icon}
          alt={service.header}
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Heading
        width={{ base: globalStyles.width, xl: '220px' }}
        fontWeight={globalStyles.headerFontWeight}
        fontFamily={globalStyles.fontFamily}
        color={globalStyles.textColor}
        fontSize={'1.1rem'}
        lineHeight={'27px'}
        textAlign={'center'}
        alignSelf={'center'}
      >
        {service.header}
      </Heading>

      <Text
        fontSize={globalStyles.smallTextFontSize}
        color={globalStyles.textColor}
        lineHeight={'21px'}
        textAlign={'center'}
      >
        {service.description}
      </Text>
    </Stack>
  );
};

export default ServiceItem;
