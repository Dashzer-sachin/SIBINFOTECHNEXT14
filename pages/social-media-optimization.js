import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SocialMediaOptimization() {
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
                            <h3 className="heading fontWeight700 text-white">Social Media Optimization</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Media Optimization </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Media Optimization </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-6">
                            <div className="custom-content-title">
                                <p>Our Expertise</p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Social Media Strategy Planning </p>
                                <p>Right strategy to reach right customers at right places.</p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Social Media Content Development</p>
                                <p>Creating a better dialogue between you and your customers.</p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Social Media Creative Campaigns</p>
                                <p>Designing attractive creatives to enhance your brand image. </p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Social Media Paid Campaigns
                                </p>
                                <p>Developing profitable social media campaigns that works right for your business.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="custom-page-img">
                                <img src="assets/images/article-submission.png" alt="Social Media Optimization Company in India" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-md-12 text-center">

                        <div className="custom-content-title">
                            <p>We Can Help You With</p>
                        </div>
                        <p>Platform We Work On</p>

                        <ul className="block-5 inlineMobile">

                            <li>
                                <div className="icon-div">
                                    <div className="icon-box">
                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-header">
                                        <h4>Facebook Marketing

                                        </h4>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="icon-div">
                                    <div className="icon-box">
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-header">
                                        <h4>Twitter Marketing</h4>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="icon-div">
                                    <div className="icon-box">
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-header">
                                        <h4>Instagram Marketing</h4>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="icon-div">
                                    <div className="icon-box">
                                        <i className="fab fa-youtube" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-header">
                                        <h4>Youtube Marketing</h4>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="icon-div">
                                    <div className="icon-box">
                                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-header">
                                        <h4>Linkedin Marketing</h4>
                                    </div>

                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="custom-page-img">
                            <img src="assets/images/article-submission.png" alt="Social Media Optimization" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-content-title">
                            <p>Why Choose Us</p>
                        </div>
                        <p>We focus on the following aspects of Social Media Optimization.</p>
                        <div className="icon-verical-box">
                            <p>Increasing your linkability through fresh,informative and eye catching content.</p>
                        </div>
                        <div className="icon-verical-box">
                            <p>Making tagging and bookmarking easy through implementation of Social Bookmarking buttons on your blogs and important pages.</p>
                        </div>
                        <div className="icon-verical-box">
                            <p>Rewarding Inbound links.</p>
                        </div>
                        <div className="icon-verical-box">
                            <p>Making your content travel through creation of presentations and submission of the same across social sharing sites.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
