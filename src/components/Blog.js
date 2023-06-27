import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
      {/* Start Page Title */}
      <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Blog Masonry (3 in Row)</h2>
              <ul>
                <li><Link href="index.html">Home</Link></li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title */}
        {/* Start Blog Area */}
        <section className="blog-area ptb-100">
          <div className="container">
            <div className="blog-items">
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/blog/img1.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Ideas</span>
                    <h3><Link href="#">The #1 eCommerce blog to grow your business</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/main-banner3.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Advice</span>
                    <h3><Link href="#">Latest ecommerce trend: The rise of shoppable posts</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/blog/img3.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Social</span>
                    <h3><Link href="#">Building eCommerce wave: Social media shopping</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/offer-bg2.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Boy</span>
                    <h3><Link href="#">The best eCommerce blogs for online retailers</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/blog/img2.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Platform</span>
                    <h3><Link href="#">The best ecommerce platform for growing sales</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/offer-bg.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Shipping</span>
                    <h3><Link href="#">Shipping impacts your customer’s experience</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/blog/img8.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Shipping</span>
                    <h3><Link href="#">A green brand finding roots in sustainability</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/main-banner4.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Shipping</span>
                    <h3><Link href="#">Shipping impacts your customer’s experience</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grid-item">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="#">
                      <img src="img/main-banner5.jpg" alt="image" />
                    </Link>
                    <div className="date">
                      <span>January 29, 2021</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <span className="category">Platform</span>
                    <h3><Link href="#">Discount shipping: faster and cheaper than ever</Link></h3>
                    <Link href="#" className="details-btn">Read Story</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Area */}
        {/* Start Facility Area */}
        <section className="facility-area pb-70">
          <div className="container">
            <div className="facility-slides owl-carousel owl-theme">
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-tracking" />
                </div>
                <h3>Free Shipping Worldwide</h3>
              </div>
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-return" />
                </div>
                <h3>Easy Return Policy</h3>
              </div>
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-shuffle" />
                </div>
                <h3>7 Day Exchange Policy</h3>
              </div>
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-sale" />
                </div>
                <h3>Weekend Discount Coupon</h3>
              </div>
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-credit-card" />
                </div>
                <h3>Secure Payment Methods</h3>
              </div>
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <h3>Track Your Package</h3>
              </div>
              <div className="single-facility-box">
                <div className="icon">
                  <i className="flaticon-customer-service" />
                </div>
                <h3>24/7 Customer Support</h3>
              </div>
            </div>
          </div>
        </section>
        {/* End Facility Area */}
        {/* Start Instagram Area */}
        <div id="insta-area" />
        {/* End Instagram Area */}
        {/* Start Sidebar Modal */}
        <div className="modal right fade sidebarModal" id="sidebarModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="modal-body">
                <div className="sidebar-about-content">
                  <h3>About The Store</h3>
                  <div className="about-the-store">
                    <p>One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className="sidebar-contact-info">
                      <li><i className="bx bx-map" /> <Link href="#" target="_blank">Wonder Street, USA, New York</Link></li>
                      <li><i className="bx bx-phone-call" /> <Link href="tel:+01321654214">+01 321 654 214</Link></li>
                      <li><i className="bx bx-envelope" /> <Link href="mailto:hello@xton.com">hello@xton.com</Link></li>
                    </ul>
                  </div>
                  <ul className="social-link">
                    <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-facebook" /></Link></li>
                    <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-twitter" /></Link></li>
                    <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-instagram" /></Link></li>
                    <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-linkedin" /></Link></li>
                    <li><Link href="#" className="d-block" target="_blank"><i className="bx bxl-pinterest-alt" /></Link></li>
                  </ul>
                </div>
                <div className="sidebar-new-in-store">
                  <h3>New In Store</h3>
                  <ul className="products-list">
                    <li>
                      <Link href="#"><img src="img/products/img1.jpg" alt="image" /></Link>
                    </li>
                    <li>
                      <Link href="#"><img src="img/products/img2.jpg" alt="image" /></Link>
                    </li>
                    <li>
                      <Link href="#"><img src="img/products/img3.jpg" alt="image" /></Link>
                    </li>
                    <li>
                      <Link href="#"><img src="img/products/img4.jpg" alt="image" /></Link>
                    </li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link href="#" className="shop-now-btn">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar Modal */}
        {/* Start QuickView Modal Area */}
        <div className="modal fade productsQuickView" id="productsQuickView" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="products-image">
                    <img src="img/quick-view-img.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="products-content">
                    <h3><Link href="#">Long Sleeve Leopard T-Shirt</Link></h3>
                    <div className="price">
                      <span className="old-price">$210.00</span>
                      <span className="new-price">$200.00</span>
                    </div>
                    <div className="products-review">
                      <div className="rating">
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                      </div>
                      <Link href="#" className="rating-count">3 reviews</Link>
                    </div>
                    <ul className="products-info">
                      <li><span>Vendor:</span> <Link href="#">Lereve</Link></li>
                      <li><span>Availability:</span> <Link href="#">In stock (7 items)</Link></li>
                      <li><span>Products Type:</span> <Link href="#">T-Shirt</Link></li>
                    </ul>
                    <div className="products-color-switch">
                      <h4>Color:</h4>
                      <ul>
                        <li><Link href="#" data-bs-toggle="tooltip" data-placement="top" title="Black" className="color-black" /></li>
                        <li><Link href="#" data-bs-toggle="tooltip" data-placement="top" title="White" className="color-white" /></li>
                        <li><Link href="#" data-bs-toggle="tooltip" data-placement="top" title="Green" className="color-green" /></li>
                        <li><Link href="#" data-bs-toggle="tooltip" data-placement="top" title="Yellow Green" className="color-yellowgreen" /></li>
                        <li><Link href="#" data-bs-toggle="tooltip" data-placement="top" title="Teal" className="color-teal" /></li>
                      </ul>
                    </div>
                    <div className="products-size-wrapper">
                      <h4>Size:</h4>
                      <ul>
                        <li><Link href="#">XS</Link></li>
                        <li className="active"><Link href="#">S</Link></li>
                        <li><Link href="#">M</Link></li>
                        <li><Link href="#">XL</Link></li>
                        <li><Link href="#">XXL</Link></li>
                      </ul>
                    </div>
                    <div className="products-add-to-cart">
                      <div className="input-counter">
                        <span className="minus-btn"><i className="bx bx-minus" /></span>
                        <input type="text" defaultValue={1} />
                        <span className="plus-btn"><i className="bx bx-plus" /></span>
                      </div>
                      <button type="submit" className="default-btn">Add to Cart</button>
                    </div>
                    <Link href="#" className="view-full-info">View Full Info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End QuickView Modal Area */}
        {/* Start Shopping Cart Modal */}
        <div className="modal right fade shoppingCartModal" id="shoppingCartModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="modal-body">
                <h3>My Cart (3)</h3>
                <div className="products-cart-content">
                  <div className="products-cart">
                    <div className="products-image">
                      <Link href="#"><img src="img/products/img1.jpg" alt="image" /></Link>
                    </div>
                    <div className="products-content">
                      <h3><Link href="#">Long Sleeve Leopard T-Shirt</Link></h3>
                      <span>Blue / XS</span>
                      <div className="products-price">
                        <span>1</span>
                        <span>x</span>
                        <span className="price">$250.00</span>
                      </div>
                      <Link href="#" className="remove-btn"><i className="bx bx-trash" /></Link>
                    </div>
                  </div>
                  <div className="products-cart">
                    <div className="products-image">
                      <Link href="#"><img src="img/products/img2.jpg" alt="image" /></Link>
                    </div>
                    <div className="products-content">
                      <h3><Link href="#">Causal V-Neck Soft Raglan</Link></h3>
                      <span>Blue / XS</span>
                      <div className="products-price">
                        <span>1</span>
                        <span>x</span>
                        <span className="price">$200.00</span>
                      </div>
                      <Link href="#" className="remove-btn"><i className="bx bx-trash" /></Link>
                    </div>
                  </div>
                  <div className="products-cart">
                    <div className="products-image">
                      <Link href="#"><img src="img/products/img3.jpg" alt="image" /></Link>
                    </div>
                    <div className="products-content">
                      <h3><Link href="#">Hanes Men's Pullover</Link></h3>
                      <span>Blue / XS</span>
                      <div className="products-price">
                        <span>1</span>
                        <span>x</span>
                        <span className="price">$200.00</span>
                      </div>
                      <Link href="#" className="remove-btn"><i className="bx bx-trash" /></Link>
                    </div>
                  </div>
                </div>
                <div className="products-cart-subtotal">
                  <span>Subtotal</span>
                  <span className="subtotal">$524.00</span>
                </div>
                <div className="products-cart-btn">
                  <Link href="#" className="default-btn">Proceed to Checkout</Link>
                  <Link href="#" className="optional-btn">View Shopping Cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Shopping Cart Modal */}
        {/* Start Wishlist Modal */}
        <div className="modal right fade shoppingWishlistModal" id="shoppingWishlistModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="modal-body">
                <h3>My Wish List (3)</h3>
                <div className="products-cart-content">
                  <div className="products-cart">
                    <div className="products-image">
                      <Link href="#"><img src="img/products/img1.jpg" alt="image" /></Link>
                    </div>
                    <div className="products-content">
                      <h3><Link href="#">Long Sleeve Leopard T-Shirt</Link></h3>
                      <span>Blue / XS</span>
                      <div className="products-price">
                        <span>1</span>
                        <span>x</span>
                        <span className="price">$250.00</span>
                      </div>
                      <Link href="#" className="remove-btn"><i className="bx bx-trash" /></Link>
                    </div>
                  </div>
                  <div className="products-cart">
                    <div className="products-image">
                      <Link href="#"><img src="img/products/img2.jpg" alt="image" /></Link>
                    </div>
                    <div className="products-content">
                      <h3><Link href="#">Causal V-Neck Soft Raglan</Link></h3>
                      <span>Blue / XS</span>
                      <div className="products-price">
                        <span>1</span>
                        <span>x</span>
                        <span className="price">$200.00</span>
                      </div>
                      <Link href="#" className="remove-btn"><i className="bx bx-trash" /></Link>
                    </div>
                  </div>
                  <div className="products-cart">
                    <div className="products-image">
                      <Link href="#"><img src="img/products/img3.jpg" alt="image" /></Link>
                    </div>
                    <div className="products-content">
                      <h3><Link href="#">Hanes Men's Pullover</Link></h3>
                      <span>Blue / XS</span>
                      <div className="products-price">
                        <span>1</span>
                        <span>x</span>
                        <span className="price">$200.00</span>
                      </div>
                      <Link href="#" className="remove-btn"><i className="bx bx-trash" /></Link>
                    </div>
                  </div>
                </div>
                <div className="products-cart-btn">
                  <Link href="#" className="optional-btn">View Shopping Cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Wishlist Modal */}
        {/* Start Size Guide Modal Area */}
        <div className="modal fade sizeGuideModal" id="sizeGuideModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="modal-sizeguide">
                <h3>Size Guide</h3>
                <p>This is an approximate conversion table to help you find your size.</p>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Italian</th>
                        <th>Spanish</th>
                        <th>German</th>
                        <th>UK</th>
                        <th>US</th>
                        <th>Japanese</th>
                        <th>Chinese</th>
                        <th>Russian</th>
                        <th>Korean</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>34</td>
                        <td>30</td>
                        <td>28</td>
                        <td>4</td>
                        <td>00</td>
                        <td>3</td>
                        <td>155/75A</td>
                        <td>36</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td>36</td>
                        <td>32</td>
                        <td>30</td>
                        <td>6</td>
                        <td>0</td>
                        <td>5</td>
                        <td>155/80A</td>
                        <td>38</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>34</td>
                        <td>32</td>
                        <td>8</td>
                        <td>2</td>
                        <td>7</td>
                        <td>160/84A</td>
                        <td>40</td>
                        <td>55</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>36</td>
                        <td>34</td>
                        <td>10</td>
                        <td>4</td>
                        <td>9</td>
                        <td>165/88A</td>
                        <td>42</td>
                        <td>55</td>
                      </tr>
                      <tr>
                        <td>42</td>
                        <td>38</td>
                        <td>36</td>
                        <td>12</td>
                        <td>6</td>
                        <td>11</td>
                        <td>170/92A</td>
                        <td>44</td>
                        <td>66</td>
                      </tr>
                      <tr>
                        <td>44</td>
                        <td>40</td>
                        <td>38</td>
                        <td>14</td>
                        <td>8</td>
                        <td>13</td>
                        <td>175/96A</td>
                        <td>46</td>
                        <td>66</td>
                      </tr>
                      <tr>
                        <td>46</td>
                        <td>42</td>
                        <td>40</td>
                        <td>16</td>
                        <td>10</td>
                        <td>15</td>
                        <td>170/98A</td>
                        <td>48</td>
                        <td>77</td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>44</td>
                        <td>42</td>
                        <td>18</td>
                        <td>12</td>
                        <td>17</td>
                        <td>170/100B</td>
                        <td>50</td>
                        <td>77</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>46</td>
                        <td>44</td>
                        <td>20</td>
                        <td>14</td>
                        <td>19</td>
                        <td>175/100B</td>
                        <td>52</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>52</td>
                        <td>48</td>
                        <td>46</td>
                        <td>22</td>
                        <td>16</td>
                        <td>21</td>
                        <td>180/104B</td>
                        <td>54</td>
                        <td>88</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Size Guide Modal Area */}
        {/* Start Shipping Modal Area */}
        <div className="modal fade productsShippingModal" id="productsShippingModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="shipping-content">
                <h3>Shipping</h3>
                <ul>
                  <li>Complimentary ground shipping within 1 to 7 business days</li>
                  <li>In-store collection available within 1 to 7 business days</li>
                  <li>Next-day and Express delivery options also available</li>
                  <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
                  <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                </ul>
                <h3>Returns and Exchanges</h3>
                <ul>
                  <li>Easy and complimentary, within 14 days</li>
                  <li>See conditions and procedure in our return FAQs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Shipping Modal Area */}
        {/* Start Products Filter Modal Area */}
        <div className="modal left fade productsFilterModal" id="productsFilterModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /> Close</span>
              </button>
              <div className="modal-body">
                <div className="woocommerce-widget-area">
                  <div className="woocommerce-widget filter-list-widget">
                    <h3 className="woocommerce-widget-title">Current Selection</h3>
                    <div className="selected-filters-wrap-list">
                      <ul>
                        <li><Link href="#"><i className="bx bx-x" /> 44</Link></li>
                        <li><Link href="#"><i className="bx bx-x" /> XI</Link></li>
                        <li><Link href="#"><i className="bx bx-x" /> Clothing</Link></li>
                        <li><Link href="#"><i className="bx bx-x" /> Shoes</Link></li>
                      </ul>
                      <Link href="#" className="delete-selected-filters"><i className="bx bx-trash" /> <span>Clear All</span></Link>
                    </div>
                  </div>
                  <div className="woocommerce-widget collections-list-widget">
                    <h3 className="woocommerce-widget-title">Collections</h3>
                    <ul className="collections-list-row">
                      <li><Link href="#">Men's</Link></li>
                      <li className="active"><Link href="#" className="active">Women’s</Link></li>
                      <li><Link href="#">Clothing</Link></li>
                      <li><Link href="#">Shoes</Link></li>
                      <li><Link href="#">Accessories</Link></li>
                      <li><Link href="#">Uncategorized</Link></li>
                    </ul>
                  </div>
                  <div className="woocommerce-widget price-list-widget">
                    <h3 className="woocommerce-widget-title">Price</h3>
                    <div className="collection-filter-by-price">
                      <input className="js-range-of-price" type="text" data-min={0} data-max={1055} name="filter_by_price" data-step={10} />
                    </div>
                  </div>
                  <div className="woocommerce-widget size-list-widget">
                    <h3 className="woocommerce-widget-title">Size</h3>
                    <ul className="size-list-row">
                      <li><Link href="#">20</Link></li>
                      <li><Link href="#">24</Link></li>
                      <li className="active"><Link href="#">36</Link></li>
                      <li><Link href="#">30</Link></li>
                      <li><Link href="#">XS</Link></li>
                      <li><Link href="#">S</Link></li>
                      <li><Link href="#">M</Link></li>
                      <li><Link href="#">L</Link></li>
                      <li><Link href="#">L</Link></li>
                      <li><Link href="#">XL</Link></li>
                    </ul>
                  </div>
                  <div className="woocommerce-widget color-list-widget">
                    <h3 className="woocommerce-widget-title">Color</h3>
                    <ul className="color-list-row">
                      <li className="active"><Link href="#" title="Black" className="color-black" /></li>
                      <li><Link href="#" title="Red" className="color-red" /></li>
                      <li><Link href="#" title="Yellow" className="color-yellow" /></li>
                      <li><Link href="#" title="White" className="color-white" /></li>
                      <li><Link href="#" title="Blue" className="color-blue" /></li>
                      <li><Link href="#" title="Green" className="color-green" /></li>
                      <li><Link href="#" title="Yellow Green" className="color-yellowgreen" /></li>
                      <li><Link href="#" title="Pink" className="color-pink" /></li>
                      <li><Link href="#" title="Violet" className="color-violet" /></li>
                      <li><Link href="#" title="Blue Violet" className="color-blueviolet" /></li>
                      <li><Link href="#" title="Lime" className="color-lime" /></li>
                      <li><Link href="#" title="Plum" className="color-plum" /></li>
                      <li><Link href="#" title="Teal" className="color-teal" /></li>
                    </ul>
                  </div>
                  <div className="woocommerce-widget brands-list-widget">
                    <h3 className="woocommerce-widget-title">Brands</h3>
                    <ul className="brands-list-row">
                      <li><Link href="#">Gucci</Link></li>
                      <li><Link href="#">Virgil Abloh</Link></li>
                      <li><Link href="#">Balenciaga</Link></li>
                      <li className="active"><Link href="#">Moncler</Link></li>
                      <li><Link href="#">Fendi</Link></li>
                      <li><Link href="#">Versace</Link></li>
                    </ul>
                  </div>
                  <div className="woocommerce-widget aside-trending-widget">
                    <div className="aside-trending-products">
                      <img src="img/offer-bg.jpg" alt="image" />
                      <div className="category">
                        <h3>Top Trending</h3>
                        <span>Spring/Summer 2021 Collection</span>
                      </div>
                      <Link href="#" className="link-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Products Filter Modal Area */}
    </div>
  )
}
