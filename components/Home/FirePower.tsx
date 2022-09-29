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
  GridItem,
  Heading,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { firepower } from '../../store';

const FirePower = () => {
  // Hooks
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  // Renders
  const renderOptions = firepower.map((item) => {
    return (
      <GridItem
        key={item.id}
        bgColor={'#FAFBFC'}
        rounded={10}
        minHeight={'392px'}
        p={5}
        alignItems={'center'}
        justifyContent={'center'}
        display={'flex'}
      >
        <Grid
          gridTemplateColumns={{ base: 'repeat(1,1fr)', xl: 'repeat(2,1fr)' }}
          alignContent={'center'}
          placeContent={'center'}
          gap={4}
        >
          <GridItem
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
            flexDirection={'column'}
            gridRow={isLargerThan1280 ? '' : 2}
          >
            <Stack gap={2}>
              <Heading
                fontFamily={globalStyles.fontFamily}
                fontSize={globalStyles.smallTextFontSize}
                color={'#8A94A6'}
                lineHeight={globalStyles.lineHeight}
                width={'124px'}
                fontWeight={globalStyles.headerFontWeight}
              >
                {item.title}
              </Heading>

              <Heading
                fontFamily={globalStyles.fontFamily}
                fontSize={globalStyles.textFontSize.xl}
                color={globalStyles.blackColor}
                lineHeight={globalStyles.lineHeight}
                fontWeight={globalStyles.headerFontWeight - 100}
              >
                {item.header}
              </Heading>

              <Text
                fontFamily={globalStyles.fontFamily}
                fontSize={globalStyles.smallTextFontSize}
                color={'#656262'}
                lineHeight={globalStyles.lineHeight}
              >
                {item.description}
              </Text>

              <ButtonComp
                text={'See details'}
                width={'77px'}
                height={'21px'}
                bg={'transparent'}
                color={globalStyles.primaryColor}
              />
            </Stack>
          </GridItem>

          <GridItem gridRow={isLargerThan1280 ? '' : 1}>
            <Box
              w={{ base: globalStyles.width, xl: '362px' }}
              height={'280px'}
              position={'relative'}
              shadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.02)'}
            >
              <Image
                src={item.icon}
                alt={item.title}
                priority
                layout={'fill'}
                objectFit={'cover'}
              />
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
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
          <Heading sx={bodyHeaderStyle}>
            We are{' '}
            <span style={{ color: globalStyles.secondaryColor }}>
              firepower
            </span>{' '}
            for brands
          </Heading>

          <Text sx={bodyTextStyle}>
            We exist to connect you with scalable innovative solution so you can
            focus on your business while Dyserf focusses on your technology.
          </Text>

          <ButtonComp
            width={'186px'}
            height={'56px'}
            text={'See more case studies'}
            bg={'transparent'}
            color={globalStyles.secondaryColor}
            border={` 1px solid ${globalStyles.secondaryColor}`}
          />
        </Stack>

        <Grid
          width={globalStyles.width}
          gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
          gap={6}
        >
          {renderOptions}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default FirePower;
