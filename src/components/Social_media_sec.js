import React from 'react'
import { Link } from 'react-router-dom'

export default function Social_media_sec() {
  return (
    <div>
       {/* Start Instagram Area */}
       <div className="instagram-area " id="insta-area" onmouseenter="pauseanime()" onmouseleave="startanime()">
        <div className="container-fluid">
          <div className="instagram-title caro1 owl-carousel owl-theme">
            <div className="items">
              <Link to="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
            </div>
            <div className="items">
              <Link to="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
            </div>
          </div>
          <div className="instagram-slides owl-carousel owl-theme">
            <div className="single-instagram-post">
              <img src="assets/img/instagram/img3.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-instagram-post">
              <img src="assets/img/instagram/img3.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-instagram-post">
              <img src="assets/img/instagram/img3.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-instagram-post">
              <img src="assets/img/instagram/img3.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-instagram-post">
              <img src="assets/img/instagram/img3.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-instagram-post">
              <img src="assets/img/instagram/img3.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-instagram" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-facebook-post">
              <img src="assets/img/instagram/img7.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-facebook-post">
              <img src="assets/img/instagram/img7.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-facebook-post">
              <img src="assets/img/instagram/img7.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-facebook-post">
              <img src="assets/img/instagram/img7.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-facebook-post">
              <img src="assets/img/instagram/img7.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
            <div className="single-facebook-post">
              <img src="assets/img/instagram/img7.jpg" alt="" />
              <Link href="#" target="_blank"><i className="bx bxl-facebook" />@xton</Link>
              {/* <Link href="#" target="_blank" class="link-btn"></Link> */}
            </div>
          </div>
        </div>
        <div className="owl-nav2">
          <button type="button" role="presentation" className="owl-prev2">
            <i className="flaticon-left" />
          </button>
          <button type="button" role="presentation" className="owl-next2">
            <i className="flaticon-right-arrow" />
          </button>
        </div>
      </div>
      {/* End Instagram Area */}


     


    


    </div>
  )
}
