import React from "react";
import BannerForm from "../BannerForm";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white">
                  Social Media Optimization Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated SEO Company in India
                </h2>
                <div className="mt-4">
                  <Link href="#">
                    <span className="btnThemeRed me-3">
                      <i className="fa-solid fa-comment-dots"></i> Get a Quote
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="btnThemewhiteBorder">
                      <i className="fa-solid fa-circle-question"></i> Ask a
                      Question
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">SMO</span> Company in
                    India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">SMO</span> Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
    </>
  );
};

export default Banner;
