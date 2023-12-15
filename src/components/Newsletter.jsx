import check from "../assets/check_b.svg";

const Newsletter = () => {
  return (
    <section className="2xl:max-w-[1600px] xl:max-w-[1350px] max-w-[1170px] relative py-8 px-4 mx-auto">
      <div className="px-6 py-10 lg:px-16 newsletter lg:py-28">
        <div className="grid gap-5 lg:gap-40 lg:grid-cols-2">
          <h2 className="mt-5 mb-2 text-3xl font-bold text-white max-w-[625px]">
            Subscribe to our weekly email newsletter!
          </h2>
          <div className="">
            <div className="relative mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 h-[76px] border-none outline-none rounded-md w-full"
              />
              <button className="lg:absolute w-full lg:max-w-fit top-3 bottom-3 right-3 text-white bg-[#292929] border border-[#525252] py-2 px-6 rounded-md text-lg lg:text-2xl font-bold transition hover:text-black hover:bg-[#f6c93b]">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-4">
              <img src={check} alt="" />
              <p className="text-xl font-medium text-white">
                Join the 10,000 users in our newsletter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
