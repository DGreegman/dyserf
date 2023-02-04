import { Stack, StackProps } from '@chakra-ui/react';
import { SectionHeader } from './Header';
import { DescriptionText } from './Sharedtext';

interface Props extends StackProps {
  header: string;
  desc: string;
}

const SectionTexts = ({ header, desc, ...res }: Props) => {
  return (
    <Stack {...res} gap={1} bg='transparent'>
      <SectionHeader>{header}</SectionHeader>
      <DescriptionText textAlign='center'>{desc}</DescriptionText>
    </Stack>
  );
};

export default SectionTexts;
