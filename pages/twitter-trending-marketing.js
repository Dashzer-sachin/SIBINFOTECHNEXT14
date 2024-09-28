
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function TwitterTrendingMarketing() {
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
                            <h3 className="heading fontWeight700 text-white">Twitter Trending Marketing</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Twitter Trending Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
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
                        <p>What really decides consumers to buy or not to buy is the content of your advertising.
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
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Twitter Trending Marketing Services in Delhi" className="img-fluid"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-content-title">
                        <p>Our Experts will guide you thoroughly</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Introduction to your brand</p>
                        <p>Your Twitter bio should be inclusive in nature. Meaning that when users go through your profile for the first time it should be relatable. Your profile should reflect that its interactive to any user.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Tweet and further retweet!</p>
                        <p>Our experts will tweet about your brand regularly. This action indicates that your brand is always active.  Nobody follows a brand that doesnâ€™t response to users and its followers. When your brand is active all the time users keep on interacting and they retweet. This is a necessary stage that we should achieve. Our experts will do this for you.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">#Hashtag: Your way to Top</p>
                        <p>Hashtags are very important for trending your market. Our experts will provide such customizable hashtags which will result in brandâ€™s glory. We connect your brand with trending events, news, etc. This result in a shift of focus towards your brand. We are quite the experts in achieving this.</p>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <div className="custom-content-title">
                        <p>Benefits of Twitter Trends:</p>
                     </div>
                     <ul>
                        <li>
                           <p>Increase focus on quality and relevance of growth</p>
                        </li>
                        <li>
                           <p>Use of Hashtags</p>
                        </li>
                        <li>
                           <p>Adding links and images</p>
                        </li>
                        <li>
                           <p>Offer useful or helpful information</p>
                        </li>
                        <li>
                           <p>Be timely and focused</p>
                        </li>
                        <li>
                           <p>Track your results</p>
                        </li>
                        <li>
                           <p>Follow up with your leads and customers</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Twitter Trending Marketing" className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
