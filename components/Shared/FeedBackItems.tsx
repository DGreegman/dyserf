import GreenCirle from './GreenCirle';
import { Flex, FlexProps } from '@chakra-ui/react';

interface Props extends FlexProps {
  isRight?: boolean;
}

const FeedBackItems = ({ isRight, ...rest }: Props) => {
  return (
    <Flex
      align='center'
      width='174px'
      minH='64px'
      py={1}
      px={1}
      {...rest}
      bgColor='#171F34'
      justify={isRight ? 'flex-end' : 'flex-start'}
      borderRadius={2}
    >
      <GreenCirle width='45px' height='45px' />
    </Flex>
  );
};

export default FeedBackItems;
