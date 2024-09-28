
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SoftwareTestingQualityAssuranceServices() {
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
                            <h3 className="heading fontWeight700 text-white">QA Testing Services</h3>
                            <div className="mt-4">
                                <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">QA Testing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">QA Testing</span> Company in India</strong></p>
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
                        <p>
                           Companies use Quality Assurance (QA) and different Testing services so as to make it sure that the application works fine and unhindered.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="QA Testing Services" className="img-fluid"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <p>
                        Our team of testing professionals is doing rigorously tests using predefined industry-standards for testing methods and Quality Assurance processes. 
                     </p>
                     <p>Some times we offer Offshore Software testing to our client base. It is about the verification and validation carried out on software product that makes it sure about high end product quality. The test development activities involve test planning and test case scenarios, automation testing and real time manual testing activities.
                     </p>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4">
                     <div className="custom-content-title">
                        <p> We also follow this approach to test various business layers in the application.</p>
                     </div>
                     <ul>
                        <li>
                           <p>Unit testing</p>
                        </li>
                        <li>
                           <p>Regression, Integration and System testing</p>
                        </li>
                        <li>
                           <p>Business Logic testing</p>
                        </li>
                        <li>
                           <p>Database Interaction</p>
                        </li>
                        <li>
                           <p>UI, usability and dataflow</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <div className="custom-content-title">
                        <p> We also follow this approach to test various business layers in the application.</p>
                     </div>
                     <ul>
                        <li>
                           <p>Compatibility (on various h/w, s/w configurations)</p>
                        </li>
                        <li>
                           <p>Installation and Deployment Reliability, performance and load tolerance</p>
                        </li>
                        <li>
                           <p>Recovery and fail-over testing</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="QA Testing Services" className="img-fluid"/>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>SIB Infotech provides the following types of Application Testing Services</p>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-4">
                           <div className="custom-page-icon-box">
                              <p>Web Application Testing </p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="custom-page-icon-box">
                              <p>Desktop Application Testing </p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="custom-page-icon-box">
                              <p>Mobile App Testing</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
