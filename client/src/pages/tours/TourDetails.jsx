import React from "react";
import Testimonials from "../../components/_home/Testimonials";

const TourDetails = () => {
  return (
    <>
      <header class="header slider">
        <div class="owl-carousel owl-theme">
          {/* <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. --> */}
          <div
            class="text-center item bg-img"
            data-overlay-dark="2"
            data-background="img/slider/15.jpg"
          ></div>
          <div
            class="text-center item bg-img"
            data-overlay-dark="2"
            data-background="img/slider/16.jpg"
          ></div>
          <div
            class="text-center item bg-img"
            data-overlay-dark="2"
            data-background="img/slider/17.jpg"
          ></div>
        </div>
        {/* <!-- arrow down --> */}
        <div class="arrow bounce text-center">
          <a href="#" data-scroll-nav="1" class="">
            {" "}
            <i class="ti-arrow-down"></i>{" "}
          </a>
        </div>
      </header>
      <section className="tour-page section-padding" data-scroll-index="1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-30">
              <div className="section-subtitle">Travel Agency</div>
              <div className="section-title mb-0">
                Soneva Jani <span>Maldives</span>
              </div>
              <div className="rating mb-30">
                {" "}
                <i className="star active"></i> <i className="star active"></i>{" "}
                <i className="star active"></i> <i className="star active"></i>{" "}
                <i className="star active"></i>
                <div className="reviews-count color-2">(2 Reviews)</div>
              </div>
              <div className="tour-page head-icon">
                <p>
                  <i className="ti-time"></i> 5 Days 4 Nights
                </p>
                <p>
                  <i className="ti-user"></i> Group: 5 - 10 People
                </p>
                <p>
                  <i className="ti-location-pin"></i> Maldives
                </p>
                <p>
                  <i className="ti-face-smile"></i> 9.3 Superb
                </p>
              </div>
              <h6>Information</h6>
              <p className="mb-30">
                Travel non lorem ac erat suscipit bibendum nulla facilisi.
                Sedeuter nunc volutpat miss sapien conseyen turpeutionyer masin
                libero sevenion vusetion viventa augue sit amet hendrerit
                vestibulum. Duisterione venenatis lacus gravida eros ut turpis
                interdum ornare.
              </p>
              <ul className="list-unstyled page-list mb-30">
                <li>
                  <div className="page-list-icon">
                    {" "}
                    <span className="ti-check"></span>{" "}
                  </div>
                  <div className="page-list-text">
                    <p>5 Days 4 Nights, Group: 5 - 10 People, Maldives</p>
                  </div>
                </li>
              </ul>
              <p className="mb-30">
                Interdum et malesu they adamale fames ac anteipsu pimsine
                faucibus curabitur arcu site feugiat rana volutpat sollicitudin
                libero. Hotel non lorem acer suscipit bibendum vulla facilisi
                nedeuter nunc vousa molis sapien velet conseyer turpeutionyer
                masin libero sempe molis.
              </p>
              {/* <!-- tour-page time-table --> */}
              <div className="tour-page time-table">
                {" "}
                <span>Departure</span>
                <p>NYC International Airport</p>
              </div>
              <div className="tour-page time-table">
                {" "}
                <span>Departure Time</span>
                <p>7.00AM</p>
              </div>
              <div className="tour-page time-table">
                {" "}
                <span>Return Time</span>
                <p>Approximately 9.30PM</p>
              </div>
              <div className="tour-page time-table">
                {" "}
                <span>Dress Code</span>
                <p>Casual, comfortable and light</p>
              </div>
              <div className="tour-page time-table-price">
                {" "}
                <span>Price Includes</span>
                <ul className="tour-page time-table-price-include">
                  <li>
                    <i className="ti-check"></i> Accommondatio
                  </li>
                  <li>
                    <i className="ti-check"></i> Porter &amp; Personal Guide
                  </li>
                  <li>
                    <i className="ti-check"></i> Insurance
                  </li>
                  <li>
                    <i className="ti-check"></i> Breakfast
                  </li>
                  <li>
                    <i className="ti-check"></i> Tranportation / Car
                  </li>
                </ul>
              </div>
              <div className="tour-page time-table-price">
                {" "}
                <span>Price Excludes</span>
                <ul className="tour-page time-table-price-exclude">
                  <li>
                    <i className="ti-close"></i> Flights{" "}
                  </li>
                  <li>
                    <i className="ti-close"></i> Lunch
                  </li>
                  <li>
                    <i className="ti-close"></i> Typical Souvenir{" "}
                  </li>
                  <li>
                    <i className="ti-close"></i> Sunscreen, toiletries and
                    personal items
                  </li>
                </ul>
              </div>
              <br />
              <br />
              {/* <!-- Gallery --> */}
              <h6 className="mb-0">Tour Gallery</h6>
              <div className="row">
                <div className="col-md-4 gallery-item">
                  <a
                    href="img/tours/maldives2.jpg"
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src="img/tours/maldives2.jpg"
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item">
                  <a
                    href="img/tours/maldives3.jpg"
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src="img/tours/maldives3.jpg"
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 gallery-item">
                  <a
                    href="img/tours/maldives4.jpg"
                    title=""
                    className="img-zoom"
                  >
                    <div className="gallery-box">
                      <div className="gallery-img">
                        {" "}
                        <img
                          src="img/tours/maldives4.jpg"
                          className="img-fluid mx-auto d-block"
                          alt="work-img"
                        />{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <br />
              <br />
              {/* <!-- FAQ's --> */}
              <h6>Tour Plan</h6>
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn">Day 1: Departure</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Travel non lorem ac erat suscipit bibendum nulla
                        facilisi. Sedeuter nunc volutpat miss sapien vel
                        conseyen turpeutionyer masin libero sevenion vusetion
                        viventa augue sit amet hendrerit vestibulum.
                        Duisteyerion venenatis lacus gravida eros ut turpis
                        interdum ornare.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">Day 2: Adventure Beggins</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Travel non lorem ac erat suscipit bibendum nulla
                        facilisi. Sedeuter nunc volutpat miss sapien vel
                        conseyen turpeutionyer masin libero sevenion vusetion
                        viventa augue sit amet hendrerit vestibulum.
                        Duisteyerion venenatis lacus gravida eros ut turpis
                        interdum ornare.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">Day 3: Sea Tour</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Travel non lorem ac erat suscipit bibendum nulla
                        facilisi. Sedeuter nunc volutpat miss sapien vel
                        conseyen turpeutionyer masin libero sevenion vusetion
                        viventa augue sit amet hendrerit vestibulum.
                        Duisteyerion venenatis lacus gravida eros ut turpis
                        interdum ornare.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn">Day 4: Return</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Travel non lorem ac erat suscipit bibendum nulla
                        facilisi. Sedeuter nunc volutpat miss sapien vel
                        conseyen turpeutionyer masin libero sevenion vusetion
                        viventa augue sit amet hendrerit vestibulum.
                        Duisteyerion venenatis lacus gravida eros ut turpis
                        interdum ornare.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- sidebar --> */}
            <div className="col-md-4">
              <div className="sidebar">
                <div className="right-sidebar">
                  <div className="right-sidebar item">
                    <h3>
                      <span className="right-sidebar item__from">From</span>
                      <span className="right-sidebar item__sale">$1.250</span>
                      $900
                    </h3>
                    <form
                      method="post"
                      className="right-sidebar item-form"
                      action="#"
                    >
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group input1_inner">
                          <input
                            type="text"
                            className="form-control input datepicker"
                            placeholder="Travel Date"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <input
                            name="people"
                            type="text"
                            placeholder="People"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Your Enquiry"
                          ></textarea>
                        </div>
                        <div className="col-md-12">
                          <button className="butn-dark">
                            <a href="#0">
                              <span>Book Now</span>
                            </a>
                          </button>
                        </div>
                      </div>
                    </form>
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

export default TourDetails;
