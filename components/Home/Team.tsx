import Image from 'next/image';
import { globalStyles } from '../../styles/customStyles';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { team } from '../../store';

const Team = () => {
  // renderTeam
  const renderTeam = team.map((team) => {
    return (
      <Stack
        minHeight={'290px'}
        borderRadius={10}
        padding={'25px 23px 25px 23px'}
        boxShadow={' 2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
        key={team.id}
        align={'center'}
        gap={2}
      >
        <Box
          position={'relative'}
          width={'110px'}
          height={'110px'}
          borderRadius={'full'}
        >
          <Image
            src={team.icon}
            alt={team.name}
            style={{ borderRadius: '100%' }}
            layout={'fill'}
            objectFit={'cover'}
            quality={'100'}
            loading={'eager'}
          />
        </Box>

        <Heading
          width={'161px'}
          fontWeight={globalStyles.headerFontWeight - 100}
          fontFamily={globalStyles.fontFamily}
          color={globalStyles.textColor}
          fontSize={16}
          lineHeight={'27px'}
          textAlign={'center'}
          alignSelf={'center'}
        >
          {team.name}
        </Heading>

        <Text
          fontSize={12}
          color={globalStyles.textColor}
          textAlign={'center'}
          alignSelf={'center'}
        >
          {team.position}
        </Text>

        <Flex gap={4}>
          <Icon
            as={team.social.twitter}
            color={globalStyles.primaryColor}
            fontSize={20}
            cursor={'pointer'}
          />
          <Icon
            as={team.social.linkedin}
            color={globalStyles.primaryColor}
            cursor={'pointer'}
            fontSize={20}
          />
        </Flex>
      </Stack>
    );
  });

  return (
    <Flex sx={globalStyles.sectionStyle} py={'80px'}>
      <VStack
        width={globalStyles.containerWidth}
        gap={9}
        alignItems={'flex-start'}
      >
        <Stack width={'600px'} alignItems={'flex-start'} gap={6}>
          <Heading
            fontWeight={globalStyles.headerFontWeight}
            fontFamily={globalStyles.fontFamily}
            fontSize={globalStyles.headerFontSize}
            color={globalStyles.textColor}
          >
            <span style={{ color: globalStyles.secondaryColor }}>
              Professional
            </span>{' '}
            Team Members
          </Heading>

          <Text color={globalStyles.textColor} textAlign={'left'}>
            We have got a group of talented and committed individuals with the
            desire to exceed what we promised in time with needed quality and
            budget.
          </Text>
        </Stack>

        <Grid
          width={globalStyles.width}
          gridTemplateColumns={'repeat(4,1fr)'}
          gap={6}
        >
          {renderTeam}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Team;
