import React from 'react';

function SectionContact() {
  return (
    <div className="section-contact tf-spacing-7" style={{ padding: '50px 0', backgroundColor: '#f7f4f2' }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ padding: '20px' }}>
              <div className="heading-section">
                <p
                  className="text-2 sub"
                  style={{
                    color: '#3c210e',
                    fontSize: '14px',
                    marginBottom: '10px',
                    display: 'block',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                  }}
                >
                  Book A Consultation
                </p>
                <h3
                  style={{
                    color: '#3c210e',
                    fontSize: '48px',
                    marginBottom: '40px',
                    display: 'block',
                    fontWeight: 'normal',
                    lineHeight: '48px', // Προσαρμογή του lineHeight για καλύτερη εμφάνιση
                  }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>Free Consultation -</span>
                  <br />
                  Begin Your Healing Journey
                </h3>
              </div>
              <p
                style={{
                  color: '#3c210e',
                  fontSize: '16px',
                  lineHeight: '24px',
                  marginBottom: '20px',
                }}
              >
                Connect with a dedicated specialist today and take the first step towards a healthier, more fulfilling life.
              </p>
              <p style={{ color: '#3c210e', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }}>
                <i className="icon-Envelope" style={{ marginRight: '10px' }}></i>
                themesflat@gmail.com
              </p>
              <p style={{ color: '#3c210e', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }}>
                <i className="icon-PhoneCall" style={{ marginRight: '10px' }}></i>
                1-333-345-6868
              </p>
              <p style={{ color: '#3c210e', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }}>
                <i className="icon-MapPin" style={{ marginRight: '10px' }}></i>
                101 E 129th St, East Chicago, IN 46312, US
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#3c210e',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                Open map <i className="icon-ArrowRight"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ padding: '20px' }}>
              <h5
                style={{
                  color: '#3c210e',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                Get A Free Consultation
              </h5>
              <form
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      fontSize: '16px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      fontSize: '16px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <select
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      fontSize: '16px',
                      color: '#999',
                    }}
                  >
                    <option value="" disabled selected>
                      Choose Services
                    </option>
                    <option value="relationship">Relationship</option>
                    <option value="stress-anxiety">Stress / Anxiety</option>
                    <option value="self-confidence">Self-Confidence / Self-Esteem</option>
                    <option value="adaption">Adaption</option>
                  </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <textarea
                    placeholder="Your Message"
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      fontSize: '16px',
                      minHeight: '100px',
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#f5e6d3',
                    color: '#3c210e',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;