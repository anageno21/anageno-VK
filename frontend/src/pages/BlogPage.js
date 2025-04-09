import React from 'react';

function BlogPage() {
  return (
    <div className="main-content">
      {/* .section-news */}
      <section className="section-news tf-spacing-2 style-pagination">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section">
                <p className="text-2 sub wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  Favourite Topics
                </p>
                <h3 className="wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  Healingy Blog & Resources
                </h3>
                <p className="description text-1 lh-30 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                  Your go-to source for mental health insights, tools, and advice.
                </p>
              </div>
              <div className="swiper-container slider-layout-4">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="article-blog-item hover-img h-400 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0s">
                      <div className="image-wrap">
                        <a href="/blog-details">
                          <img
                            className="lazyload"
                            data-src="/images/section/resources-1-1.jpg"
                            src="/images/section/resources-1-1.jpg"
                            alt=""
                          />
                        </a>
                        <div className="date-time">
                          <div className="content">
                            <p className="entry-day">12</p>
                            <p className="entry-month fw-book">SEP</p>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <p className="sub"><a href="#">Therapy</a></p>
                        <h5 className="title">
                          <a href="/blog-details">Mindfulness For Better Mental Health</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="article-blog-item hover-img h-400 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.1s">
                      <div className="image-wrap">
                        <a href="/blog-details">
                          <img
                            className="lazyload"
                            data-src="/images/section/resources-1-2.jpg"
                            src="/images/section/resources-1-2.jpg"
                            alt=""
                          />
                        </a>
                        <div className="date-time">
                          <div className="content">
                            <p className="entry-day">14</p>
                            <p className="entry-month fw-book">SEP</p>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <p className="sub"><a href="#">Wellness</a></p>
                        <h5 className="title">
                          <a href="/blog-details">Self-Care for Emotional Well-being</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="article-blog-item hover-img h-400 wow fadeInUp" data-wow-duration="1000" data-wow-delay="0.2s">
                      <div className="image-wrap">
                        <a href="/blog-details">
                          <img
                            className="lazyload"
                            data-src="/images/section/resources-1-3.jpg"
                            src="/images/section/resources-1-3.jpg"
                            alt=""
                          />
                        </a>
                        <div className="date-time">
                          <div className="content">
                            <p className="entry-day">16</p>
                            <p className="entry-month fw-book">SEP</p>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <p className="sub"><a href="#">Therapy</a></p>
                        <h5 className="title">
                          <a href="/blog-details">Cognitive Behavioral Therapy for Stress</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination pagination-layout"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;