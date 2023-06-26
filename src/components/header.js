import React from 'react'

export default function header() {
  return (
    <div>
          {/* <!-- Start Top Header Area --> */}
          <header>
              <div class="top-header">
                  <div class="container-fluid">
                      <div class="row align-items-center">
                          <div class="col-lg-6 col-md-12">
                              <ul class="header-contact-info">
                                  <li>Xton@gmail.com</li>
                                  <li>Call: <a href="tel:+01321654214">+01 321 654 214</a></li>
                              </ul>
                          </div>

                          <div class="col-lg-6 col-md-12">
                              <ul class="header-top-menu">
                                  <li><a href="login.html"><i class='bx bxs-user'></i> My Account</a></li>
                                  <li><a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal"><i class='bx bx-heart'></i> Wishlist</a></li>
                                  <li><a href="compare.html"><i class='bx bx-shuffle'></i> Compare</a></li>
                                  <li><a href="login.html"><i class='bx bx-log-in'></i> Login</a></li>
                              </ul>

                              <ul class="header-top-others-option">
                                  <div class="option-item">
                                      <div class="search-btn-box">
                                          <i class="search-btn bx bx-search-alt"></i>
                                      </div>
                                  </div>

                                  <div class="option-item">
                                      <div class="cart-btn">
                                          <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i class='bx bx-shopping-bag'></i><span>0</span></a>
                                      </div>
                                  </div>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End Top Header Area --> */}

              {/* <!-- Start Navbar Area --> */}
              <div class="navbar-area">
                  <div class="xton-responsive-nav">
                      <div class="container">
                          <div class="xton-responsive-menu">
                              <div class="logo">
                                  <a href="index.html">
                                      <img src="img/logo.png" class="main-logo" alt="logo"/>
                                          <img src="img/white-logo.png" class="white-logo" alt="logo"/>
                                          </a>
                                      </div>
                              </div>
                          </div>
                      </div>

                      <div class="xton-nav">
                          <div class="container-fluid">
                              <nav class="navbar navbar-expand-md navbar-light">
                                  <a class="navbar-brand" href="index.html">
                                      <img src="img/logo.png" class="main-logo" alt="logo"/>
                                          <img src="img/white-logo.png" class="white-logo" alt="logo"/>
                                          </a>

                                          <div class="collapse navbar-collapse mean-menu">
                                              <ul class="navbar-nav">
                                                  <li class="nav-item"><a href="home.html" class="nav-link ">Home </a>
                                                  </li>

                                                  <li class="nav-item megamenu"><a href="shop.html" class="nav-link">Shop</a>
                                                  </li>

                                                  <li class="nav-item megamenu"><a href="categories.html" class="nav-link">Shop by category</a>
                                                  </li>

                                                  <li class="nav-item megamenu"><a href="shop.html" class="nav-link">Women's</a>

                                                  </li>

                                                  <li class="nav-item megamenu"><a href="shop.html" class="nav-link">Men's</a>
                                                  </li>

                                                  <li class="nav-item"><a href="blog.html" class="nav-link">Blog </a>
                                                  </li>
                                              </ul>

                                              <div class="others-option">
                                                  <div class="option-item">
                                                      <div class="search-btn-box">
                                                          <i class="search-btn bx bx-search-alt"></i>
                                                      </div>
                                                  </div>

                                                  <div class="option-item">
                                                      <div class="cart-btn">
                                                          <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i class='bx bx-shopping-bag'></i><span>0</span></a>
                                                      </div>
                                                  </div>

                                                  <div class="option-item">
                                                      <div class="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                                                          <span class="top-bar"></span>
                                                          <span class="middle-bar"></span>
                                                          <span class="bottom-bar"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </nav>
                                  </div>
                          </div>
                      </div>
                      {/* <!-- End Navbar Area --> */}

                      {/* <!-- Start Sticky Navbar Area --> */}
                      <div class="navbar-area header-sticky" id="stickynav">
                          <div class="xton-nav">
                              <div class="container-fluid">
                                  <nav class="navbar navbar-expand-md navbar-light">
                                      <a class="navbar-brand" href="index.html">
                                          <img src="img/logo.png" class="main-logo" alt="logo"/>
                                              <img src="img/white-logo.png" class="white-logo" alt="logo"/>
                                              </a>

                                              <div class="collapse navbar-collapse mean-menu">
                                                  <ul class="navbar-nav navbar1">
                                                      <li class="nav-item"><a href="home.html" class="nav-link">Home</a>
                                                      </li>

                                                      <li class="nav-item megamenu"><a href="shop.html" class="nav-link">Shop</a>
                                                      </li>

                                                      <li class="nav-item megamenu"><a href="categories.html" class="nav-link">Shop by category</a>
                                                      </li>

                                                      <li class="nav-item megamenu"><a href="shop.html" class="nav-link">Women's</a>
                                                      </li>

                                                      <li class="nav-item megamenu"><a href="shop.html" class="nav-link">Men's</a>
                                                      </li>

                                                      <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a>
                                                      </li>
                                                  </ul>

                                                  <div class="others-option">
                                                      <div class="option-item">
                                                          <div class="search-btn-box">
                                                              <i class="search-btn bx bx-search-alt"></i>
                                                          </div>
                                                      </div>

                                                      <div class="option-item">
                                                          <div class="cart-btn">
                                                              <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i class='bx bx-shopping-bag'></i><span>0</span></a>
                                                          </div>
                                                      </div>

                                                      <div class="option-item">
                                                          <div class="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                                                              <span class="top-bar"></span>
                                                              <span class="middle-bar"></span>
                                                              <span class="bottom-bar"></span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </nav>
                                      </div>
                              </div>
                          </div>
                          {/* <!-- End Header Area --> */}

                          {/* <!-- Start Search Overlay --> */}
                          <div class="search-overlay">
                              <div class="d-table">
                                  <div class="d-table-cell">
                                      <div class="search-overlay-layer"></div>
                                      <div class="search-overlay-layer"></div>
                                      <div class="search-overlay-layer"></div>

                                      <div class="search-overlay-close">
                                          <span class="search-overlay-close-line"></span>
                                          <span class="search-overlay-close-line"></span>
                                      </div>

                                      <div class="search-overlay-form">
                                          <form>
                                              <input type="text" class="input-search" placeholder="Search here..."/>
                                                  <button type="submit"><i class='bx bx-search-alt'></i></button>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>



            </header>
        {/* <!-- End Search Overlay --> */}
    </div>
  )
}
