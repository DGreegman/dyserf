import Image from 'next/image';
import { Box, Flex, Icon, Stack } from '@chakra-ui/react';
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

  return (
    <Stack
      borderRadius={10}
      align='center'
      gap={2}
      alignSelf={isTop ? 'flex-start' : 'inherit'}
    >
      <Box
        position='relative'
        width='110px'
        height='110px'
        borderRadius={globalStyles.width}
      >
        <Image
          src={team.icon}
          alt={team.name}
          priority
          fill
          style={{
            objectFit: 'contain',
            borderRadius: globalStyles.width,
            border: '3px solid #323B4B',
          }}
          quality={100}
        />
      </Box>

      <CardHeader fontWeight={globalStyles.mediumbold}>{team.name}</CardHeader>

      <CardText color={globalStyles.textColor} textAlign='center'>
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
            color={globalStyles.primaryColor}
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
            color={globalStyles.primaryColor}
            className={globalStyles.className}
            cursor='pointer'
            fontSize='1.25rem'
          />
        </a>
      </Flex>
    </Stack>
  );
};

export default TeamItem;
