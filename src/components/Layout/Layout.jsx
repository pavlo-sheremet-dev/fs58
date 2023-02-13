import { useState } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { colors, colorsKeys } from 'styles/colors';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
// import { Global } from '@emotion/react';
// import { styles } from 'styles/GlobalStyles';
import { GlobalStyle } from 'styles/GlobalStyles';

const CustomThemeProvider = ({ children }) => {
  const [themeTitle, setThemeTitle] = useState(colorsKeys.LIGHT);

  const switchTheme = () => {
    setThemeTitle(prev =>
      prev === colorsKeys.LIGHT ? colorsKeys.DARK : colorsKeys.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ themeTitle, switchTheme }}>
      <ThemeProvider theme={{ ...theme, ...colors[themeTitle] }}>
        <GlobalStyle />
        {/* <Global styles={styles} />
        <Global
          styles={{
            body: {
              backgroundColor: colors[themeTitle].colors.mainBackground,
              color: colors[themeTitle].colors.text,
            },
          }}
        /> */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
