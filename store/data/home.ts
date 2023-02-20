import bulb from '../../assets/images/bulb.png';
import design from '../../assets/images/design.png';
import deve from '../../assets/images/deve.png';
import vanlogo from '../../assets/images/vanlogo.png';
import voblogo from '../../assets/images/voblogo.png';
import caspadelogo from '../../assets/images/caspadelogo.png';
import peacelogo from '../../assets/images/peacelogo.png';
import belogo from '../../assets/images/belogo.png';
import Tlogo from '../../assets/images/Tlogo.png';
import mobileTlogo from '../../assets/images/mobileTlogo.png';
import { nanoid } from 'nanoid';

export const workItems = [
  'Blockchain',
  'Metaverse',
  'Saas/B2B',
  'Fintech',
  'Real Estate',
  'Education',
];

export const heroItems1 = [vanlogo, voblogo, caspadelogo];
export const heroItems2 = [belogo, peacelogo];
export const heroItems3 = mobileTlogo;

export const heroItems = [...heroItems1, ...heroItems2, Tlogo];


export const offers = [
  {
    icon: bulb,
    cardHeader: 'Strategy',
    listItem: [
      'Advisory insight',
      'Process automation',
      'User research insight',
      'Project development plan',
    ],
    id: nanoid(8),
  },
  {
    icon: design,
    cardHeader: 'Design',
    listItem: [
      'User flow chart',
      'Brand Identity design',
      'Interaction design',
      'Wireframing',
      'Prototyping',
      'Usability testing',
    ],
    id: nanoid(8),
  },
  {
    icon: deve,
    cardHeader: 'Project development',
    listItem: ['Front-end development', 'Website development'],
    id: nanoid(8),
  },
];
