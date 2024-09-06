import headerLogo from "../assets/header_logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={headerLogo} width={190} height={40} alt="Header logo" />
        </a>
        <nav className="fixed bottom-0 left-0 top-[5rem] hidden bg-n-8 ring-0 lg:static lg:mx-auto lg:flex lg:bg-transparent">
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row"></div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
