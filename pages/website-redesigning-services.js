   
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WebsiteRedesigningServices() {
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
    						<h3 className="heading fontWeight700 text-white">Website Redesigning Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Redesigning</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Redesigning</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h3 className="customHeading customLineHeight">
                            The globalisation of internet is effecting every moment and the <span>Design</span> that may be <span>Rightly Working</span> few years back might not be so today</h3>
                        <div className="redesigning-img">
                            <img className="image-full" src="assets/images/website-redesigning-company-in-india.png" alt="Website-Redesigning-Company-In-India"/></div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <p className="customText">
                            As the world is changing towards becoming the best, it is essential to provide website redesign a grave attention to make set organization goals reachable in actual life. SIB Infotech offer you a variety of website redesigning services to make a strong impact on viewers and excellent impression on your business.</p>
                        <p className="customText">
                            SIB Infotech provides you a extensive redesigning of the website. The advantage of our service results in improved ranking of the website in search engine results. Using sib infotech’s services your website will improve ranking in every search engine results. Also also makeover your website with new professional looks with never ending customer support.</p>
                        <p className="customText">
                            At SIB Infotech, Our experts will put every maximum effort to construct your website in such a manner that it obviously exposes the superior quality of your business. Our web redesign services are relatively attractive to keep your current clientele and capture your prospects.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey margin-top">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="redesigning-box">
                                    <img src="assets/images/icons/redesigning-lates-technoloy.svg" alt="Website-Redesigning-Company-In-Delhi"/>
                                    <p className="customText">
                                        We Develop a website with latest features and technology</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="redesigning-box">
                                    <img src="assets/images/icons/redesigning-increase-ranking.svg" alt="Website-Redesigning-Company-In-Mumbai"/>
                                    <p className="customText">
                                        Increase ranking in search engines with newly optimized keywords</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="redesigning-box">
                                    <img src="assets/images/icons/redesigning-perfect-balance.svg" alt="Website-Redesigning-Firm-In-Delhi"/>
                                    <p className="customText">
                                        Maintain perfect balance of content, image and video</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="pattern">
                                    <img src="assets/images/icons/tab-img-pattern.png" alt="Website-Redesigning-Company-In-India"/></div>
                            </div>
                            <div className="col-lg-4">
                                <div className="redesigning-box">
                                    <img src="assets/images/icons/redesigning-engage-users.svg" alt="Website-Redesigning-Firm-In-India"/>
                                    <p className="customText">
                                        Add appealing features to engage users</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="redesigning-box">
                                    <img src="assets/images/icons/redesigning-navigation.svg" alt="Website-Redesigning-Company"/>
                                    <p className="customText">
                                        Enable easy navigation links for users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bgBlueDarkRight bgBlueDarksmHeight">
                            <h3 className="customHeading text-white customLineHeight">
                                Reasons why choose SIB Infotech for Redesigning your Websites</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
