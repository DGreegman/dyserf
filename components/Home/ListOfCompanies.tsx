import { Flex, Text } from '@chakra-ui/react';
import { heroItems } from '../../store';
import { globalStyles } from '../../styles';
import { GreenCirle } from '../Shared';

const ListOfCompanies = () => {
  const renderTabs = heroItems.map((e) => {
    return (
      <Flex key={e} align='center' gap={2}>
        <GreenCirle
          width={{ base: '30px', xl: '80px' }}
          height={{ base: '30px', xl: '80px' }}
        />
        <Text fontWeight={700}>{e}</Text>
      </Flex>
    );
  });

  return (
    <Flex
      maxW='1000px'
      flexWrap='wrap'
      columnGap={{ base: 5, xl: '220px' }}
      px={globalStyles.px}
      rowGap={{ base: '40px', xl: '80px' }}
      mt={{ base: 0, xl: '170px' }}
      justifyContent={{ base: 'flex-start', xl: 'center' }}
    >
      {renderTabs}
    </Flex>
  );
};

export default ListOfCompanies;
