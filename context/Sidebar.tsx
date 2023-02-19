import { createContext, useContext, useState } from 'react';
import { ChildProps } from '../models';

interface SideBarProps {
  show: boolean;
  // Instead of setting state directly. I wrote a custom function to handle that
  updateShow: (value: boolean) => void;
}

export const SideBarContext = createContext<SideBarProps>({} as SideBarProps);

const ShowSideNavContext = ({ children }: ChildProps) => {
  const [show, setShow] = useState(false);

  const updateShow = (show: boolean) => {
    setShow(show);
  };

  return (
    <SideBarContext.Provider value={{ show, updateShow }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default ShowSideNavContext;

// Instead of exposing the context. I wrote a custom hook to handle that
export const useSideBar = () => {
  const { show, updateShow } = useContext(SideBarContext);

  return { show, updateShow };
};
