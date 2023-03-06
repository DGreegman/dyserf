import Image from 'next/image';
import Link from 'next/link';
import { logo } from '../../../store';
import { globalStyles } from '../../../styles';
import { DyserfRoutes } from '../../../utils';

type Props = {
  onClick?: () => void;
};

export const HeroLogo = ({ onClick }: Props) => {
  return (
    <Link
      href={DyserfRoutes.homepage}
      onClick={onClick}
      className={globalStyles.className}
    >
      <Image
        src={logo}
        alt={globalStyles.alt}
        quality='100'
        className={globalStyles.className}
        priority
        style={{
          background: 'transparent',
        }}
      />
    </Link>
  );
};
