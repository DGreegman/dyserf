import FooterItem from './FooterItem';
import StayInTouch from './StayInTouch';
import { SectionContainer } from '../../layout';

interface Props {
  showStay?: boolean;
}

const Footer = ({ showStay }: Props) => {
  return (
    <SectionContainer gap='90px'>
      {showStay && <StayInTouch />}
      <FooterItem />
    </SectionContainer>
  );
};

export default Footer;
