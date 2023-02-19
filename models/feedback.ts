import { StaticImageData } from 'next/image';

export interface FeedbackModel {
  description: string;
  image: StaticImageData;
  id: string;
}
