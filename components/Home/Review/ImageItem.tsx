import Image, { StaticImageData } from 'next/image';

interface Props {
  icon: StaticImageData | string;
}

const ImageItem = ({ icon }: Props) => {
  return <Image src={icon} width='19px' height='13px' alt='Quote' priority />;
};

export default ImageItem;
