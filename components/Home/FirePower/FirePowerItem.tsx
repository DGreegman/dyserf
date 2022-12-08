import ButtonComp from '../../Button/ButtonComp';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FirePowerModel } from '../../../models';
import { globalStyles } from '../../../styles';

type Props = {
  item: FirePowerModel;
};

const FirePowerItem = ({ item }: Props) => {
  // Hooks
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <GridItem
      key={item.id}
      bgColor='#FAFBFC'
      rounded={10}
      minHeight='392px'
      p={5}
      alignItems='center'
      justifyContent='center'
      display='flex'
    >
      <Grid
        gridTemplateColumns={{ base: 'repeat(1,1fr)', xl: 'repeat(2,1fr)' }}
        alignContent='center'
        placeContent='center'
        gap={4}
      >
        <GridItem
          alignItems='center'
          justifyContent='center'
          display='flex'
          flexDirection='column'
          gridRow={isLargerThan1280 ? '' : 2}
        >
          <Stack gap={2}>
            <Heading
              fontFamily={globalStyles.fontFamily}
              fontSize={globalStyles.smallTextFontSize}
              color='#8A94A6'
              lineHeight={globalStyles.lineHeight}
              width='124px'
              fontWeight={globalStyles.headerFontWeight}
            >
              {item.title}
            </Heading>

            <Heading
              fontFamily={globalStyles.fontFamily}
              fontSize={globalStyles.textFontSize.xl}
              color={globalStyles.blackColor}
              lineHeight={globalStyles.lineHeight}
              fontWeight={globalStyles.semibold}
            >
              {item.header}
            </Heading>

            <Text
              fontFamily={globalStyles.fontFamily}
              fontSize={globalStyles.smallTextFontSize}
              color='#656262'
              lineHeight={globalStyles.lineHeight}
            >
              {item.description}
            </Text>

            <ButtonComp
              text='See details'
              width='77px'
              height='21px'
              bg='transparent'
              color={globalStyles.primaryColor}
            />
          </Stack>
        </GridItem>

        <GridItem gridRow={isLargerThan1280 ? '' : 1}>
          <Box
            w={{ base: globalStyles.width, xl: '362px' }}
            height='280px'
            position='relative'
            shadow='2px 2px 100px 50px rgba(0, 0, 0, 0.02)'
          >
            <Image
              src={item.icon}
              alt={item.title}
              priority
              layout='fill'
              objectFit='cover'
            />
          </Box>
        </GridItem>
      </Grid>
    </GridItem>
  );
};

export default FirePowerItem;
