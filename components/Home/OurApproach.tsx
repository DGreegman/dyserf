import Image from 'next/image';
import g1 from '../../assets/images/g1.png';
import g2 from '../../assets/images/g2.png';
import g3 from '../../assets/images/g3.png';
import g4 from '../../assets/images/g4.png';
import g5 from '../../assets/images/g5.png';
import g4team from '../../assets/images/g4team.png';
import { ApproachCard } from './ApproachCard';
import { Grid, Box } from '@chakra-ui/react';
import { DifferentBg, SectionTexts } from '../Shared';
import { globalStyles } from '../../styles';

export const OurApproach = () => {
  return (
    <DifferentBg
      w='full'
      borderRadius={0}
      flexProps={{ align: 'center', gap: '50px' }}
      minH='488px'
    >
      <SectionTexts
        header='Our Approach'
        desc=' Easy tech for businesses'
        pt='40px'
        pb='30px'
      />

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        bg='transparent'
        w={{ base: globalStyles.width, xl: '1200px' }}
        minH={{ base: '1045px', md: '290px' }}
        data-aos='fade-up'
        data-aos-duration='1000'
        gap={6}
        pb='30px'
      >
        <Grid templateColumns='repeat(2, 1fr)' gridAutoRows='1fr' gap={5}>
          <ApproachCard t='Empathy' colSpan={1} bg='#4A9FFF'>
            <Box bg='transparent' position='absolute' right={1} top={-1}>
              <Image
                src={g1}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>
          </ApproachCard>

          <ApproachCard t='Research' colSpan={1} bg='#F97564'>
            <Box bg='transparent' position='absolute' right='0.5' top={-1}>
              <Image
                src={g2}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>
          </ApproachCard>

          <ApproachCard t='Iterate' colSpan={2} bg='#FFD155'>
            <Box bg='transparent' position='absolute' right={1} top={-1}>
              <Image
                src={g3}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>
          </ApproachCard>
        </Grid>

        <Grid>
          <ApproachCard
            t='Creative collaboration'
            colSpan={1}
            bg='#00C39A'
            pb='2.5'
          >
            <Box bg='transparent' position='absolute' right={1} top={-1}>
              <Image
                src={g5}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>

            <Box
              bg='transparent'
              position='absolute'
              alignSelf='center'
              bottom={3}
            >
              <Image
                src={g4team}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>
          </ApproachCard>
        </Grid>

        <Grid gap={5}>
          <ApproachCard t='Prototype' colSpan={1} bg='#FDC799'>
            <Box bg='transparent' position='absolute' right={1} top={-1}>
              <Image
                src={g5}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>
          </ApproachCard>

          <ApproachCard t='Usability testing' colSpan={1} bg='#C89AFE'>
            <Box bg='transparent' position='absolute' right={0} top='3px'>
              <Image
                src={g4}
                alt={globalStyles.alt}
                style={{ background: 'transparent', objectPosition: 'top' }}
              />
            </Box>
          </ApproachCard>
        </Grid>
      </Grid>
    </DifferentBg>
  );
};
