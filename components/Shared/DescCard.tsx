import Image, { StaticImageData } from 'next/image';
import { LayoutProps, ListItem, UnorderedList } from '@chakra-ui/react';
import { CardHeader, CardText, DifferentBg } from '.';
import { globalStyles } from '../../styles';

interface Props {
  icon?: StaticImageData;
  cardHeader: string;
  cardText?: string;
  minH?: LayoutProps['minH'];
  radius?: number;
  listItem?: string[];
}

const DescCard = ({
  icon,
  cardHeader,
  cardText,
  minH,
  radius,
  listItem,
}: Props) => {
  const renderList = listItem?.map((item) => (
    <ListItem
      key={item}
      bg='transparent'
      fontSize={globalStyles.textFontSize}
      pb={1}
    >
      {item}
    </ListItem>
  ));

  return (
    <DifferentBg
      minH={minH ?? 'max-content'}
      borderRadius={radius ?? 20}
      flexProps={{ gap: 2 }}
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
      {cardText && <CardText>{cardText}</CardText>}
      {listItem && <UnorderedList bg='transparent'>{renderList}</UnorderedList>}
    </DifferentBg>
  );
};

export default DescCard;
