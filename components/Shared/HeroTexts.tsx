import { ChildProps } from '../../models';
import { globalStyles } from '../../styles';
import { HeroHeader } from './Header';
import { DescriptionText } from './Sharedtext';

interface Props extends ChildProps {
  desc?: string;
}

const HeroTexts = ({ children, desc }: Props) => {
  return (
    <>
      <HeroHeader>{children}</HeroHeader>
      {desc && (
        <DescriptionText
          textAlign={{ base: 'left', lg: 'center' }}
          w={{ base: globalStyles.width, md: '70%', xl: '1031px' }}
          alignSelf={{ base: 'flex-start', lg: 'center' }}
          pt={1}
          pb={3}
        >
          {desc}
        </DescriptionText>
      )}
    </>
  );
};

export default HeroTexts;
