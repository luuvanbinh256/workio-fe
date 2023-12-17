import '../style-base.css';
import support from "../assets/images/support.png"
const FAQ = () => {
  return (
      <section className="w-full relative ">
          <div id="sc8" className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1">
                      <h2 className="title-h">Frequently Asked Questions</h2>
                      <ul>
                          <li>
                              <div className="item-qa">
                                  <a href="#" className="">What is SPT system?</a>
                                  <div className="item-qa-text">SPT is a smart e-wallet system built on the Binance
                                      Smart Chain platform to meet users' transaction needs in a safe and transparent
                                      way.
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="item-qa">
                                  <a href="#" className="">Benefits of trading with SPT?</a>
                                  <div className="item-qa-text">Using SPT to pay, users will receive many benefits such
                                      as: Safety and security when making transactions, high percentage discounts when
                                      using applications of the SPT system
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="item-qa">
                                  <a href="#" className="">When will SPT be released and where can I buy it?</a>
                                  <div className="item-qa-text">SPT will be released in December 2023 and users can buy
                                      it at martpursetech.com
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="item-qa">
                                  <a href="#" className="">Products in the SPT ecosystem?</a>
                                  <div className="item-qa-text">DEX exchange, Marketplace NFT, SPT Predictions tool...
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <div className="support-img">
                          <img src={support} className="support" alt="support"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default FAQ;
