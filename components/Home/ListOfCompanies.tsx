import Image from 'next/image';
import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import { heroItems, heroItems1, heroItems2, heroItems3 } from '../../store';
import { globalStyles } from '../../styles';

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

  // Todo : Find a better way to do this
  const renderMobileTab1 = heroItems1.map((e, i) => {
    return (
      <GridItem key={i + 1} position='relative' width='90px' height='40px'>
        <Image
          src={e}
          alt={globalStyles.alt}
          priority
          fill
          style={{ objectFit: 'contain' }}
        />
      </GridItem>
    );
  });

  const renderMobileTab2 = heroItems2.map((e, i) => {
    return (
      <GridItem key={i + 1} width='90px' height='40px' position='relative'>
        <Image
          src={e}
          alt={globalStyles.alt}
          priority
          fill
          style={{ objectFit: 'contain' }}
        />
      </GridItem>
    );
  });

  return (
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
    >
      {renderTabs}

      <MobileGrid templateColumns='repeat(3,1fr)'>
        {renderMobileTab1}
      </MobileGrid>

      <MobileGrid templateColumns='repeat(2,1fr)'>
        {renderMobileTab2}
      </MobileGrid>

      <MobileGrid templateColumns='repeat(1,1fr)' mt={2}>
        <Image
          src={heroItems3}
          alt={globalStyles.alt}
          priority
          width={110}
          height={50}
        />
      </MobileGrid>
    </Grid>
  );
};

export default ListOfCompanies;

export const MobileGrid = ({ children, ...rest }: GridProps) => {
  return (
    <Grid
      alignItems='center'
      maxW={globalStyles.width}
      columnGap='40px'
      display={{ base: 'flex', md: 'none' }}
      {...rest}
    >
      {children}
    </Grid>
  );
};
