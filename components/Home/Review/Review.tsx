import ReviewItem from './ReviewItem';
import { bodyHeaderStyle, globalStyles } from '../../../styles';
import {
  Circle,
  Flex,
  Grid,
  Heading,
  Stack,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { review } from '../../../store';
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
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [selected]);

  // Renders
  const renderReview = review.map((item) => (
    <ReviewItem item={item} key={item.id} />
  ));

  const renderReviewSmallScreen = review.map((item, i) => {
    const isActive = i === selected;

    return (
      <div
        key={`${item.id}-${i}`}
        style={{
          position: 'absolute',
          transform: isActive ? 'translate(0%)' : 'translate(-120%)',
          transition: 'all linear 0.5s',
        }}
      >
        <ReviewItem item={item} />
      </div>
    );
  });

  const renderDots = Array<string>(review.length)
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
          cursor='pointer'
          transition='all linear 0.5s'
        />
      );
    });

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      py={{ base: '30px', md: '50px', xl: '80px' }}
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <VStack
        width={globalStyles.containerWidth}
        gap={9}
        alignItems='flex-start'
      >
        <Stack
          width={{ base: globalStyles.width, xl: '600px' }}
          alignItems='flex-start'
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
            gridTemplateColumns='repeat(3,1fr)'
            gap={6}
          >
            {renderReview}
          </Grid>
        ) : (
          <Stack width={globalStyles.width} gap={1} align='center'>
            <Grid
              width={{ base: globalStyles.width, md: '60%' }}
              gridTemplateColumns='repeat(1,1fr)'
              position='relative'
              minHeight='250px'
            >
              {renderReviewSmallScreen}
            </Grid>
            <Flex align='center' gap={0.5}>
              {renderDots}
            </Flex>
          </Stack>
        )}
      </VStack>
    </Flex>
  );
};

export default Review;
