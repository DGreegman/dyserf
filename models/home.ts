import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons/lib';

export interface FirePowerModel {
  title: string;
  header: string;
  description: string;
  id: number;
  icon: StaticImageData;
}

export type ReviewModel = Pick<FirePowerModel, 'icon' | 'id' | 'description'>;

export type ServiceModel = Pick<
  FirePowerModel,
  'icon' | 'header' | 'description'
>;

type TeamModel = Pick<FirePowerModel, 'id' | 'icon'>;

export interface TeamDataModel extends TeamModel {
  name: string;
  position: string;
  social: {
    twitter: IconType;
    linkedin: IconType;
  };
}
