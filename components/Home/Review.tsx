import Image from 'next/image';
import quote1 from '../../assets/images/quote1.svg';
import quote2 from '../../assets/images/quote2.svg';
import { globalStyles } from '../../styles/customStyles';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { review } from '../../store';

const Review = () => {
  // Renders
  const renderReview = review.map((item) => {
    return (
      <Stack
        align={'center'}
        minHeight={'241px'}
        borderRadius={'10px'}
        bgColor={globalStyles.whiteColor}
        boxShadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
        p={'20px 20px'}
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

  return (
    <Flex sx={globalStyles.sectionStyle} py={'80px'}>
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
            <span style={{ color: globalStyles.secondaryColor }}>Clients</span>{' '}
            Review
          </Heading>
        </Stack>

        <Grid
          width={globalStyles.width}
          gridTemplateColumns={'repeat(3,1fr)'}
          gap={6}
        >
          {renderReview}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Review;
