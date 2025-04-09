import React from 'react';

function SectionProcess() {
  return (
    <div className="section-process tf-spacing-3" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
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
            How It Works
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
            Our Process To Get Started
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-process"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
              }}
            >
              <div
                className="number"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#3c210e',
                  backgroundColor: '#fff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                01
              </div>
              <div className="content">
                <h5
                  className="title"
                  style={{ color: '#3c210e', fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}
                >
                  Book An Appointment
                </h5>
                <p
                  className="description text-1"
                  style={{
                    color: '#3c210e',
                    fontSize: '13px',
                    lineHeight: '20px',
                    display: 'block',
                  }}
                >
                  Schedule a session with one of our expert therapists at a time that suits you best.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-process"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
              }}
            >
              <div
                className="number"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#3c210e',
                  backgroundColor: '#fff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                02
              </div>
              <div className="content">
                <h5
                  className="title"
                  style={{ color: '#3c210e', fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}
                >
                  Meet Your Therapist
                </h5>
                <p
                  className="description text-1"
                  style={{
                    color: '#3c210e',
                    fontSize: '13px',
                    lineHeight: '20px',
                    display: 'block',
                  }}
                >
                  Connect with your therapist to discuss your needs and set goals for your therapy journey.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-process"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
              }}
            >
              <div
                className="number"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#3c210e',
                  backgroundColor: '#fff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                03
              </div>
              <div className="content">
                <h5
                  className="title"
                  style={{ color: '#3c210e', fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}
                >
                  Begin Your Journey
                </h5>
                <p
                  className="description text-1"
                  style={{
                    color: '#3c210e',
                    fontSize: '13px',
                    lineHeight: '20px',
                    display: 'block',
                  }}
                >
                  Start your therapy sessions and work towards a healthier, more balanced life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProcess;