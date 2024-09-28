import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function RemoteMysqlDbaSupportServices() {
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
                            <h3 className="heading fontWeight700 text-white">Remote MYSQL DBA Services and Support</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Remote MYSQL DBA Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Remote MYSQL DBA Services </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                <div className="col-md-8 order-lg-1 order-2">
                    <div className="col-md-12">
                        <div className="custom-content-title">
                            <p>
                            Our MySQL database administrators are experienced with
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                            <li>
                                <p>Building High End Database systems using Oracle MySQL, Percona MySQL and MariaDB.</p>
                            </li>
                            <li>
                                <p>Database Architecture Support.</p>
                            </li>
                            <li>
                                <p>Performance Tuning and Database Optimization.</p>
                            </li>
                            <li>
                                <p>High Availability Solutions.
                                </p>
                            </li>
                            <li>
                                <p>Reliable and Scalable Clustering Solutions using MySQL.</p>
                            </li>
                            <li>
                                <p>Help with Database Backups and Restore/Recovery.</p>
                            </li>
                            <li>
                                <p>Troubleshooting and Fixing Problems.</p>
                            </li>
                            <li>
                                <p>Help with Database Upgrades and Migration.</p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                            <li>
                                <p>Provide Disaster Recovery Solutions.</p>
                            </li>
                            <li>
                                <p>Automate Database Operations.</p>
                            </li>
                            <li>
                                <p>Audit &amp; Secure your Database Systems.</p>
                            </li>
                            <li>
                                <p>Managed Services Support to your Database Systems.</p>
                            </li>
                            <li>
                                <p>Help with Database Change Control Process.</p>
                            </li>
                            <li>
                                <p>Help with Projects/Development work using MySQL.</p>
                            </li>
                            <li>
                                <p>Provide Monitoring Solutions.</p>
                            </li>
                            <li>
                                <p>24×7 Coverage Support.</p>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 order-lg-2 order-1">
                    <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Remote Myql DBA Support" className="img-fluid"/>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Remote Myql DBA Support" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="col-md-12">
                        <div className="custom-content-title">
                            <p>Below are a few MySQL technologies and products we support</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                            <li>
                                <p>MySQL 5.1/5.5/5.6 and 5.7.x</p>
                            </li>
                            <li>
                                <p>MySQL NDB Cluster</p>
                            </li>
                            <li>
                                <p>Percona MySQL</p>
                            </li>
                            <li>
                                <p>Percona XtraDB Cluster</p>
                            </li>
                            <li>
                                <p>MariaDB</p>
                            </li>
                            <li>
                                <p>Galera Cluster with MySQL</p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                            <li>
                                <p>MySQL Storage Engines (MyISAM, InnoDB/XtraDB/TokuDB, and more)</p>
                            </li>
                            <li>
                                <p>NoSQL with MySQL
                                </p>
                            </li>
                            <li>
                                <p>MySQL Replication (Master-Slave, Master-Master,Chained Replication)</p>
                            </li>
                            <li>
                                <p>Database Partitioning/Sharding</p>
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
