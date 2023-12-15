import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#141414] w-full">
      <div className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 py-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="" className="mb-4 w-44" />
            <p className="text-[#6e7191] text-xl">Copyright © 2023 Work X | All Rights Reserved</p>
          </div>
          <div className="grid justify-between grid-cols-2 gap-20 lg:max-w-fit">
            <div>
              <p className="mb-4 font-bold text-white lg:mb-10 lg:text-2xl">Products</p>
              <Link to="#" className="block lg:text-lg text-[#9699b2] mb-2 lg:mb-4">
                Private Beta
              </Link>
              <Link to="#" className="block lg:text-lg text-[#9699b2] mb-2 lg:mb-4">
                Whitepaper
              </Link>
            </div>
            <div>
              <p className="mb-4 font-bold text-white lg:mb-10 lg:text-2xl">Company</p>
              <Link to="#" className="block lg:text-lg text-[#9699b2] mb-2 lg:mb-4">
                About
              </Link>
              <Link to="#" className="block lg:text-lg text-[#9699b2] mb-2 lg:mb-4">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
