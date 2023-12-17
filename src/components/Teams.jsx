import '../style-base.css';
import team1 from "../assets/images/team1.jpeg"
import team2 from "../assets/images/team2.jpeg"
import team3 from "../assets/images/team3.jpeg"
const Teams = () => {
  return (
      <section className="w-full relative ">
          <div id="sc4" className="container mx-auto">
              <h2 className="title-h">Our Team</h2>
              <div className="box-team">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <li className="flex flex-col items-center justify-center">
                          <div className="item-team">
                              <div className="item-team-img">
                                  <img src={team1} className="logo-img ml-28" alt=""/>
                              </div>
                              <h3>Mihai Ciutureanu</h3>
                              <span>CEO</span>
                              <div className="item-team-text">
                                  Mihai, a proficient CEO, brings forth a wealth of experience in the realm of digital
                                  marketing. Leading a digital agency that partnered with esteemed brands, he has
                                  developed a profound comprehension of the challenges and requisites encountered by
                                  modern businesses within the digital sphere.
                              </div>
                          </div>
                      </li>
                      <li className="flex flex-col items-center justify-center">
                          <div className="item-team">
                              <div className="item-team-img">
                                  <img src={team2} className="logo-img ml-28" alt=""/>
                              </div>
                              <h3>Anita Nitulescu</h3>
                              <span>Marketing Manager</span>
                              <div className="item-team-text">
                                  Anita, a skilled video director, possesses an ardent storytelling flair and a robust
                                  marketing background. Having collaborated with esteemed brands such as Emporio Armani
                                  and BMW, she boasts a demonstrable history of producing top-tier, influential content.
                              </div>
                          </div>
                      </li>
                      <li className="flex flex-col items-center justify-center">
                          <div className="item-team">
                              <div className="item-team-img">
                                  <img src={team3} className="logo-img ml-28" alt=""/>
                              </div>
                              <h3>Dan Larimer</h3>
                              <span>Blockchain Developer</span>
                              <div className="item-team-text">
                                  Through his roles at EOS and Steemit, Dan Larimer contributed significantly to the
                                  development of high-throughput blockchain platforms.
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
  );
};

export default Teams;
