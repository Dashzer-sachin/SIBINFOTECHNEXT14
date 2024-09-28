import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';


export default function ResponsiveWebsiteDesigningServices() {
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
    						<h3 className="heading fontWeight700 text-white fontHeading">Responsive Website Designing Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700 fontHeading">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Responsive Website Designing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700 fontHeading">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Responsive Website Designing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-5">
                        <img className="image-full imgAnimation" src="assets/images/responsive-website-designing.svg" alt="Responsive website designing services"/></div>
                    <div className="col-md-7 mt-4 mt-lg-0">
                        <h3 className="customHeading">
                            Make sure you have a <span className="text_red">Responsive Web Design!</span></h3>
                        <p className="customText">
                            A responsive website design means massive increase in the number of visitors on the website. Moreover, it would lead to higher amount of customers and leads for follows ups and conversions.In fact, a huge amount of web users have moved to mobile devices like smartphones, tablets as it is more convenient to access the internet and it saves a lot of time and efforts of an individual. In this situation, a website, failing to be responsive on such devices; could be disastrous to the business firm. So it has become mandatory for all website to be responsive on all devices be it desktop, mobile or tablet so as user engagement is not an issue.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <h3 className="customHeading text-center">
                    Advantages of <span className="text_red">responsive website design</span></h3>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-website-lowaer-maintenance.svg" alt="reponsive-website-conversion-rates"/></div>
                            <h4>
                                Lower maintenance requirement</h4>
                            <p className="customText">
                                Responsive webpages does not require additional testing and technical support.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-website-conversion-rates.svg" alt="High conversion rates"/></div>
                            <h4>
                                Higher Conversion rates</h4>
                            <p className="customText">
                                Clearly, greater traffic means higher chances of conversions. This helps the business to greater sales and huge profits.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-webdesigning-reporting.svg" alt="responsive-webdesigning-reporting"/></div>
                            <h4>
                                Easier Analytics Reporting</h4>
                            <p className="customText">
                                With the help of google analytics ,We can easily analyze the key aspects of the performance of our website such as- traffic, bounce rate, source from where the traffic is coming etc .</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-website-lower-cost.svg" alt="responsive-website-mobile-development-lower-cost"/></div>
                            <h4>
                                Faster Mobile Development at Lower Costs</h4>
                            <p className="customText">
                                It generally does not cost a lot to develop a highly responsive website and can be designed within no time.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-website-traffic.svg" alt="responsive-website-traffic"/></div>
                            <h4>
                                Increase in website traffic</h4>
                            <p className="customText">
                                Responsive web pages work smoothly on all devices like desktops, mobiles, smartphones and tablets. This makes the website accessible to the majority of Internet users and leads to greater traffic rates.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-website-fast-loading.svg" alt="responsive-website-fast-loading"/></div>
                            <h4>
                                Fast loading time &amp; Lower Bounce Rates</h4>
                            <p className="customText">
                                webpages take very less time to load therefore, it encourages the visitor to stay and search more on the website .As a result, it reduces the bounce rate of the website.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="adv-resp-box">
                            <div className="adv-resp-box-img-circle">
                                <img src="assets/images/icons/responsive-website-improve-seo.svg" alt="responsive-website-improve-seo"/></div>
                            <h4>
                                Improved SEO</h4>
                            <p className="customText">
                                According to the latest change in Google algorithm, Google prefers to show the websites, which are highly responsive to on all devices and specially on mobile devices., A business website should be compatible with any device to rank better on search lists</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blueBg radiudNone">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-7">
                        <h3 className="customHeading text-white">
                            We are here for you...</h3>
                        <p className="customText text-off-white">
                            Website design is not just simply creating pretty layouts for the website but it also involves great skills to enable a website work efficiently. SIB Infotech is leading website designing and development companyin India, providing responsive web designs and developing websites using latest technologies to make itcompatible withall devices like mobiles, smartphones, tablets, laptops and computers. We developweb designs that are compatible with different screen resolutions and provide user-friendlyexperience. With a group of experienced graphic &amp; web designers we handle and create new web development projects carefully that haveuser friendlyand responsive layout in all devices creating a great user experience.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="image-full imgAnimation" src="assets/images/responsive-website-we-offer.svg" alt="Responsive Website Designing"/></div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <h3 className="customHeading text-center">
                    Our <span className="text_red">Website Designing</span> Services Include</h3>
                <p className="customText text-center">
                    Our company designs and develops latest responsive websites in India Keeping in mind the following parameters which are very important for every website.</p>
                <div className="resp-row">
                    <div className="responsive-box-2">
                        <h3>
                            01</h3>
                        <h4>
                            Great UI &amp; UX design</h4>
                        <p className="customText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="responsive-box-2">
                        <h3>
                            02</h3>
                        <h4>
                            Seo friendly</h4>
                        <p className="customText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="responsive-box-2">
                        <h3>
                            03</h3>
                        <h4>
                            Responsive website</h4>
                        <p className="customText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="responsive-box-2">
                        <h3>
                            04</h3>
                        <h4 className="customLineHeight">
                            Social media marketing</h4>
                        <p className="customText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                    <div className="responsive-box-2">
                        <h3>
                            05</h3>
                        <h4>
                            CRO</h4>
                        <p className="customText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="blueBg2">
            <div className="containerFull">
                <div className="callAction">
                    <h4 className="customLineHeight fontHeading">
                        Are you ready to partner #1 responsive website designing company in India?</h4>
                    <p className="customText text-white">
                        Our team of experienced website designers are ready to provide you with a FREE Consultation to get it started</p>
                    <Link href="/contact-us">Speak to our experts</Link></div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#528af9" fill-opacity="1"></path> </svg>
            </div>
        </section>
    </CustomLayout>
  )
}
