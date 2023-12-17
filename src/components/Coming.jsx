import '../style-base.css';
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.jpeg'
const Coming = () => {
  return (
      <section className="w-full relative">
          <div id="sc3" className="py-8">
              {/* Product 1 */}
              <div className="product1">
                  <div className="container mx-auto">
                      <div className="box-border">
                          <div className="flex flex-col lg:flex-row">
                              <div className="lg:w-2/5 text-center">
                                  <img src={p1} className="logo-img" alt=""/>
                              </div>
                              <div className="lg:w-3/5 lg:pl-8 mt-6 lg:mt-0">
                                  <div className="product-main">
                                      <h3 className="text-2xl font-semibold">SPT Exchange (DEX)</h3>
                                      <div className="mt-4">
                                          <p>
                                              The development of a DEX platform is aimed at providing customers with an
                                              environment that ensures convenient, secure, and transparent exchanges of
                                              various cryptocurrencies at minimal transaction costs. This platform
                                              utilizes blockchain technology and smart contracts to enable direct
                                              peer-to-peer transactions, eliminating intermediaries and fostering a
                                              secure and transparent exchange process. By implementing robust security
                                              measures, maintaining transparency in transactional activities, and
                                              minimizing transaction fees, the platform aims to prioritize customer
                                              safety, trust, and affordability in the cryptocurrency exchange ecosystem.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Product 2 */}
              <div className="product2 py-8">
                  <div className="container mx-auto">
                      <div className="box-border">
                          <div className="flex flex-col lg:flex-row">
                              <div className="lg:w-2/5 text-center">
                                  <img src={p2} className="logo-img" alt=""/>
                              </div>
                              <div className="lg:w-3/5 lg:pl-8 mt-6 lg:mt-0">
                                  <div className="product-main">
                                      <h3 className="text-2xl font-semibold">SPT's NFT Marketplace</h3>
                                      <div className="mt-4">
                                          <p>
                                              The SPT NFT marketplace enables users to creatively craft their own NFTs.
                                              They can trade, buy, and sell, aiming to profit within the SPT NFT
                                              marketplace.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Product 3 */}
              <div className="product3 py-8">
                  <div className="container mx-auto">
                      <div className="box-border">
                          <div className="flex flex-col lg:flex-row">
                              <div className="lg:w-2/5 text-center">
                                  <img src={p3} className="logo-img" alt=""/>
                              </div>
                              <div className="lg:w-3/5 lg:pl-8 mt-6 lg:mt-0">
                                  <div className="product-main">
                                      <h3 className="text-2xl font-semibold">SPT Predictions</h3>
                                      <div className="mt-4">
                                          <p>
                                              SPT Predictions leverages AI technology to develop an application
                                              forecasting prices across various types of digital assets and diverse
                                              stocks. Our platform utilizes artificial intelligence to generate
                                              predictions, offering insights into the potential prices of different
                                              cryptocurrencies and stocks, empowering users to make informed investment
                                              decisions.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Coming;
