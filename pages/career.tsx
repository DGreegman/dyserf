import { Heading, VStack } from '@chakra-ui/react';
import { PageContainer } from '../layout';
import { globalStyles } from '../styles';

const Career = () => {
  return (
    <PageContainer>
      <VStack w={globalStyles.width} pt={5}>
        <Heading as='h1' style={{ color: globalStyles.secondaryColor }}>
          Coming Soon!!!
        </Heading>
      </VStack>
    </PageContainer>
  );
};

export default Career;
