import Image from 'next/image';
import { Box, Flex, GridItem, Icon } from '@chakra-ui/react';
import { TeamDataModel } from '../../models';
import { globalStyles } from '../../styles';
import { CardHeader } from './Header';
import { CardText } from './Sharedtext';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

type Props = {
  team: TeamDataModel;
};

const TeamItem = ({ team }: Props) => {
  const isTop = team.id == 2 || team.id == 4;
  const test = team.id === 3;

  return (
    <GridItem
      alignSelf={isTop ? 'flex-start' : 'inherit'}
      colSpan={{ base: test ? 2 : 1, lg: 'auto' }}
    >
      <Flex borderRadius={10} align='center' direction='column' gap={1}>
        <Box
          position='relative'
          width='110px'
          height='110px'
          borderRadius={globalStyles.width}
        >
          <Image
            src={team.icon}
            alt={team.name}
            fill
            style={{
              objectFit: 'contain',
              borderRadius: globalStyles.width,
              border: '3px solid #323B4B',
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
            <Icon
              as={BsTwitter}
              color={globalStyles.whiteColor}
              className={globalStyles.className}
              fontSize='1.25rem'
              cursor='pointer'
            />
          </a>

          <a
            href={team.social.twitter}
            rel='noopener noreferrer'
            target='_blank'
            className={globalStyles.className}
          >
            <Icon
              as={BsLinkedin}
              color={globalStyles.whiteColor}
              className={globalStyles.className}
              cursor='pointer'
              fontSize='1.25rem'
            />
          </a>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default TeamItem;
