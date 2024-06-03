import React from "react";

const Tourvideo = () => {
  return (
    <>
      <section className="dynamic-video-wrapper" data-overlay-dark="3">
        <video
          width="100%"
          height="100%"
          autoPlay="autoplay"
          muted
          preload="auto"
          loop="loop"
        >
          <source
            src="https://duruthemes.com/demo/html/travol/travel-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="wrap-content v-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1>Costa Victoria Cochin</h1>
                <h4>
                  <i className="ti-location-pin"></i> Maldives &nbsp;&nbsp;
                  <i className="ti-timer"></i> 4 Days + 3 Nights
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tourvideo;
