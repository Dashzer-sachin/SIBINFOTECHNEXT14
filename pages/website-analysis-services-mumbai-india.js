import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WebsiteAnalysisServicesMumbai() {
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
                            <h3 className="heading fontWeight700 text-white">Website Analysis & Tracking Reports</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Analysis </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Analysis </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p className="customText">
                    The most important purpose of every website analysis is meeting the correct information for employ in your optimization.</p>
                  <p className="customText">
                    Through analytics, you can find out how many people are finding you, where they are coming from, how long they are staying, and which pages they visit the most.</p>
                  <p className="customText">
                    You probably need of website analysis to improve the effectiveness of your website SEO and PPC marketing campaigns, website operations &amp; to Improve Return on investment.</p>
                </div>
                <div className="col-lg-5">
                  <div className="seo-results-heading-section bgWhite">
                    <h3 className="customHeading customLineHeight2">
                      A <span>Website Analysis</span> is the method of tracking statistics compilation and determining the quantitative and qualitative information about site traffic and how to helpfully use this information</h3>
                  </div>
                </div>
              </div>
            </div>
         </section>
         <section className="bgGrey">
          <div className="containerFull">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3 className="customHeading">
                  Our <span>Website Analysis</span> tasks</h3>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="web-analysis-box-1">
                      <p className="customText text-white">
                        Determining whether your website can meet your business goals.</p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="web-analysis-box-2">
                      <p className="customText text-white">
                        To assess the quantity and quality of traffic.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="web-analysis-box-3">
                      <p className="customText text-white">
                        Identifying any problem spots on the website.</p>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="web-analysis-box-4">
                      <p className="customText text-white">
                        Mark the most efficient and cost-effective sources of traffic.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    &nbsp;</div>
                  <div className="col-lg-5">
                    <div className="web-analysis-box-5">
                      <p className="customText text-white">
                        Finding methods to potentially increase the conversion rate of traffic.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img-effect">
                  <img alt="Social-Bookmarking-Services-Company" className="image-full" src="assets/images/instagram-ads-business-objective.svg"/></div>
              </div>
            </div>
          </div>
        </section>
    </CustomLayout>
  )
}
