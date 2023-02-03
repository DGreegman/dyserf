import bulb from '../../assets/images/bulb.png';
import design from '../../assets/images/design.png';
import deve from '../../assets/images/deve.png';
import { nanoid } from 'nanoid';

export const workItems = [
  'Blockchain',
  'Metaverse',
  'Saas/B2B',
  'Fintech',
  'Real Estate',
  'Education',
];

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
