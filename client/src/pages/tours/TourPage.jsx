import React from "react";
import Testimonials from "../../components/_home/Testimonials";

const TourPage = () => {
  return (
    <>
      <div
        class="banner-header section-padding valign bg-img bg-fixed back-position-center"
        data-overlay-dark="6"
        data-background="img/slider/2.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 caption mt-90">
              <h5>Choose your tour</h5>
              <h1>
                Most Popular <span>Tours</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section
        className="tours1 section-padding bg-lightnav"
        data-scroll-index="1"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">
                <span>Choose your place</span>
              </div>
              <div className="section-title">
                Popular <span>Tours</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/tours/maldives1.jpg" alt="" />{" "}
                </div>{" "}
                <span className="category">
                  <a href="#0">$2.500</a>
                </span>
                <div className="con">
                  <div className="rating">
                    {" "}
                    <i className="star active"></i>{" "}
                    <i className="star active"></i>{" "}
                    <i className="star active"></i>{" "}
                    <i className="star active"></i> <i className="star"></i>
                    <div className="reviews-count">(2 Reviews)</div>
                  </div>
                  <h5>
                    <a href="tour-details.html">Maldives Tour</a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-12">
                      <ul>
                        <li>
                          <i className="ti-time"></i> 10 Days
                        </li>
                        <li>
                          <i className="ti-user"></i> 12+
                        </li>
                        <li>
                          <i className="ti-location-pin"></i> Maldives
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/tours/italy1.jpg" alt="" />
                </div>{" "}
                <span className="category">
                  <a href="#0">$1.300</a>
                </span>
                <div className="con">
                  <h5>
                    <a href="tour-details.html">Italy Tour</a>{" "}
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-12">
                      <ul>
                        <li>
                          <i className="ti-time"></i> 6 Days
                        </li>
                        <li>
                          <i className="ti-user"></i> 10+
                        </li>
                        <li>
                          <i className="ti-location-pin"></i> Italy
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/tours/france1.jpg" alt="" />
                </div>{" "}
                <span className="category">
                  <a href="#0">$400</a>
                </span>
                <div className="con">
                  <h5>
                    <a href="tour-details.html">France Tour</a>{" "}
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-12">
                      <ul>
                        <li>
                          <i className="ti-time"></i> 10 Days
                        </li>
                        <li>
                          <i className="ti-user"></i> 6+
                        </li>
                        <li>
                          <i className="ti-location-pin"></i> France
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/tours/greece1.jpg" alt="" />
                </div>{" "}
                <span className="category">
                  <a href="#">$500</a>
                </span>
                <div className="con">
                  <h5>
                    <a href="tour-details.html">Greece Tour</a>{" "}
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-12">
                      <ul>
                        <li>
                          <i className="ti-time"></i> 10 Days
                        </li>
                        <li>
                          <i className="ti-user"></i> 12+
                        </li>
                        <li>
                          <i className="ti-location-pin"></i> Greece
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="img/tours/canada1.jpg" alt="" />
                </div>{" "}
                <span className="category">
                  <a href="#0">$300</a>
                </span>
                <div className="con">
                  <h5>
                    <a href="tour-details.html">Canada Tour</a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-12">
                      <ul>
                        <li>
                          <i className="ti-time"></i> 7 Days
                        </li>
                        <li>
                          <i className="ti-user"></i> 10+
                        </li>
                        <li>
                          <i className="ti-location-pin"></i> Canada
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPage;
