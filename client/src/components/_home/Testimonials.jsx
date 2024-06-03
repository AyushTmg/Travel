import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div
          className="background bg-img bg-fixed section-padding pb-0"
          data-background="img/slider/15.jpg"
          data-overlay-dark="5"
        >
          <div className="container">
            <div className="row">
              {/* <!-- Call Now  --> */}
              <div className="col-md-5 mb-30 mt-30">
                <p>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                  <i className="star-rating"></i>
                </p>
                <h5>
                  We Provide Top Destinations Expecially For You Book Now and
                  Enjoy!
                </h5>
                <div className="phone-call mb-10">
                  <div className="icon color-1">
                    <span className="flaticon-phone-call"></span>
                  </div>
                  <div className="text">
                    <p className="color-1">Call Now</p>
                    <a className="color-1" href="tel:855-333-4444">
                      855 333 4444
                    </a>
                  </div>
                </div>
                <p>
                  <i className="ti-check"></i>
                  <small>Call us, it's toll-free.</small>
                </p>
              </div>
              {/* <!-- Booking From --> */}
              <div className="col-md-5 offset-md-2">
                <div className="testimonials-box">
                  <div className="head-box">
                    <h6>Testimonials</h6>
                    <h4>Travelers Reviews</h4>
                  </div>
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <p>
                        Travel dapibus asue metus the nec feusiate era the miss
                        hendreri the vemante the lemon insan toleon nectan
                        feugiat erat hendrerit necuis vesaire tours inilla neca
                        ine the sene miss habitan.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          <img src="img/team/04.png" alt="" />
                        </div>
                        <div className="cont">
                          <div className="rating">
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                          </div>
                          <h6>Nolan White</h6>
                          <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>
                        Travel dapibus asue metus the nec feusiate era the miss
                        hendreri the vemante the lemon insan toleon nectan
                        feugiat erat hendrerit necuis vesaire tours inilla neca
                        ine the sene miss habitan.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          <img src="img/team/05.png" alt="" />
                        </div>
                        <div className="cont">
                          <div className="rating">
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                          </div>
                          <h6>Emily Brown</h6>
                          <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>
                        Travel dapibus asue metus the nec feusiate era the miss
                        hendreri the vemante the lemon insan toleon nectan
                        feugiat erat hendrerit necuis vesaire tours inilla neca
                        ine the sene miss habitan.
                      </p>
                      <div className="info">
                        <div className="author-img">
                          <img src="img/team/06.png" alt="" />
                        </div>
                        <div className="cont">
                          <div className="rating">
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                            <i className="star active"></i>
                          </div>
                          <h6>Olivia Martin</h6>
                          <span>Guest review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="owl-carousel owl-theme">
                <div className="clients-logo">
                  <a href="#0">
                    <img src="../../../public/img/clients/1.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="../../../public/img/clients/2.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="../../../public/img/clients/3.png" alt="" />
                  </a>
                </div>
                <div className="clients-logo">
                  <a href="#0">
                    <img src="../../../public/img/clients/4.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
