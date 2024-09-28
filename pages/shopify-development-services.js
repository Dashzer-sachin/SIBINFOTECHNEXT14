
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ShopifyDevelopementServices() {
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
                            <h3 className="heading fontWeight700 text-white">Shopify Development</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Shopify Development</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Shopify Development</span> Company in India</strong></p>
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
                        <p>We believe that Shopify is an excellent platform for establishing your online E-commerce business. We offer expertise Shopify edits along with an exclusive customized Shopify theme to give your business the customer friendly mindset.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>
                        Shopify is a well-known e-commerce CMS which is widely used across the globe to create online stores. SIB Infotech provides full-scale customization of Shopify CMS to provide you highly functional e-commerce store. We are specialized Shopify Development Company in India providing customization related to theme designing functionality. Our competent professionals provide easy to use navigation. So that your visitors don't go through any complexity while shopping or browsing your products. In addition to this, we provide customization on the dashboard so that you can easily manage your products. We also customize theme based on your business model 
                     </p>
                     <p>
                        At SIB Infotech you will find some of the top Shopify designers in the industry that are experts in creating a customized, beautiful online store. Our ultimate aim is to create a great reflection of the given brand. Our unrivalled services are a combination of personalization and product customisation. We help our clients to land with huge success in the industry.
                     </p>
                     <p>
                        We do not make any compromises with the quality, even if you have a tight budget or want the project done within quick turnaround time. We are probably the best Shopify Customisation Company for you because meeting the client's expectations is what defines us best.
                     </p>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Shopify Development Company in India" className="img-fluid"/>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>SIB Infotech Proposes following benefits</p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="icon-verical-box">
                        <p>Quick &amp; easy to set up &amp; use</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>No tech worries</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>Secure &amp; reliable</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>Abandoned cart recovery</p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="icon-verical-box">
                        <p>Customisable</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>Application Services</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>SEO &amp; Marketing tools</p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="icon-verical-box">
                        <p>Mobile ready</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>Own payment gateway</p>
                     </div>
                     <div className="icon-verical-box">
                        <p>24/7 customer support</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
