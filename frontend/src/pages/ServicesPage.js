import React from 'react';

function ServicesPage() {
  console.log('ServicesPage is rendering'); // Debugging

  return (
    <div className="main-content-2">
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

      <section className="section-hero">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="image-wrap">
                <img
                  src="/images/section/section-hero.jpg"
                  alt=""
                />
              </div>
              <p className="text-1 lh-30">
                Discover tailored therapy solutions designed to support your mental well-being, enhance emotional resilience, and foster personal growth for a balanced and fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-service page-our-service tf-spacing-3">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section">
                <h3>Counseling & Therapy Services</h3>
                <p className="description text-1 lh-30">
                  We offer a wide range of services to meet your personal needs
                </p>
              </div>
              <div className="grid-layout-3 multi-item">
                <div className="service-item style-3 hover-img">
                  <div className="content z-5">
                    <h5 className="title">
                      <a href="/service-details">Individual Counseling</a>
                    </h5>
                    <p>Personal psychological support to help you overcome stress, anxiety, and regain confidence.</p>
                  </div>
                  <div className="image-wrap z-5 relative">
                    <a href="/service-details">
                      <img
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;