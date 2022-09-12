import ButtonComp from '../Button/ButtonComp';
import Image from 'next/image';
import consultancy from '../../assets/images/consultancy.svg';
import { globalStyles } from '../../styles/customStyles';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';

const Consultancy = () => {
  return (
    <Flex
      width={globalStyles.width}
      px={globalStyles.px}
      align={'center'}
      justifyContent={'center'}
      py={'120px'}
    >
      <HStack
        width={globalStyles.containerWidth}
        minH={'308px'}
        justifyContent={'space-between'}
      >
        <Stack width={'600px'} alignItems={'flex-start'} gap={6}>
          <Heading
            fontWeight={globalStyles.headerFontWeight}
            fontFamily={globalStyles.fontFamily}
            fontSize={globalStyles.headerFontSize}
            color={globalStyles.secondaryColor}
          >
            DYSERF Consultancy
          </Heading>

          <Text color={globalStyles.textColor} textAlign={'left'}>
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

        <Box width={'432px'} minHeight={'300px'} position={'relative'}>
          <Image
            src={consultancy}
            alt={'DYSERF'}
            priority
            layout={'fill'}
            objectFit={'cover'}
            quality={'100'}
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Consultancy;
