import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';


export default function PinterestMarketing() {
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
    						<h3 className="heading fontWeight700 text-white">Pinterest Marketing</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Pinterest Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
            <div className="bannerForm">
               <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
               <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Pinterest Marketing </span> Company in India</strong></p>
               <BannerForm/>
            </div>
         </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-10">
                     <div className="service-sub-title">
                        <p>
                           Good content always has an objective; it's created with intent. It, therefore, carries triggers to action.
                        </p>
                     </div>
                     <p>Today Pinterest has 200 million monthly users. This is a very impressive number, enough to make your business growth rate impressive. Pinterest is the network where people look for inspiration, new ideas, creativity and productivity. Pinterest had one the fastest growth rate. It was literally 97% in 2014. A whopping growing rate indeed.</p>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <div className="custom-content-title">
                        <p>
                           SIB Infotech has the following procedure for your Company's Marketing
                        </p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Look at trending topics and keywords</p>
                        <p>Knowing and keeping a tap on trending content on which users talk about and also search for it.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Building Connection with the Influencers</p>
                        <p>Every platform has some influencers. Connection with those influencers gives you benefit to your business. Taking out time to comment and follow influencers' pins encourage connection that results in awareness with new audiences.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Designate Boards to Represent Your Business</p>
                        <p>Create many business boards that are related to your company's services and products. Its similar to how you share content on other social media platform. Don't worry! SIB Infotech will handle all.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Pinterest Analytics</p>
                        <p>Pinterest Analytics tells you a lot about a number of viewers on your page and pins. Through audience demographics, it's more clear.</p>
                     </div>
                     <div>
                        <p className="custom-box-title">Explore Rich Pins</p>
                        <ul>
                           <li>
                              <p>Pinterest has five types of rich pins that let you add topic-specific details to a pin.</p>
                           </li>
                           <li>
                              <p>Article pins include the headline, author, story description and link</p>
                           </li>
                           <li>
                              <p>Product pins include real-time pricing, availability.</p>
                           </li>
                           <li>
                              <p>Recipe pins include ingredients, cooking times and serving info</p>
                           </li>
                           <li>
                              <p>Movie pins include ratings, cast members and reviews</p>
                           </li>
                           <li>
                              <p>Place pins include an address, phone number and map</p>
                           </li>
                           <li>
                              <p>Consider kind of rich pin you want to apply for, add the appropriate meta tags to your site and validate your rich pins.</p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Adding Hover's Pin It's Button to Your Images</p>
                        <p>When we add the â€œPin It's button on your images. When users hover over it it will redirect the traffic towards your blog of the company.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Convert Your Pinterest Personal Page to a Business Page</p>
                        <p>This was recently added to Pinterest. It helps your business page to appear more informative. Your company contributes by providing information analytics features that personal pages don't. There are analytics and metrics by which you measure; for example- the number of unique users, number of repins, impressions and visits to your site and content that gets the most repins.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Advertise on Pinterest</p>
                        <p>Pinterest ads or Promoted pins appears to be like a regular pin. The difference is that you pay for this pin. Majority of pinners state that content from brands makes the service more useful and made a purchase after seeing a business's content.  Geographic targeting can also be used. So that more specific target is hit.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Create fun, unique content</p>
                        <p>The content that you post should be very refined. It adds credibility to your company. Users will share your boards, discussion, pins, etc. </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}


