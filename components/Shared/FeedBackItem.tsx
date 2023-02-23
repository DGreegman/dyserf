import Image from 'next/image';
import { GridItem } from '@chakra-ui/react';
import { FeedBackItemModel } from '../../models';
import { onAddNewFeedBack } from '../../store';
import { globalStyles } from '../../styles';

export const FeedBackItem = ({
  feedbackItem,
  onClick,
  isActive,
}: FeedBackItemModel) => {
  return (
    <GridItem
      position='relative'
      width={{ base: 'full', md: '123px' }}
      height='60px'
      borderRadius={8}
      className={globalStyles.className}
      bgColor={isActive ? '#171F34' : 'transparent'}
      transition='all 350ms linear'
      onClick={() => {
        onAddNewFeedBack(feedbackItem);
        onClick?.();
      }}
      display='flex'
      px='1.5'
      alignItems='center'
      justifyContent='center'
    >
      <Image
        src={feedbackItem.image}
        className={globalStyles.className}
        alt={feedbackItem.name}
        width={123}
        style={{ background: 'transparent', objectFit: 'contain' }}
      />
    </GridItem>
  );
};
