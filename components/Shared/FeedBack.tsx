import DifferentBg from './DifferentBg';
import Image from 'next/image';
import DLogo from '../../assets/images/Dlogo.png';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { CardText } from './Sharedtext';
import { SectionTexts } from '..';
import { feedBackItems, useFeedBackStore } from '../../store';
import { FeedBackItem } from './FeedBackItem';

const FeedBack = () => {
  const { description, image, id } = useFeedBackStore();

  const renderFeedBacks = feedBackItems.map((feedbackItem) => {
    const isActive = feedbackItem.id === id;

    return (
      <FeedBackItem
        isActive={isActive}
        feedbackItem={feedbackItem}
        key={feedbackItem.id}
      />
    );
  });

  return (
    <SectionContainer display={{ base: 'none', lg: 'flex' }} pt='30px'>
      <SectionTexts
        header='Feedbacks'
        desc='What businesses and individuals have said about us'
      />

      <Flex
        maxW='1200px'
        minH='450px'
        position='relative'
        data-aos='fade-up'
        data-aos-duration='1000'
        align='center'
        justify='center'
      >
        <Box
          width='400px'
          height='350px'
          bg='linear-gradient(180deg, rgba(234, 24, 175, 0.3) 0%, rgba(91, 47, 215, 0.3) 53.12%, rgba(150, 49, 198, 0.3) 100%);'
          filter='blur(25px)'
          opacity={0.6}
          position='absolute'
          left='25%'
          top='70px'
          borderRadius='full'
        />

        <DifferentBg
          flexProps={{ align: 'center', px: '50px', gap: '32px' }}
          position='relative'
          maxWidth='717px'
          minH='295px'
          maxH='295px'
        >
          <Box
            position='relative'
            width='98px'
            height='98px'
            background='transparent'
          >
            <Image
              src={DLogo}
              alt='Logo'
              fill
              style={{ background: 'transparent', objectFit: 'contain' }}
            />
          </Box>

          <CardText maxWidth='709px'>{description}</CardText>

          <Box
            position='relative'
            width='90px'
            height='30px'
            background='transparent'
            alignSelf='flex-end'
          >
            <Image src={image} alt={id} style={{ background: 'transparent' }} />
          </Box>
        </DifferentBg>
      </Flex>

      <Grid
        templateColumns='repeat(4,1fr)'
        justifyItems='center'
        alignItems='flex-start'
        gap='80px'
      >
        {renderFeedBacks}
      </Grid>
    </SectionContainer>
  );
};

export default FeedBack;
