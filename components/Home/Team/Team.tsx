import TeamItem from './TeamItem';
import { bodyHeaderStyle, bodyTextStyle, globalStyles } from '../../../styles';
import { Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { teams } from '../../../store';

const Team = () => {
  // renderTeam
  const renderTeam = teams.map((team) => (
    <TeamItem team={team} key={team.id} />
  ));

  return (
    <Flex
      sx={globalStyles.sectionStyle}
      py={{ base: '30px', md: '50px', xl: '80px' }}
      data-aos={'fade-up'}
      data-aos-duration={'1000'}
    >
      <VStack
        width={globalStyles.containerWidth}
        gap={9}
        alignItems={'flex-start'}
      >
        <Stack
          width={{ base: globalStyles.width, md: '600px' }}
          alignItems={'flex-start'}
          gap={6}
        >
          <Heading sx={bodyHeaderStyle}>
            <span style={{ color: globalStyles.secondaryColor }}>
              Professional
            </span>{' '}
            Team Members
          </Heading>

          <Text sx={bodyTextStyle}>
            We have got a group of talented and committed individuals with the
            desire to exceed what we promised in time with needed quality and
            budget.
          </Text>
        </Stack>

        <Grid
          width={globalStyles.width}
          gridTemplateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)',
            xl: 'repeat(4,1fr)',
          }}
          gap={6}
        >
          {renderTeam}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Team;
