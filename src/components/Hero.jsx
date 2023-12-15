import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.webp";
import discord from "../assets/discord.png";

const Hero = () => {
  return (
    <section className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto pt-24 lg:pt-[150px]">
      <div className="max-w-[600px] leading-5">
        <p className="mb-[10px] font-medium text-white text-sm lg:text-base">
          FAIR. SIMPLE. EFFICIENT
        </p>
        <h1 className="text-[#f6c93b] text-[32px] md:text-6xl font-bold !leading-tight">
          Welcome to the Internet of Jobs!
        </h1>
        <p className="mt-5 text-xl text-white md:text-2xl">
          Empowering Decentralized
          <br />
          AI Job Matching.
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-8 text-white md:items-center md:flex-row gap-y-4">
        <a href="#" target="_blank">
          <div className="flex items-center h-12 gap-2 p-4 text-sm transition rounded-md bg-[#292929] border border-[#525252] hover:bg-[#f6c93b] hover:text-black">
            <img src={twitter} alt="" className="h-4" />
            <span className="md:text-xl">TWITTER / X</span>
          </div>
        </a>
        <a href="#" target="_blank">
          <div className="flex items-center h-12 gap-2 p-4 text-sm transition rounded-md bg-[#292929] border border-[#525252] hover:bg-[#f6c93b] hover:text-black">
            <img src={telegram} alt="" className="h-6" />
            <span className="md:text-xl">TELEGRAM</span>
          </div>
        </a>
        <a href="#" target="_blank">
          <div className="flex items-center h-12 gap-2 p-4 text-sm transition rounded-md bg-[#292929] border border-[#525252] hover:bg-[#f6c93b] hover:text-black">
            <img src={discord} alt="" className="h-4" />
            <span className="md:text-xl">DISCORD</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
