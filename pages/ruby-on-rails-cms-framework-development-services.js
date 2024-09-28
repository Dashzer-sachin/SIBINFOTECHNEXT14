import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function RubyOnRailsCmsFrameworkDevelopmentServices() {
    const metaTags = (
        <>
          <title>Title</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
         
    
          <meta property="og:type" content="website" />
          <meta property="og:url" content="/" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />
    
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="/" />
          <meta property="twitter:title" content="" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="" />
        </>
      );
      return (
        <CustomLayout meta={metaTags}>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Ruby on Rails Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Ruby on Rails Services</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Ruby on Rails Services</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
         <div className="containerFull">
            <div className="row">
                <div className="col-md-12">
                   <div className="custom-content-title">
                      <p>RoR is an open source framework and we publish gems and plug-ins in the open source community. The Rails has a well defined plug-in structure that enables our developers to install easily and use the plug-ins in the desired application.</p>
                   </div>
                </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                  <div className="custom-content-title">
                      <p>Ruby on Rails Services</p>
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">Development Rate</p>
                      <p>We focus on high performance and providing solutions in record time. The speed of project development at Indianmesh is so fast that we develop a web application within a short period of time.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">Reduced Cost of Ownership</p>
                      <p>The engineering work takes place offshore resulting in substantial savings. Our engineers built and modified the Rails application by spending very less money without comprising the quality, performance, or scalability of the website.

                      </p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">Easy to add new features</p>
                      <p>Our expert developers build the website in such a way that it will be an easy task for any future modification of the website (e.g. adding new features, making changes to the data) model can be made more easily and quickly.</p>
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">Less coding</p>
                      <p>Our developer team built the website using the minimal coding and simple methods. We develop Ruby code that is very readable and can be self- documented.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">It is Secure</p>
                      <p>We develop a framework that includes a set of conventions designed to streamline the development process and help to keep the website secure from errors and attacks.
                      </p>
                  </div>

              </div>

          </div>
          <div className="row">
              <div className="col-md-6">
                  <div className="custom-page-img">
                      <img src="assets/images/article-submission.png" alt="Ruby on Rails" className="img-fluid"/>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="custom-content-title">
                      <p>Technologies </p>
                  </div>
                  <div className="icon-verical-box">
                      <p>Rails 2.x , Rails 3.x, Rails 4.x, Rails 5.x</p>
                  </div>
                  <div className="icon-verical-box">
                      <p>MySQL, MS SQL, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="icon-verical-box">
                      <p>HAML</p>
                  </div>
                  <div className="icon-verical-box">
                      <p>SASS</p>
                  </div>
                  <div className="icon-verical-box">
                      <p>Github</p>
                  </div>
              </div>
          </div>
            </div>
      </section>
    </CustomLayout>
  )
}
