import Image from 'next/future/image';
import rightbg from '../assets/images/rightmain.png';
import leftbg from '../assets/images/leftmain.png';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ChildProps } from '../models';
import { globalStyles } from '../styles';

const PageContainer = ({ children }: ChildProps) => {
  return (
    <div
      style={{
        width: globalStyles.width,
        minHeight: globalStyles.fullHeight,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Flex
        width={globalStyles.width}
        bgColor={globalStyles.secondaryColor}
        pb={5}
        align='center'
        justifyContent='center'
        minH='170'
        position='relative'
        overflow='hidden'
        pt='78px'
      >
        <Box
          position='absolute'
          left={-6}
          bottom={0}
          width='100px'
          height='100px'
          zIndex={2000}
        >
          <Image
            src={leftbg}
            alt={globalStyles.alt}
            priority
            quality='100'
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <Box
          position='absolute'
          right={-6}
          bottom={0}
          width='100px'
          height='100px'
          zIndex={2000}
        >
          <Image
            src={rightbg}
            alt={globalStyles.alt}
            priority
            quality='100'
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <Flex
          width={globalStyles.width}
          pb={5}
          align='center'
          justifyContent='center'
          pt={{ base: 0, xl: '38px' }}
          minH='100'
          px={globalStyles.px}
        >
          <Heading
            fontFamily={globalStyles.fontFamily}
            fontWeight={globalStyles.semibold}
            fontSize={globalStyles.headerFontSize.base}
            color={globalStyles.whiteColor}
            letterSpacing='4px'
            textAlign='center'
          >
            <span style={{ color: globalStyles.goldenColor }}>
              Accelerating
            </span>{' '}
            Innovations and Business{' '}
            <span style={{ color: globalStyles.goldenColor }}>Growth</span>
          </Heading>
        </Flex>
      </Flex>

      <>{children}</>
    </div>
  );
};

export default PageContainer;
