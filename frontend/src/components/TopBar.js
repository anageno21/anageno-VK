import React from 'react';

function TopBar() {
  return (
    <div className="tf-top-bar">
      <div className="wrap-top-bar">
        <div className="top-bar-left">
          <ul className="top-info">
            <li className="text-2">
              <i className="icon-MapPin"></i>101 E 129th St, East Chicago, IN 46312, US
            </li>
            <li className="text-2">
              <i className="icon-Envelope"></i>
              <a href="mailto:info@anageno.com">info@anageno.com</a>
            </li>
          </ul>
          <div className="tf-dropdown-sort tf-languages" data-bs-toggle="dropdown">
            <div className="btn-select">
              <span className="text-sort-value">EN</span>
              <i className="icon-CaretDown"></i>
            </div>
            <div className="dropdown-menu">
              <div className="select-item active">
                <span className="text-value-item">EN</span>
              </div>
              <div className="select-item">
                <span className="text-value-item">VIE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="top-bar-right">
          <ul className="list">
            <li>
              <i className="icon-PhoneCall"></i>1-555-678-8888
            </li>
            <li>
              <ul className="tf-social style-1">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_11072_5627)">
                        <path
                          d="M6.25 11.25L8.75 8.75L11.25 11.25L13.75 8.75"
                          stroke="#3C210E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.24382 16.4932C7.81923 17.405 9.67248 17.7127 11.458 17.359C13.2436 17.0053 14.8396 16.0143 15.9484 14.5708C17.0573 13.1273 17.6033 11.3298 17.4847 9.51341C17.3662 7.69704 16.5911 5.98577 15.304 4.69866C14.0169 3.41156 12.3056 2.63646 10.4892 2.51789C8.67284 2.39932 6.87533 2.94537 5.43182 4.05422C3.98831 5.16308 2.99733 6.75906 2.64363 8.54461C2.28993 10.3302 2.59766 12.1834 3.50944 13.7588L2.5321 16.6768C2.49538 16.7869 2.49005 16.9051 2.51671 17.0181C2.54337 17.131 2.60097 17.2344 2.68306 17.3165C2.76514 17.3985 2.86847 17.4561 2.98145 17.4828C3.09443 17.5095 3.2126 17.5041 3.32273 17.4674L6.24382 16.4932Z"
                          stroke="#3C210E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11072_5627">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                {/* Πρόσθεσε τα υπόλοιπα SVG icons με έγκυρα href */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-show-top">
        <span className="arrows"></span>
      </div>
    </div>
  );
}

export default TopBar;