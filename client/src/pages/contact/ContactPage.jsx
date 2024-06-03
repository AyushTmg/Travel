import React from "react";
import Testimonials from "../../components/_home/Testimonials";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <div
        class="banner-header section-padding back-position-center valign bg-img bg-fixed"
        data-overlay-dark="5"
        data-background="img/slider/15.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 caption mt-90">
              <h5>Get in touch</h5>
              <h1>
                Contact <span>Us</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="contact section-padding">
        <div className="container">
          <div className="row mb-90">
            <div className="col-md-6 mb-60">
              <h3>Travel Agency Inc.</h3>
              <p>
                Travel duru nisl quam nestibulum ac quam nec odio elementum
                sceisue the aucan ligula. Orci varius natoque penatibus et
                magnis dis parturient monte nascete ridiculus mus nellentesque
                habitant morbine.
              </p>
              <div className="phone-call mb-30">
                <div className="icon">
                  <span className="flaticon-phone-call"></span>
                </div>
                <div className="text">
                  <p>Phone</p> <a href="tel:855-333-4444">855 333 4444</a>
                </div>
              </div>
              <div className="phone-call mb-30">
                <div className="icon">
                  <span className="flaticon-message"></span>
                </div>
                <div className="text">
                  <p>e-Mail Address</p>{" "}
                  <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
                </div>
              </div>
              <div className="phone-call">
                <div className="icon">
                  <span className="flaticon-placeholder"></span>
                </div>
                <div className="text">
                  <p>Location</p> 1616 Broadway NY, New York 10001
                  <br />
                  United States of America
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-30 offset-md-1">
              <div className="sidebar">
                <div className="right-sidebar">
                  <div className="right-sidebar item">
                    <h2>Get in touch</h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      method="post"
                      className="right-sidebar item-form contact__form"
                      action="https://duruthemes.com/demo/html/travol/multipage-slideshow/mail.php"
                    >
                      {/* <!-- form message --> */}
                      <div className="row">
                        <div className="col-12">
                          <div
                            className="alert alert-success contact__msg"
                            style={{ display: "none" }}
                            role="alert"
                          >
                            {" "}
                            Your message was sent successfully.{" "}
                          </div>
                        </div>
                      </div>
                      {/* <!-- form elements --> */}
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Your Name *"
                            required
                            defaultValue="test"
                            {...register("example")}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Your Email *"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Your Number *"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject *"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Message *"
                            required
                          ></textarea>
                        </div>
                        <div className="col-md-12">
                          <button className="butn-dark">
                            <a href="#0">
                              <span>Send Message</span>
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
          {/* <!-- Map Section --> */}
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInUp"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"
                width="100%"
                height="600"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
