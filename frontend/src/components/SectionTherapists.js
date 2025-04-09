import React from 'react';

function SectionTherapists() {
  return (
    <div className="section-therapists tf-spacing-5" style={{ padding: '50px 0', backgroundColor: '#f7f4f2' }}>
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
            Meet Our Therapists
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
            Our Expert Therapists
          </h3>
        </div>
        <div className="row">
          {/* Therapist 1 */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-therapist"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <img
                src="/images/therapists/therapist-1.jpg"
                alt="Therapist 1"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ padding: '20px' }}>
                <h5
                  style={{ color: '#3c210e', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}
                >
                  Dr. Anna Smith
                </h5>
                <p style={{ color: '#3c210e', fontSize: '14px', marginBottom: '10px' }}>
                  Licensed Psychologist
                </p>
                <p
                  style={{
                    color: '#3c210e',
                    fontSize: '14px',
                    lineHeight: '20px',
                  }}
                >
                  Specializing in relationship counseling and stress management with over 10 years of experience.
                </p>
              </div>
            </div>
          </div>
          {/* Therapist 2 */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-therapist"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <img
                src="/images/therapists/therapist-2.jpg"
                alt="Therapist 2"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ padding: '20px' }}>
                <h5
                  style={{ color: '#3c210e', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}
                >
                  Dr. Mark Johnson
                </h5>
                <p style={{ color: '#3c210e', fontSize: '14px', marginBottom: '10px' }}>
                  Clinical Therapist
                </p>
                <p
                  style={{
                    color: '#3c210e',
                    fontSize: '14px',
                    lineHeight: '20px',
                  }}
                >
                  Expert in self-confidence and trauma counseling, dedicated to helping clients thrive.
                </p>
              </div>
            </div>
          </div>
          {/* Therapist 3 */}
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div
              className="box-therapist"
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <img
                src="/images/therapists/therapist-3.jpg"
                alt="Therapist 3"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ padding: '20px' }}>
                <h5
                  style={{ color: '#3c210e', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}
                >
                  Dr. Lisa Brown
                </h5>
                <p style={{ color: '#3c210e', fontSize: '14px', marginBottom: '10px' }}>
                  Family Therapist
                </p>
                <p
                  style={{
                    color: '#3c210e',
                    fontSize: '14px',
                    lineHeight: '20px',
                  }}
                >
                  Focused on family dynamics and child therapy, with a compassionate approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTherapists;