import Image from 'next/image';
import quote1 from '../../../assets/images/quote1.png';
import quote2 from '../../../assets/images/quote2.png';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { ReviewModel } from '../../../models';
import { globalStyles } from '../../../styles';

type Props = {
  item: ReviewModel;
};

const ReviewItem = ({ item }: Props) => {
  return (
    <Stack
      align={'center'}
      minHeight={'241px'}
      borderRadius={'10px'}
      bgColor={globalStyles.whiteColor}
      boxShadow={'2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
      p={'20px'}
      gap={3}
      key={`${item.id}}`}
    >
      <Box width={'122px'} height={'51px'} position={'relative'}>
        <Image
          src={item.icon}
          alt={item.description}
          layout={'fill'}
          objectFit={'contain'}
        />
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
          w={globalStyles.width}
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
};

export default ReviewItem;
