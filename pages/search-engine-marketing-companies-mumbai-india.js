import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function SearchEngineMarketingCompaniesMumbaiIndia() {
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
                            <h3 className="heading fontWeight700 text-white">Search Engine Marketing Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Search Engine Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Search Engine Marketing</span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section>
          <div className="containerFull">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <h3 className="customHeading customLineHeight2">
                     The fact is <span>Search Engines</span> are used by overwhelming number (80%) of people to search products and services online.<br/>
                     Can you afford not to have prominent position on major <span>Search Engines?</span>
                  </h3>
               </div>
               <div className="col-lg-6">
                  <p className="customText">
                     Search Engine Marketing, or SEM, is a form of Internet marketing that seeks to promote websites by increasing their visibility in search engine result pages (SERPs) through the use of paid placement, contextual advertising, and paid inclusion.
                  </p>
                  <p className="customText">
                     SIB Infotech's search engine marketing services, offer you the ideal way to increase search engine visibility via white hat organic SEM Services and PPC Campaign management. More search engine visibility would guarantee increased traffic to your website acting as a big booster to your internet marketing efforts.
                  </p>
               </div>
            </div>
          </div>
         </section>
         <section className="bgGrey">
          <div className="containerFull">
            <div className="row align-items-center">
               <div className="col-lg-12">
                  <p className="customText">
                     We help you dramatically increase the quality and quantity of prospects visiting your website,significantly improve the rate at which those visitors become your customers, and maximize the return on your online sales and marketing investment.
                  </p>
                  <p className="customText">
                     SIB Infotech's Search Engine Marketing Process, for our natural search engine optimization or pay per click advertising services , includes a combination of best practices, ethics, efficiencies, flexibility and scalability. This process enables our client service staff to implement your totally unique and customized campaign within a structure that contains the necessary checks and balances to ensure that every task and tactic required to implement your campaign strategy is performed when and as it should.
                  </p>
               </div>
            </div>
          </div>
         </section>
         <section>
          <div className="containerFull">
            <h3 className="customHeading text-center">
               Increase Search Engine <span>Visibility</span>
            </h3>
            <div className="row align-items-center mt-4">
               <div className="col-lg-6">
                  <div className="rounded-border-img">
                     <img alt="Search-Engine-Marketing-Services-Company-In-Mumbai" className="image-full" src="assets/images/seo-marketing-seo-services.png"/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="seo-visibility">
                     <h4 className="margin-bottom">
                        Search Engine Optimization (SEO Services)
                     </h4>
                     <p className="customText">
                        Part art and part science search engine optimization can deliver maximum value in terms of free and quality search engine traffic. We take the whole step further by optimizing your websites to ensure high search engine placement on relevant keywords which are derived from an indepth keyword research and analysis based on real time statistics and data from search engines.
                     </p>
                  </div>
               </div>
            </div>
          </div>
         </section>
         <section className="bgDarkBlue mt-4">
          <div className="containerFull">
            <div className="row align-items-center">
               <div className="col-lg-12">
                  <div className="seo-visibility">
                     <h4 className="text-white margin-bottom">
                        Pay Per Click Advertising (PPC Management)
                     </h4>
                     <p className="customText text-white">
                        PPC ( Pay Per Click Advertising) is a contextual ad based program run by major search engines, which facilitates advertising in the sponsored search areas for targeted keywords. If you are in search of instant results then PPC is what your internet marketing campaign needs. Proper application of pay per click (PPC) advertising delivers the most important Internet marketing variables: Targeted traffic to your website!
                     </p>
                  </div>
               </div>
            </div>
          </div>
         </section>
         <section>
          <div className="containerFull">
            <div className="row align-items-center">
               <div className="col-lg-12">
                  <div className="seo-visibility">
                     <h4 className="margin-bottom">
                        Paid Search Engine Inclusion
                     </h4>
                     <p className="customText">
                        Paid inclusion would ensure that your website gets included on the search engine index without having to wait for the spiders to come and visit your website. This service can be of immense value if you are looking for faster SERP rankings.
                     </p>
                  </div>
               </div>
            </div>
          </div>
         </section>
    </CustomLayout>
  )
}
