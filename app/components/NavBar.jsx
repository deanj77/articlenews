import MainMenu from "./MainMenu";

const NavBar = () => {
  return (
    <ul className="flex justify-around">
      <li>
        <MainMenu />
      </li>
      <li>logo</li>
    </ul>
  );
};

export default NavBar;
