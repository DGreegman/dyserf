import Image from 'next/image';
import whywork from '../../assets/images/whywork.svg';
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
import { globalStyles } from '../../styles/customStyles';
import { whyworkArray } from '../../store/whywork';

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
          fontSize={18}
        >
          {item}
        </Center>
      </GridItem>
    );
  });

  return (
    <Flex
      width={globalStyles.width}
      px={globalStyles.px}
      align={'center'}
      justifyContent={'center'}
      pb={'120px'}
    >
      <Grid
        gridTemplateColumns={'repeat(2,1fr)'}
        width={globalStyles.containerWidth}
        columnGap={'120px'}
        alignItems={'center'}
      >
        <GridItem>
          <Box height={'320px'} position={'relative'}>
            <Image
              src={whywork}
              alt={'DYSERF'}
              priority
              layout={'fill'}
              objectFit={'contain'}
              quality={'100'}
            />
          </Box>
        </GridItem>

        <GridItem>
          <Stack alignItems={'flex-start'} gap={4}>
            <Heading
              fontWeight={globalStyles.headerFontWeight}
              fontFamily={globalStyles.fontFamily}
              fontSize={globalStyles.headerFontSize}
              color={globalStyles.textColor}
            >
              <span style={{ color: globalStyles.secondaryColor }}> Why</span>{' '}
              work with us?
            </Heading>

            <Text color={globalStyles.textColor} textAlign={'left'}>
              Your partnership with us for a particular service offers you
              access to benefit from other of our services and professional team
              experience accross sectors.
            </Text>

            <Text color={globalStyles.textColor} textAlign={'left'}>
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
