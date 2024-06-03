import React from "react";

const About = () => {
  return (
    <>
      <aside
        className="kenburns-section"
        id="kenburnsSliderContainer"
        data-overlay-dark="3"
      >
        <div className="kenburns-inner h-100">
          <div className="v-middle caption text-center">
            <div className="container">
              <div className="row h-100 justify-content-center">
                <div className="col-md-10 text-center">
                  <h4>Let's travel the world with us</h4>
                  <h1>
                    Explore The World With <span>Travol</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="booking-wrapper">
        <div className="container">
          <div className="tour-inner clearfix form-inline justify-content-center">
            <form
              action="https://duruthemes.com/demo/html/travol/multipage-slideshow/tours.html"
              className="form1 clearfix"
            >
              <div className="col1 c1">
                <div className="input2_wrapper">
                  <label>Where to?</label>
                  <div className="input2_inner">
                    <input
                      type="text"
                      className="form-control input"
                      placeholder="Where to?"
                    />
                  </div>
                </div>
              </div>
              <div className="col1 c2">
                <div className="select1_wrapper">
                  <label>Destinations</label>
                  <div className="select1_inner">
                    <select
                      className="select2 select"
                      style={{ width: "100%" }}
                    >
                      <option value="0">Destinations</option>
                      <option value="1">Greece</option>
                      <option value="2">London</option>
                      <option value="3">Maldives</option>
                      <option value="4">Paris</option>
                      <option value="5">Rome</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col1 c4">
                <div className="select1_wrapper">
                  <label>Duration</label>
                  <div className="select1_inner">
                    <select
                      className="select2 select"
                      style={{ width: "100%" }}
                    >
                      <option value="0">Duration</option>
                      <option value="1">1 Day Tour</option>
                      <option value="2">2-4 Days Tour</option>
                      <option value="3">5-7 Days Tour</option>
                      <option value="4">7+ Days Tour</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col1 c5">
                <button type="submit" className="btn-form1-submit">
                  <i className="ti-search"></i> Find Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className="about cover section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="section-subtitle">The best travel agency</div>
              <div className="section-title">
                Discover the <span>world</span> with our guide
              </div>
              <p>
                You can choose any country with good tourism. Agency elementum
                sesue the aucan vestibulum aliquam justo in sapien rutrum
                volutpat. Donec in quis the pellentesque velit. Donec id velit
                ac arcu posuere blane.
              </p>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue
                the miss varius natoque penatibus et magnis dis parturient
                monte.
              </p>
              <ul className="list-unstyled about-list mb-30">
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>20 Years of Experience</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    <span className="ti-check"></span>
                  </div>
                  <div className="about-list-text">
                    <p>150+ Tour Destinations</p>
                  </div>
                </li>
              </ul>
              {/* <!-- Info --> */}
              <div className="phone-call mb-30">
                <div className="icon">
                  <span className="flaticon-phone-call"></span>
                </div>
                <div className="text">
                  <p>For information</p>
                  <a href="tel:855-333-4444">855 333 4444</a>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 offset-md-1 animate-box"
              data-animate-effect="fadeInUp"
            >
              <div className="img-exp">
                <div className="about-img">
                  <div className="img">
                    <img src="img/about.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
                <div id="circle">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath" fill="none" />
                      <text fill="#0f2454">
                        <textPath xlinkHref="#circlePath">
                          . travel agency . travel agency
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
