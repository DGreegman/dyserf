import hoops from '../../assets/images/hoops.png';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { NavModel } from '../../models';
import { useRouter } from 'next/router';

export const NavItem = ({ path, title, isExternal }: NavModel) => {
  const pathname = useRouter().pathname;
  const transparent = 'transparent';
  const isActive = pathname.includes(path);

  return (
    <Flex
      position='relative'
      align='center'
      justify='center'
      minW='100px'
      bg={transparent}
    >
      {isExternal ? (
        <a
          href={path}
          style={{
            zIndex: 3000,
          }}
          rel='noopener noreferrer'
          target='_blank'
          className={globalStyles.className}
        >
          <Title title={title} isActive={isActive} />
        </a>
      ) : (
        <Link
          href={path}
          style={{
            position: isActive ? 'absolute' : 'relative',
            zIndex: 3000,
          }}
        >
          <Title title={title} isActive={isActive} />
        </Link>
      )}

      <Box
        opacity={isActive ? 1 : 0}
        transition='all ease-in-out 250ms'
        position='absolute'
        bg={transparent}
      >
        <Image
          src={hoops}
          alt={globalStyles.alt}
          style={{
            background: transparent,
          }}
        />
      </Box>
    </Flex>
  );
};

interface ITitle {
  title: string;
  isActive: boolean;
}

const Title = ({ title, isActive }: ITitle) => {
  return (
    <Text
      color={globalStyles.whiteColor}
      fontSize={globalStyles.cardText}
      className={globalStyles.className}
      bg='transparent'
      _hover={{
        opacity: !isActive ? 0.7 : 1,
      }}
    >
      {title}
    </Text>
  );
};
