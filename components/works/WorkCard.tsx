import Image from 'next/image';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { WorkModel } from '../../models';
import { DifferentBg, CardText, CardHeader } from '../Shared';
import { globalStyles } from '../../styles';
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
      borderRadius={{ base: 0, xl: 20 }}
      minH='340px'
      w='full'
    >
      <Flex
        align='center'
        bg='transparent'
        gap={5}
        pt={{ base: 3, xl: 0 }}
        // Fix later
        // w='50%'
        direction={{ base: 'column-reverse', xl: 'row' }}
      >
        <Stack bg='transparent' width={{ base: globalStyles.width, md: '40%' }}>
          <CardHeader>Vobb</CardHeader>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nobis et reiciendis excepturi dolor voluptatibus, quasi officiis
          </CardText>
        </Stack>

        <Box
          height={{ base: '276px', xl: '258px' }}
          width={{ base: globalStyles.width, md: '60%' }}
          position='relative'
          bg='transparent'
        >
          <Image
            fill
            src={item.icon}
            alt={item.header}
            style={{ borderRadius: 10 }}
          />
        </Box>
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
