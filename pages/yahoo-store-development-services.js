import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function YahooStoreDevelopmentServices() {
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
    						<h3 className="heading fontWeight700 text-white">Yahoo Store Development Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Yahoo Store Development  </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Yahoo Store Development  </span> Company in India</strong></p>
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
                        <p>SIB Infotech is a professional design and development firm, providing premium Yahoo Store design and development services.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    With SIB Infotech, you can expect a professional experience and a quality level of service when you commission us for your work.Whether you are an entrepreneur looking forward to open your first Yahoo Store, or are an experienced online business person, you can expect SIB Infotech to fulfill your business aspirations.</p>
                  <p>
                    Our experienced design and development team is dedicated to help you improve your business prospects by considerably improving your ROI and helping your Yahoo Store do business profitably.SIB Infotech is a professional design and development firm, providing premium Yahoo Store design and development services.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Yahoo Store Development Company in India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row">
                <div className="custom-content-title">
                  <p>
                    How can Hosted Marketing Pages help my site's rankings?</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Yahoo Store Design</p>
                    <p>
                      If you want your Yahoo Store to be an online success, then you must consider Yahoo Store Design. Bring more customers to your store and facilitate more conversions with key design elements like faster navigation, enhanced RTML programming, and improved product pages.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Yahoo Store Enhancement</p>
                    <p>
                      With Yahoo Store enhancements, you can improve various features of your store such as navigation, display and layout, marketing features, and other store management features that will enhance your store’s look and feel along with encouraging your customers to stay longer on your site and make more purchases.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Redesign Yahoo Store</p>
                    <p>
                      For those who are not satisfied with their current Yahoo Store Design, or want to beat the competition with the help of a new and improved design, redesigning your Yahoo Store offers the right option..</p>
                    <p>
                      We’ve conventional set of link building strategies that guide our SEO &amp; business practices. Our experts take pride in their work and truly enjoy the taste of success.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Yahoo Store Marketing</p>
                    <p>
                      Market your store to the right customers and reap the benefits. We utilize various tools and techniques to market your store to your specific target audience so that your store does better business online.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      RTML Programing</p>
                    <p>
                      RTML is a proprietary language used by Yahoo for its stores. Yahoo Store initially comes with a basic template that can be further improved with the help of RTML programming. A wide range of advanced functionalities can be added using RTML programming to improve the look and feel and other feature pertaining to the store.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Yahoo Store Guide</p>
                    <p>
                      With the help of your Yahoo Store Guide, creating your own Yahoo Store is now as simple as a breeze. So, if you want to start your own Yahoo Store, you can read how to get started here.</p>
                  </div>
                </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
