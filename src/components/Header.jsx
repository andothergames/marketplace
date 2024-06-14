import cartLogo from "/favicon.png";

const Header = () => {
  return (
    <header>
        <img src={cartLogo} className="logo" alt="Shopping cart logo" />
      <h1>NC Marketplace</h1>
    </header>
  );
};

export default Header;
