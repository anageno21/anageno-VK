import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css'; // Σωστή εισαγωγή για το CSS του Swiper

function HomePage() {
  useEffect(() => {
    console.log('Swiper initialization started for page-title-homepage-3');
    const swiper1 = new Swiper('.page-title-homepage-3 .swiper-container', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.pagination-page-title-home',
        clickable: true,
      },
      navigation: false, // Απενεργοποίηση των navigation arrows
    });
    console.log('Swiper 1 slides:', swiper1.slides.length);

    console.log('Swiper initialization started for SectionBlogs');
    const swiper2 = new Swiper('.section-news .swiper-container.slider-layout-3', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.pagination-layout',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
    console.log('Swiper 2 slides:', swiper2.slides.length);

    return () => {
      swiper1.destroy();
      swiper2.destroy();
    };
  }, []);

  return (
    <div className="main-content home-page-3">
      {/* .page-title-homepage-3 */}
      <div className="page-title-homepage-3">
        <div className="swiper-container slide-effect-fade slider-page-title-home">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="/images/page-title/page-title-home-3.1.jpg"
                alt="Slide 1"
                onLoad={() => console.log('Image loaded: page-title-home-3.1.jpg')}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/850x850?text=Slide+1';
                  console.log('Error loading image: page-title-home-3.1.jpg');
                }}
              />
              <div className="content-inner">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="wrap-content">
                        <div className="heading">
                          <h2 className="title text-white">Support Your Child’s Emotional Growth</h2>
                          <p className="description text-white">
                            Our specialized therapy for children offers a safe and nurturing environment where your child can express their feelings, develop emotional resilience, and navigate life’s challenges with confidence.
                          </p>
                        </div>
                        <a className="tf-btn style-default btn-color-secondary pd-28" href="/contact-us">
                          <span>Book a Consultation <i className="icon-ArrowRight arr-1"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                src="/images/page-title/page-title-home-3.2.jpg"
                alt="Slide 2"
                onLoad={() => console.log('Image loaded: page-title-home-3.2.jpg')}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/850x850?text=Slide+2';
                  console.log('Error loading image: page-title-home-3.2.jpg');
                }}
              />
              <div className="content-inner">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="wrap-content mx-auto text-center">
                        <div className="heading">
                          <h2 className="title text-white">Strengthen Your Emotional Core</h2>
                          <p className="description text-white">
                            Our therapy sessions focus on empowering you to regain emotional balance and resilience. Let us guide you through life’s obstacles with care and proven strategies.
                          </p>
                        </div>
                        <a className="tf-btn style-default btn-color-secondary pd-28 mx-auto" href="/contact-us">
                          <span>Book a Consultation <i className="icon-ArrowRight arr-1"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                src="/images/page-title/page-title-home-3.3.jpg"
                alt="Slide 3"
                onLoad={() => console.log('Image loaded: page-title-home-3.3.jpg')}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/850x850?text=Slide+3';
                  console.log('Error loading image: page-title-home-3.3.jpg');
                }}
              />
              <div className="content-inner">
                <div className="tf-container">
                  <div className="row">
                    <div className="col-12">
                      <div className="wrap-content ml-auto text-end">
                        <div className="heading">
                          <h2 className="title text-white">Renew Your Strength and Resilience</h2>
                          <p className="description text-white">
                            We focus on renewing your strength and resilience. Our tailored therapy sessions offer the support and strategies you need to overcome challenges & thrive.
                          </p>
                        </div>
                        <a className="tf-btn style-default btn-color-secondary pd-28 ml-auto" href="/contact-us">
                          <span>Book a Consultation <i className="icon-ArrowRight arr-1"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination pagination-page-title-home"></div>
        </div>
      </div>

      {/* SectionBlogs */}
      <section className="section-news">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center">
                <h2 className="title">Latest News & Articles</h2>
                <p className="description">
                  Stay updated with our latest insights on mental health and therapy.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="swiper-container slider-layout-3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="blog-post">
                      <div className="image">
                        <img src="/images/blog/blog-1.jpg" alt="Blog 1" />
                      </div>
                      <div className="content">
                        <h3 className="title">Understanding Anxiety in Children</h3>
                        <p className="description">
                          Learn how to identify and manage anxiety in children with these expert tips.
                        </p>
                        <a href="/blog/understanding-anxiety-in-children" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-post">
                      <div className="image">
                        <img src="/images/blog/blog-2.jpg" alt="Blog 2" />
                      </div>
                      <div className="content">
                        <h3 className="title">The Benefits of Mindfulness</h3>
                        <p className="description">
                          Discover how mindfulness can improve your mental well-being and reduce stress.
                        </p>
                        <a href="/blog/benefits-of-mindfulness" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog-post">
                      <div className="image">
                        <img src="/images/blog/blog-3.jpg" alt="Blog 3" />
                      </div>
                      <div className="content">
                        <h3 className="title">Coping with Stress at Work</h3>
                        <p className="description">
                          Practical strategies to manage workplace stress and maintain a healthy work-life balance.
                        </p>
                        <a href="/blog/coping-with-stress-at-work" className="read-more">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination pagination-layout"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;