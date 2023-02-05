import Image from 'next/image';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { WorkModel } from '../../models';
import { DifferentBg, CardText, CardHeader } from '../Shared';
import { CustomBtn } from '..';

type Props = {
  item: WorkModel;
};

const WorkCard = ({ item }: Props) => {
  return (
    <DifferentBg
      flexProps={{
        align: 'center',
        justify: 'center',
      }}
      borderRadius={{ base: 0, md: 10, xl: 20 }}
      minH='340px'
      w='full'
    >
      <Flex
        align='center'
        bg='transparent'
        gap={5}
        pt={{ base: 3, xl: 0 }}
        direction={{ base: 'column-reverse', xl: 'row' }}
      >
        <Stack bg='transparent' w='full'>
          <CardHeader>{item.header}</CardHeader>
          <CardText>{item.description}</CardText>
        </Stack>

        <Image
          src={item.icon}
          alt={item.header}
          style={{
            objectFit: 'contain',
            background: 'transparent',
            borderRadius: 10,
          }}
        />
      </Flex>

      <Box
        alignSelf='flex-start'
        pt={6}
        pb={1}
        bg='transparent'
        display={{ base: 'block', xl: 'none' }}
      >
        <CustomBtn
          text='See details'
          width='110px'
          bg='#182341'
          addBorderGradient
        />
      </Box>
    </DifferentBg>
  );
};

export default WorkCard;
