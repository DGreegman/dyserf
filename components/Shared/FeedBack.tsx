import DifferentBg from './DifferentBg';
import Image from 'next/image';
import FeedBackItems from './FeedBackItems';
import DLogo from '../../assets/images/Dlogo.png';
import { Box, Grid, Stack, VStack } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { SectionHeader } from './Header';
import { CardText, DescriptionText } from './Sharedtext';

const FeedBack = () => {
  return (
    <SectionContainer gap='50px'>
      <Stack>
        <SectionHeader>Feedbacks</SectionHeader>
        <DescriptionText>
          What businesses and individuals have said about us
        </DescriptionText>
      </Stack>

      <Grid
        maxW='1200px'
        templateColumns='repeat(3,1fr)'
        minH='500px'
        position='relative'
        gap='120px'
        pt={20}
      >
        <Box
          width='400px'
          height='400px'
          bg=' linear-gradient(180deg, rgba(234, 24, 175, 0.3) 0%, rgba(91, 47, 215, 0.3) 53.12%, rgba(150, 49, 198, 0.3) 100%);'
          filter='blur(25px)'
          opacity={0.6}
          position='absolute'
          left='33%'
          top='120px'
        />
        <VStack minH='full' position='relative' pt={10}>
          <FeedBackItems alignSelf='flex-start' />
          <FeedBackItems alignSelf='flex-end' position='absolute' bottom={10} />
        </VStack>

        <DifferentBg
          flexProps={{ align: 'center' }}
          position='relative'
          _after={{}}
        >
          <Image src={DLogo} alt='Logo' style={{ background: 'transparent' }} />

          <CardText pt='50px'>
            Dyserf don’t just get your projects done, they work as part of your
            team to improve your general workflow. It was a great experience we
            had with dyserf working on our project.
          </CardText>
        </DifferentBg>

        <VStack minH='full' position='relative' pt={10}>
          <FeedBackItems alignSelf='flex-start' isRight />
          <FeedBackItems
            alignSelf='flex-end'
            position='absolute'
            bottom={10}
            isRight
          />
        </VStack>
      </Grid>
    </SectionContainer>
  );
};

export default FeedBack;
