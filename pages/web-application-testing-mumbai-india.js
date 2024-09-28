import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WebApplicationTestingMumbaiIndia() {
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
                            <h3 className="heading fontWeight700 text-white">Web Application Testing Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Web Application Testing  </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Web Application Testing  </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
              <div className="row">
                  <div className="col-md-1">
                    &nbsp;</div>
                  <div className="col-md-10">
                    <div className="service-sub-title">
                      <p>
                        Companies use Quality Assurance (QA) and different Testing services so as to make it sure that the application works fine and unhindered.</p>
                    </div>
                  </div>
                  <div className="col-md-1">
                    &nbsp;</div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    Our team of testing professionals is doing rigorously tests using predefined industry-standards for testing methods and Quality Assurance processes.</p>
                  <p>
                    Some times we offer Offshore Software testing to our client base. It is about the verification and validation carried out on software product that makes it sure about high end product quality. The test development activities involve test planning and test case scenarios, automation testing and real time manual testing activities.</p>
                  <p>
                    SIB Infotech’s team for testing works to set and define and then implement an effective and reliable test strategy which in turn is a combination of manual and automated testing routines and covers black-box and white-box testing.</p>
                  <p>
                    A comprehensive Quality Assurance and testing solution for software Product Development can add wings to the high flight of an organization. Well defined and time tested methodologies are followed for ensuring faster and efficient success of software through all the levels of testing.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Web Application Testing Mumbai" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="custom-content-title">
                    <p>
                      SIB Infotech has mastered a predefined set of rules which are to be followed for the purpose of testing and can be viewed as follows</p>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <p>
                            Design and configuration Test.</p>
                        </li>
                        <li>
                          <p>
                            Plan validation</p>
                        </li>
                        <li>
                          <p>
                            Automation script Test</p>
                        </li>
                        <li>
                          <p>
                            Compatibility Test</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <p>
                            Performance Test</p>
                        </li>
                        <li>
                          <p>
                            Interoperability Test</p>
                        </li>
                        <li>
                          <p>
                            Standards compliance Test</p>
                        </li>
                        <li>
                          <p>
                            Regression Test</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
