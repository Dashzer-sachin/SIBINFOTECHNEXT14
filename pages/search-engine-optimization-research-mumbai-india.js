import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function SearchEngineOptimizationResearchMumbaiIndia() {
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
                            <h3 className="heading fontWeight700 text-white">SEO Research</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO Research</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO Research</span> Company in India</strong></p>
              <BannerForm/>
          </div>
        </div>
        <section id="sib-custom-page">
          <div className="containerFull">
            <div className="row">
              <div className="col-md-1">
                &nbsp;</div>
              <div className="col-md-10">
                <div className="service-sub-title">
                  <p>
                    Every unbeaten SEO campaign starts with a more &amp; more research. That doesn’t mean your research has to be tough or lengthy. Our research features recover views so you can rapidly reference earlier research.</p>
                </div>
              </div>
              <div className="col-md-1">
                &nbsp;</div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>
                  Before starting the seo project one have to examine all the equipment related your website whether its question of keyword right placement, content quality or link submission.</p>
                <p>
                  So begin with your SEO Competitor analysis report today don’t let the struggle get a head start and start mounting your rankings.</p>
                <div className="custom-content-title">
                  <p>
                    What you can get?</p>
                </div>
                <ul>
                  <li>
                    <p>
                      Recognize your major SEO opponent.</p>
                  </li>
                  <li>
                    <p>
                      Examination of their associate profiles and content approach.</p>
                  </li>
                  <li>
                    <p>
                      Clarification of the campaign they are using</p>
                  </li>
                  <li>
                    <p>
                      Ideas on how these strategies might be customized to profit your website</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="custom-page-img">
                  <img alt="Search Engine Optimization Research In India" className="img-fluid" src="assets/images/article-submission.png"/></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="custom-page-icon-box icon-with-title">
                  <p className="custom-box-title">
                    Keyword Research For SEO</p>
                  <p>
                    Keyword research is pretty possibly the mainly significant part of SEO. You cannot start campaign if not you know which keyword you are targeting, and you cannot guess expenses and income from SEO except you initially know who your rival is. While we are performing on keyword research, nothing gets by us. Taking the visitors expression in our mind we find the words or phrase that people are searching for and the competition doesn’t use.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-page-icon-box icon-with-title">
                  <p className="custom-box-title">
                    Competition Analysis Report</p>
                  <p>
                    You can’t hit your rival if you don’t recognize what you’re up against. Get a SEO Competitor Research report today and know what is building your opposition outrank you. You will obtain a customized statement and accompanying report, which summarize who are your SEO competitors and what strategy they are operating to rank on search engines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </CustomLayout>
  )
}
