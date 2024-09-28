import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import { CustomLayout } from '@/comps/CustomLayout';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
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
    						<h3 className="heading fontWeight700 text-white">Portfolio</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote">
                    <span className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</span>
                  </Link>
    							<Link href="#">
                    <span className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</span>
                  </Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Influencer Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Influencer Marketing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="tabPortfolio">
                    <ul className="d-flex align-items-center justify-content-center">
                        <li
                            className={activeTab === 'tab1' ? 'active' : ''}
                            onClick={() => handleTabClick('tab1')}>
                            Static Websites
                        </li>
                        <li
                            className={activeTab === 'tab2' ? 'active' : ''}
                            onClick={() => handleTabClick('tab2')}>
                            Dynamic Websites
                        </li>
                        <li
                            className={activeTab === 'tab3' ? 'active' : ''}
                            onClick={() => handleTabClick('tab3')}>
                            Wordpress
                        </li>
                        <li
                            className={activeTab === 'tab4' ? 'active' : ''}
                            onClick={() => handleTabClick('tab4')}>
                            Portals
                        </li>
                    </ul>
                </div>
                <div className="portfolioBlock">
                    {activeTab === 'tab1' && <div id="tab1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://www.3solutions.co.in"><span target="_blank">
                                        <img src="assets/images/portfolio/3solutions.jpg" alt="3 Solution"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">3 Solutions</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://axisy.in"><span target="_blank">
                                        <img src="assets/images/portfolio/axisy.jpg" alt="AxisY"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">AxisY</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://mindspring.co.in"><span target="_blank">
                                        <img src="assets/images/portfolio/mindspring.jpg" alt="Mindspring"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Mindspring</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://mrmunim.com"><span target="_blank">
                                        <img src="assets/images/portfolio/mrmunim.jpg" alt="Mr. Munim"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Mr. Munim</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://navyugchemicals.com"><span target="_blank">
                                        <img src="assets/images/portfolio/navyugchemicals.jpg" alt="Navyoug Chemicals"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Navyug Chemicals</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://www.herniaindia.com"><span target="_blank">
                                        <img src="assets/images/portfolio/herniaindia.jpg" alt="Hernia India"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Hernia India</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activeTab === 'tab2' && <div id="tab2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://bardahl.com/"><span target="_blank">
                                        <img src="assets/images/portfolio/bardahl.jpg" alt="Bardahl"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Bardahl</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://emilpharma.in"><span target="_blank">
                                        <img src="assets/images/portfolio/emilpharma.jpg" alt="Emil Pharma"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Emil Pharma</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://narainindia.com/"><span target="_blank">
                                        <img src="assets/images/portfolio/narainindia.jpg" alt="Narain India"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Narain India</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://nsaarchitects.in"><span target="_blank">
                                        <img src="assets/images/portfolio/nsaarchitects.jpg" alt="Nsaarchitects"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">NSA Architects</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://brillianttutorsacademy.com"><span target="_blank">
                                        <img src="assets/images/portfolio/brillianttutorsacademy.jpg" alt="Brillianttutorsacademy"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Brilliant Tutors Academy</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://www.repaircity.in"><span target="_blank">
                                        <img src="assets/images/portfolio/repaircity.jpg" alt="Repair City"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Repair City</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activeTab === 'tab3' && <div id="tab3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://designmyoffice.in/"><span target="_blank">
                                        <img src="assets/images/portfolio/designmyoffice.jpg" alt="Design My Office"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Design My Office</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://in-pl.com"><span target="_blank">
                                        <img src="assets/images/portfolio/in-pl.jpg" alt="Infinite Possibilities"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Infinite Possibilities</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://naturalandessential.co.in/"><span target="_blank">
                                        <img src="assets/images/portfolio/naturalandessential.jpg" alt="Natural &amp; Essential"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Natural &amp; Essential</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://pravaasah.com"><span target="_blank">
                                        <img src="assets/images/portfolio/pravaasah.jpg" alt="Pravaasah"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Pravaasah</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://reimagineparenthood.com"><span target="_blank">
                                        <img src="assets/images/portfolio/reimagineparenthood.jpg" alt="Reimagine Parenthood"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Reimagine Parenthood</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {activeTab === 'tab4' && <div id="tab4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://www.smartexamresources.com"><span target="_blank">
                                        <img src="assets/images/portfolio/smartexamresources.jpg" alt="Smart Exam Resources"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Smart Exam Resources</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://thegreatmentor.com"><span target="_blank">
                                        <img src="assets/images/portfolio/thegreatmentor.jpg" alt="The Great Mentor"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">The Great Mentor</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="https://vivahsaptapadi.com/"><span target="_blank">
                                        <img src="assets/images/portfolio/vivahsaptapadi.jpg" alt="Vivah Saptapadi"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Vivah Saptapadi</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://worlddigitalcard.com"><span target="_blank">
                                        <img src="assets/images/portfolio/worlddigitalcard.jpg" alt="World Digital Card"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">World Digital Card</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="itemImgP shadow">
                                    <Link href="http://tripplannersworld.travel"><span target="_blank">
                                        <img src="assets/images/portfolio/tripplannersworld.jpg" alt="Tripplanners World"/>
                                        <div className="overlayText">
                                            <h4 className="sub_heading">Tripplanners World</h4>
                                        </div>
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        </section>
    </CustomLayout>

  )
}
