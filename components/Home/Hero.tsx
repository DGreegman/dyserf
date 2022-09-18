import Link from 'next/link';
import Image from 'next/image';
import ButtonComp from '../Button/ButtonComp';
import curve from '../../assets/images/curve.svg';
import serviceshero from '../../assets/images/serviceshero.svg';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { globalStyles } from '../../styles/customStyles';
import { BsFillPlayFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <Flex
      width={globalStyles.width}
      bg={globalStyles.secondaryColor}
      px={globalStyles.px}
      minH={{ base: '542px', xl: '640px' }}
      align={'center'}
      justifyContent={'center'}
      position={'relative'}
      pt={20}
    >
      <HStack
        width={globalStyles.containerWidth}
        align={'center'}
        minH={{ base: 'null', xl: '600px' }}
        justifyContent={{ base: 'none', '2xl': 'space-between' }}
      >
        <Stack
          color={globalStyles.whiteColor}
          w={{ base: globalStyles.width, md: '690px' }}
        >
          <Heading
            width={globalStyles.width}
            fontFamily={globalStyles.fontFamily}
            fontSize={{ base: 20, xl: 46 }}
            lineHeight={{ base: '29px', xl: '58px' }}
            fontWeight={700}
          >
            <span style={{ color: globalStyles.goldenColor }}>
              Accelerating
            </span>{' '}
            innovations &<br /> Business{' '}
            <span style={{ color: globalStyles.goldenColor }}>Growth</span>
          </Heading>

          <Text
            width={globalStyles.width}
            lineHeight={1.8}
            pt={2}
            fontSize={{ base: 12, xl: 16 }}
            pb={10}
          >
            Dyserf is an innovative solution that builds digital experiences,
            which accelerate <br /> business growth and make life activities
            easier and faster.
          </Text>

          <Flex alignItems={'center'} gap={7}>
            <ButtonComp width={'135px'} height={'44px'} text={'Learn more'} />

            <HStack alignItems={'center'} position={'relative'}>
              <Image src={curve} alt={'DYSERF'} />
              <Icon
                as={BsFillPlayFill}
                color={globalStyles.goldenColor}
                fontSize={25}
                position={'absolute'}
                left={0.5}
              />

              <Link href={'#'}>
                <a>
                  <Text pl={2} fontSize={globalStyles.smallTextFontSize}>
                    How we work
                  </Text>
                </a>
              </Link>
            </HStack>
          </Flex>
        </Stack>

        <Box
          width={'580px'}
          minHeight={'416px'}
          position={'relative'}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Image
            src={serviceshero}
            alt={'DYSERF'}
            priority
            layout={'fill'}
            objectFit={'contain'}
            quality={'100'}
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Hero;
