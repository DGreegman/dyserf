import a from '../../assets/images/saas.jpg';
import b from '../../assets/images/nft.png';
import c from '../../assets/images/zyrop.png';
import d from '../../assets/images/fire2.png';
import { WorkModel } from '../../models';

export const workData: WorkModel[] = [
  {
    header: 'Saas Application',
    description: 'Saas Application for travel abroad agents.',
    id: 1,
    icon: a,
  },
  {
    header: 'NFT Marketplace',
    description:
      'An NFT Analytic marketplace for Spotting NFT alpha by ranking, rarity, whale tracking, drops calendar and more!',
    id: 2,
    icon: b,
  },
  {
    header: 'Zyrop',
    description:
      'Connecting people and money. Across borders, currencies, and cultures. Move money across Currencies and Countries',
    id: 3,
    icon: c,
  },
  {
    header: 'Bepro',
    description: 'An E-learning plateform for Nigerian student.',
    id: 4,
    icon: d,
  },
];
