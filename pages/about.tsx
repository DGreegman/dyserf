import { Flex } from '@chakra-ui/react';
import { globalStyles } from '../styles';

const About = () => {
  return (
    <Flex
      sx={globalStyles.sectionStyle}
      py={{ base: '30px', md: '50px', xl: '80px' }}
      data-aos='fade-up'
      data-aos-duration='1000'
    ></Flex>
  );
};

export default About;
