import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header-main" className="header header-style-absolute header-default">
      <div className="header-inner">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <Link to="/" className="site-logo">
                    <img
                      id="logo_header"
                      alt=""
                      src="/images/logo/logo-white.png"
                      data-retina="/images/logo/logo-white@2x.png"
                    />
                  </Link>
                </div>
                <div className="header-logo-2">
                  <Link to="/" className="site-logo">
                    <img
                      id="logo_header"
                      alt=""
                      src="/images/logo/logo.png"
                      data-retina="/images/logo/logo@2x.png"
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    <li className="has-child relative current-menu-item">
                      <Link to="/">Home</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/">Homepage 01</Link>
                        </li>
                        <li>
                          <Link to="/home-02">Homepage 02</Link>
                        </li>
                        <li className="current-item">
                          <Link to="/home-03">Homepage 03</Link>
                        </li>
                        <li>
                          <Link to="/home-04">Homepage 04</Link>
                        </li>
                        <li>
                          <Link to="/home-slide-text-scroll">Home slide text scroll</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child">
                      <Link to="/our-service">Services</Link>
                      <div className="sub-menu service-link">
                        <div className="tf-container">
                          <div className="row">
                            <div className="col-12">
                              <div className="wrap-cta">
                                <div className="left">
                                  <h5 className="wg-title">Counseling & Therapy Services</h5>
                                  <div className="wrap-service">
                                    <div className="service-item-list">
                                      <h6><Link to="/service-details">Family Therapy</Link></h6>
                                      <p className="text-2">
                                        Improve family relationships, resolve conflicts, and build a healthy living environment.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><Link to="/service-details">Child & Adolescent Therapy</Link></h6>
                                      <p className="text-2">
                                        Specialized support for children and teens, helping them navigate emotional challenges.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><Link to="/service-details">Group Therapy</Link></h6>
                                      <p className="text-2">
                                        Join others with similar challenges, sharing experiences and support in a guided group setting.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><Link to="/service-details">Couples Therapy</Link></h6>
                                      <p className="text-2">
                                        Enhance understanding affection between couples, helping to strengthen the relationship.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><Link to="/service-details">Trauma Counseling</Link></h6>
                                      <p className="text-2">
                                        Focused therapy to help you heal from past trauma and regain control over your life.
                                      </p>
                                    </div>
                                    <div className="service-item-list">
                                      <h6><Link to="/service-details">Individual Counseling</Link></h6>
                                      <p className="text-2">
                                        Personal psychological support to help you overcome stress, anxiety, and regain confidence.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  <h5 className="wg-title">What’s New</h5>
                                  <div className="wrap-list">
                                    <div className="box-listings">
                                      <div className="image-wrap">
                                        <img src="/images/blog/blog-details-list-1.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                        <ul className="meta">
                                          <li className="text-2">Oct 17, 2024</li>
                                        </ul>
                                        <div className="title text-1 fw-5 line-clamp-2">
                                          <Link to="/blog-details" className="line-clamp-2">
                                            How Cognitive Behavioral Therapy Can Transform
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="box-listings">
                                      <div className="image-wrap">
                                        <img src="/images/blog/blog-details-list-2.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                        <ul className="meta">
                                          <li className="text-2">Oct 19, 2024</li>
                                        </ul>
                                        <div className="title text-1 fw-5">
                                          <Link to="/blog-details" className="line-clamp-2">
                                            Effective Strategies for Managing Anxiety
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="box-listings">
                                      <div className="image-wrap">
                                        <img src="/images/blog/blog-details-list-4.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                        <ul className="meta">
                                          <li className="text-2">Oct 26, 2024</li>
                                        </ul>
                                        <div className="title text-1 fw-5">
                                          <Link to="/blog-details" className="line-clamp-2">
                                            Techniques for Everyday Stress Relief
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-child relative">
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/our-therapists">Therapists</Link>
                        </li>
                        <li>
                          <Link to="/book-appointment">Appointment</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child relative">
                      <Link to="#">Shop</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/our-product">Our Product</Link>
                        </li>
                        <li>
                          <Link to="/shop-cart">Shop Cart</Link>
                        </li>
                        <li>
                          <Link to="/shop-check-out">Check Out</Link>
                        </li>
                        <li>
                          <Link to="/product-details">Shop Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child relative">
                      <Link to="#">Blogs</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog-grid">Blog Grid</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">Blog Details 1</Link>
                        </li>
                        <li>
                          <Link to="/blog-details-2">Blog Details 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="group-btn">
                    <a className="btn-find" href="#canvasSearch" data-bs-toggle="offcanvas">
                      <div className="icon">
                        <i className="icon-MagnifyingGlass"></i>
                      </div>
                    </a>
                    <Link to="/shop-cart" className="btn-shop-bag">
                      <div className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_10985_955)">
                            <g clipPath="url(#clip1_10985_955)">
                              <path
                                d="M20.0547 4.13965H3.55469C3.14047 4.13965 2.80469 4.47543 2.80469 4.88965V18.3896C2.80469 18.8039 3.14047 19.1396 3.55469 19.1396H20.0547C20.4689 19.1396 20.8047 18.8039 20.8047 18.3896V4.88965C20.8047 4.47543 20.4689 4.13965 20.0547 4.13965Z"
                                stroke="#3C210E"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2.80469 7.13965H20.8047"
                                stroke="#3C210E"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.5547 10.1396C15.5547 11.1342 15.1596 12.088 14.4563 12.7913C13.7531 13.4946 12.7992 13.8896 11.8047 13.8896C10.8101 13.8896 9.8563 13.4946 9.15304 12.7913C8.44978 12.088 8.05469 11.1342 8.05469 10.1396"
                                stroke="#3C210E"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_10985_955">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_10985_955">
                              <rect width="24" height="24" fill="white" transform="translate(-0.195312 -0.360352)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span>2</span>
                    </Link>
                  </div>
                  <div className="btn-get">
                    <Link to="/book-appointment" className="tf-btn style-default btn-color-secondary pd-40">
                      <span>Get Your Consult!</span>
                    </Link>
                  </div>
                  <div className="mobile-button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile" aria-controls="menu-mobile">
                    <i className="icon-menu"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;