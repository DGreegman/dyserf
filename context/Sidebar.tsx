import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ChildProps } from '../models/childrenProps';

interface SideBarProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const SideBarContext = createContext<SideBarProps | null>(null);

const ShowSideNavContext = ({ children }: ChildProps) => {
  const [show, setShow] = useState(false);

  return (
    <SideBarContext.Provider value={{ show, setShow }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default ShowSideNavContext;
