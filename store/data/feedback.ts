import vanlogo from '../../assets/images/vanlogo.png';
import voblogo from '../../assets/images/voblogo.png';
import peacelogo from '../../assets/images/peacelogo.png';
import belogo from '../../assets/images/belogo.png';
import { nanoid } from 'nanoid';
import { FeedbackModel } from '../../models';

export const feedBackItems: FeedbackModel[] = [
  {
    id: nanoid(),
    description:
      'Dyserf don’t just get your projects done, they work as part of your team to improve your general workflow. It was a great experience we had with dyserf working on our project.',
    image: vanlogo,
    name: 'Vancube',
  },
  {
    id: nanoid(),
    description:
      'Dyserf don’t just get your projects done, they work as part of your team to improve your general workflow. It was a great experience we had with dyserf working on our project.',
    image: peacelogo,
    name: 'Peace',
  },
  {
    id: nanoid(),
    description:
      'Dyserf don’t just get your projects done, they work as part of your team to improve your general workflow. It was a great experience we had with dyserf working on our project.',
    image: voblogo,
    name: 'Vobb',
  },
  {
    id: nanoid(),
    description:
      'Dyserf don’t just get your projects done, they work as part of your team to improve your general workflow. It was a great experience we had with dyserf working on our project.',
    image: belogo,
    name: 'BePro',
  },
];
