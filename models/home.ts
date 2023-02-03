import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons/lib';

export interface WorkModel {
  title: string;
  header: string;
  description: string;
  id: number;
  icon: StaticImageData;
}

export type ReviewModel = Pick<WorkModel, 'icon' | 'id' | 'description'>;

export type ServiceModel = Pick<WorkModel, 'icon' | 'header' | 'description'>;

type TeamModel = Pick<WorkModel, 'id' | 'icon'>;

export interface TeamDataModel extends TeamModel {
  name: string;
  position: string;
  social: {
    twitter: IconType;
    linkedin: IconType;
  };
}
