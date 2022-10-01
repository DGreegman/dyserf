import Header from '../components/Shared/Header';
import FirePower from '../components/Home/FirePower';
import RenderLists from '../components/Shared/RenderLists';
import PageContainer from '../layout/PageContainer';
import { works } from '../store';
import { globalStyles } from '../styles';
import { Flex, Stack, VStack } from '@chakra-ui/react';

const Works = () => {
  return (
    <PageContainer>
      <FirePower showBtn={false} />
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
          <Stack gap={10} py={5}>
            <Header
              header={'Our Dynamism'}
              text={
                'We exist to connect you with scalable innovative solution so you can focus on your business while Dyserf focusses on your technology.'
              }
            />

            <RenderLists data={works} />
          </Stack>
        </VStack>
      </Flex>
    </PageContainer>
  );
};

export default Works;
