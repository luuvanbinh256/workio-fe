import '../style-base.css';
import banner from "../assets/images/bn2.gif";
import imgBanner from "../assets/images/banner-image.png";

const Benefits = () => {
  return (
      <section className="w-full relative">
          <div id="cs2" className="py-8">
              <div className="container mx-auto">
                  <h2 className="title-h text-center">The benefits of using SPT</h2>
                  <div className="box-about">
                      <ul>
                          <li className="mb-8">
                              <div className="item-about flex">
                                  <div className="item-about-stt mr-4">
                                      <span className="about-stt-line"></span>1
                                  </div>
                                  <div className="item-about-text">
                                      <h3 className="text-xl font-semibold mb-2">High Security Measures</h3>
                                      <div>
                                          The SPT wallet may offer robust security features such as strong encryption
                                          and additional protective mechanisms, ensuring users' peace of mind regarding
                                          the storage and management of their SPT tokens.
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="mb-8">
                              <div className="item-about flex">
                                  <div className="item-about-stt mr-4">
                                      <span className="about-stt-line"></span>2
                                  </div>
                                  <div className="item-about-text">
                                      <h3 className="text-xl font-semibold mb-2">Convenience and Easy Access</h3>
                                      <div>
                                          The SPT wallet might provide easy access and usability across different
                                          devices, such as mobile phones or computers, offering convenience to users.
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="mb-8">
                              <div className="item-about flex">
                                  <div className="item-about-stt mr-4">
                                      <span className="about-stt-line"></span>3
                                  </div>
                                  <div className="item-about-text">
                                      <h3 className="text-xl font-semibold mb-2">Multi-Currency Management</h3>
                                      <div>
                                          SPT supports multiple cryptocurrencies, allowing users to manage not only SPT
                                          but also various other cryptocurrencies within the same platform.
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="item-about flex">
                                  <div className="item-about-stt mr-4">
                                      <span className="about-stt-line"></span>4
                                  </div>
                                  <div className="item-about-text">
                                      <h3 className="text-xl font-semibold mb-2">Integration with the Ecosystem</h3>
                                      <div>
                                          Using SPT within the ecosystem enables users to easily connect diversely with
                                          various applications within the ecosystem quickly and cost-effectively. Users
                                          have the privilege to utilize transaction-supporting applications and earn
                                          profits from transactions within the SPT ecosystem.
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Benefits;
