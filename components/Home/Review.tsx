import Image from 'next/image';
import { globalStyles } from '../../styles/customStyles';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Review = () => {
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
        ></Grid>
      </VStack>
    </Flex>
  );
};

export default Review;
