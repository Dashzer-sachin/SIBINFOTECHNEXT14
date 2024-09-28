import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
export default function SocialBookmarkingServices() {
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
                            <h3 className="heading fontWeight700 text-white">Social Bookmarking Services</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Bookmarking</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Bookmarking</span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section id="sib-custom-page">
          <div className="containerFull">
            <div className="row">
               <div className="col-lg-5">
                  <h3 className="customHeading customLineHeight2">
                     A <span>Social Bookmarking Service</span> is a centralized online service which enables users to add, annotate, edit, and share bookmarks of web documents
                  </h3>
                  <div className="tiktok-img-section margin-top">
                     <img alt="Social-Bookmarking-Services-Company" className="image-full" src="assets/images/socila-bookmarking-img.png"/>
                  </div>
               </div>
               <div className="col-lg-7">
                  <p className="customText mt-lg-0 mt-5">
                     Social bookmarking service has become growingly renowned these days. The term is popularized as tagging. Tagging is a significant feature of social bookmarking systems. SIB Infotech’s Social Bookmarking Service provides your website improved visibility and the website gets noticed. Backlinks are the major edge of determining where you’re Website, Blog, video or any types of content will be located in Search Engines.
                  </p>
                  <p className="customText">
                     Our valuable Social Bookmarking Packages is planned according to business needs and budget of the user. It is one of the best ways to get noticed in search engines. Social bookmarking service provides you a range of benefits and can prove to be highly lucrative for your business. We offer you efficient social bookmarking service and that too at a very pocket-friendly price. Our services can help you in deriving great benefits such as increased traffic, online visibility, quality back links as well as reputation on the Internet.
                  </p>
                  <div className="blueRightSection">
                     <h3 className="customHeading">
                        At SIB Infotech We will help you improve the page rank
                     </h3>
                     <p className="customText">
                        and guarantees that all your social bookmark submissions are indexed by Google and the other search engines.
                     </p>
                     <Link className="btnTheme" href="/contact-us">Speak To Our Experts</Link>
                  </div>
               </div>
            </div>
          </div>
         </section>
    </CustomLayout>
  )
}
