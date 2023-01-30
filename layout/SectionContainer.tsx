import { BoxProps, Flex, FlexboxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { globalStyles } from '../styles';

interface Props extends FlexboxProps, BoxProps {
  children: ReactNode;
  direction?: FlexboxProps['flexDirection'];
}

const SectionContainer = ({ children, direction, ...rest }: Props) => {
  return (
    <Flex sx={globalStyles.sectionStyle}>
      <Flex
        width={globalStyles.containerWidth}
        {...rest}
        flexDirection={direction ?? 'column'}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionContainer;
