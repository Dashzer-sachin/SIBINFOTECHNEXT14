import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function RegionalLocalSeoServices() {
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
    						<h3 className="heading fontWeight700 text-white">Regional SEO</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Regional SEO</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Regional SEO</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section className="customPadding">
            <div className="containerFull">
                <div className="row align-items-center mt-4">
                    <div className="col-lg-7">
                        <h3 className="customHeading customLineHeight">
                            <span className="text_red">Search Engine</span> generate different results for different locality, these results are establish on search engines reading of websites location.</h3>
                        <p className="customText">
                            SIB Infotech present to offer regional SEO services to make you ensure that key definite keywords make needed results in recognized local area and therefore optimizing efforts and expense.</p>
                        <p className="customText">
                            Marketers agree that email is a key to business, especially for ROI and developing long-lasting profitable relationships. A personalized, segmented and targeted email marketing campaign is important for brand awareness and drive conversions.</p>
                        <p className="customText">
                            Our experts use tools, strategy, implementation and result tracking in order to achieve the best possible brand engagement. We can take care of your complete email marketing strategy from template design to tracking and reporting.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="bgBlueDarkRight bgBlueDarksmHeight">
                            <h3 className="customHeading text-white customLineHeight">
                                Optimizing your website for a locality preserve really place your SEO efforts in the correct way</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding bgGrey">
            <div className="containerFull">
                <h3 className="customHeading text-center">
                    Important factors for <span className="text_red">Regional Search Engines</span></h3>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="regional-seo-factors-box">
                            <img src="assets/images/icons/regional-seo-local-domain.svg" alt="regional-seo-company-in-india"/>
                            <h4>
                                Local Domain Extension</h4>
                            <p className="customText">
                                Nearly all suitable extensions are selected like .in, .co.in, .co.uk, .co.au, .de etc to supply generally appropriate traffic to targeted website.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="regional-seo-factors-box">
                            <img src="assets/images/icons/regional-seo-language.svg" alt="regional-seo-company-in-delhi"/>
                            <h4>
                                Language</h4>
                            <p className="customText">
                                Suitable spelling and language found on the particular area is selected so that local users are familiar to it.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="regional-seo-factors-box">
                            <img src="assets/images/icons/regional-seo-hosting.svg" alt="regional-seo-company-in-mumbai"/>
                            <h4>
                                Regional Hosting</h4>
                            <p className="customText">
                                Server’s substantial location is measured to make sure hosting your website in the country that you are targeting.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="regional-seo-factors-box">
                            <img src="assets/images/icons/regional-seo-local-contact-information.svg" alt="regional-seo-firm-in-india"/>
                            <h4>
                                Local Contact Information</h4>
                            <p className="customText">
                                Offer local address, business name and contact numbers that facilitate the website to turn into more convincing to the local audience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
