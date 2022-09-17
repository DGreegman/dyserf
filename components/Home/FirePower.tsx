import Image from 'next/image';
import ButtonComp from '../Button/ButtonComp';
import { globalStyles } from '../../styles/customStyles';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { firepower } from '../../store';

const FirePower = () => {
  // Renders
  const renderOptions = firepower.map((item) => {
    return (
      <GridItem
        key={item.id}
        bgColor="#FAFBFC"
        rounded={10}
        minHeight={'392px'}
        p={5}
        alignItems={'center'}
        justifyContent={'center'}
        display={'flex'}
      >
        <Grid
          templateColumns={'repeat(2,1fr)'}
          alignContent={'center'}
          placeContent={'center'}
          gap={4}
        >
          <GridItem
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
            flexDirection={'column'}
          >
            <Stack gap={2}>
              <Heading
                fontFamily={globalStyles.fontFamily}
                fontSize={globalStyles.smallTextFontSize}
                color={'#8A94A6'}
                lineHeight={1.5}
                width={'124px'}
                fontWeight={globalStyles.headerFontWeight}
              >
                {item.title}
              </Heading>

              <Heading
                fontFamily={globalStyles.fontFamily}
                fontSize={16}
                color={'#110F0F'}
                lineHeight={1.5}
                fontWeight={globalStyles.headerFontWeight - 100}
              >
                {item.header}
              </Heading>

              <Text
                fontFamily={globalStyles.fontFamily}
                fontSize={12}
                color={'#656262'}
                lineHeight={1.5}
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

          <GridItem>
            <Box
              w={'362px'}
              height={'280px'}
              position={'relative'}
              shadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.02)'}
            >
              <Image
                src={item.icon}
                alt={item.title}
                priority
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    );
  });

  return (
    <Flex sx={globalStyles.sectionStyle} py={'80px'}>
      <VStack
        width={globalStyles.containerWidth}
        gap={9}
        alignItems={'flex-start'}
      >
        <Stack width={'600px'} alignItems={'flex-start'} gap={6}>
          <Heading
            fontWeight={globalStyles.headerFontWeight}
            fontFamily={globalStyles.fontFamily}
            fontSize={globalStyles.headerFontSize}
            color={globalStyles.textColor}
          >
            We are{' '}
            <span style={{ color: globalStyles.secondaryColor }}>
              firepower
            </span>{' '}
            for brands
          </Heading>

          <Text color={globalStyles.textColor} textAlign={'left'}>
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
          gridTemplateColumns={'repeat(2,1fr)'}
          gap={6}
        >
          {renderOptions}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default FirePower;
