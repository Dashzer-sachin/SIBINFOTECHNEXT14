import BannerForm from '@/comps/BannerForm';
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import { useState } from 'react';


export default function SocialMediaMarketingSMMServicesPackages() {
   const [open,setOpen]= useState(1)

   const handleOpen =(e)=>{
      setOpen(e)
   }

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
                            <h3 className="heading fontWeight700 text-white">Social Media Marketing Packages</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Media Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Media Marketing</span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section>
          <div className="containerFull ">
            <h2 className="customHeading text-center">
               <span>Social Media Marketing Packages</span>, Pricing &amp; Plans
            </h2>
            <div className="tabs">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="tag-line">
                        <img alt="" className="image-full" src="assets/images/seo-packages-3.png"/>
                        <h4>
                           CHOOSE YOUR PLAN
                        </h4>
                        <p className="customText">
                           INCREASE YOUR WEBSITE<br/>
                           CONVERSIONS
                        </p>
                        <Link className="green-btn" href="tel:+91-9222260000">CALL US NOW</Link>
                     </div>
                     <div className="tab-header ">
                        <div className={`tab  ${open ==1? "active":""}`} onClick={()=>handleOpen(1)}>
                           <h5>
                              Initial Research &amp; Analysis
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==2 ? "active":""}`} onClick={()=>handleOpen(2)}>
                           <h5>
                              Facebook
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==3 ? "active":""}`} onClick={()=>handleOpen(3)}>
                           <h5>
                              Twitter
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==4 ? "active":""}`} onClick={()=>handleOpen(4)}>
                           <h5>
                              Instagram
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==5 ? "active":""}`} onClick={()=>handleOpen(5)}>
                           <h5>
                              LinkedIn
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==6 ? "active":""}`} onClick={()=>handleOpen(6)}>
                           <h5>
                              YouTube
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==7 ? "active":""}`} onClick={()=>handleOpen(7)}>
                           <h5>
                              Pinterest
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==8 ? "active":""}`} onClick={()=>handleOpen(8)}>
                           <h5>
                              Reporting
                           </h5>
                        </div>
                        <div  className={`tab  ${open ==9 ? "active":""}`} onClick={()=>handleOpen(9)}>
                           <h5>
                              Customer Support
                           </h5>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <div className="tab-content">
                        <div className={`${open ==1? "active":""}`}>
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Account Management
                                    </td>
                                    <td data-label="Start Up">
                                       Any 2 Platforms
                                    </td>
                                    <td data-label="Grow">
                                       Any 3 Platforms
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       Any 5 Platforms
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Identify Business Goals
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Analyse Audience
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Create Content Startegy
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Identify #Hashtag
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Social Trending
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Competitor Analysis
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Create Social Media Calendar
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==2? "active":""}`}>
                           <h4>
                              Facebook
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Profile Optimization
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Post Sharing
                                    </td>
                                    <td data-label="Self Employed">
                                       10
                                    </td>
                                    <td data-label="Start Up">
                                       15
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       20
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Cover Image
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Sharing
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Call To Action Button
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Targeted Page Likes
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Poll Creation
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Insight Monitoring
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Sponsored Ads (Additional Charges)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==3? "active":""}`}>
                           <h4>
                              Twitter
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Profile Optimization
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Tweets Posting
                                    </td>
                                    <td data-label="Self Employed">
                                       10
                                    </td>
                                    <td data-label="Start Up">
                                       15
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       20
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Targeted Twitter Followers Increase
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Cover Image
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Sharing (Provided by Client)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Retweets
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       #Hashtag Trend Research
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Twitter Analytics Monitoring
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Sponsored Tweets (Additonal Charges)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==4? "active":""}`}>
                           <h4>
                              Instagram
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Profile Optimization
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Image Sharing
                                    </td>
                                    <td data-label="Self Employed">
                                       10
                                    </td>
                                    <td data-label="Start Up">
                                       15
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       20
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Targeted Instagram Followers Increase
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       #Hashtag Trend Research
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Sharing (Provided by Client)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Comments &amp; Like Management
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Instagram Analytics Monitoring
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Paid Promotion (Additional Charges)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==5? "active":""}`}>
                           <h4>
                              LinkedIn
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Profile Optimization
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Post Sharing
                                    </td>
                                    <td data-label="Self Employed">
                                       10
                                    </td>
                                    <td data-label="Start Up">
                                       15
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       20
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Targeted LinkedIn Connection
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Company Page Creation
                                    </td>
                                    <td data-label="Self Employed">
                                       1
                                    </td>
                                    <td data-label="Enterepreneur">
                                       1
                                    </td>
                                    <td data-label="Custom">
                                       1
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Company Page Follower Increase
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Company page Banner
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       LinkedIn Performance Review
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Paid Promotion (Additional Charges)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==6? "active":""}`}>
                           <h4>
                              YouTube
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Channel Optimization
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Channel Cover Image
                                    </td>
                                    <td data-label="Self Employed">
                                       10
                                    </td>
                                    <td data-label="Start Up">
                                       15
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       20
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Uploads (Provided by Clients)
                                    </td>
                                    <td data-label="Self Employed">
                                       5
                                    </td>
                                    <td data-label="Enterepreneur">
                                       10
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       15
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Title &amp; Description Optimization
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Thumbnail Creation
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Channel Subscribers
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Likes
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Video Views
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Comment Moderation
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Paid Promotion (Additional Charges)
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==7? "active":""}`}>
                           <h4>
                              Pinterest
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Profile Optimization
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Board Creation
                                    </td>
                                    <td data-label="Self Employed">
                                       5
                                    </td>
                                    <td data-label="Start Up">
                                       8
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       10
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Pins Posted
                                    </td>
                                    <td data-label="Self Employed">
                                       15
                                    </td>
                                    <td data-label="Enterepreneur">
                                       20
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       30
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Followers
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Website Verification
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/crossed.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Business Account
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==8? "active":""}`}>
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
                                       Channel
                                    </td>
                                    <td data-label="Self Employed">
                                       Any 2
                                    </td>
                                    <td data-label="Start Up">
                                       Any 3
                                    </td>
                                    <td data-label="Grow">
                                       Any 5
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Monthly Report
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Grow">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                        <div className={`${open ==9? "active":""}`}>
                           <h4>
                              Customer Support
                           </h4>
                           <table className="table">
                              <thead>
                                 <tr>
                                    <th>
                                       Deliverables
                                    </th>
                                    <th>
                                       Start Up
                                    </th>
                                    <th>
                                       Enterepreneur
                                    </th>
                                    <th>
                                       Wantrepreneur
                                    </th>
                                    <th>
                                       E-Commerce
                                    </th>
                                    <th>
                                       Custom
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Email
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Chat / Skype
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Phone
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td data-label="Key phrases to be Optimized">
                                       Phone Call for Review Meetings
                                    </td>
                                    <td data-label="Self Employed">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Start Up">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Enterepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Wantrepreneur">
                                       <img alt="" src="assets/images/tick.svg"/>
                                    </td>
                                    <td data-label="Custom">
                                       <img alt="" src="assets/images/tick.svg"/>
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
                     </div>
                  </div>
               </div>
            </div>
          </div>
         </section>
    </CustomLayout>
  )
}
