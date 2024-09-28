import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ZendFramworkDevelopmentServices() {
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
    						<h3 className="heading fontWeight700 text-white">Zend Framework Development Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Zend Framework Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Zend Framework Development </span> Company in India</strong></p>
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
                        <p>Zend Framework Development Services</p>
                        </div>
                    </div>
                    <div className="col-md-1">
                        &nbsp;
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <p>Zend Framework 2 is an open-source framework that is used for developing web applications. It uses object-oriented code. For better results; the components in the standard library can be combined. So that it will offer robust, high-performance MVC implementation. It accommodates as per your needs. It uses a modular base so you can use building blocks in combination with other applications or frameworks. ZendService is used to implement client libraries to access the most popular web services available. There are no predefined constraints that allow you to implement the framework and components in whatever way you need.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Zend Framework Companies in India" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="custom-content-title">
                        <p>Zend Framework Features</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Highly Secure &amp; Flexible Framework</p>
                        <p>Zend framework has the ability to provide programming flexibility to PHP Zend developers and enable them to implement the required features without making any glitches.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Cost Effectiveness</p>
                        <p>Zend application development cost is very reasonable. Being based on the open source technology of PHP, the application development in this framework is truly cost-effective.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">MVC Features</p>
                        <p>The most sought-after MVC features make it the best-suited framework for web application development. MVC architecture of Zend framework is well known for clean coding and neat wrapping of code which contributes to the powerful performance of the web applications.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Scalability with Add-ons</p>
                        <p>Supporting a wide range of add-ons, library scripts, and extensions development on this framework is hassle-free.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Easy Integration</p>
                        <p>The developers are able to integrate the third-party applications with the main application. It helps the businesses in getting all the required features and implementation.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Great Community Support</p>
                        <p>Zend framework offers a great community support that enables the developers in sharing the development ideas. The active community of online Zend developers keeps the developers updated and provide the required solution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
