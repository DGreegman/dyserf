import TeamItem from './TeamItem';
import { Grid, Stack } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { teams } from '../../store';
import { globalStyles } from '../../styles';
import { SectionHeader } from './Header';
import { DescriptionText } from './Sharedtext';

const TeamCard = () => {
  const renderTeam = teams.map((team) => (
    <TeamItem team={team} key={team.id} />
  ));

  return (
    <SectionContainer gap='70px' position='relative'>
      <Stack>
        <SectionHeader>The team</SectionHeader>
        <DescriptionText>
          The TEWAM approach is our unique agile methodology that helps us
          translate your business goals and objectives into solution.
        </DescriptionText>
      </Stack>

      <Grid
        width={globalStyles.width}
        position='relative'
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(5,1fr)',
        }}
        minH='450px'
        alignItems='center'
        gap={6}
      >
        {renderTeam}
      </Grid>
    </SectionContainer>
  );
};

export default TeamCard;
