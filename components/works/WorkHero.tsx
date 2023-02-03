import React from 'react';
import { SectionContainer } from '../../layout';
import { HeroHeader, DescriptionText } from '../Shared';

const WorkHero = () => {
  return (
    <SectionContainer pt='120px' gap={5}>
      <HeroHeader maxW='1031px'>Easy tech for businesses</HeroHeader>

      <DescriptionText textAlign='center' maxW='1031px' pb={3}>
        From startups in need of MVP to large corporations, institutions, and
        government in need of technical firepower, we are here for you.
      </DescriptionText>
    </SectionContainer>
  );
};

export default WorkHero;
