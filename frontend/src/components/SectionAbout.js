import React from 'react';
import { Link } from 'react-router-dom';

function SectionAbout() {
  return (
    <div className="section-box-about" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
      <div className="tf-container">
        <div className="wrap-box-about">
          <div className="row justify-center">
            <div className="col-lg-8">
              <div className="box-about" style={{ textAlign: 'center' }}>
                <div className="heading-section">
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
                    About Anageno
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
                    We Provide Professional, Dedicated, And Experienced Psychological Support
                  </h3>
                  <p
                    className="description text-1 lh-30"
                    style={{
                      color: '#3c210e',
                      fontSize: '18px',
                      lineHeight: '30px',
                      display: 'block',
                      margin: '0 auto',
                      maxWidth: '600px',
                    }}
                  >
                    It is a trusted counseling and therapy center, staffed by experienced professionals dedicated to listening, supporting, and guiding you. We believe in everyone's potential to heal and grow with the right care.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="tf-btn mx-auto style-default btn-color-white has-boder pd-26"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#f5e6d3',
                    color: '#3c210e',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    margin: '20px auto',
                    border: '1px solid #3c210e',
                  }}
                >
                  <span>Learn More About Us</span>
                </Link>
                <div className="item">
                  <img
                    src="/images/section/section-about-1.jpg"
                    alt="About Anageno"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionAbout;