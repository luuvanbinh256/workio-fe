import CardFeature from "../components/CardFeature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import Newsletter from "../components/Newsletter";
import PreSale from "../components/PreSale";
import UniqueFeature from "../components/UniqueFeature";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#160D23]">
      <Header />
      <Hero />
      <PreSale />
      <CardFeature />
      <UniqueFeature />
      <Logo />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
