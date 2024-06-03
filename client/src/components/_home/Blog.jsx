import React from "react";

const Blog = () => {
  return (
    <>
      <section className="blog section-padding bg-navy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-subtitle">
                <span>Travel Blog</span>
              </div>
              <div className="section-title">
                <span>Travel</span> Experience
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/blog/1.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        {" "}
                        <span>Dec</span> <i>02</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="con">
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
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/blog/2.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        {" "}
                        <span>Dec</span> <i>04</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">Tours</a>
                    </span>
                    <h5>
                      <a href="post.html">Most Popular Yacht Charter Routes</a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/blog/3.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        {" "}
                        <span>Dec</span> <i>06</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">Travel</a>
                    </span>
                    <h5>
                      <a href="post.html">Tips Towards a Flawless Honeymoon</a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/blog/4.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        {" "}
                        <span>Dec</span> <i>10</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="blog.html">Travel</a>
                    </span>
                    <h5>
                      <a href="post.html">5 things you can not miss in Miami</a>
                    </h5>
                  </div>
                </div>
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/blog/5.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        {" "}
                        <span>Dec</span> <i>15</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="con">
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
                <div className="item">
                  <div className="position-re o-hidden">
                    <img src="img/blog/6.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        {" "}
                        <span>Dec</span> <i>18</i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="con">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
