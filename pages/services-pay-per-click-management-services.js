import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ServicesPayPerClickManagement() {
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
                            <h3 className="heading fontWeight700 text-white">Pay Per Click Management Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Pay Per Click Management  </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Pay Per Click Management  </span> Company in India</strong></p>
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
                        <p>Pay Per Click campaign (PPC) is the most recent and upcoming technique in the online marketing segment today.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>The most significant is â€˜instant increase in website trafficâ€™. Rather than using conventional optimization techniques that require some time to deliver results, PPC campaign instantly increases traffic on your website by displaying your ads on thousands of other websites. Furthermore, PPC is comparatively cheaper than other techniques, since you only need to pay in the range of $0.01-$0.50 for every click-through.</p>
                  </div>
                  <div className="col-md-6">
                     <p>
                        Pay Per Click is basically an advertising model in which the advertiser pays for every click-through that takes visitor to its website. In return, the advertiser gets relevant traffic on its website which it can use to promote its business online.
                     </p>
                     <p>
                        Pay Per Click campaigns hold several advantages over conventional optimization techniques like Link Building, Directory Submission, Forums Submission, creating blogs etc.
                     </p>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>
                        Besides, experts can monitor your pay per Click campaigns on a daily basis to analyze their performance and ensure that you keep getting optimum benefits from your PPC campaigns.
                     </p>
                     <p>SIB Infotech, using its experience in search engine optimization, offer you expert Pay per Click (PPC) Management services. We have prior experience in using popular PPC solutions such as Adword (Google), Overture (Yahoo) and adCentre (MSN) and have been successfully managing PPC campaigns for our clients in India, USA, UK, Australia and New Zealand.
                     </p>
                     <p>Managing pay per click campaign is a specialistâ€™s job and one must avail the services of experienced professionals/offshore experts only to implement it. For example, one needs to submit a list of targeted keywords while creating a PPC campaign. PPC experts have the experience to understand your business and create a list of targeted keywords that could bring maximum visitors to your website.</p>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Pay Per Click Management Services Company in India" className="img-fluid"/>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>
                        Like any other operating expense, you would also like to limit your PPC expenses. At SIB Infotech, we strive to offer you maximum business leads in minimum clicks. Thatâ€™s why; we initially spend some time in analyzing your business type. Once we finished with our preliminary analysis, our PPC Team creates a list of business-focused keywords to ensure you only get relevant ad clicks during your PPC campaigns.
                     </p>
                  </div>
                  <div className="col-md-6">
                     <p>
                        We offer our PPC Management services at low cost, thanks to companyâ€™s strategic location in Indian sub-continent. Our services are cost effective and deliver you maximum benefits from PPC campaigns.
                        Browse through our range of Internet Marketing Services or Contact Us with your specific requirement
                     </p>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
