import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ChildProps } from '../models/childrenProps';

interface sideBarProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const SideBarContext = createContext<sideBarProps | null>(null);

const ShowSideNav = ({ children }: ChildProps) => {
  const [show, setShow] = useState(false);

  return (
    <SideBarContext.Provider value={{ show, setShow }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default ShowSideNav;
