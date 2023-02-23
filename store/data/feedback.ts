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
      'Whenever we call for assistance, Dyserf has proven to be an exceptionally dependable technology partner, consistently meeting all of our needs. Their attentiveness to detail is outstanding, and their responsiveness is admirable',
    image: peacelogo,
    name: 'Peace',
  },
  {
    id: nanoid(),
    description: `Our experience working with Dyserf to customize our platform has been both professional and enjoyable. The team has demonstrated an excellent ability to comprehend our users' goals and deliver an experience that sets us apart.
`,
    image: voblogo,
    name: 'Vobb',
  },
  {
    id: nanoid(),
    description: `Our experience working with Dyserf was exceptional. They took the time to truly understand our business needs and goals, and were able to translate those into a beautifully designed, user-friendly product. The team was responsive, communicative, and collaborative throughout the entire process, and we were blown away by the final result. Our users have provided overwhelmingly positive feedback on the new design, and we've seen an increase in engagement and conversions since its launch. We highly recommend Dyserf and look forward to working with them on future projects.`,
    image: belogo,
    name: 'BePro',
  },
];
