import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function W3cStandardsIndia() {
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
                            <h3 className="heading fontWeight700 text-white">W3C Standards</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">W3C Standards </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">W3C Standards </span> Company in India</strong></p>
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
                        <p>W3C was shaped to describe a set of web standards and guidelines which might be utilized by web developers to make sure compatibility with internet browsers and correct rendering.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-12">
                     <p>SIB Infotech will take full responsibility for promoting your brand. We will trend your customize hashtags. You will be happy with the outcome.</p>
                     <p>We have a broader scope of services. We can deal with show business. Your movie, its songs, actions will be trending. Just leave this to our experts. Our experts have a deep knowledge in terms of politics, different celebs, Politics etc.</p>
                  </div>
               </div>
               <div className="row mt-4">
                <div className="col-md-6">
                  <div className="custom-content-title">
                    <p>
                      W3C XHTML / HTML Validation</p>
                  </div>
                  <p>
                    We will check your website's HTML validates as W3C standards compliant for HTML / XHTML with the W3C HTML Validator. The World Wide Web Consortium (W3C) is the web industry's well-known global standards organization.</p>
                  <div className="custom-content-title">
                    <p>
                      Standards – compliant XHTML</p>
                  </div>
                  <p>
                    The HTML was intended for a very dissimilar environment than today's internet. HTML became bulky through a decade of slipshod use and unplanned development. Only Suitable XHTML webpages are able to role correctly in fresh browsers such as chrome, Safari and Firefox and stay friendly with older browsers.</p>
                  <p>
                    At SIB Infotech We are dedicated to observance advanced with the latest technology. We design our customer’s websites to meet XHTML 2.0 / CSS 3 standards.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="W3C Standards India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
