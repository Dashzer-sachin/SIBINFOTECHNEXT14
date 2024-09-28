import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';
export default function PostGreSqlDatabaseServices() {
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
                            <h3 className="heading fontWeight700 text-white">Postgresql Database Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Postgresql Database </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Postgresql Database </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                 <div className="col-md-6">
                    <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Postgresql Database Services in India" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-md-6">

                    <p>
                        Expert SIB Infotech DBAs Deliver Optimal Performance and Reliability without Sacrificing Security.PostgreSQL database support helps your organization increase performance and stability. At SIB Infotech we offer a proprietary monitoring tool, SIB Infotech DeltaÂ© unique delivery structure that complies with ITIL and industry best practices.PostgreSQL DBA is appointed to a client to ensure that our services are most effectively implemented.

                    </p>
                    <div className="custom-content-title">
                        <p>What is PostgreSQL Database ?</p>
                    </div>
                    <p>
                        As one of the most powerful, open source database systems available, PostgreSQL has benefited organizations worldwide with more than 15 years of reliability, security, data integrity,support, and service. PostgreSQL offers strict compliance standards and is a robust database capable of managing multiple terabytes of data in an enterprise environment. </p>


                </div>
               
            </div>
            <div className="row">
              <div className="col-md-12">
                  <div className="custom-content-title">
                      <p>
                          SIB Infotech's experienced PostgreSQL DBA support services include</p>
                  </div>

              </div>

              <div className="col-md-4">
                  <ul>
                      <li>
                          <p>Cost effective 24x7 DBA coverage</p>
                      </li>
                      <li>
                          <p>Health checks</p>
                      </li>
                      <li>
                          <p>Replication</p>
                      </li>
                      <li>
                          <p>Migrations</p>
                      </li>
                      <li>
                          <p>Technical remote DBA support services</p>
                      </li>
                      <li>
                          <p>Database consulting</p>
                      </li>
                      <li>
                          <p>Database upgrades</p>
                      </li>

                  </ul>
              </div>
              <div className="col-md-4">
                  <ul>
                      <li>
                          <p>Database performance tuning</p>
                      </li>
                      <li>
                          <p>AWS EC2 implementation management and configuration</p>
                      </li>
                      <li>
                          <p>AWS RDS setup and support</p>
                      </li>
                      <li>
                          <p>Conversions from other platforms to PostgresSQL</p>
                      </li>
                      <li>
                          <p>AWS Redshift support and performance tuning</p>
                      </li>
                      <li>
                          <p>PostgresSQL scaling for enterprise performance</p>
                      </li>
                  </ul>
              </div>
              <div className="col-md-4">
                  <div className="custom-page-img">
                      <img src="assets/images/article-submission.png" alt="Postgresql Database Services" className="img-fluid"/>
                  </div>
              </div>



          </div>
            </div>
         </section>
    </CustomLayout>
  )
}
