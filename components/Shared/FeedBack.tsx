import { Stack } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { SectionHeader } from './Header';
import { DescriptionText } from './Sharedtext';

const FeedBack = () => {
  return (
    <SectionContainer gap='50px'>
      <Stack>
        <SectionHeader>Feedbacks</SectionHeader>
        <DescriptionText>
          What businesses and individuals have said about us
        </DescriptionText>
      </Stack>
    </SectionContainer>
  );
};

export default FeedBack;
