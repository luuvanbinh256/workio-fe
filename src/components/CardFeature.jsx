import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg";
import feature3 from "../assets/feature3.svg";
import feature4 from "../assets/feature4.svg";

const CardFeature = () => {
  return (
    <section className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
      <div className="py-8">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="mt-5 mb-2 text-4xl text-[#f6c93b] font-bold">Empowering The Workforce</h2>
          <p className="mt-5 text-3xl text-white">
            Discover seamless job matching, optimised salaries, and profile enhancement with Work X;
            The decentralised job platform fueled by $WORK.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="flex flex-col justify-between items-center w-full p-5 border border-[#f6c93b] rounded-lg bg-[rgba(41,41,41,.45)]">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={feature1} alt="" className="mb-5 w-52" />
              <h3 className="mb-2 text-lg font-medium text-white">Peer-to-Peer Collaboration</h3>
            </div>
            <p className="text-center text-[#e5e5e5] lg:text-xl text-base">
              Work together without any commercial recruitment fees. Workers get the highest
              possible salary & businesses minimize their workforce costs.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center w-full p-5 border border-[#f6c93b] rounded-lg bg-[rgba(41,41,41,.45)]">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={feature2} alt="" className="mb-5 w-52" />
              <h3 className="mb-2 text-lg font-medium text-white">Peer-to-Peer Collaboration</h3>
            </div>
            <p className="text-center text-[#e5e5e5] lg:text-xl text-base">
              Work together without any commercial recruitment fees. Workers get the highest
              possible salary & businesses minimize their workforce costs.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center w-full p-5 border border-[#f6c93b] rounded-lg bg-[rgba(41,41,41,.45)]">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={feature3} alt="" className="mb-5 w-52" />
              <h3 className="mb-2 text-lg font-medium text-white">Decentralised Identity</h3>
            </div>
            <p className="text-center text-[#e5e5e5] lg:text-xl text-base">
              Regain control over your career data and become the boss of your reputation, diplomas,
              certificates, references or peer reviews.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center w-full p-5 border border-[#f6c93b] rounded-lg bg-[rgba(41,41,41,.45)]">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={feature4} alt="" className="mb-5 w-52" />
              <h3 className="mb-2 text-lg font-medium text-white">Verified References</h3>
            </div>
            <p className="text-center text-[#e5e5e5] lg:text-xl text-base">
              Hire employees or freelancers with on-chain references to verify relevant work
              experience and skills for the jobs of today and tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFeature;
