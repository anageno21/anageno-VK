import React, { useState } from 'react';
import Slider from './Slider';

const TestimonialsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const mainSlides = [
    {
      content: (
        <div className="testimonial-item">
          <p>"This spa is amazing! I felt so relaxed."</p>
          <h4>John Doe</h4>
        </div>
      ),
    },
    {
      content: (
        <div className="testimonial-item">
          <p>"Best massage I've ever had!"</p>
          <h4>Jane Smith</h4>
        </div>
      ),
    },
  ];

  const thumbSlides = [
    {
      content: <img src="/images/testimonials/thumb1.jpg" alt="Thumb 1" />,
    },
    {
      content: <img src="/images/testimonials/thumb2.jpg" alt="Thumb 2" />,
    },
  ];

  const mainOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: '.pagination-testimonial',
      clickable: true,
    },
    thumbs: { swiper: thumbsSwiper },
  };

  const thumbOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    onSwiper: setThumbsSwiper,
  };

  return (
    <section className="testimonials-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider slides={mainSlides} options={mainOptions} thumbsSwiper={thumbsSwiper} />
            <Slider slides={thumbSlides} options={thumbOptions} />
            <div className="pagination-testimonial"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;