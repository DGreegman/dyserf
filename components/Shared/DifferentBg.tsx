import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

interface Props extends BoxProps {
  flexProps?: FlexProps;
}

const DifferentBg = ({ children, flexProps, ...rest }: Props) => {
  return (
    <Box
      boxShadow={globalStyles.boxShadow}
      className={globalStyles.diffBg}
      minH={rest.minH ?? '356px'}
      borderRadius={rest.borderRadius ?? 20}
      display='flex'
      {...rest}
    >
      <Flex
        w={globalStyles.width}
        direction='column'
        borderRadius={rest.borderRadius ?? 20}
        background={globalStyles.diffBgColor}
        p={4}
        {...flexProps}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default DifferentBg;
