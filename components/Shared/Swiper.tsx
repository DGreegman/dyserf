import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { feedBackItems } from '../../store';
import { FeedBackItem } from './FeedBackItem';
import { useState } from 'react';
import 'swiper/css';


export const DySerfSwiper = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const renderSlides = feedBackItems.map((feedbackItem, i) => {
    const isActive = selectedItem === i;

    return (
      <SwiperSlide key={feedbackItem.id}>
        <FeedBackItem
          feedbackItem={feedbackItem}
          onClick={() => {
            setSelectedItem(i);
          }}
          isActive={isActive}
        />
      </SwiperSlide>
    );
  });

  return (
    <Box
      width={{ base: '90%', md: '700px' }}
      display={{ base: 'block', md: 'none' }}
      mt='5'
    >
      <Swiper slidesPerView={2} spaceBetween={20}>
        {renderSlides}
      </Swiper>
    </Box>
  );
};
