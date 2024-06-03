import React from "react";
import Testimonials from "../../components/_home/Testimonials";

const BlogPage = () => {
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
              <h5>Read travel blog</h5>
              <h1>
                Travel <span>Experience</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="blog section-padding bg-lightnav">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-30">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/blog/1.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>02</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Travel</a>
                  </span>
                  <h5>
                    <a href="post.html">
                      Practical information for traveling to Egypt
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/blog/2.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>04</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Tours</a>
                  </span>
                  <h5>
                    <a href="post.html">Most Popular Yacht Charter Routes</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/blog/3.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>06</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Travel</a>
                  </span>
                  <h5>
                    <a href="post.html">Tips Towards a Flawless Honeymoon</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/blog/4.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>10</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Travel</a>
                  </span>
                  <h5>
                    <a href="post.html">5 things you can not miss in Miami</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/blog/5.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>15</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Tours</a>
                  </span>
                  <h5>
                    <a href="post.html">
                      Family Adventure Tours for Teens & Kids
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="item">
                <div className="position-re o-hidden">
                  {" "}
                  <img src="img/blog/6.jpg" alt="" />
                  <div className="date">
                    <a href="post.html">
                      {" "}
                      <span>Dec</span> <i>18</i>{" "}
                    </a>
                  </div>
                </div>
                <div className="con">
                  {" "}
                  <span className="category">
                    <a href="blog.html">Tours</a>
                  </span>
                  <h5>
                    <a href="post.html">
                      Small group tours with flights from the USA
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              {/* <!-- Pagination --> */}
              <ul className="blog-pagination-wrap align-center mb-30 mt-30">
                <li>
                  <a href="blog.html#">
                    <i className="ti-angle-left"></i>
                  </a>
                </li>
                <li>
                  <a href="blog.html#">1</a>
                </li>
                <li>
                  <a href="blog.html#" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="blog.html#">3</a>
                </li>
                <li>
                  <a href="blog.html#">
                    <i className="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
