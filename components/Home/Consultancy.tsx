import ButtonComp from '../Button/ButtonComp';
import Image from 'next/image';
import consultancy from '../../assets/images/consultancy.png';
import {
  bodyHeaderStyle,
  bodyTextStyle,
  globalStyles,
} from '../../styles/customStyles';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';

const Consultancy = () => {
  return (
    <Flex
      sx={globalStyles.sectionStyle}
      pt={{ base: '20px', md: '50px', xl: '150px' }}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
    >
      <HStack
        width={globalStyles.containerWidth}
        minH={'308px'}
        justifyContent={'space-between'}
        flexDirection={{
          base: 'column-reverse',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
        gap={{ base: 2, md: 5, xl: 0 }}
      >
        <Stack
          width={{ base: globalStyles.width, xl: '600px' }}
          alignItems={'flex-start'}
          gap={6}
        >
          <Heading sx={bodyHeaderStyle}>DYSERF Consultancy</Heading>

          <Text sx={bodyTextStyle}>
            We are team of experts from different background that have built
            solutions and digital experiences, affecting over 100,000 people,
            globally. The TEWAM approach is our unique agile methodology that
            helps us translate your business goals and objectives into solution.
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

        <Box
          width={{ base: globalStyles.width, xl: '432px' }}
          minHeight={'300px'}
          position={'relative'}
        >
          <Image
            src={consultancy}
            alt={globalStyles.alt}
            layout={'fill'}
            objectFit={'contain'}
            quality={'100'}
            priority
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Consultancy;
