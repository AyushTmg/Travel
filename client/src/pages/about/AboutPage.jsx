import React from "react";
import Testimonials from "../../components/_home/Testimonials";
import { useGetSomeDataQuery } from "../../features/data/DataSlice";

const AboutPage = () => {
  const { data, isLoading, isSuccess, isError } = useGetSomeDataQuery();
  console.log(data);

  return (
    <>
      <section className="posts-list">
        <h2>Posts</h2>

        {data?.products.map((ele, index) => {
          return (
            <div key={index}>
              <p>{ele.title}</p>
              {ele.images && ele.images.length > 0 && (
                <div>
                  {ele.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt="" />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* {content} */}
      </section>
      {/* <div
        class="banner-header section-padding valign bg-img bg-fixed back-position-center"
        data-overlay-dark="5"
        data-background="img/slider/15.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-7 caption mt-90">
              <h5>The best travel agency</h5>
              <h1>
                We helping you find <span>your dream</span> vacation
              </h1>
            </div>
          </div>
        </div>
      </div> */}
      {/* <section className="about cover section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 mb-30 animate-box"
              data-animate-effect="fadeInUp"
            >
              <p>
                You can choose any country with good tourism. Agency elementum
                sesue the aucan vestibulum aliquam justo in sapien rutrum
                volutpat. Donec in quis the pellentesque velit. Donec id velit
                ac arcu posuere blane.
              </p>
              <p>
                Agency elementum sesue the aucan vestibulum aliquam justo in
                sapien rutin volutpat. Donec in quis the pellentesque veliten.
              </p>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
                the duru ligula. Orci varius natoque penatibus et magnis dis
                parturient monte nascete ridiculus mus nellentesque habitant
                morbine.
              </p>
              <ul className="list-unstyled about-list mb-30">
                <li>
                  <div className="about-list-icon">
                    {" "}
                    <span className="ti-check"></span>{" "}
                  </div>
                  <div className="about-list-text">
                    <p>20 Years of Experience</p>
                  </div>
                </li>
                <li>
                  <div className="about-list-icon">
                    {" "}
                    <span className="ti-check"></span>{" "}
                  </div>
                  <div className="about-list-text">
                    <p>150+ Tour Destinations</p>
                  </div>
                </li>
              </ul>
              <div className="phone-call mb-30">
                <div className="icon">
                  <span className="flaticon-phone-call"></span>
                </div>
                <div className="text">
                  <p>For information</p>{" "}
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
                    {" "}
                    <img
                      src="img/about.jpg"
                      className="img-fluid"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div id="circle">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
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
                          {" "}
                          . travel agency . travel agency{" "}
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
      <section className="team section-padding bg-navy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Travel Experts</div>
              <div className="section-title">
                Meet Our <span>Guides</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="team-card mb-30">
                <div className="team-img">
                  <img src="img/team/01.jpg" alt="" className="w-100" />
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    Emily Norman<span>Switzerland Guide</span>
                  </h3>
                  <p className="team-text">
                    Nulla quis efficitur lacus sulvinar suere ausue in eduis
                    euro vesatien arcuman ontese auctor ac aleuam aretra.
                  </p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="title-box">
                  <h3 className="mb-0">
                    Leonie Norman<span>Switzerland Guide</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card mb-30">
                <div className="team-img">
                  <img src="img/team/02.jpg" alt="" className="w-100" />
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    Andreas Brown<span>Maldives Guide</span>
                  </h3>
                  <p className="team-text">
                    Nulla quis efficitur lacus sulvinar suere ausue in eduis
                    euro vesatien arcuman ontese auctor ac aleuam aretra.
                  </p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="title-box">
                  <h3 className="mb-0">
                    Andreas Brown<span>Maldives Guide</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card mb-30">
                <div className="team-img">
                  <img src="img/team/03.jpg" alt="" className="w-100" />
                </div>
                <div className="team-content">
                  <h3 className="team-title">
                    Angelina White<span>Greece Guide</span>
                  </h3>
                  <p className="team-text">
                    Nulla quis efficitur lacus sulvinar suere ausue in eduis
                    euro vesatien arcuman ontese auctor ac aleuam aretra.
                  </p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="title-box">
                  <h3 className="mb-0">
                    Angelina White<span>Greece Guide</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
    </>
  );
};

export default AboutPage;
