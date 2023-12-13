import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

const Header = () => {
  return (
    <header className="flex justify-center w-full md:pt-5 xl:pt-6">
      <div className="max-w-[1257px] justify-center lg:justify-start w-full h-16 flex items-center relative lg:bg-[#141414] lg:border border-[#292929] rounded-md bg-transparent border-0 z-10 lg:mx-2">
        <Link to="/" className="px-5 py-2 lg:absolute">
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <div className="hidden w-full grid-cols-3 gap-6 text-white lg:grid">
          <div className="nav-left"></div>
          <nav className="flex items-center justify-center font-medium gap-7 lg:text-base nav xl:text-lg">
            <Link to="#">Links</Link>
            <Link to="#">Whitepaper</Link>
            <Link to="#">Pitch Deck</Link>
          </nav>
          <div className="flex justify-end pr-3 text-lg font-medium nav-right">
            <button className="px-6 py-2  bg-[#292929] border border-[#525252] hover:bg-[#f6c93b] hover:text-[#292929]">
              Launch App
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-full h-5/6 md:h-3/4">
        <img src={banner} alt="" className="object-cover w-full h-full" />
      </div>
    </header>
  );
};

export default Header;
