import { NavModel } from '../../models';
import { DyserfRoutes } from '../../utils';

export const navLinks: NavModel[] = [
  {
    path: DyserfRoutes.about,
    title: 'About us',
  },
  {
    path: DyserfRoutes.works,
    title: 'Our works',
  },

  {
    path: DyserfRoutes.blog,
    title: 'Blog',
    isExternal: true,
  },
];
