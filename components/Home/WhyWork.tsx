import Image from 'next/image';
import whywork from '../../assets/images/whywork.png';
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  bodyHeaderStyle,
  bodyTextStyle,
  globalStyles,
} from '../../styles/customStyles';
import { whyworkArray } from '../../store';

const WhyWork = () => {
  // Renders
  const renderItems = whyworkArray.map((item, i) => {
    return (
      <GridItem key={i}>
        <Center
          boxShadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
          borderRadius={'5px'}
          py={2}
          color={'#110F0F'}
          fontSize={globalStyles.textFontSize}
        >
          {item}
        </Center>
      </GridItem>
    );
  });

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      pt={{ base: '20px', md: '50px', xl: '120px' }}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
    >
      <Grid
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(2,1fr)',
        }}
        width={globalStyles.containerWidth}
        columnGap={{ base: 10, xl: '120px' }}
        alignItems={'center'}
      >
        <GridItem>
          <Box height={'320px'} position={'relative'}>
            <Image
              src={whywork}
              alt={globalStyles.alt}
              priority
              layout={'fill'}
              objectFit={'contain'}
              quality={'100'}
            />
          </Box>
        </GridItem>

        <GridItem>
          <Stack alignItems={'flex-start'} gap={4}>
            <Heading sx={bodyHeaderStyle}>
              <span style={{ color: globalStyles.secondaryColor }}> Why</span>{' '}
              work with us?
            </Heading>

            <Text sx={bodyTextStyle}>
              Your partnership with us for a particular service offers you
              access to benefit from other of our services and professional team
              experience accross sectors.
            </Text>

            <Text sx={bodyTextStyle}>
              From startups in need of MVP to large corporations, institutions,
              and government in need of technical firepower, we are here for
              you.
            </Text>

            <Grid
              templateColumns={'repeat(3,1fr)'}
              width={globalStyles.width}
              columnGap={4}
              rowGap={5}
            >
              {renderItems}
            </Grid>
          </Stack>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default WhyWork;
