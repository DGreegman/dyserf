import { BoxProps, Flex, FlexboxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { globalStyles } from '../styles';

interface Props extends FlexboxProps, BoxProps {
  children: ReactNode;
}

const SectionContainer = ({ children, ...rest }: Props) => {
  return (
    <Flex sx={globalStyles.sectionStyle}>
      <Flex width={globalStyles.containerWidth} {...rest}>
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;
