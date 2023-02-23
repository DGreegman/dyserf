import { StaticImageData } from 'next/image';

export interface FeedbackModel {
  description: string;
  image: StaticImageData;
  id: string;
  name: string;
}

export interface FeedBackItemModel {
  isActive?: boolean;
  feedbackItem: FeedbackModel;
  onClick?: () => void;
}