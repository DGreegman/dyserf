import { Flex, Text } from '@chakra-ui/react';
import { heroItems } from '../../store';
import { GreenCirle } from '../Shared';

const ListOfCompanies = () => {
  const renderTabs = heroItems.map((e) => {
    return (
      <Flex key={e} align='center' gap={2}>
        <GreenCirle />
        <Text fontWeight={700}>{e}</Text>
      </Flex>
    );
  });

  return (
    <Flex
      maxW='1000px'
      flexWrap='wrap'
      columnGap='220px'
      rowGap='80px'
      mt='170px'
      justifyContent='center'
    >
      {renderTabs}
    </Flex>
  );
};

export default ListOfCompanies;
