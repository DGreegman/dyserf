import { SectionContainer } from '../../layout';
import FooterItem from './FooterItem';
import StayInTouch from './StayInTouch';

const Footer = () => {
  return (
    <SectionContainer gap='90px'>
      <StayInTouch />
      <FooterItem />
    </SectionContainer>
  );
};

export default Footer;
