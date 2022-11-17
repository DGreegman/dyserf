import { Box, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import Image from 'next/future/image';
import React from 'react';
import { TeamDataModel } from '../../../models';
import { globalStyles } from '../../../styles';

type Props = {
  team: TeamDataModel;
};

const TeamItem = ({ team }: Props) => {
  return (
    <Stack
      minHeight={'290px'}
      borderRadius={10}
      padding={'25px 23px 25px 23px'}
      boxShadow={' 2px 2px 100px 50px rgba(0, 0, 0, 0.03)'}
      key={team.id}
      align={'center'}
      gap={2}
      data-aos={'zoom-in'}
      data-aos-duration={'1000'}
    >
      <Box
        position={'relative'}
        width={'110px'}
        height={'110px'}
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
          }}
          quality={100}
        />
      </Box>

      <Heading
        fontWeight={globalStyles.headerFontWeight - 100}
        fontFamily={globalStyles.fontFamily}
        color={globalStyles.textColor}
        fontSize={globalStyles.textFontSize.xl}
        lineHeight={'27px'}
        textAlign={'center'}
      >
        {team.name}
      </Heading>

      <Text
        fontSize={globalStyles.smallTextFontSize}
        color={globalStyles.textColor}
        textAlign={'center'}
      >
        {team.position}
      </Text>

      <Flex gap={4}>
        <a href="#">
          <Icon
            as={team.social.twitter}
            color={globalStyles.primaryColor}
            fontSize={'1.25rem'}
            cursor={'pointer'}
          />
        </a>

        <a href="#">
          <Icon
            as={team.social.linkedin}
            color={globalStyles.primaryColor}
            cursor={'pointer'}
            fontSize={'1.25rem'}
          />
        </a>
      </Flex>
    </Stack>
  );
};

export default TeamItem;
