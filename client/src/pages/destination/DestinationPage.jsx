import React from "react";
import Testimonials from "../../components/_home/Testimonials";

const DestinationPage = () => {
  return (
    <>
      <div
        class="banner-header section-padding valign bg-img bg-fixed back-position-center"
        data-overlay-dark="6"
        data-background="img/slider/15.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 caption mt-90">
              <h5>Choose your destination</h5>
              <h1>
                Popular <span>Destination</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="destination1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/destination/maldives1.jpg" alt="" />
                </div>
                <div className="con">
                  <h5>
                    <a href="tours3.html">
                      <i className="ti-location-pin"></i> Maldives
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>4+ Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a href="tours3.html">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/destination/canada1.jpg" alt="" />{" "}
                </div>
                <div className="con">
                  <h5>
                    <a href="tours3.html">
                      <i className="ti-location-pin"></i> Canada
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>3+ Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a href="tours3.html">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/destination/italy1.jpg" alt="" />
                </div>
                <div className="con">
                  <h5>
                    <a href="tours3.html">
                      <i className="ti-location-pin"></i> Italy
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>7+ Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a href="tours3.html">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/destination/greece1.jpg" alt="" />
                </div>
                <div className="con">
                  <h5>
                    <a href="tours3.html">
                      <i className="ti-location-pin"></i> Greece
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>6+ Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a href="tours3.html">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/destination/france1.jpg" alt="" />
                </div>
                <div className="con">
                  <h5>
                    <a href="tours3.html">
                      <i className="ti-location-pin"></i> France
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>10+ Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a href="tours3.html">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/destination/dubai1.jpg" alt="" />
                </div>
                <div className="con">
                  <h5>
                    <a href="tours3.html">
                      <i className="ti-location-pin"></i> Dubai
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-8">
                      <p>7+ Tour Packages</p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a href="tours3.html">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default DestinationPage;
