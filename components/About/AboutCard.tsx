import Image, { StaticImageData } from 'next/image';
import { LayoutProps } from '@chakra-ui/react';
import { CardHeader, CardText, DifferentBg } from '../Shared';

interface Props {
  icon?: StaticImageData;
  cardHeader: string;
  cardText: string;
  minH?: LayoutProps['minH'];
  radius?: number;
}

const AboutCard = ({ icon, cardHeader, cardText, minH, radius }: Props) => {
  return (
    <DifferentBg
      minH={minH ?? '226px'}
      borderRadius={radius ?? 20}
      flexProps={{ gap: 3 }}
    >
      {icon && (
        <Image
          src={icon}
          alt='bulb'
          style={{
            background: 'transparent',
          }}
        />
      )}
      <CardHeader>{cardHeader}</CardHeader>
      <CardText>{cardText}</CardText>
    </DifferentBg>
  );
};

export default AboutCard;
