import { Flex, Icon } from '@chakra-ui/react';
import { SlArrowRight } from 'react-icons/sl';
import { useEffect, useState } from 'react';

export const AnimatedArrows = () => {
  const [selectedArrow, setSelectedArrow] = useState(0);

  const renderArrows = [SlArrowRight, SlArrowRight, SlArrowRight].map(
    (e, i) => {
      const isActive = selectedArrow === i;

      return (
        <Icon
          as={e}
          key={i}
          opacity={isActive ? 1 : 0.4}
          boxSize='20px'
          bg='transparent'
          transition='all 150ms linear'
          fontSize='1.5rem'
        />
      );
    }
  );

  useEffect(() => {
    const timer = setInterval(() => {
      selectedArrow < renderArrows.length - 1
        ? setSelectedArrow((prev) => prev + 1)
        : setSelectedArrow(0);
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [renderArrows.length, selectedArrow]);

  return (
    <Flex
      alignSelf='flex-end'
      mt='5'
      mr='2'
      display={{ base: 'flex', lg: 'none' }}
    >
      {renderArrows}
    </Flex>
  );
};
