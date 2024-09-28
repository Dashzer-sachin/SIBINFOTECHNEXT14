import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function YoutubeMarketing() {
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
    						<h3 className="heading fontWeight700 text-white">Youtube Marketing</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Youtube Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
               <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
               <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Youtube Marketing </span> Company in India</strong></p>
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
                        <p>A fundamental approach to your business transformation is using youtube.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>
                        The first video on youtube was uploaded on 23 April 2005. After a decade, youtube has grown tremendously. According to recent stats, 6 out of 10 people prefer online video platform to live TV. In an average monthly, 8 out of 10  ranges from 18-49 year-olds who watch YouTube. On mobile alone, YouTube reaches more 18-49 year-olds comparing to any broadcast or CABLE TV network. In youtube a user could navigate in a total of 76 different languages, covering around 95% of the internet population. Youtube is been streamed in 88 countries. Youtube is the worldâ€™s second-largest search engine and also third most visited site after Google and Facebook. 300 hours of video are uploaded to youtube every minute. That is why youtube is so crucial in social media marketing. SIB Infotech will work with you side by side to uplift your brand.
                     </p>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Best Youtube Marketing Services Company in India" className="img-fluid"/>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>
                           SIB Infotech has the following procedure towards promoting your brand
                        </p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Design a fascination YouTube Channel Home Page </p>
                        <p>Your channels' homepage is the primary thing a user will go through. It needs to make a powerful impact on the user. SIB Infotech will assist you. The profile picture of your channel should be companyâ€™s logo. Pick a clear image to avoid clutter. The reason behind this as on youtube the profile picture appears very small.</p>
                        <p>
                           Uploading channel art is the next step. At top of your channel homepage, you could go for some informative or captive words, images, etc. SIB Infotech will guide you through.
                        </p>
                        <p>
                           Make a channel trailer and upload it. It gives the user an idea of your brand.
                        </p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Increase YouTube watch time </p>
                        <p>Our experts see to it that the rank of your brandâ€™s channel will in the top. Today youtube algorithm considers the minute watched counting. It means that for how long were your video was watched by the user matters.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Youtube Ads</p>
                        <p>Youtube has a provision where an advertisement can be played just before the video. The ad is approx. in seconds. Even in that, there is two option. In the first type, the user can skip the ad and get back to his video. It's not compulsory for the user to watch the ad at all. In another one, the user has to see the whole ad. He canâ€™t skip it. Our experts will see through the whole process.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Analysis </p>
                        <p>Our experts observe and prepare a full detailed report about the status of your channel. The report includes watching time. Meaning the amount of time (in minutes) that viewers have watched a video.</p>
                        <p>
                           Audience Retention is also very necessary. It shows that while the user was watching your brand content. The time it drops out from your video. Through this, we could determine the content quality. Till which part the content was interesting. 
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
