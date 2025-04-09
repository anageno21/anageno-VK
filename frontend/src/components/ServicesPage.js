import React from 'react';

function ServicesPage() {
  return (
    <div className="main-content-2">
      {/* .page-title */}
      <div className="page-title">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">Our Services</h3>
              <ul className="breadcrumbs">
                <li><a href="/">Home</a></li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* .section-hero */}
      <section className="section-hero">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="image-wrap wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                <img
                  className="lazyload"
                  data-src="/images/section/section-hero.jpg"
                  src="/images/section/section-hero.jpg"
                  alt=""
                />
              </div>
              <p className="text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                Discover tailored therapy solutions designed to support your mental well-being, enhance emotional resilience, and foster personal growth for a balanced and fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* .section-service */}
      <section className="section-service page-our-service tf-spacing-3">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section">
                <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  Counseling & Therapy Services
                </h3>
                <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  We offer a wide range of services to meet your personal needs
                </p>
              </div>
              <div className="grid-layout-3 multi-item">
                <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Individual Counseling</a>
                    </h5>
                    <p>Personal psychological support to help you overcome stress, anxiety, and regain confidence.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/service-item-1.jpg"
                        src="/images/section/service-item-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="/service-details" className="tf-btn-link z-5">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
                <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Family Therapy</a>
                    </h5>
                    <p>Improve family relationships, resolve conflicts, and build a healthy living environment.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/service-item-2.jpg"
                        src="/images/section/service-item-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="/service-details" className="tf-btn-link z-5">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
                <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Couples Therapy</a>
                    </h5>
                    <p>Enhance understanding affection between couples, helping to strengthen the relationship.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/service-item-3.jpg"
                        src="/images/section/service-item-3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="/service-details" className="tf-btn-link z-5">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
                <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Group Therapy</a>
                    </h5>
                    <p>Join others with similar challenges, sharing experiences and support in a group setting.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/service-item-4.jpg"
                        src="/images/section/service-item-4.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="/service-details" className="tf-btn-link z-5">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
                <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Child & Adolescent Therapy</a>
                    </h5>
                    <p>Specialized support for children and teens, helping them navigate emotional challenges.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/service-item-5.jpg"
                        src="/images/section/service-item-5.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="/service-details" className="tf-btn-link z-5">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
                <div className="service-item style-3 hover-img wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Trauma Counseling</a>
                    </h5>
                    <p>Focused therapy to help you heal from past trauma and regain control over your life.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/service-item-6.jpg"
                        src="/images/section/service-item-6.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a href="/service-details" className="tf-btn-link z-5">
                    <span data-text="Read More">Read More</span>
                    <i className="icon-ArrowRight"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;