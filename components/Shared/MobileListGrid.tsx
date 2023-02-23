import Image from 'next/image';
import { GridProps, Grid, GridItem } from '@chakra-ui/react';
import { heroItems1, heroItems2, heroItems3 } from '../../store';
import { globalStyles } from '../../styles';

export const MobileGrid = () => {
  // Todo : Find a better way to do this
  // Mobile screens
  const renderMobileTab1 = heroItems1.map((e, i) => {
    return (
      <GridItem key={i + 1} position='relative' width='90px' height='40px'>
        <Image
          src={e}
          alt={globalStyles.alt}
          priority
          fill
          sizes='100vw'
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
      w={globalStyles.width}
      rowGap={{ base: '40px', md: '50px' }}
      columnGap={{ base: '20px', md: '30px', xl: '100px' }}
      gridAutoRows='1fr'
      display={{ base: 'grid', md: 'none' }}
    >
      <MobileGridItem
        templateColumns='repeat(3,1fr)'
        justifyContent='space-between'
      >
        {renderMobileTab1}
      </MobileGridItem>

      <MobileGridItem templateColumns='repeat(2,1fr)' justifyContent='center'>
        {renderMobileTab2}
      </MobileGridItem>

      <MobileGridItem
        templateColumns='repeat(1,1fr)'
        mt={2}
        justifyContent='center'
      >
        <Image
          src={heroItems3}
          alt={globalStyles.alt}
          priority
          width={110}
          height={50}
        />
      </MobileGridItem>
    </Grid>
  );
};

export const MobileGridItem = ({ children, ...rest }: GridProps) => {
  return (
    <Grid
      alignItems='center'
      justifyItems='center'
      w='full'
      columnGap='40px'
      px={2}
      display={{ base: 'flex', md: 'none' }}
      {...rest}
    >
      {children}
    </Grid>
  );
};
