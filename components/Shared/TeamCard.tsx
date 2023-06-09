import { TeamItem } from './TeamItem';
import { Grid } from '@chakra-ui/react';
import { SectionContainer } from '../../layout';
import { teams } from '../../store';
import { globalStyles } from '../../styles';
import { SectionTexts } from '..';

export const TeamCard = () => {
  const renderTeam = teams.map((team) => (
    <TeamItem team={team} key={team.id} />
  ));

  return (
    <SectionContainer gap='70px'>
      <SectionTexts
        header='The team'
        desc='The TEWAM approach is our unique agile methodology that helps us
          translate your business goals and objectives into solution.'
      />

      <Grid
        width={globalStyles.width}
        gridTemplateColumns={{
          base: 'repeat(2,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(5,1fr)',
          xl: 'repeat(5,1fr)',
        }}
        minH='353px'
        alignItems='flex-end'
        data-aos='fade-up'
        data-aos-duration='1000'
        columnGap={{ base: '20', xl: 6 }}
        rowGap={{ base: '20px', xl: 0 }}
      >
        {renderTeam}
      </Grid>
    </SectionContainer>
  );
};
