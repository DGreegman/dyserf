import { Center, CenterProps } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

const TagCard = ({ children, ...rest }: CenterProps) => {
  return (
    <Center
      rounded={globalStyles.radius}
      border={`1px solid ${globalStyles.whiteB}`}
      fontSize={globalStyles.cardText}
      fontWeight={globalStyles.normalBold}
      minW='101px'
      minH='42px'
      letterSpacing='0.03em'
      p='10px'
      bg='transparent'
      {...rest}
    >
      {children}
    </Center>
  );
};

export default TagCard;
