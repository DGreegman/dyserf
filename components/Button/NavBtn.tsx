import Link from 'next/link';
import CustomBtn from './CustomBtn';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { globalStyles } from '../../styles';
import { DyserfRoutes } from '../../utils';

interface Props {
  onClick?: () => void;
}

const NavBtn = ({ onClick }: Props) => {
  return (
    <Link href={DyserfRoutes.sendMessage} onClick={onClick}>
      <CustomBtn
        width='140px'
        height='47px'
        text='Let’s Collab'
        bg={globalStyles.buttonGradient}
        addActive
        rightIcon={
          <ArrowForwardIcon
            bgColor='transparent'
            ml={1}
            fontSize='1.15rem'
            className={globalStyles.className}
          />
        }
      />
    </Link>
  );
};

export default NavBtn;
