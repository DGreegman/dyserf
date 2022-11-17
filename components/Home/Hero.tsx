import Link from 'next/link';
import Image from 'next/future/image';
import ButtonComp from '../Button/ButtonComp';
import curve from '../../assets/images/curve.png';
import serviceshero from '../../assets/images/serviceshero.png';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { BsFillPlayFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <Flex
      width={globalStyles.width}
      bg={globalStyles.secondaryColor}
      px={globalStyles.px}
      align={'center'}
      justifyContent={'center'}
      pt={20}
    >
      <HStack
        width={{
          base: '100%',
          xl: '1200px',
        }}
        align={'center'}
        minH={{ base: '25rem', md: '34rem', xl: '37.5rem' }}
        justifyContent={{ base: 'none', '2xl': 'space-between' }}
      >
        <Stack
          color={globalStyles.whiteColor}
          w={{ base: globalStyles.width, md: '70%', lg: '65%', xl: '43.1rem' }}
        >
          <Heading
            width={globalStyles.width}
            fontFamily={globalStyles.fontFamily}
            fontSize={{ base: '1.25rem', xl: '2.87rem' }}
            lineHeight={{ base: '1.8rem', xl: '3.6rem' }}
            fontWeight={globalStyles.headerFontWeight}
          >
            <span style={{ color: globalStyles.goldenColor }}>
              Accelerating
            </span>{' '}
            innovations &<br /> Business{' '}
            <span style={{ color: globalStyles.goldenColor }}>Growth</span>
          </Heading>

          <Text
            width={{ base: '85%', md: '95%', xl: '37.5rem' }}
            lineHeight={1.8}
            pt={2}
            fontSize={{
              base: globalStyles.smallTextFontSize,
              md: globalStyles.textFontSize.xl,
            }}
            pb={5}
          >
            Dyserf is an innovative solution that builds digital experiences,
            which accelerate business growth and make life activities easier and
            faster.
          </Text>

          <Flex alignItems={'center'} gap={7}>
            <ButtonComp
              width={'8.4rem'}
              height={'2.75rem'}
              text={'Learn more'}
            />

            <HStack alignItems={'center'} position={'relative'}>
              <Image src={curve} alt={globalStyles.alt} priority />
              <Icon
                as={BsFillPlayFill}
                color={globalStyles.goldenColor}
                fontSize={globalStyles.headerFontSize.base}
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
          width={'36rem'}
          minHeight={'26rem'}
          position={'relative'}
          display={{ base: 'none', md: 'flex' }}
        >
          <Image
            src={serviceshero}
            alt={globalStyles.alt}
            priority
            fill
            style={{
              objectFit: 'contain',
            }}
            quality={100}
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Hero;
