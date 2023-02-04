import {
  GridItem,
  Text,
  GridItemProps,
  BackgroundProps,
} from '@chakra-ui/react';
import { ChildProps } from '../../models';
import { globalStyles } from '../../styles';

interface Props extends ChildProps {
  t: string;
  colSpan?: GridItemProps['colSpan'];
  bg?: BackgroundProps['bg'];
}

const ApproachCard = ({ children, t, colSpan, bg }: Props) => {
  const sharedText = (t: string) => (
    <Text fontWeight={globalStyles.semibold} color='#323B4B' bg='transparent'>
      {t}
    </Text>
  );

  return (
    <GridItem
      colSpan={colSpan}
      bg={bg}
      boxShadow='2px 2px 100px 50px rgba(0, 0, 0, 0.1), 2px 2px 100px 50px rgba(0, 0, 0, 0.03)'
      borderRadius={10}
      position='relative'
      overflow='hidden'
      alignItems='center'
      justifyContent='center'
      display='flex'
    >
      {sharedText(t)}
      {children}
    </GridItem>
  );
};

export default ApproachCard;
