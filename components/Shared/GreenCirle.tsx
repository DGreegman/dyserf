import { Center, LayoutProps } from '@chakra-ui/react';
interface Props {
  width?: LayoutProps['width'];
  height?: LayoutProps['height'];
}

const GreenCirle = ({ width, height }: Props) => {
  return (
    <Center
      width={width ?? '80px'}
      height={height ?? '80px'}
      borderRadius='full'
      bgColor='#0CBC8B'
    />
  );
};

export default GreenCirle;
