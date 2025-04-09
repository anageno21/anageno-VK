import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Εισαγωγή των Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

function SectionTestimonials() {
  const testimonials = [
    {
      image: '/images/testimonials/testimonial-1.jpg',
      text: "We sincerely appreciate the outstanding support and guidance your team provided. Special thanks to Susan and Vaibhav for their dedication.",
      name: "John Smith",
      role: "CEO Themes Flat",
    },
    {
      image: '/images/testimonials/testimonial-2.jpg',
      text: "The sessions were incredibly helpful in improving my relationship with my partner. I highly recommend Anageno!",
      name: "John D.",
      role: "Client",
    },
    {
      image: '/images/testimonials/testimonial-3.jpg',
      text: "I felt supported and understood throughout my therapy journey. Anageno made a huge difference in my life.",
      name: "Emily R.",
      role: "Client",
    },
    {
      image: '/images/testimonials/testimonial-4.jpg',
      text: "The support I received from Anageno was exceptional. I feel more confident and at peace now.",
      name: "Michael B.",
      role: "Client",
    },
    {
      image: '/images/testimonials/testimonial-5.jpg',
      text: "Anageno provided me with the tools to manage my anxiety. I’m so grateful for their guidance!",
      name: "Laura K.",
      role: "Client",
    },
  ];

  return (
    <div className="section-testimonials tf-spacing-4" style={{ padding: '50px 0', backgroundColor: 'var(--Color-1)' }}>
      <div className="tf-container">
        <div className="heading-section text-center">
          <p
            className="text-2 sub"
            style={{
              color: 'var(--Primary)',
              fontSize: '12px',
              marginBottom: '10px',
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}
          >
            Client Testimonials
          </p>
          <h3
            style={{
              color: '#000',
              fontSize: '32px',
              marginBottom: '10px',
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            What Our Clients Are Saying
          </h3>
          <p
            className="description"
            style={{
              color: 'var(--Color-3)',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            Hear firsthand accounts of healing and positive change.
          </p>
        </div>
        <div className="wrap-testimonials">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            modules={[Navigation, Pagination]}
            className="slider-testimonial"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="wg-testimonial">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    <div className="image-wrap">
                      <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px', borderRadius: '16px', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <div className="rating" style={{ marginBottom: '20px' }}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star" style={{ color: '#f4d118', fontSize: '16px', marginRight: '5px' }}></i>
                        ))}
                      </div>
                      <p
                        className="description text-1"
                        style={{
                          color: '#000',
                          fontSize: '18px',
                          lineHeight: '28px',
                          marginBottom: '20px',
                          position: 'relative',
                        }}
                      >
                        <span style={{ position: 'absolute', left: '-20px', top: '-10px', fontSize: '30px', color: '#000' }}>"</span>
                        {item.text}
                        <span style={{ position: 'absolute', right: '-20px', bottom: '-10px', fontSize: '30px', color: '#000' }}>"</span>
                      </p>
                      <div className="bot" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h5
                            className="name"
                            style={{ color: '#000', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}
                          >
                            {item.name}
                          </h5>
                          <p style={{ color: 'var(--Color-3)', fontSize: '14px' }}>{item.role}</p>
                        </div>
                        <a
                          href="#"
                          className="tf-btn-link"
                          style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--Primary)', fontWeight: '600' }}
                        >
                          <span>Read More Stories</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination" style={{ marginTop: '20px' }}></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
}

export default SectionTestimonials;