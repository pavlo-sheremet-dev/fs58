// import { useTheme } from 'hooks/useTheme';

import { useTheme } from 'styled-components';
import css from './MyConponent.module.css';

const MyConponent = () => {
  // const { themeTitle } = useTheme();
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.colors.secondary }}
      className={css.myComponent}
    >
      HELLO!!!
    </div>
  );
};

export default MyConponent;
