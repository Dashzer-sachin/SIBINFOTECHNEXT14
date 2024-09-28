import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function PpcManagementServicesPackages() {
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
    						<h1 className="heading fontWeight700 text-white">PPC Packages</h1>
                            <h2 className="small_heading fw-bold mt-3 text-white">Increase Sale With Our PPC Packages India</h2>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">PPC Packages </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">PPC Packages </span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section className="customPadding">
         <div className="containerFull">
            <h3 className="customHeading text-center">
               <span>PPC Management </span>Packages, Pricing &amp; Plans
            </h3>
            <div className="tabs">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="tag-line">
                        <img alt="PPC Management Service Packages in India" className="image-full" src="assets/images/seo-packages-3.png"/>
                        <h4>
                           CHOOSE YOUR PLAN
                        </h4>
                        <p className="customText">
                           INCREASE YOUR WEBSITE<br/>
                           CONVERSIONS
                        </p>
                        <Link className="green-btn" href="tel:+91-9222260000" target="_blank">CALL US NOW</Link>
                     </div>
                     <div className="tab-header">
                        <div className="tab">
                           <h5>
                              Initial Research &amp; Analysis
                           </h5>
                        </div>
                        <div className="tab active">
                           <h5>
                              Campaign Setup &amp; Optimization
                           </h5>
                        </div>
                        <div className="tab">
                           <h5>
                              Reporting
                           </h5>
                        </div>
                        <div className="tab">
                           <h5>
                              Customer Support
                           </h5>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <div className="tab-content">
                        <div className="">
                           <h4>
                              Initial Research &amp; Analysis
                           </h4>
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>
                                       Deliverables
                                    </th>
                                    <th className="bg-blue-4">
                                       Start Up
                                    </th>
                                    <th className="bg-blue-4">
                                       Enterepreneur
                                    </th>
                                    <th className="bg-blue-4">
                                       Wantrepreneur
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Minimum Duration
                                    </td>
                                    <td data-label="Self Employed">
                                       3 Months
                                    </td>
                                    <td data-label="Start Up">
                                       3 Months
                                    </td>
                                    <td data-label="Grow">
                                       3 Months
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Website Analysis
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Grow">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Keywords Analysis
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Market Analysis
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Competitor Analysis
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Pricing
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Custom">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className="active">
                           <h4>
                              Campaign Setup &amp; Optimization
                           </h4>
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>
                                       Deliverables
                                    </th>
                                    <th className="bg-blue-4">
                                       Start Up
                                    </th>
                                    <th className="bg-blue-4">
                                       Enterepreneur
                                    </th>
                                    <th className="bg-blue-4">
                                       Wantrepreneur
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Minimum Duration
                                    </td>
                                    <td data-label="Self Employed">
                                       3 Months
                                    </td>
                                    <td data-label="Start Up">
                                       3 Months
                                    </td>
                                    <td data-label="Grow">
                                       3 Months
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Campaign Account Creation
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Grow">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Landing Page Recommendation
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Landing Page Optimization
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Text Ads
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Conversion Tracking
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Lead Tracking
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       A/B Testing
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Goal Setup
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Keywords Bid Analysis
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       ROI Tracking
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       CTR Tracking
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       CPC Tracking
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Mobile Ads
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-times crossIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Gmail Ads (GSP)
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-times crossIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Pricing
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Custom">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className="">
                           <h4>
                              Reporting
                           </h4>
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>
                                       Deliverables
                                    </th>
                                    <th className="bg-blue-4">
                                       Start Up
                                    </th>
                                    <th className="bg-blue-4">
                                       Enterepreneur
                                    </th>
                                    <th className="bg-blue-4">
                                       Wantrepreneur
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Minimum Duration
                                    </td>
                                    <td data-label="Self Employed">
                                       3 Months
                                    </td>
                                    <td data-label="Start Up">
                                       3 Months
                                    </td>
                                    <td data-label="Grow">
                                       3 Months
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Reporting
                                    </td>
                                    <td data-label="Start Up">
                                       Monthly
                                    </td>
                                    <td data-label="Grow">
                                       15 Days
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       Weekly
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Adwords Campaign Performance Report
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Google Analytics Report
                                    </td>
                                    <td data-label="Self Employed">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Custom">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Pricing
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Custom">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div>
                           <h4>
                              Customer Support
                           </h4>
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>
                                       Deliverables
                                    </th>
                                    <th className="bg-blue-4">
                                       Start Up
                                    </th>
                                    <th className="bg-blue-4">
                                       Enterepreneur
                                    </th>
                                    <th className="bg-blue-4">
                                       Wantrepreneur
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Minimum Duration
                                    </td>
                                    <td data-label="Self Employed">
                                       3 Months
                                    </td>
                                    <td data-label="Start Up">
                                       3 Months
                                    </td>
                                    <td data-label="Grow">
                                       3 Months
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Email
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Chat / Skype
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Phone
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Phone Call for Review Meetings
                                    </td>
                                    <td data-label="Start Up">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <i className="fa fa-check checkIcon"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Pricing
                                    </td>
                                    <td data-label="Self Employed">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Start Up">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                    <td data-label="Custom">
                                       <Link className="package-btn" href="/contact-us" target="_blank">ENQUIRE</Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </CustomLayout>
  )
}
