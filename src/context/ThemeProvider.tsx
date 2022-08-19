import { createContext, useMemo, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import { initialTheme } from '@/utilities';

interface IThemeProviderProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext({} as IThemeProviderProps);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(initialTheme);

  const values = useMemo(() => ({ theme, setTheme }), []);

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
