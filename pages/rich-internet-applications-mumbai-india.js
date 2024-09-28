import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function RichInternetApplicationServices() {
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
                            <h3 className="heading fontWeight700 text-white">Rich Internet Applications</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Rich Internet Applications </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Rich Internet Applications </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-12">
                    <div className="custom-content-title">
                        <p>Flash Rich Internet Applications mean such applications that support a broad set of media, like various fonts, bitmap and vector graphics, flash animation, conferencing, real time movie files with audio and video feature in web services, and more.</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <p>
                    In fact, there are hundreds of other published APIs that are based on XML, but all major Rich Internet Applications development systems have wrapped up XML due to the data interoperability architecture.</p>
                    <p>
                    Macromedia Flash has acquired large web usage even before acquiring the ability to deliver a full range of RIA solutions. Flash Rich Internet Applications delivering front end applications combine desktop software functionality at low cost with the broad accessibility to the web. Effective user experiences can indeed make a big difference to your business using Flash Rich Internet Applications.</p>
                    <p>
                    Our experts use tools, strategy, implementation and result tracking in order to achieve the best possible brand engagement. We can take care of your complete email marketing strategy from template design to tracking and reporting.</p>
                </div>
                <div className="col-md-6">
                    <p>
                    We at SIB Infotech use Rich Internet Applications in some extraordinary ways to offer global outstanding web applications to organizations worldwide.</p>
                    <p>
                    Macromedia offers Rich Application Starter Kit for IT professionals and development managers to get started on building their first pilot project independently so as to evaluate the business and technology. In today's IT competitive business edge, Flash has provided the most effective experiences for rich content, applications and communications across browser, operating system, and devices.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="custom-content-title">
                    <p>
                        Why Rich Internet Applications (RIAs) has emerged so rapidly in the IT business and how it benefits end users, IT organizations, and business as well?</p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                    <div className="col-md-6">
                        <ul>
                        <li>
                            <p>
                            Success rate of End-User transactions has increased</p>
                        </li>
                        <li>
                            <p>
                            Easy and fast evolvement of Online Businesses in online marketplace</p>
                        </li>
                        <li>
                            <p>
                            Reducing the cost to Application Development.</p>
                        </li>
                        <li>
                            <p>
                            Reducing cost to IT Infrastructure</p>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                        <li>
                            <p>
                            Streamlining development</p>
                        </li>
                        <li>
                            <p>
                            Supporting industry business standards</p>
                        </li>
                        <li>
                            <p>
                            Offering more interactive and Real-Time User Experience</p>
                        </li>
                        <li>
                            <p>
                            Introducing more featured interface with multiple options to save time</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="custom-page-img">
                    <img alt="Rich Internet Application" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="custom-content-title">
                    <p>
                        These web applications support following major data container formats</p>
                    </div>
                    <div className="row m-zero">
                    <div className="col-md-6">
                        <div className="custom-page-icon-box">
                        <p>
                            Graphics including JPEG, TIF, GIF, PNG, etc.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box">
                        <p>
                            Rich media including Flash SWF, SVG, ViewPoint MTS, etc.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box">
                        <p>
                            E-business and publishing including RSS, a wide range of EDI, etc.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box">
                        <p>
                            Desktop office data including Adobe PDF, Open Office Microsoft Office 2003, etc.</p>
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
