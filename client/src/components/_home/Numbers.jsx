import React from "react";

const Numbers = () => {
  return (
    <>
      <section className="numbers">
        <div
          className="section-padding bg-img bg-fixed back-position-center"
          data-background="img/slider/15.jpg"
          data-overlay-dark="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="item text-center">
                  <span className="icon">
                    <i className="front flaticon-air-freight"></i>
                    <i className="back flaticon-air-freight"></i>
                  </span>
                  <h3 className="count">600</h3>
                  <h6>Flight Booking</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item text-center">
                  <span className="icon">
                    <i className="font flaticon-house"></i>
                    <i className="back flaticon-house"></i>
                  </span>
                  <h3 className="count">250</h3>
                  <h6>Amazing Tour</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item text-center">
                  <span className="icon">
                    <i className="front flaticon-ship"></i>
                    <i className="back flaticon-ship"></i>
                  </span>
                  <h3 className="count">100</h3>
                  <h6>Cruises Booking</h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item text-center">
                  <span className="icon">
                    <i className="front flaticon-tag"></i>
                    <i className="back flaticon-tag"></i>
                  </span>
                  <h3 className="count">100</h3>
                  <h6>Ticket Booking</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Numbers;
