import '../style-base.css';
import banner from "../assets/images/bn2.gif";
import imgBanner from "../assets/images/banner-image.png";

const Banner = () => {
    return (
        <section className="w-full relative">
            <img src={banner} alt="" className="object-cover"/>
            <div className="max-w-[1400px] ml-48">
                <p className="overlay-img font-medium text-white"><span>Smart Purse Tech</span>
                    <span className="text-white"> all-in-one</span>
                </p>
                <p className="banner-content text-white w-2/5 "> SPT provides users with intelligent and
                    secure
                    transaction methods. It offers
                    smart AI-powered data analysis tools and serves as a solution for creators
                    through its NFT marketplace.</p>
                <img src={imgBanner} alt="Background" className="background-img xl:pt-80 w-1/4 image-banner"/>
            </div>

        </section>
    );
};

export default Banner;
