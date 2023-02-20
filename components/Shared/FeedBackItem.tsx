import Image from 'next/image';
import { GridItem } from '@chakra-ui/react';
import { FeedbackModel } from '../../models';
import { onAddNewFeedBack } from '../../store';
import { globalStyles } from '../../styles';

interface Props {
  isActive: boolean;
  feedbackItem: FeedbackModel;
  onClick?: () => void;
}

export const FeedBackItem = ({ isActive, feedbackItem, onClick }: Props) => {
  return (
    <GridItem
      position='relative'
      width='123px'
      height='60px'
      borderRadius={8}
      className={globalStyles.className}
      bgColor={isActive ? '#171F34' : 'transparent'}
      transition='all 350ms linear'
      onClick={() => {
        onAddNewFeedBack(feedbackItem);
        onClick && onClick();
      }}
      display='flex'
      px='1.5'
      alignItems='center'
      justifyContent='center'
    >
      <Image
        src={feedbackItem.image}
        className={globalStyles.className}
        alt={feedbackItem.id}
        style={{ background: 'transparent', objectFit: 'contain' }}
      />
    </GridItem>
  );
};
