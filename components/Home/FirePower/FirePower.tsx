import FirePowerItem from './FirePowerItem';
import ButtonComp from '../../Button/ButtonComp';
import { bodyHeaderStyle, bodyTextStyle, globalStyles } from '../../../styles';
import { Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { firepower } from '../../../store';

type Props = {
  showBtn: boolean;
};

const FirePower = ({ showBtn }: Props) => {
  // Hooks

  // Renders
  const renderOptions = firepower.map((item) => {
    return <FirePowerItem item={item} key={item.id} />;
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

          {showBtn && (
            <ButtonComp
              width={'186px'}
              height={'56px'}
              text={'See more case studies'}
              bg={'transparent'}
              color={globalStyles.secondaryColor}
              border={` 1px solid ${globalStyles.secondaryColor}`}
            />
          )}
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
