import image from "../assets/presale.png";
import check from "../assets/check.svg";

const PreSale = () => {
  return (
    <section className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
      <div className="grid items-center gap-6 py-8 md:grid-cols-2">
        <div>
          <div className="mb-5">
            <h2 className="text-[#f6c93b] mt-5 mb-2 text-4xl font-bold leading-9">
              Work X Public Beta
            </h2>
            <h2 className="my-3 text-4xl font-bold text-gradient">Live now!</h2>
          </div>
          <div className="text-[#9699b2] text-xl">
            <div className="flex items-center gap-4 mb-4">
              <img src={check} alt="" />
              <p>Collaborate without any commercial fees</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src={check} alt="" />
              <p>Post jobs and use the AI assistant temporarily for free</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img src={check} alt="" />
              <p>Hire talents with verified skills & work experience</p>
            </div>
          </div>
        </div>
        <img src={image} alt="pre-sale" />
      </div>
      <a href="#" target="_blank">
        <span className="max-w-fit block p-4 text-xl text-white bg-[#292929] border border-[#525252] rounded-md transition hover:bg-[#f6c93b] hover:text-black">
          Register now on Work X
        </span>
      </a>
    </section>
  );
};

export default PreSale;
