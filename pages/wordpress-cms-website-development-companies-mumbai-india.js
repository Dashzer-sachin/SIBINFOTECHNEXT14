import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WordPressCmsServices() {
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
    						<h3 className="heading fontWeight700 text-white">WordPress CMS Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">WordPress CMS Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">WordPress CMS Development </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="service-sub-title">
                            <p>WordPress is powered by PHP and a MySQL data backend and its customizable platform is practically the backbone of the Web 2.0 development.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            WordPress is a blog publishing application as well as a open source content management system(CMS). WordPress CMS is very user-friendly and content can be easily managed. It also provides a large number of quality themes, templates and plugins which can be further customized to fit your CMS needs. A single wordpress CMS Integration service can help in managing a blog as well as a website. WordPress MU (Multiuser) is best platform available on internet to implement Multi-user blogging platform. Buddypress is wordpress based platform for implementing Social network.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-img">
                            <img className="img-fluid" src="assets/images/article-submission.png" alt="Wordpress Experts"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="custom-content-title">
                            <p>
                                Our WordPress Customization CMS Service Includes</p>
                        </div>
                        <div className="row m-zero">
                            <div className="col-md-4">
                                <div className="custom-page-icon-box">
                                    <p>
                                        WordPress Blog Development</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="custom-page-icon-box">
                                    <p>
                                        WordPress Plugin development</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="custom-page-icon-box">
                                    <p>
                                        WordPress Theme development</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="custom-page-icon-box">
                                    <p>
                                        Adding WordPress blogs to existing sites</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="custom-page-icon-box">
                                    <p>
                                        WordPress Website Development</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="custom-page-icon-box">
                                    <p>
                                        Adding Widget Capability to Older Themes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="custom-page-img">
                            <img className="img-fluid" src="assets/images/article-submission.png" alt="Wordpress Experts Services"/></div>
                    </div>
                    <div className="col-md-6">
                        <p>
                            You can avail a WordPress developer on hire. Our WordPress development team will work with you to set up the layout, design and framework of your website. SIB Infotech has a dedicated team for WordPress Development and Customization who have vast experience of developing complex websites. At SIB Infotech, we can do anything with wordpress whether it is website development, blogging platform, Multi-blogging platform, social network and anything web 2.0.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="custom-content-title">
                            <p>
                                Why choose SIB Infotech for this Technology?</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                                Best Value</p>
                            <p>
                                Best value for minimum investment Best practices, rigorous quality standards, specifications and smart strategies are followed to achieve genuine customer delight.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                                24 X 7 Availability</p>
                            <p>
                                Continuous interaction &amp; 24 x 7 availability our project communication methodology allows client’s to monitor and control each step of project execution process. It aims to set expectations, minimize miscommunication, rework, etc. to increase project efficiency.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                                Never-ending Support</p>
                            <p>
                                Our never-ending support provides both technical and usability support to clients after project completion.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                                Free training and video tutorials</p>
                            <p>
                                SIB Infotech provides free comprehensive training and video tutorials to our clients for each and every functionality and application. Such video tutorials are key requirement when content management systems are used.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                                Industry Orientation</p>
                            <p>
                                Our team is fully capable and equipped in catering diverse clients from any industry sector ranging from education to lifestyle, travel, media, hospitality etc.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                                Complete Customization</p>
                            <p>
                                Tailor-made internet and mobile solutions developed as per the business objective, needs and requirements of each project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
