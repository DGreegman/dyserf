import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import service5 from '../../assets/images/service5.png';
import service6 from '../../assets/images/service6.png';
import { ServiceModel } from '../../models';
import { sharedImg } from './shared';

export const servicesArray: ServiceModel[] = [
  {
    icon: service1,
    header: 'Product Designs UI/UX',
    description:
      'Innovative team of designers that solve problems through data driven processes that translate business objectives into solutions. ',
  },
  {
    icon: service2,
    header: 'Research/Analysis',
    description:
      'We solve problems through data driven research. We employ both quantitative and qualitative research.',
  },
  {
    icon: service3,
    header: 'Software/Application Development',
    description:
      'Team of expert developers with proven years of excellent services. Converting visual designs into interactive software applications or web. ',
  },
  {
    icon: sharedImg,
    header: 'Business Development',
    description:
      'From startups in need of MVP to large corporations, institutions, and government in need of technical firepower, we are here for you. ',
  },
  {
    icon: service5,
    header: 'Smart Contract Dev.',
    description:
      'Expert dev team, focused on building solution in the blockchain ecosystem.',
  },
  {
    icon: service6,
    header: 'Brand Identity Design',
    description:
      'We solve problems through data driven research. We employ both quantitative and qualitative research.',
  },
];
