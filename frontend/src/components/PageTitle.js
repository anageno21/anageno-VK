import React from 'react';
import Slider from './Slider';

const PageTitle = ({ title, breadcrumbs, isHomePage }) => {
  const slides = [
    {
      content: (
        <div className="page-title-slide">
          <h1>Welcome to Our Spa</h1>
          <p>Relax, Rejuvenate, Refresh</p>
        </div>
      ),
    },
    {
      content: (
        <div className="page-title-slide">
          <h1>Discover Tranquility</h1>
          <p>Experience the ultimate relaxation</p>
        </div>
      ),
    },
    {
      content: (
        <div className="page-title-slide">
          <h1>Luxury Spa Services</h1>
          <p>Indulge in our premium treatments</p>
        </div>
      ),
    },
  ];

  const options = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 1000,
    navigation: {
      nextEl: '.page-title-next',
      prevEl: '.page-title-prev',
    },
    pagination: {
      el: '.pagination-page-title-home',
      clickable: true,
    },
  };

  return (
    <section className="page-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {isHomePage ? (
              <div className="page-title-home">
                <div className="slider-page-title-home">
                  <Slider slides={slides} options={options} />
                  <div className="page-title-navigation">
                    <button className="page-title-prev">Prev</button>
                    <button className="page-title-next">Next</button>
                  </div>
                  <div className="pagination-page-title-home"></div>
                </div>
              </div>
            ) : (
              <div className="page-title-inner">
                <h1>{title}</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {breadcrumbs.map((crumb, index) => (
                      <li key={index} className="breadcrumb-item">
                        {crumb.link ? (
                          <a href={crumb.link}>{crumb.text}</a>
                        ) : (
                          <span>{crumb.text}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;