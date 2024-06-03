import React from "react";
import Testimonials from "../../components/_home/Testimonials";

const Gallery = () => {
  return (
    <>
      <div
        class="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark="6"
        data-background="img/slider/2.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 caption mt-90">
              <h5>Images and Videos</h5>
              <h1>
                Image <span>&</span> Video <span>Gallery</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Images</div>
              <div className="section-title">
                Image <span>Gallery</span>
              </div>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/slider/2.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    {" "}
                    <img
                      src="img/slider/2.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/slider/11.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    {" "}
                    <img
                      src="img/slider/11.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="img/slider/16.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    {" "}
                    <img
                      src="img/slider/16.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6 gallery-item">
              <a href="img/slider/15.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    {" "}
                    <img
                      src="img/slider/15.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 gallery-item">
              <a href="img/slider/17.jpg" title="" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    {" "}
                    <img
                      src="img/slider/17.jpg"
                      className="img-fluid mx-auto d-block"
                      alt="work-img"
                    />{" "}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Video Gallery --> */}
      <section className="section-padding bg-lightnav">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">Videos</div>
              <div className="section-title">
                Video <span>Gallery</span>
              </div>
            </div>
            {/* <!-- YouTubePopUp --> */}
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/2.jpg" alt="YouTube" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/ODJgp1ITowg"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/15.jpg" alt="Vimeo" />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/ODJgp1ITowg"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Magnific Popup {Custom, YouTube, Vimeo} --> */}
            {/* <!-- custom --> */}
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img
                    src="img/slider/3.jpg"
                    className="img-fluid"
                    alt="Custom"
                  />
                  <a
                    className="magnific-custom"
                    href="https://duruthemes.com/demo/html/travol/travel-video.mp4"
                  >
                    <span className="video-gallery-icon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- youtube --> */}
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  <img
                    src="img/slider/16.jpg"
                    className="img-fluid"
                    alt="YouTube"
                  />
                  <a
                    className="video-gallery-button vid"
                    href="https://youtu.be/ODJgp1ITowg"
                  >
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- vimeo --> */}
            <div className="col-md-4">
              <div className="vid-area mb-30">
                <div className="vid-icon">
                  {" "}
                  <img src="img/slider/1.jpg" alt="Vimeo" />
                  <a
                    className="video-gallery-button vid"
                    href="https://vimeo.com/729120211"
                  >
                    {" "}
                    <span className="video-gallery-polygon">
                      <i className="ti-control-play"></i>
                    </span>{" "}
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

export default Gallery;
