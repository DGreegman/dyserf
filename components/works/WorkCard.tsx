import Image from 'next/image';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { WorkModel } from '../../models';
import { DifferentBg, CardText, CardHeader } from '../Shared';
import { CustomBtn } from '..';
import { globalStyles } from '../../styles';

type Props = {
  item: WorkModel;
};

const WorkCard = ({ item }: Props) => {
  return (
    <DifferentBg
      flexProps={{
        align: 'center',
        justify: 'center',
      }}
      borderRadius={{ base: 0, md: 10 }}
      minH='380px'
      w='full'
      className={globalStyles.className}
    >
      <Flex
        align='center'
        bg='transparent'
        gap={5}
        pt={{ base: 3, xl: 0 }}
        direction={{ base: 'column-reverse', xl: 'row' }}
        className={globalStyles.className}
      >
        <Stack bg='transparent' w='full' className={globalStyles.className}>
          <CardHeader className={globalStyles.className}>
            {item.header}
          </CardHeader>
          <CardText className={globalStyles.className}>
            {item.description}
          </CardText>
        </Stack>

        <Image
          src={item.icon}
          alt={item.header}
          className={globalStyles.className}
          style={{
            objectFit: 'contain',
            background: 'transparent',
            borderRadius: 10,
          }}
        />
      </Flex>

      <Box
        alignSelf='flex-start'
        pt={6}
        pb={1}
        bg='transparent'
        display={{ base: 'block', xl: 'none' }}
      >
        <CustomBtn
          text='See details'
          width='110px'
          bg={globalStyles.btnBg}
          addBorderGradient
        />
      </Box>
    </DifferentBg>
  );
};

export default WorkCard;
