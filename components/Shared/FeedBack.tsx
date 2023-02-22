import DifferentBg from './DifferentBg';
import Image from 'next/image';
import DLogo from '../../assets/images/Dlogo.png';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { CardText } from './Sharedtext';
import { SectionTexts } from '..';
import { feedBackItems, onAddNewFeedBack, useFeedBackStore } from '../../store';
import { FeedBackItem } from './FeedBackItem';
import { useEffect, useState } from 'react';
import { AnimatedArrows } from './AnimatedArrows';

const FeedBack = () => {
  const { description, image, id } = useFeedBackStore();
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      selectedItem < feedBackItems.length - 1
        ? setSelectedItem((prev) => prev + 1)
        : setSelectedItem(0);
    }, 5000);

    onAddNewFeedBack(feedBackItems[selectedItem]);

    return () => {
      clearInterval(timer);
    };
  }, [selectedItem]);

  const renderFeedBacks = feedBackItems.map((feedbackItem, i) => {
    const isActive = feedbackItem.id === id;

    return (
      <FeedBackItem
        isActive={isActive}
        feedbackItem={feedbackItem}
        key={feedbackItem.id}
        onClick={() => {
          setSelectedItem(i);
        }}
      />
    );
  });

  return (
    <SectionContainer pt='10px'>
      <SectionTexts
        header='Feedbacks'
        desc='What businesses and individuals have said about us'
      />

      <Flex
        maxW='1200px'
        minH='450px'
        position='relative'
        direction='column'
        data-aos='fade-up'
        data-aos-duration='1000'
        align='center'
        justify='center'
        pt={{ base: '5', xl: 0 }}
      >
        <Box
          width={{ base: '90%', md: '400px' }}
          height='350px'
          bg='linear-gradient(180deg, rgba(234, 24, 175, 0.3) 0%, rgba(91, 47, 215, 0.3) 53.12%, rgba(150, 49, 198, 0.3) 100%);'
          filter='blur(25px)'
          opacity={0.6}
          position='absolute'
          left={{ base: '2', md: '25%' }}
          top='70px'
          borderRadius='full'
        />

        <DifferentBg
          flexProps={{
            align: 'center',
            px: { base: '30px', xl: '50px' },
            pb: { base: '4', xl: 0 },
            gap: '32px',
          }}
          position='relative'
          maxWidth={{ base: '82%', xl: '717px' }}
          minH={{ base: '329px', xl: '295px' }}
          maxH={{ base: 'full', xl: '295px' }}
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

          <CardText maxWidth={{ base: 'full', xl: '709px' }}>
            {description}
          </CardText>

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

        <AnimatedArrows />
      </Flex>

      <Grid
        templateColumns='repeat(4,1fr)'
        justifyItems='center'
        gap='80px'
        display={{ base: 'none', lg: 'flex' }}
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {renderFeedBacks}
      </Grid>
    </SectionContainer>
  );
};

export default FeedBack;
