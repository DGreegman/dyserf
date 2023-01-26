import {
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { globalStyles } from '../styles';
import { coreValues } from '../store';
import { BsTwitter, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { PageContainer } from '../layout';
import { AboutForm, Header, RenderLists } from '../components';
import { DyserfRoutes } from '../utils';

const About = () => {
  // Hooks
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  // Renders
  const renderIcons = [BsTwitter, BsLinkedin, BsFacebook].map((item, i) => (
    <a href='#' key={i}>
      <Icon as={item} fontSize='1.2rem' />
    </a>
  ));

  return (
    <PageContainer>
      <Flex
        sx={globalStyles.sectionStyle}
        py={{ base: '30px', md: '50px', xl: '80px' }}
        data-aos='fade-up'
        data-aos-duration='1000'
      ></Flex>
    </PageContainer>
  );
};

export default About;
