import { useLocation } from "react-router-dom";

import headerLogo from "../assets/headerLogo.png";
import { navigation } from "../constants";

const Header = () => {
  const pathname = useLocation();

  return (
    <div className="fixed top-0 z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={headerLogo} width={50} height={20} alt="Header logo" />
        </a>
        <nav className="fixed bottom-0 left-0 top-[5rem] hidden bg-n-8 ring-0 lg:static lg:mx-auto lg:flex lg:bg-transparent">
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`${item.onlyMobile ? "lg:hidden" : ""} relative block p-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
