import Image from 'next/image';
import { Box, Flex, GridItem } from '@chakra-ui/react';
import { TeamDataModel } from '../../models';
import { globalStyles } from '../../styles';
import { CardHeader } from './Header';
import { CardText } from './Sharedtext';
import { socialIcons } from '../../store';

type Props = {
  team: TeamDataModel;
};

export const TeamItem = ({ team }: Props) => {
  const isTop = team.id == 2 || team.id == 4;
  const isCenter = team.id === 3;

  return (
    <GridItem
      alignSelf={isTop ? 'flex-start' : 'inherit'}
      colSpan={{ base: isCenter ? 2 : 1, lg: 'auto' }}
    >
      <Flex borderRadius={10} align='center' direction='column' gap={1}>
        <Box
          position='relative'
          width='140px'
          height='150px'
          borderRadius={globalStyles.width}
        >
          <Image
            src={team.icon}
            alt={team.name}
            fill
            sizes='100vw'
            style={{
              objectFit: 'contain',
              borderRadius: globalStyles.width,
            }}
            quality={100}
          />
        </Box>

        <CardHeader fontWeight={400} pb={1}>
          {team.name}
        </CardHeader>

        <CardText
          color={globalStyles.textColor}
          textAlign='center'
          wordBreak='break-word'
          maxW='100px'
          pb='1'
        >
          {team.position}
        </CardText>

        <Flex gap={4}>
          <a
            href={team.social.twitter}
            rel='noopener noreferrer'
            target='_blank'
            className={globalStyles.className}
          >
            <Image
              src={socialIcons[0].icon}
              alt={globalStyles.alt}
              quality='100'
              className={globalStyles.className}
            />
          </a>

          <a
            href={team.social.linkedin}
            rel='noopener noreferrer'
            target='_blank'
            className={globalStyles.className}
          >
            <Image
              src={socialIcons[2].icon}
              alt={globalStyles.alt}
              quality='100'
              className={globalStyles.className}
            />
          </a>
        </Flex>
      </Flex>
    </GridItem>
  );
};

