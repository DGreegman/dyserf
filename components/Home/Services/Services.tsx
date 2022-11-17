import ServiceItem from './ServiceItem';
import ButtonComp from '../../Button/ButtonComp';
import { bodyHeaderStyle, bodyTextStyle, globalStyles } from '../../../styles';
import { Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { servicesArray } from '../../../store';

type Props = {
  background?: string;
};

const Services = ({ background }: Props) => {
  // Renders
  const renderServices = servicesArray.map((service, i) => (
    <ServiceItem service={service} key={`${service.header}-${i}`} />
  ));

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      py={{ base: '30px', md: '50px', xl: '80px' }}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
      bgColor={background ?? globalStyles.whiteColor}
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
            bg={globalStyles.primaryColor}
            color={globalStyles.whiteColor}
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
