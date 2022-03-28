const navbarItem = "flex items-center leading-normal p-4";
const NavBar = () => {
  return (
    <nav className="w-full bg-white text-black font-medium text-lg z-99 fixed top-0">
      <div id="nav-menu" className="flex ">
        <a className={navbarItem} href="#home">
          Home
        </a>
        <a className={navbarItem} href="#portfolio">
          Portfolio
        </a>
        <a className={navbarItem} href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
