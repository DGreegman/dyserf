import Image from 'next/image';
import { Box, Flex, GridItem, Stack } from '@chakra-ui/react';
import { WorkModel } from '../../../models';
import { globalStyles } from '../../../styles';
import { CardHeader, CardText } from '../../Shared';

type Props = {
  item: WorkModel;
};

const WorkCard = ({ item }: Props) => {
  return (
    <GridItem
      key={item.id}
      rounded={10}
      minHeight='392px'
      maxW={globalStyles.width}
      p={5}
      alignItems='center'
      justifyContent='center'
      display='flex'
      className={globalStyles.diffBg}
    >
      <Flex align='center' justifyContent='center' bg='transparent' gap={5}>
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
          <Image fill src={item.icon} alt={item.header} />
        </Box>
      </Flex>
    </GridItem>
  );
};

export default WorkCard;
