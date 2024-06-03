import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="logo" href="/">
            <img src="/img/logo-light.png" className="logo-img" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="ti-menu"></i>
            </span>
          </button>
          {/* <!-- Menu --> */}
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link  " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-page">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Tours <i className="ti-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/tours-page" className="dropdown-item">
                      <span>Tours 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="tours2.html" className="dropdown-item">
                      <span>Tours 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="tours3.html" className="dropdown-item">
                      <span>Tours 3</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/destination-page">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Pages <i className="ti-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/tour-details" className="dropdown-item">
                      <span>Tour Details</span>
                    </a>
                  </li>
                  <li>
                    <a href="/tour-search" className="dropdown-item">
                      <span>Tour Search</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Blog <i className="ti-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/blog-page" className="dropdown-item">
                      <span>Blog 01</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog2.html" className="dropdown-item">
                      <span>Blog 02</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Kenburns Slider --> */}
      {/* <aside
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
      </aside> */}
      {/* <!-- Tour Search --> */}
      {/* <div className="booking-wrapper">
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
      </div> */}
    </>
  );
};

export default Navbar;
