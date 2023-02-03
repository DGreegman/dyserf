import Image from 'next/image';
import { Box, CardHeader, Flex, Stack } from '@chakra-ui/react';
import { WorkModel } from '../../models';
import { DifferentBg, CardText } from '../Shared';

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
      minH='340px'
    >
      <Flex align='center' bg='transparent' gap={5}>
        <Stack bg='transparent'>
          <CardHeader>Vobb</CardHeader>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nobis et reiciendis excepturi dolor voluptatibus, quasi officiis
          </CardText>
        </Stack>

        <Box
          height='278px'
          width={{ base: '90%', md: '362px' }}
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
    </DifferentBg>
  );
};

export default WorkCard;
