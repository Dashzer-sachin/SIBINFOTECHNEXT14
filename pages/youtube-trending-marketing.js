import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import { CustomLayout } from '@/comps/CustomLayout';

export default function YoutubeTrendingMarketing() {
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
    						<h3 className="heading fontWeight700 text-white">Youtube Trending Marketing</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Youtube Trending Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Youtube Trending Marketing </span> Company in India</strong></p>
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
                        <p>Statistics states that one-third of all online activity is spent watching videos. An average user is exposed to 32.3videos in a month. 36% of online consumers trust video ads. This shows that videos play an important role in establishing your brand.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                <div className="col-md-12">
                    <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">What is Youtube Trending?</p>
                        <p>Youtube Trending is a section present on left side of the menu. It displays those videos which are recently watched by a lot of users. Videos that are watched repetitively arrives in this section. It also acts as daily insight on what trend is going on.</p>
                    </div>
                    
                   
                    <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Choosing SIB Infotech for Youtube trending Services </p>
                        <p>Our Experts is the right choice for making your brand videos viral. We understand the importance of our clientâ€™s brand. We make sure that your brandâ€™s products and services, its existence is known to all at national and international level. Your videos will be incorporated into websites social forum, etc. SIB Infotech always uphold the commitment it takes to our client. We make no differences.</p>
                    </div>
                </div>
                </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                      <div className="custom-content-title">
                          <p>Benefits our client receive</p>
                      </div>
                      <ul>
                          <li><p>100% manual</p></li>
                          <li><p>Likes from actual accounts</p></li>
                          <li><p>Tools and Bots are not used at all</p></li>
                          <li><p>Highest retention guaranteed</p></li>
                          <li><p>Real viewing audiences</p></li>
                          <li><p>Safe and secure</p></li>
                          <li><p>Captive Contents</p></li>
              </ul>
                  </div>
                  <div className="col-md-6">
                      <div className="custom-page-img">
                          <img src="assets/images/article-submission.png" alt="Youtube Trending Marketing Company in India" className="img-fluid"/>
                      </div>
                  </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
