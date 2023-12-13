import Header from "../components/Header";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.webp";
import discord from "../assets/discord.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#160D23]">
      <Header />
      <section className="max-w-[1350px] relative py-8 mx-auto pt-24 section-hero">
        <div className="max-w-[600px] leading-5">
          <p className="mb-[10px] font-medium text-white">FAIR. SIMPLE. EFFICIENT</p>
          <h1 className="text-[#f6c93b] text-6xl font-bold">Welcome to the Internet of Jobs!</h1>
          <p className="mt-5 text-2xl text-white">
            Empowering Decentralized
            <br />
            AI Job Matching.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-8 text-white">
          <a href="#" target="_blank" className="flex items-center h-12 text-sm">
            <img src={twitter} alt="" className="h-5" />
            <span>TWITTER / X</span>
          </a>
          <a href="#" target="_blank" className="flex items-center h-12 text-sm">
            <img src={telegram} alt="" className="h-5" />
            <span>TELEGRAM</span>
          </a>
          <a href="#" target="_blank" className="flex items-center h-12 text-sm">
            <img src={discord} alt="" className="h-5" />
            <span>DISCORD</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
