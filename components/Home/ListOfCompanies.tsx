import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';
import { heroItems } from '../../store';
import { globalStyles } from '../../styles';

const ListOfCompanies = () => {
  const renderTabs = heroItems.map((e, i) => {
    const isLast = i === heroItems.length - 1;
    const isSecondLast = i === heroItems.length - 2;

    return (
      <GridItem
        key={i + 1}
        gridColumnStart={isLast ? 3 : isSecondLast ? 2 : 'auto'}
      >
        <Image src={e} alt='Dyserf' priority />
      </GridItem>
    );
  });

  return (
    <Grid
      templateColumns={{ base: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }}
      justifyContent='center'
      justifyItems='center'
      alignItems='center'
      maxW='1200px'
      rowGap='50px'
      columnGap={{ base: '20px', xl: '100px' }}
      data-aos='fade-up'
      data-aos-duration='1000'
      px={globalStyles.px}
    >
      {renderTabs}
    </Grid>
  );
};

export default ListOfCompanies;
