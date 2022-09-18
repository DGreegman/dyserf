import Image from 'next/image';
import quote1 from '../../assets/images/quote1.svg';
import quote2 from '../../assets/images/quote2.svg';
import { bodyHeaderStyle, globalStyles } from '../../styles/customStyles';
import {
  Box,
  Circle,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { review } from '../../store';
import { useEffect, useState } from 'react';

const Review = () => {
  // Hooks
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      selected < review.length - 1
        ? setSelected((prev) => prev + 1)
        : setSelected(0);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [selected]);

  // Renders
  const renderReview = review.map((item, i) => {
    return (
      <Stack
        align={'center'}
        minHeight={'241px'}
        borderRadius={'10px'}
        bgColor={globalStyles.whiteColor}
        boxShadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
        p={'20px 20px'}
        gap={3}
        key={`${item.id}-${i}`}
      >
        <Box width={'122px'} height={'51px'} position={'relative'}>
          <Image src={item.icon} layout={'fill'} objectFit={'contain'} />
        </Box>

        <Flex alignItems={'flex-start'}>
          <Image
            src={quote1}
            width={'19px'}
            height={'13px'}
            alt={'Quote '}
            priority
          />

          <Text
            w={{ base: '200px', xl: '332px' }}
            minHeight={'84px'}
            fontSize={{ base: '10px', xl: globalStyles.smallTextFontSize }}
            lineHeight={'21px'}
            color={'#4E5D78'}
            pt={'10px'}
            textAlign={'center'}
          >
            {item.description}
          </Text>

          <Image
            src={quote2}
            width={'19px'}
            height={'13px'}
            alt={'Quote '}
            priority
          />
        </Flex>
      </Stack>
    );
  });

  const renderReviewSmallScreen = review.map((item, i) => {
    const isActive = i === selected;

    return (
      <div key={`${item.id}-${i}`}>
        {isActive && (
          <Stack
            align={'center'}
            minHeight={'241px'}
            borderRadius={'10px'}
            bgColor={globalStyles.whiteColor}
            boxShadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
            p={{ base: '20px 15px', xl: '20px 20px' }}
            gap={3}
          >
            <Box width={'122px'} height={'51px'} position={'relative'}>
              <Image src={item.icon} layout={'fill'} objectFit={'contain'} />
            </Box>

            <Flex alignItems={'flex-start'}>
              <Image
                src={quote1}
                width={'19px'}
                height={'13px'}
                alt={'Quote '}
                priority
              />

              <Text
                w={{ base: globalStyles.width, xl: '332px' }}
                minHeight={'84px'}
                fontSize={{ base: '10px', xl: globalStyles.smallTextFontSize }}
                lineHeight={'21px'}
                color={'#4E5D78'}
                pt={'10px'}
                textAlign={'center'}
              >
                {item.description}
              </Text>

              <Image
                src={quote2}
                width={'19px'}
                height={'13px'}
                alt={'Quote '}
                priority
              />
            </Flex>
          </Stack>
        )}
      </div>
    );
  });

  const renderDots = Array(review.length)
    .fill('-')
    .map((dot, i) => {
      const isActive = i === selected;

      return (
        <Circle
          p={1}
          key={i}
          bgColor={isActive ? globalStyles.secondaryColor : 'transparent'}
          border={`1px solid ${globalStyles.secondaryColor}`}
          onClick={() => setSelected(i)}
          cursor={'pointer'}
        />
      );
    });

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      py={{ base: '30px', md: '50px', xl: '80px' }}
    >
      <VStack
        width={globalStyles.containerWidth}
        gap={9}
        alignItems={'flex-start'}
      >
        <Stack
          width={{ base: globalStyles.width, xl: '600px' }}
          alignItems={'flex-start'}
          gap={6}
        >
          <Heading sx={bodyHeaderStyle}>
            <span style={{ color: globalStyles.secondaryColor }}>Clients</span>{' '}
            Review
          </Heading>
        </Stack>

        {isLargerThan1280 ? (
          <Grid
            width={globalStyles.width}
            gridTemplateColumns={'repeat(3,1fr)'}
            gap={6}
          >
            {renderReview}
          </Grid>
        ) : (
          <Stack width={{ base: globalStyles.width }} gap={1} align={'center'}>
            <Grid
              width={{ base: globalStyles.width, md: '50%' }}
              gridTemplateColumns={'repeat(1,1fr)'}
            >
              {renderReviewSmallScreen}
            </Grid>
            <Flex align={'center'} gap={0.5}>
              {renderDots}
            </Flex>
          </Stack>
        )}
      </VStack>
    </Flex>
  );
};

export default Review;
