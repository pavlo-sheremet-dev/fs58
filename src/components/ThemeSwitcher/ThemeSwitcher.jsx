import { useTheme } from 'hooks/useTheme';

const ThemeSwitcher = () => {
  const { switchTheme, themeTitle } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={switchTheme}
        style={{
          padding: 10,
          cursor: 'pointer',
          backgroundColor: 'gray',
          borderRadius: 10,
          border: 'none',
          color: 'inherit',
        }}
      >
        {themeTitle}
      </button>
    </>
  );
};

export default ThemeSwitcher;
