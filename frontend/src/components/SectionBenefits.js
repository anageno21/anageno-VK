import React from 'react';
import { Link } from 'react-router-dom';

function SectionBenefits() {
  return (
    <div className="section-benefits tf-spacing-1" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="box-benefits">
              <div className="heading-section text-start">
                <p
                  className="text-2 sub"
                  style={{
                    color: '#3c210e',
                    fontSize: '16px',
                    marginBottom: '10px',
                    display: 'block',
                    textTransform: 'uppercase',
                  }}
                >
                  Why Choose Us
                </p>
                <h3
                  style={{
                    color: '#3c210e',
                    fontSize: '32px',
                    marginBottom: '20px',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  Benefits of Choosing Anageno
                </h3>
                <p
                  className="description text-1 lh-30"
                  style={{
                    color: '#3c210e',
                    fontSize: '18px',
                    lineHeight: '30px',
                    display: 'block',
                  }}
                >
                  We are deeply committed to bringing positive, meaningful, and lasting change to your life, empowering you to thrive & achieve your fullest potential.
                </p>
              </div>
              <ul className="list-check" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                  <h5 className="title" style={{ color: '#3c210e', fontSize: '20px', display: 'block' }}>
                    <i className="icon-CheckCircle"></i> Top Psychologists:
                  </h5>
                  <p style={{ color: '#3c210e', fontSize: '16px', display: 'block' }}>
                    Our team of professionals is highly qualified and experienced in the field of psychology and therapy.
                  </p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                  <h5 className="title" style={{ color: '#3c210e', fontSize: '20px', display: 'block' }}>
                    <i className="icon-CheckCircle"></i> Effective Methods:
                  </h5>
                  <p style={{ color: '#3c210e', fontSize: '16px', display: 'block' }}>
                    We use modern, proven therapeutic methods to help you achieve a balanced and more fulfilling life.
                  </p>
                </li>
                <li style={{ marginBottom: '20px' }}>
                  <h5 className="title" style={{ color: '#3c210e', fontSize: '20px', display: 'block' }}>
                    <i className="icon-CheckCircle"></i> Ongoing Support:
                  </h5>
                  <p style={{ color: '#3c210e', fontSize: '16px', display: 'block' }}>
                    We provide support not only during therapy sessions but also with advice and guidance after each session.
                  </p>
                </li>
              </ul>
              <Link
                to="/contact-us"
                className="tf-btn style-default btn-color-white has-boder pd-26"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f5e6d3',
                  color: '#3c210e',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  border: '1px solid #3c210e',
                }}
              >
                <span>Contact Us Now</span>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-wrap effec-overlay" style={{ display: 'block !important' }}>
              <img
                src="/images/section/section-benefit.jpg"
                alt="Benefits of Anageno"
                style={{ width: '100%', height: 'auto', display: 'block !important', visibility: 'visible !important' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBenefits;