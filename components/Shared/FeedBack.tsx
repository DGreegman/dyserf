import DifferentBg from './DifferentBg';
import Image from 'next/image';
import DLogo from '../../assets/images/Dlogo.png';
import { Box, Flex } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { CardText } from './Sharedtext';
import { SectionTexts } from '..';

const FeedBack = () => {
  return (
    <SectionContainer gap='50px' display={{ base: 'none', xl: 'flex' }}>
      <SectionTexts
        header='Feedbacks'
        desc='What businesses and individuals have said about us'
      />

      <Flex
        maxW='1200px'
        minH='500px'
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
          flexProps={{ align: 'center', px: '50px' }}
          position='relative'
          maxWidth='817px'
          minH='295px'
          maxH='295px'
        >
          <Image src={DLogo} alt='Logo' style={{ background: 'transparent' }} />

          <CardText pt='50px' maxWidth='709px'>
            Dyserf don’t just get your projects done, they work as part of your
            team to improve your general workflow. It was a great experience we
            had with dyserf working on our project.
          </CardText>
        </DifferentBg>
      </Flex>
    </SectionContainer>
  );
};

export default FeedBack;
