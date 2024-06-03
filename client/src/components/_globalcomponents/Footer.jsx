import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer clearfix">
        <div className="container">
          {/* <!-- First footer --> */}
          <div className="first-footer">
            <div className="row">
              <div className="col-md-12">
                <div className="links dark footer-contact-links">
                  <div className="footer-contact-links-wrapper">
                    <div className="footer-contact-link-wrapper">
                      <div className="image-wrapper footer-contact-link-icon">
                        <div className="icon-footer">
                          <i className="flaticon-phone-call"></i>
                        </div>
                      </div>
                      <div className="footer-contact-link-content">
                        <h6>Call us</h6>
                        <p>+1 123-456-0606</p>
                      </div>
                    </div>
                    <div className="footer-contact-links-divider"></div>
                    <div className="footer-contact-link-wrapper">
                      <div className="image-wrapper footer-contact-link-icon">
                        <div className="icon-footer">
                          <i className="flaticon-message"></i>
                        </div>
                      </div>
                      <div className="footer-contact-link-content">
                        <h6>Write to us</h6>
                        <p>info@travolagency.com</p>
                      </div>
                    </div>
                    <div className="footer-contact-links-divider"></div>
                    <div className="footer-contact-link-wrapper">
                      <div className="image-wrapper footer-contact-link-icon">
                        <div className="icon-footer">
                          <i className="flaticon-placeholder"></i>
                        </div>
                      </div>
                      <div className="footer-contact-link-content">
                        <h6>Address</h6>
                        <p>24 King St, SC 29401 USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Second footer --> */}
          <div className="second-footer">
            <div className="row">
              {/* <!-- about & social icons --> */}
              <div className="col-md-4 widget-area">
                <div className="widget clearfix">
                  <div className="footer-logo">
                    <img
                      className="img-fluid"
                      src="img/logo-light.png"
                      alt=""
                    />
                  </div>
                  <div className="widget-text">
                    <p>
                      Quisque imperdiet sapien porttito the bibendum
                      sellentesque the commodo erat acar accumsa lobortis, enim
                      diam the nesuen.
                    </p>
                    <div className="social-icons">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="ti-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- quick links --> */}
              <div className="col-md-3 offset-md-1 widget-area">
                <div className="widget clearfix usful-links">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="tours.html">Tours</a>
                    </li>
                    <li>
                      <a href="destination.html">Destinations</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- subscribe --> */}
              <div className="col-md-4 widget-area">
                <div className="widget clearfix">
                  <h3 className="widget-title">Subscribe</h3>
                  <p>
                    Sign up for our monthly blogletter to stay informed about
                    travel and tours
                  </p>
                  <div className="widget-newsletter">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Bottom footer --> */}
          <div className="bottom-footer-text">
            <div className="row copyright">
              <div className="col-md-12">
                <p className="mb-0">
                  ©2023 <a href="#">DuruThemes</a>. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
