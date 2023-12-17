import '../style-base.css';
import t1 from '../assets/images/t1.png'
const Buying = () => {
  return (
      <section className="w-full relative">
          <div id="sc8" className="bg-gray-200">
              <div className="container mx-auto py-8">
                  <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-2/5">
                          <div className="presale-img">
                              <img src={t1} className="support" alt="support"/>
                          </div>
                      </div>
                      <div className="lg:w-3/5 mt-6 lg:mt-0 lg:pl-8">
                          <div className="sc8-text">
                              <h2 className="text-3xl font-semibold">Buy in Presale</h2>
                              <div className="mt-4">
                                  <p>
                                      When purchasing SPT in this previous sale, you will receive the lowest price
                                      before it is publicly announced.
                                      The price of SPT will increase to <span className="font-semibold">$0.1 on February 16, 2024</span>,
                                      on Mexc, Pancakeswap, and Bitmart exchanges.
                                  </p>
                              </div>
                              <a href="#header"
                                 className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                  Buy SPT tokens now
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Buying;
