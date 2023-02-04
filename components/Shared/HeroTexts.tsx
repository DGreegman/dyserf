import { ChildProps } from '../../models';
import { globalStyles } from '../../styles';
import { HeroHeader } from './Header';
import { DescriptionText } from './Sharedtext';

interface Props extends ChildProps {
  desc: string;
}

const HeroTexts = ({ children, desc }: Props) => {
  return (
    <>
      <HeroHeader maxW='1031px'>{children}</HeroHeader>
      <DescriptionText
        textAlign={{ base: 'left', xl: 'center' }}
        w={{ base: globalStyles.width, xl: '1031px' }}
        pt={1}
        pb={3}
      >
        {desc}
      </DescriptionText>
    </>
  );
};

export default HeroTexts;
