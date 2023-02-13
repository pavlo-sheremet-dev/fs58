import { createContext } from 'react';
import { colorsKeys } from 'styles/colors';

export const ThemeContext = createContext({
  themeTitle: colorsKeys.LIGHT,
  switchTheme: () => {},
});
