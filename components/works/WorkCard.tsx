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
    <>
      <Box display={{ base: 'none', md: 'block' }}>
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
            minH={{ base: '380px', md: '540px', xl: '380px' }}
          >
            <Flex
              align={{ base: 'flex-start', xl: 'center' }}
              bg='transparent'
              gap={5}
              flex='1'
              pt={{ base: 3, xl: 0 }}
              direction={{ base: 'column-reverse', xl: 'row' }}
              className={globalStyles.className}
            >
              <Stack
                bg='transparent'
                maxW={{ md: globalStyles.width, xl: '190px' }}
                className={globalStyles.className}
                flex='1'
              >
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
                  objectFit: 'cover',
                  background: 'transparent',
                  borderRadius: 10,
                  flex: '1',
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
        </a>
      </Box>

      <Box display={{ base: 'block', md: 'none' }}>
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
      </Box>
    </>
  );
};

export default WorkCard;
