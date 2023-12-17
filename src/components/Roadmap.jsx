import '../style-base.css';
import chart from "../assets/images/chart.png"
const Roadmap = () => {
  return (
      <section className="w-full relative ">
          <div id="sc6" className="container mx-auto ">
              <div className="sc6-border py-8">
                  <div className="flex flex-row center">
                      <div className="col-md-7">
                          <div className="sc6-img">
                              <img src={chart} className="logo-img ml-20" alt=""/>
                          </div>
                      </div>
                      <div className="col-md-5 pl-20">
                          <div className="sc6-text">
                              <h2 className="title-h">Tokenomics</h2>
                              <ul>
                                  <li className="coinn coin1">PreSale (10%)</li>
                                  <li className="coinn coin2">Founding Team (15%)</li>
                                  <li className="coinn coin3">Exchange Listings and Investors (35%)</li>
                                  <li className="coinn coin4">Development (15%)</li>
                                  <li className="coinn coin5">Community (25%)</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Roadmap;
