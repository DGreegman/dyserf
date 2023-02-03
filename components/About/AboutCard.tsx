import Image, { StaticImageData } from 'next/image';
import { CardHeader, CardText, DifferentBg } from '../Shared';

interface Props {
  icon?: StaticImageData;
  cardHeader: string;
  cardText: string;
}

const AboutCard = ({ icon, cardHeader, cardText }: Props) => {
  return (
    <DifferentBg w='502px'>
      {icon && <Image src={icon} alt='bulb' />}
      <CardHeader>{cardHeader}</CardHeader>
      <CardText>{cardText}</CardText>
    </DifferentBg>
  );
};

export default AboutCard;
