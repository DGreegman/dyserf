import { SectionContainer } from '../../layout';
import { globalStyles } from '../../styles';
import FooterItem from './FooterItem';
import StayInTouch from './StayInTouch';

interface Props {
  showStay?: boolean;
}

const Footer = ({ showStay }: Props) => {
  return (
    <SectionContainer gap='90px' px={globalStyles.px}>
      {showStay && <StayInTouch />}
      <FooterItem />
    </SectionContainer>
  );
};

export default Footer;
