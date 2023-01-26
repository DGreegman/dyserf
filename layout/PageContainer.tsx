import { ReactNode } from 'react';
import { MetaTags } from '../components';

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

const PageContainer = ({ title, description, children }: Props) => {
  return (
    <>
      <MetaTags title={title} description={description} />

      <>{children}</>
    </>
  );
};

export default PageContainer;
