import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color='green' title='Add' />
    </header>
  );
};

export default Header;
