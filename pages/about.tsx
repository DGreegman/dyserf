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

const About = () => {
  // Hooks
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <PageContainer>
      <Flex
        sx={globalStyles.sectionStyle}
        py={{ base: '30px', md: '50px', xl: '80px' }}
        data-aos={'fade-up'}
        data-aos-duration={'1000'}
      >
        <VStack
          width={globalStyles.containerWidth}
          gap={9}
          alignItems={'flex-start'}
        >
          <Header
            header={'About us'}
            text={
              'Dyserf is an innovative solution that builds digital experiences that accelerate business growth and make life activities easier and faster. We are team of experts from different background that have built solutions and digital experiences that affect over 100,000 people, globally. The TEWAM approach is our unique agile methodology that helps us translate your business goals and objectives into solution.'
            }
          />

          <Header
            header={'Our Vision'}
            text={
              'Our vision is to be a digital solution that fronts business growth and accelerate Innovations.'
            }
          />

          <Header
            header={'Our Mission'}
            text={
              'To continually collaborate with our clients and stakeholders to meet business goals & objectives by providing first-class, innovative, cost-effective solutions.'
            }
          />

          <Stack gap={10} py={5}>
            <Header
              header={'Core Values'}
              text={
                'Team of differnt race and background that focus on building a tangible system that translates your business goals and objectives into solutions.'
              }
            />

            <RenderLists data={coreValues} />
          </Stack>

          <Header header={'Contact us here'} text={'Send us a message here.'} />

          <Grid
            width={globalStyles.width}
            gridTemplateColumns={{
              base: 'repeat(1,1fr)',
              md: 'repeat(2,1fr)',
              lg: 'repeat(2,1fr)',
              xl: 'repeat(2,1fr)',
            }}
            gap={10}
            minH={'584px'}
            bgColor={'#FAFBFC'}
            borderRadius={10}
            padding={{ base: globalStyles.px.base, lg: '50px 30px' }}
          >
            <AboutForm />

            <Stack
              pl={{ base: 0, md: 10 }}
              gridRow={!isLargerThan768 ? 1 : ''}
              gap={2}
            >
              <Heading
                fontFamily={globalStyles.fontFamily}
                fontWeight={globalStyles.semibold}
                fontSize={globalStyles.headerFontSize.base}
                letterSpacing={0.5}
              >
                Email
              </Heading>

              <Text
                color={globalStyles.secondaryColor}
                fontSize={globalStyles.textFontSize}
              >
                <a href="mailto:officialdyserf@gmail.com">
                  officialdyserf@gmail.com
                </a>
              </Text>

              <Flex gap={5}>
                <a href="#">
                  <Icon as={BsTwitter} fontSize={'1.2rem'} />
                </a>

                <a href="#">
                  <Icon as={BsLinkedin} fontSize={'1.2rem'} />
                </a>

                <a href="#">
                  <Icon as={BsFacebook} fontSize={'1.2rem'} />
                </a>
              </Flex>
            </Stack>
          </Grid>
        </VStack>
      </Flex>
    </PageContainer>
  );
};

export default About;
