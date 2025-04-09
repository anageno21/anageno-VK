import React from 'react';
import { Link } from 'react-router-dom';

function PageTitle() {
  return (
    <div className="page-title-homepage-1">
      <video
        playsInline
        autoPlay
        muted
        loop
        className="page-video"
      >
        <source src="/video/video-page-title.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="tf-container xl">
        <div className="row">
          <div className="col-12">
            <div className="content-inner">
              <h2 className="title">
                Take The First Step Towards A Balanced & Fulfilling Life.
              </h2>
              <div className="content-right">
                <p className="text-1 description">
                  With a team of highly qualified psychologists, we offer effective therapy tailored to your needs. Trust us to support you every step of the way.
                </p>
                <div className="bot">
                  <Link to="/contact-us" className="tf-btn style-default btn-color-secondary pd-28">
                    <span>
                      Book a Consultation <i className="icon-ArrowRight"></i>
                    </span>
                  </Link>
                  <p className="h6 phone">
                    Or Call Us: <span>1-555-678-8888</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;