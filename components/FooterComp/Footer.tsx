import { FooterItem } from './FooterItem';
import { StayInTouch } from './StayInTouch';
import { SectionContainer } from '../../layout';

interface Props {
  showStay?: boolean;
}

export const Footer = ({ showStay }: Props) => {
  return (
    <SectionContainer gap='90px'>
      {showStay && <StayInTouch />}
      <FooterItem />
    </SectionContainer>
  );
};
