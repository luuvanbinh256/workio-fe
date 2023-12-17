import Header from "../components/Header";
import Banner from "../components/Banner.jsx";
import Benefits from "../components/Benefits.jsx";
import Buying from "../components/Buying.jsx";
import Coming from "../components/Coming.jsx";
import Roadmap from "../components/Roadmap.jsx";
import Teams from "../components/Teams.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";


const Home = () => {
    return (
        <div className="w-full min-h-screen ">
            <Header/>
            <Banner/>
            <Benefits></Benefits>
            <Buying></Buying>
            <Coming></Coming>
            <Roadmap></Roadmap>
            <Teams></Teams>
            <FAQ></FAQ>
            <Footer></Footer>

        </div>
    );
};

export default Home;
