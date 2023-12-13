import { Link } from "react-router-dom";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#141414] w-full">
      <div className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
        <div className="grid py-16 footer">
          <div className="">
            <img src={logo} alt="" className="mb-4 w-44" />
            <p className="text-[#6e7191] text-xl">Copyright © 2023 Work X | All Rights Reserved</p>
          </div>
          <div className="">
            <p className="mb-10 text-2xl font-bold text-white">Products</p>
            <Link to="#" className="block text-lg text-[#9699b2] mb-4">
              Private Beta
            </Link>
            <Link to="#" className="block text-lg text-[#9699b2] mb-4">
              Whitepaper
            </Link>
          </div>
          <div className="">
            <p className="mb-10 text-2xl font-bold text-white">Company</p>
            <Link to="#" className="block text-lg text-[#9699b2] mb-4">
              About
            </Link>
            <Link to="#" className="block text-lg text-[#9699b2] mb-4">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
