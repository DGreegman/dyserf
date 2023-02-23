import Image from 'next/image';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { WorkModel } from '../../models';
import { DifferentBg, CardText, CardHeader } from '../Shared';
import { CustomBtn } from '..';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';

type Props = {
  item: WorkModel;
};

const WorkCard = ({ item }: Props) => {
  return (
    <a
      href={DyserfRoutes.projects}
      rel='noopener noreferrer'
      target='_blank'
      className={globalStyles.className}
    >
      <DifferentBg
        flexProps={{
          align: 'center',
          justify: 'center',
          className: globalStyles.className,
        }}
        borderRadius={{ base: 0, md: 10 }}
        minH='380px'
      >
        <Flex
          align='center'
          bg='transparent'
          gap={5}
          pt={{ base: 3, xl: 0 }}
          direction={{ base: 'column-reverse', xl: 'row' }}
          className={globalStyles.className}
        >
          <Stack bg='transparent' flex='1' className={globalStyles.className}>
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
          <a
            href={DyserfRoutes.projects}
            rel='noopener noreferrer'
            target='_blank'
            className={globalStyles.className}
          >
            <CustomBtn
              text='See details'
              width='110px'
              bg={globalStyles.btnBg}
              addBorderGradient
            />
          </a>
        </Box>
      </DifferentBg>
    </a>
  );
};

export default WorkCard;
