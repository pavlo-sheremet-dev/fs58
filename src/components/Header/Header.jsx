import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header>
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 400,
          margin: '0 auto',
        }}
      >
        <div>LOGO</div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
