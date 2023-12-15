import gif from "../assets/feature.gif";
import check from "../assets/check.svg";
import image from "../assets/presale.png";

const UniqueFeature = () => {
  return (
    <section className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
      <div className="lg:py-8">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <p className="mt-5 text-2xl text-white lg:text-3xl">
            Explore how we instantly build better job & talent profiles to bring people together.
          </p>
          <h2 className="mt-5 mb-2 text-2xl font-bold text-[#f6c93b] lg:text-4xl">
            Unique Features
          </h2>
        </div>
      </div>
      <div className="grid items-start gap-6 mb-10 lg:grid-cols-2 lg:mb-52">
        <div className="text-white">
          <p className="my-3 text-4xl font-bold text-center text-gradient lg:text-start">
            AI Assistant
          </p>
          <p className="mx-auto mb-8 text-xl font-bold text-center lg:mx-0 lg:text-start">
            Post a job or get education suggestions generated with our GPT4 model in minutes!
          </p>
          <div className="">
            <div className="flex items-center gap-3 mb-4 text-[#9699b2]">
              <img src={check} alt="check" />
              <p className="text-xl">
                Utilizing the GPT4 model from OpenAI that is trained with the latest HR-trends from
                major publishers in a large variety of industries
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4 text-[#9699b2]">
              <img src={check} alt="check" />
              <p className="text-xl">
                Enrich your talent or company profile to personalize AI suggestions
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4 text-[#9699b2] max-w-md">
              <img src={check} alt="check" />
              <p className="text-xl">
                Instantly get better job postings relevant for the jobs of the future
              </p>
            </div>
          </div>
        </div>
        <img src={gif} alt="" className="rounded-md" />
      </div>
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="">
          <p className="my-3 text-4xl font-bold text-center text-gradient lg:text-start">
            Go Peer-to-Peer
          </p>
          <h3 className="mx-auto lg:mx-0 max-w-[365px] font-semibold leading-tight text-2xl text-center lg:text-start lg:text-3xl text-white mb-8">
            Post your Talent or Job directly on Work X
          </h3>
          <div className="">
            <div className="flex items-center gap-3 mb-4 text-[#9699b2]">
              <img src={check} alt="check" />
              <p className="text-xl">Get matched with the best talents or job postings</p>
            </div>
            <div className="flex items-center gap-3 mb-4 text-[#9699b2] max-w-[635px]">
              <img src={check} alt="check" />
              <p className="text-xl">
                Showcase your verified skills and company details, increasing your chances of
                finding your dream job or candidate
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4 text-[#9699b2]">
              <img src={check} alt="check" />
              <p className="text-xl">
                Start working together without any vendor lock or commercial fees!
              </p>
            </div>
          </div>
        </div>
        <img src={image} alt="" className="w-full max-w-2xl" />
      </div>
    </section>
  );
};

export default UniqueFeature;
