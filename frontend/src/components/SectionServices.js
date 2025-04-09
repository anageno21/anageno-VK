import React from 'react';
import { Link } from 'react-router-dom';

function SectionServices() {
  return (
    <div className="section-services tf-spacing-2" style={{ padding: '50px 0', backgroundColor: '#f7f4f2' }}>
      <div className="tf-container">
        <div className="heading-section text-center">
          <p
            className="text-2 sub"
            style={{
              color: '#3c210e',
              fontSize: '12px',
              marginBottom: '10px',
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}
          >
            Our Services
          </p>
          <h3
            style={{
              color: '#3c210e',
              fontSize: '32px',
              marginBottom: '40px',
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            We Provide The Best Therapy Services
          </h3>
        </div>
        <div className="row">
          {/* Relationship */}
          <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-services"
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                height: '304px',
                width: '100%',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `url('/images/section/service-1.jpg') no-repeat center center`;
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.querySelector('h5').style.color = '#fff';
                e.currentTarget.querySelector('p').style.color = '#fff';
                e.currentTarget.querySelector('a').style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.querySelector('h5').style.color = '#3c210e';
                e.currentTarget.querySelector('p').style.color = '#3c210e';
                e.currentTarget.querySelector('a').style.color = '#3c210e';
              }}
            >
              <div
                className="content"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '20px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 1,
                }}
              >
                <div>
                  <h5
                    className="title"
                    style={{ color: '#3c210e', fontSize: '30px', marginBottom: '10px', fontWeight: 'bold' }}
                  >
                    Relationship
                  </h5>
                  <p
                    className="description text-1"
                    style={{
                      color: '#3c210e',
                      fontSize: '18px',
                      lineHeight: '22px',
                      display: 'block',
                      marginBottom: '20px',
                    }}
                  >
                    Support to improve communication, resolve conflicts, and strengthen your relationships.
                  </p>
                </div>
                <Link
                  to="/our-service"
                  className="link"
                  style={{
                    color: '#3c210e',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '16px',
                    fontWeight: 'normal',
                  }}
                >
                  Learn More <i className="icon-ArrowRight" style={{ fontSize: '12px' }}></i>
                </Link>
              </div>
            </div>
          </div>
          {/* Stress / Anxiety */}
          <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-services"
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                height: '304px',
                width: '100%',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `url('/images/section/service-2.jpg') no-repeat center center`;
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.querySelector('h5').style.color = '#fff';
                e.currentTarget.querySelector('p').style.color = '#fff';
                e.currentTarget.querySelector('a').style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.querySelector('h5').style.color = '#3c210e';
                e.currentTarget.querySelector('p').style.color = '#3c210e';
                e.currentTarget.querySelector('a').style.color = '#3c210e';
              }}
            >
              <div
                className="content"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '20px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 1,
                }}
              >
                <div>
                  <h5
                    className="title"
                    style={{ color: '#3c210e', fontSize: '30px', marginBottom: '10px', fontWeight: 'bold' }}
                  >
                    Stress / Anxiety
                  </h5>
                  <p
                    className="description text-1"
                    style={{
                      color: '#3c210e',
                      fontSize: '18px',
                      lineHeight: '22px',
                      display: 'block',
                      marginBottom: '20px',
                    }}
                  >
                    Techniques to manage stress and anxiety, helping you regain calm and control.
                  </p>
                </div>
                <Link
                  to="/our-service"
                  className="link"
                  style={{
                    color: '#3c210e',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '16px',
                    fontWeight: 'normal',
                  }}
                >
                  Learn More <i className="icon-ArrowRight" style={{ fontSize: '12px' }}></i>
                </Link>
              </div>
            </div>
          </div>
          {/* Self-Confidence / Self-Esteem */}
          <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-services"
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                height: '304px',
                width: '100%',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `url('/images/section/service-3.jpg') no-repeat center center`;
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.querySelector('h5').style.color = '#fff';
                e.currentTarget.querySelector('p').style.color = '#fff';
                e.currentTarget.querySelector('a').style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.querySelector('h5').style.color = '#3c210e';
                e.currentTarget.querySelector('p').style.color = '#3c210e';
                e.currentTarget.querySelector('a').style.color = '#3c210e';
              }}
            >
              <div
                className="content"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '20px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 1,
                }}
              >
                <div>
                  <h5
                    className="title"
                    style={{ color: '#3c210e', fontSize: '30px', marginBottom: '10px', fontWeight: 'bold' }}
                  >
                    Self-Confidence / Self-Esteem
                  </h5>
                  <p
                    className="description text-1"
                    style={{
                      color: '#3c210e',
                      fontSize: '18px',
                      lineHeight: '22px',
                      display: 'block',
                      marginBottom: '20px',
                    }}
                  >
                    Build self-confidence and self-esteem through personalized therapy sessions.
                  </p>
                </div>
                <Link
                  to="/our-service"
                  className="link"
                  style={{
                    color: '#3c210e',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '16px',
                    fontWeight: 'normal',
                  }}
                >
                  Learn More <i className="icon-ArrowRight" style={{ fontSize: '12px' }}></i>
                </Link>
              </div>
            </div>
          </div>
          {/* Adaption */}
          <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-services"
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                height: '304px',
                width: '100%',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `url('/images/section/service-4.jpg') no-repeat center center`;
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.querySelector('h5').style.color = '#fff';
                e.currentTarget.querySelector('p').style.color = '#fff';
                e.currentTarget.querySelector('a').style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.querySelector('h5').style.color = '#3c210e';
                e.currentTarget.querySelector('p').style.color = '#3c210e';
                e.currentTarget.querySelector('a').style.color = '#3c210e';
              }}
            >
              <div
                className="content"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '20px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  zIndex: 1,
                }}
              >
                <div>
                  <h5
                    className="title"
                    style={{ color: '#3c210e', fontSize: '30px', marginBottom: '10px', fontWeight: 'bold' }}
                  >
                    Adaption
                  </h5>
                  <p
                    className="description text-1"
                    style={{
                      color: '#3c210e',
                      fontSize: '18px',
                      lineHeight: '22px',
                      display: 'block',
                      marginBottom: '20px',
                    }}
                  >
                    Support to adapt to life changes, transitions, and new challenges with confidence.
                  </p>
                </div>
                <Link
                  to="/our-service"
                  className="link"
                  style={{
                    color: '#3c210e',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '16px',
                    fontWeight: 'normal',
                  }}
                >
                  Learn More <i className="icon-ArrowRight" style={{ fontSize: '12px' }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServices;