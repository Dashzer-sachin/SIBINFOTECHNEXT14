import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WhatsappMarketing() {
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
    						<h3 className="heading fontWeight700 text-white">Whatsapp Marketing</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Whatsapp Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Whatsapp Marketing</span> Company in India</strong></p>
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
                        <p>Be where your customers are!! </p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-12">
                     <p>In India, WhatsApp is growing very rapidly. Every day new users are added. According to the stats of February 2017, the number of users crossed 200 million monthly active users in India. Recently due to the growing demand in India, a separate Business version was launched. Due to this companies are now able to create a separate WhatsApp account. SIB Infotech experts will handle your business account.</p>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>SIB Infotech has the following procedure towards promoting your brand</p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <p>Capitalize on the Cross-Platform Advantage</p>
                        </li>
                        <li>
                           <p>Create and update Broadcast Lists</p>
                        </li>
                        <li>
                           <p>Cost-Free Messaging</p>
                        </li>
                        <li>
                           <p>Enhancing Customer Support to a New Level</p>
                        </li>
                        <li>
                           <p>Giving Offers and Promotions</p>
                        </li>
                        <li>
                           <p>Build User Loyalty</p>
                        </li>
                        <li>
                           <p>Engage Directly with Phone Calls</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <p>Maintain Quality Content, Even in a Message App</p>
                        </li>
                        <li>
                           <p>Incorporate Curated Content</p>
                        </li>
                        <li>
                           <p>Targeted Audience</p>
                        </li>
                        <li>
                           <p>Mind the Opt-Out Option (This will disable the Read Receipts for Group Chats and Play Receipts for Voice Messages. There is no way to turn off these features)</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Whatsapp Marketing Companies in India" className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </div>
        </section>
    </CustomLayout>
  )
}
