import investing from "../assets/investing.webp";
import yahoo from "../assets/yahoo.png";
import forbes from "../assets/forbes.png";
import bitcoin from "../assets/bitcoin.png";
import business from "../assets/business.png";

const Logo = () => {
  return (
    <section className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
      <div className="py-8">
        <h2 className="text-center text-[#f6c93b] text-3xl font-bold mt-5 mb-2">
          We&apos;re in the news!
        </h2>
        <div className="flex justify-center mx-auto mt-4 max-w-7xl gap-x-10 gap-y-12">
          <img src={investing} alt="" />
          <img src={yahoo} alt="" />
          <img src={forbes} alt="" />
          <img src={bitcoin} alt="" />
          <img src={business} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Logo;
