import Image from 'next/future/image';
import { HStack, VStack, Box, Heading, Text } from '@chakra-ui/react';
import { sharedImg } from '../../store';
import { globalStyles, bodyTextStyle } from '../../styles';

type Props = {
  data: {
    title: string;
    description: string;
  }[];
};

const RenderLists = ({ data }: Props) => {
  // Renders
  const renderData = data.map((item, i) => {
    return (
      <HStack key={`${item.title}-${i}`} align={'flex-start'} gap={2}>
        <Box width={'40px'} height={'41px'} position={'relative'}>
          <Image
            src={sharedImg}
            alt={globalStyles.alt}
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <VStack align={'flex-start'} w={globalStyles.width} gap={2}>
          <Heading
            fontFamily={globalStyles.fontFamily}
            fontWeight={globalStyles.semibold}
            fontSize={globalStyles.headerFontSize.base}
            letterSpacing={0.5}
          >
            {item.title}
          </Heading>
          <Text
            sx={bodyTextStyle}
            width={{ base: globalStyles.width, xl: '1000px' }}
          >
            {item.description}
          </Text>
        </VStack>
      </HStack>
    );
  });

  return <>{renderData}</>;
};

export default RenderLists;
