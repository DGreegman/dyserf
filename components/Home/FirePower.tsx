import Image from 'next/image';
import ButtonComp from '../Button/ButtonComp';
import { globalStyles } from '../../styles/customStyles';
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { firepower } from '../../store/data/firepower';

const FirePower = () => {
  // Renders
  const renderOptions = firepower.map((item) => {
    return (
      <GridItem key={item.id}>
        <Flex>
          <Stack>
            <Heading>{item.title}</Heading>
            <Heading>{item.header}</Heading>
            <Text>{item.description}</Text>
            {/* <ButtonComp/> */}
          </Stack>
          <Image src={item.icon} alt={item.title} />
        </Flex>
      </GridItem>
    );
  });

  return (
    <Flex
      width={globalStyles.width}
      px={globalStyles.px}
      align={'center'}
      justifyContent={'center'}
      py={'80px'}
    >
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
