import team1 from '../../assets/images/team1.png';
import team2 from '../../assets/images/team2.png';
import team5 from '../../assets/images/team5.png';
import ifeanyi from '../../assets/images/ifeanyi.png';
import team7 from '../../assets/images/team7.png';
import { TeamDataModel } from '../../models';
import { DyserfRoutes } from '../../utils';

export const teams: TeamDataModel[] = [
  {
    id: 1,
    icon: team5,
    name: 'Evans',
    position: 'Lead Content Strategist',
    social: {
      twitter: DyserfRoutes.evansTwitter,
      linkedin: DyserfRoutes.evansLinkedin,
    },
  },
  {
    id: 2,
    icon: ifeanyi,
    name: 'James',
    position: 'Front end Developer',
    social: {
      twitter: DyserfRoutes.jamesTwitter,
      linkedin: DyserfRoutes.jamesLinkedin,
    },
  },

  {
    id: 3,
    icon: team1,
    name: 'Emerie',
    position: 'Lead Product Designer',
    social: {
      twitter: DyserfRoutes.emerieTwitter,
      linkedin: DyserfRoutes.emerieLinkedin,
    },
  },
  {
    id: 4,
    icon: team7,
    name: 'Nenye',
    position: 'Lead Product Manager',
    social: {
      twitter: DyserfRoutes.nenyeTwitter,
      linkedin: DyserfRoutes.nenyeLinkedin,
    },
  },
  {
    id: 5,
    icon: team2,
    name: 'Gracious',
    position: 'Lead Product Developer',
    social: {
      twitter: DyserfRoutes.graciousTwitter,
      linkedin: DyserfRoutes.graciousLinkedin,
    },
  },
];
