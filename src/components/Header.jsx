import {Link} from "react-router-dom";
import logo from "../assets/images/spt.png";
import '../style-custom.css';

const Header = () => {
    return (
        <header className="justify-center w-full md:pt-10 md:pb-10">
            <div className="max-w-[1400px] h-16 justify-center lg:justify-start w-full h-16 flex items-center relative rounded-md bg-transparent">
                <Link to="/" className="py-2 lg:absolute ml-48">
                    <img src={logo} alt="logo" className="w-2/4"/>
                </Link>
                <div className="hidden w-full grid-cols-2 gap-6 text-white lg:grid ">
                    <div className="nav-left"></div>
                    <nav
                        className="flex items-center justify-center font-medium gap-7 lg:text-base nav xl:text-lg 2xl:text-xl ">
                        <Link to="#">Home</Link>
                        <Link to="#">Smart Contract</Link>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;
