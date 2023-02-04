import { StaticImageData } from 'next/image';

export interface WorkModel {
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
    twitter: string;
    linkedin: string;
  };
}
