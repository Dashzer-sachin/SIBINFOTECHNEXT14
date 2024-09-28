import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SnapchatMarketing() {
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
                            <h3 className="heading fontWeight700 text-white">Snapchat Marketing</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Snapchat Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Snapchat Marketing </span> Company in India</strong></p>
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
                        <p>SIB Infotech's goal is to spark something within the reader and allow it to initiate an idea they then can grow.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>
                        Snapchat came into existence in the year 2011. The architecture on which Snapchat is based on is images and videos communication. Users share their daily activity, events in the form of pics and videos. The credibility of the company boosts rapidly when the company got its own IPO. Snapchat has 187 million users on daily bases. According to 2017 stats monthly, active users were 300 plus million users. A number of snaps created every day were 1 million. Average time spend by a daily user was 30 plus minutes. A number of daily videos uploaded were greater than 10 million. 
                     </p>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Snapchat Marketing in India" className="img-fluid"/>
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
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Providing Access to live events</p>
                        <p>Snapchat is the best social media platform when it comes to broadcasting live events happening around. SIB Infotech applies when it comes to new product launching by your company. You also use the same for starting new services.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Offer Contests, Perks or Promotions</p>
                        <p>Everybody love social media giveaways as well as promotions. Its one of the way to keep your followers coming back to you. It also adds new followers and potential customers. Use of promo codes, discounts, etc. It reflects your commitment towards them.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Behind the Curtain</p>
                        <p>Nowadays everyone wants to see more than the final product and service. They want to dig deep. Give them the access. Through SIB Infotech they will get to know the process, scenes and events that took place in making your product. They want to know the inspiration, thoughts and goals. Given them the insight, transparency, every detail so that they will be part of your product.</p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Track mentions -- and respond accordingly</p>
                        <p>SIB Infotech will keep a track on all of your mentions in the tweets. Responses will be made accordingly. We see to it that no tweet goes without any response by your company.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Deliver Private Content</p>
                        <p>Our experts use this platform to provide special content that they might not get on other platforms. We think of something captive that your followers will love it. They will share it too. A statement will be made.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Partners with Influencers</p>
                        <p>Today it's not just about making aTV commercial with some celebs is enough. You need a lot then this. You need to be in contact with influencers who have millions of followers. They will endorse your brand. SIB Infotech will help you in achieve this. It adds brand credibility and a trust factor by potential clients, followers and users.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
