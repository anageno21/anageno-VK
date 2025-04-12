import React from 'react';
import Counter from './Counter';

const AboutSection = () => {
  return (
    <section className="about-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img" data-aos="fade-right">
              <img src="/images/about/about-1.jpg" alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content" data-aos="fade-left" data-aos-delay="300">
              <h2 className="section-title">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="counter">
                <h3>
                  <Counter value={1500} /> Clients
                </h3>
              </div>
              <a href="/about" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;