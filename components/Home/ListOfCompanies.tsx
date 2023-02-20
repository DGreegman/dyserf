import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';
import { heroItems } from '../../store';
import { globalStyles } from '../../styles';
import { MobileGrid } from '../Shared';

const ListOfCompanies = () => {
  // Large screens
  const renderTabs = heroItems.map((e, i) => {
    const isLast = i === heroItems.length - 1;
    const isSecondLast = i === heroItems.length - 2;

    return (
      <GridItem
        key={i + 1}
        gridColumnStart={{
          md: isLast ? 3 : isSecondLast ? 2 : 'auto',
        }}
        display={{ base: 'none', md: 'flex' }}
      >
        <Image src={e} alt={globalStyles.alt} priority />
      </GridItem>
    );
  });

  return (
    <>
      <MobileGrid />
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(4,1fr)' }}
        justifyItems='center'
        alignItems='center'
        maxW={{ base: globalStyles.width, md: '1200px' }}
        rowGap={{ base: '40px', md: '50px' }}
        columnGap={{ base: '20px', md: '30px', xl: '100px' }}
        data-aos='fade-up'
        data-aos-duration='1000'
        px={globalStyles.px}
        display={{ base: 'none', md: 'grid' }}
      >
        {renderTabs}
      </Grid>
    </>
  );
};

export default ListOfCompanies;

