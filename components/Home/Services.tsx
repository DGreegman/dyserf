import Image from 'next/image';
import ButtonComp from '../Button/ButtonComp';
import {
  bodyHeaderStyle,
  bodyTextStyle,
  globalStyles,
} from '../../styles/customStyles';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { servicesArray } from '../../store';

const Services = () => {
  // Renders
  const renderServices = servicesArray.map((service, i) => {
    return (
      <Stack
        minHeight={'308px'}
        borderRadius={10}
        padding={'30px 23px 30px 23px'}
        boxShadow={' 2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
        key={`${service.header}-${i}`}
        data-aos={'zoom-in-up'}
        data-aos-duration={'1000'}
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
            layout={'fill'}
            objectFit={'contain'}
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
          alignSelf={'center'}
        >
          {service.description}
        </Text>
      </Stack>
    );
  });

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      pt={{ base: '30px', md: '50px', xl: '80px' }}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
    >
      <VStack
        width={globalStyles.containerWidth}
        gap={9}
        alignItems={'flex-start'}
      >
        <Stack
          width={{ base: globalStyles.width, md: '600px' }}
          alignItems={'flex-start'}
          gap={6}
        >
          <Heading sx={bodyHeaderStyle}>Our Services</Heading>

          <Text sx={bodyTextStyle}>
            DYSERF Consultancy is a strategic and Innovative digital solution
            that builds a disruptive and groundbreaking digital products for the
            future. To accelerate innovations, business growth and developments
            accross sectors..
          </Text>

          <ButtonComp
            width={'186px'}
            height={'56px'}
            text={'Hire Us'}
            link={'mailto:officialdyserf@gmail.com'}
            bg={'transparent'}
            color={globalStyles.secondaryColor}
            border={` 1px solid ${globalStyles.secondaryColor}`}
          />
        </Stack>

        <Grid
          width={globalStyles.width}
          gridTemplateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
          }}
          gap={5}
        >
          {renderServices}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Services;
