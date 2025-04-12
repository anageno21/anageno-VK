import React from 'react';

function MobileNav() {
  return (
    <div className="offcanvas offcanvas-start mobile-nav-wrap" tabIndex="-1" id="menu-mobile" aria-labelledby="menu-mobile">
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
          <a href="/">
            <img src="/images/logo/logo@2x.png" alt="Anageno Logo" />
          </a>
        </div>
        <div data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon-close"></i>
        </div>
      </div>
      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          <ul id="menu-mobile-menu">
            <li className="menu-item menu-item-has-children-mobile current-menu-item">
              <a
                href="#dropdown-menu-one"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-one"
              >
                Home
              </a>
              <div id="dropdown-menu-one" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item current-item"><a href="/">Homepage 01</a></li>
                  <li className="menu-item"><a href="/home-02.html">Homepage 02</a></li>
                  <li className="menu-item"><a href="/home-03.html">Homepage 03</a></li>
                  <li className="menu-item"><a href="/home-04.html">Homepage 04</a></li>
                  <li className="menu-item"><a href="/home-slide-text-scroll.html">Home slide text scroll</a></li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a href="/about.html" className="item-menu-mobile">About</a>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <a
                href="#dropdown-menu-two"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-two"
              >
                Services
              </a>
              <div id="dropdown-menu-two" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item">
                    <a href="/our-service.html">Our Service</a>
                  </li>
                  <li className="menu-item">
                    <a href="/service-details.html">Service Details</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a href="/our-therapists.html" className="item-menu-mobile">Therapists</a>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <a
                href="#dropdown-menu-three"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-three"
              >
                Pages
              </a>
              <div id="dropdown-menu-three" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item menu-item-has-children-mobile-2">
                    <a
                      href="#sub-product-one"
                      className="item-menu-mobile collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="sub-product-one"
                    >
                      Shop
                    </a>
                    <div id="sub-product-one" className="collapse">
                      <ul className="sub-mobile">
                        <li className="menu-item">
                          <a href="/our-product.html" className="item-menu-mobile">Shop Product</a>
                        </li>
                        <li className="menu-item">
                          <a href="/shop-cart.html" className="item-menu-mobile">Shop Cart</a>
                        </li>
                        <li className="menu-item">
                          <a href="/shop-check-out.html" className="item-menu-mobile">Check Out</a>
                        </li>
                        <li className="menu-item">
                          <a href="/product-details.html" className="item-menu-mobile">Shop Details</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item"><a href="/book-appointment.html">Appointment</a></li>
                </ul>
              </div>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <a
                href="#dropdown-menu-four"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-four"
              >
                Blogs
              </a>
              <div id="dropdown-menu-four" className="collapse" data-bs-parent="#menu-mobile-menu">
                <ul className="sub-mobile">
                  <li className="menu-item"><a href="/blog-grid.html">Blog Grid</a></li>
                  <li className="menu-item"><a href="/blog-details.html">Blog Details 1</a></li>
                  <li className="menu-item"><a href="/blog-details-2.html">Blog Details 2</a></li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <a href="/contact-us.html" className="tem-menu-mobile">Contact</a>
            </li>
          </ul>
          <div className="support">
            <a href="#" className="text-need">Need help?</a>
            <ul className="mb-info">
              <li>
                Call Us Now: <span className="number">1-555-678-8888</span>
              </li>
              <li>
                Support 24/7: <a href="mailto:support@anageno.com">support@anageno.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;