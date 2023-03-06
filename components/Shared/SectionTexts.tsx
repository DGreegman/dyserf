import { Stack, StackProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { SectionHeader } from './Header';
import { DescriptionText } from './Sharedtext';

interface Props extends StackProps {
  header: string;
  desc: string;
}

export const SectionTexts = ({ header, desc, ...res }: Props) => {
  return (
    <Stack
      gap={1}
      bg='transparent'
      px={globalStyles.px}
      data-aos='fade-up'
      data-aos-duration='1000'
      {...res}
    >
      <SectionHeader>{header}</SectionHeader>
      <DescriptionText textAlign='center' maxW='717px'>
        {desc}
      </DescriptionText>
    </Stack>
  );
};
