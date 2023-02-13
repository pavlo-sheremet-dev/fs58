import { ThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const { switchTheme, themeTitle } = useContext(ThemeContext);

  return { switchTheme, themeTitle };
};
