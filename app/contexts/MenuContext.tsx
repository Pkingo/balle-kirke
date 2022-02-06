import { createContext, useContext } from "react";

type Page = {
  title: string;
  slug: string;
};

export type MenuContextProps = {
  about: Page[];
};

const MenuContext = createContext<MenuContextProps>({ about: [] });

export const MenuProvider: React.FC<MenuContextProps> = ({
  children,
  ...rest
}) => {
  return <MenuContext.Provider value={rest}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const state = useContext(MenuContext);
  if (!state) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }

  return state;
};
