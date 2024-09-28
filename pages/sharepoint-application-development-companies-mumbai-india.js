
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SharepointsDevelopmentCompanyMumbaiIndia() {
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
                            <h3 className="heading fontWeight700 text-white">Sharepoint Application Development</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Sharepoint App Development</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Sharepoint App Development</span> Company in India</strong></p>
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
                        <p>SIB Infotech team uses SharePoint platform services for optimizing collaboration processes and regulating business workflow, so that you can grab tangible business benefits.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-12">
                    <p>Our developers’ team has in-depth expertise in the latest RIA (Rich Internet Application) technologies to develop custom SharePoint Applications as per your needs. For intuitive and user friendly application, SIB Infotech can be the right and reliable choice for you.</p>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Hiring Sharepoint Developers</p>
                      <p>
                        We at SIB Infotech have been successfully working on SharePoint Development. Our developer team uses SharePoint platform services for optimizing collaboration processes and regulating business workflow etc. Our strength is in-depth knowledge and extensive experience of our developers’ team who can help you grab tangible benefits of your business. Our developers’ team also has expertise in the latest RIA (Rich Internet Application) technologies to develop custom SharePoint Applications as per your needs. So you can stay sure outsourcing your SharePoint solution projects to us.</p>
                    </div>
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Outsourcing Sharepoint Developments</p>
                      <p>
                        We, at SIB Infotech use SharePoint platform services for optimizing collaboration processes and also practice the technology of the latest RIA (Rich internet Application). When our developers work on your project, they focus on your business benefits. For intuitive and user friendly application, SIB Infotech can be the right and reliable choice for you. So you can stay sure of outsourcing your SharePoint solution projects to us.</p>
                    </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
