import React from "react";

const TourSearch = () => {
  return (
    <>
      <div
        class="banner-header section-padding valign bg-img bg-fixed back-position-center"
        data-overlay-dark="5"
        data-background="img/slider/15.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-7 caption mt-90">
              <h5>Choose your tour</h5>
              <h1>
                Popular <span>Tours</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding bg-lightnav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title text-center">No results found!</div>
              <p className="text-center">Please search for another tour.</p>
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
        </div>
      </div>
    </>
  );
};

export default TourSearch;
