import React from 'react';

function ShopPage() {
  return (
    <div className="main-content-2">
      {/* .page-title */}
      <div className="page-title">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">Our Products</h3>
              <ul className="breadcrumbs">
                <li><a href="/">Home</a></li>
                <li>Shops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* .section-product */}
      <section className="section-product">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="wg-filter">
                <div className="show">
                  <p><span>129</span> Products Recommended for You</p>
                </div>
                <div className="grop-filter">
                  <div className="item">
                    <div className="text-2 tag">Filters by:</div>
                    <div className="nice-select">
                      <span className="current">Trauma</span>
                      <ul className="list">
                        <li className="option selected">
                          <div className="content">
                            <span>Trauma 1</span>
                          </div>
                        </li>
                        <li className="option">
                          <div className="content">
                            <span>Trauma 2</span>
                          </div>
                        </li>
                        <li className="option">
                          <div className="content">
                            <span>Trauma 3</span>
                          </div>
                        </li>
                        <li className="option">
                          <div className="content">
                            <span>Trauma 4</span>
                          </div>
                        </li>
                        <li className="option">
                          <div className="content">
                            <span>Trauma 5</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item">
                    <div className="text-2">Sort by:</div>
                    <div className="nice-select">
                      <span className="current">Best Selling</span>
                      <ul className="list">
                        <li className="option selected">
                          <div className="content">
                            <span>Best Selling</span>
                          </div>
                        </li>
                        <li className="option">
                          <div className="content">
                            <span>Sale Off</span>
                          </div>
                        </li>
                        <li className="option">
                          <div className="content">
                            <span>New</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-layout-4">
                <div className="product-item hover-img">
                  <div className="image-wrap">
                    <a href="/product-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/product-item-1.jpg"
                        src="/images/section/product-item-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="box-tags-item">
                      <a href="#" className="item text-2 sale">-32%</a>
                    </div>
                    <div className="list-product-btn">
                      <div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
                        <i className="icon-Wishlist"></i>
                        <span className="tooltip">Add to Wishlist</span>
                      </div>
                      <div className="box-compare btn-icon hover-tooltip">
                        <i className="icon-GitDiff"></i>
                        <span className="tooltip">Add to Compare</span>
                      </div>
                      <div className="box-view btn-icon hover-tooltip">
                        <i className="icon-view"></i>
                        <span className="tooltip">view</span>
                      </div>
                    </div>
                    <a className="tf-btn style-default btn-color-secondary pd-23" href="/shop-cart">
                      <span>Add To Cart</span>
                    </a>
                  </div>
                  <div className="content">
                    <div className="wrap-rating-product">
                      <div className="rating">
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                      </div>
                      <span>(1.234)</span>
                    </div>
                    <div className="name text-3 fw-6">
                      <a href="/product-details">Healing Water for the Soul</a>
                    </div>
                    <div className="price h6">$68.00 <span>$98.00</span></div>
                  </div>
                </div>
                <div className="product-item hover-img">
                  <div className="image-wrap">
                    <a href="/product-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/product-item-2.jpg"
                        src="/images/section/product-item-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="box-tags-item">
                      <a href="#" className="item text-2 new">NEW</a>
                    </div>
                    <div className="list-product-btn">
                      <div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
                        <i className="icon-Wishlist"></i>
                        <span className="tooltip">Add to Wishlist</span>
                      </div>
                      <div className="box-compare btn-icon hover-tooltip">
                        <i className="icon-GitDiff"></i>
                        <span className="tooltip">Add to Compare</span>
                      </div>
                      <div className="box-view btn-icon hover-tooltip">
                        <i className="icon-view"></i>
                        <span className="tooltip">view</span>
                      </div>
                    </div>
                    <a className="tf-btn style-default btn-color-secondary pd-23" href="/shop-cart">
                      <span>Add To Cart</span>
                    </a>
                  </div>
                  <div className="content">
                    <div className="wrap-rating-product">
                      <div className="rating">
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                      </div>
                      <span>(1.234)</span>
                    </div>
                    <div className="name text-3 fw-6">
                      <a href="/product-details">Royal Agarwood</a>
                    </div>
                    <div className="price h6">$68.00</div>
                  </div>
                </div>
                <div className="product-item hover-img">
                  <div className="image-wrap">
                    <a href="/product-details">
                      <img
                        className="lazyload"
                        data-src="/images/section/product-item-3.jpg"
                        src="/images/section/product-item-3.jpg"
                        alt=""
                      />
                    </a>
                    <div className="box-tags-item">
                      <a href="#" className="item text-2 new">NEW</a>
                    </div>
                    <div className="list-product-btn">
                      <div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
                        <i className="icon-Wishlist"></i>
                        <span className="tooltip">Add to Wishlist</span>
                      </div>
                      <div className="box-compare btn-icon hover-tooltip">
                        <i className="icon-GitDiff"></i>
                        <span className="tooltip">Add to Compare</span>
                      </div>
                      <div className="box-view btn-icon hover-tooltip">
                        <i className="icon-view"></i>
                        <span className="tooltip">view</span>
                      </div>
                    </div>
                    <a className="tf-btn style-default btn-color-secondary pd-23" href="/shop-cart">
                      <span>Add To Cart</span>
                    </a>
                  </div>
                  <div className="content">
                    <div className="wrap-rating-product">
                      <div className="rating">
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                        <i className="icon-favorite_major"></i>
                      </div>
                      <span>(1.234)</span>
                    </div>
                    <div className="name text-3 fw-6">
                      <a href="/product-details">All Water Has Perfect Memory</a>
                    </div>
                    <div className="price h6">$68.00</div>
                  </div>
                </div>
                {/* Προσθέστε περισσότερα προϊόντα αν θέλετε */}
              </div>
              <ul className="wg-pagination">
                <li className="active">1</li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="icon-CaretRight"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
