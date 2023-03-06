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

export const WorkCard = ({ item }: Props) => {
  return (
    <>
      {/* This is for large screens */}
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
            borderRadius={{ md: 10 }}
            minH={{ md: '540px', xl: '380px' }}
          >
            <Flex
              align={{ md: 'flex-start', xl: 'center' }}
              bg='transparent'
              gap={5}
              flex='1'
              pt={{ md: 3, xl: 0 }}
              direction={{ md: 'column-reverse', xl: 'row' }}
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
              display={{ md: 'block', xl: 'none' }}
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

      {/* This is for small screens */}
      <Box display={{ base: 'block', md: 'none' }}>
        <DifferentBg
          flexProps={{
            align: 'center',
            justify: 'center',
            className: globalStyles.className,
          }}
          borderRadius='none'
          minH='380px'
        >
          <Flex
            align='center'
            bg='transparent'
            gap={5}
            pt='3'
            direction='column-reverse'
            className={globalStyles.className}
          >
            <Stack
              bg='transparent'
              className={globalStyles.className}
              w={globalStyles.width}
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
            display='block'
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

