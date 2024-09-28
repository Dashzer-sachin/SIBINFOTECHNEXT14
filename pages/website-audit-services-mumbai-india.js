import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function CorporateWebsiteDesigningServices() {
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
    						<h1 className="heading fontWeight700 text-white">Corporate Website Designing Services</h1>
    						<h2 className="small_heading fw-bold mt-1 mt-lg-2 text-white">Best Website Designing Company in India</h2>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none dmd-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Corporate Website Designing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-md-none">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Designing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-7">
                        <p className="customText">Having a Corporate website has become an essential part of today's business world. Regardless of the nature of the business, it can only grow if , aimed to expand their clientage - and the Internet is the best source to achieve such ambitions.</p>
                        <p className="customText">That is the reason a good website is so essential in the corporate world. In fact, Your Company can engage relevant clients from all over the world easily. You can even crack a multi million deal with just a few clicks.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="corporateRight">
                            <img src="assets/images/corporate-website-designing-company-in-delhi.png" alt="Corporate website designing company"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="leftDigiSer">
                            <img src="assets/images/corporate-website-designing-company-in-mumbai.png" className="imgAnimation" alt="Corporate website designing company in mumbai"/>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 pl-0">
                        <h4 className="customHeading mt-lg-0 mt-4 customLineHeight">How to check whether <span className="text_red">your business website</span> is up to the mark or not?</h4>
                        <div className="businessListing">
                            <div className="itemBusinesList">
                                <div className="iconBusines">
                                    
                                </div>
                                <div className="businesRightTitle">
                                    <h4 className="customSmallHeading">It should provide relevant information about the business.</h4>
                                </div>
                            </div>
                            <div className="itemBusinesList">
                                <div className="iconBusines">
                                    
                                </div>
                                <div className="businesRightTitle">
                                    <h4 className="customSmallHeading">It should have a proper navigation system.</h4>
                                </div>
                            </div>
                            <div className="itemBusinesList">
                                <div className="iconBusines">
                                    
                                </div>
                                <div className="businesRightTitle">
                                    <h4 className="customSmallHeading">It should look good at the first glance.</h4>
                                </div>
                            </div>
                            <div className="itemBusinesList">
                                <div className="iconBusines">
                                    
                                </div>
                                <div className="businesRightTitle">
                                    <h4 className="customSmallHeading">It should be secured.</h4>
                                </div>
                            </div>
                            <div className="itemBusinesList">
                                <div className="iconBusines">
                                    
                                </div>
                                <div className="businesRightTitle">
                                    <h4 className="customSmallHeading">It should be mobile friendly</h4>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <h4 className="customSubHeading customLineHeight mt-2">Found something missing in your website? Don't have a corporate website?</h4>
                        <p className="customText"><strong>Don't worry</strong> We are here to do what is required. <strong>SIB Infotech is one of the best corporate website designing agencies in India.</strong> Also, we have the finest designers in the business with sharp understanding and developing skills. We aim to design tailor made designs that construct robust and positive business identities globally.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <h4 className="customHeading text-center">Why Choose <span className="text_red">SIB Infotech</span></h4>
                <div className="customRow font">
                    <div className="columnRow whyItemHeight">
                        <div className="iconDigiServ">
                            <img src="assets/images/icons/affordable-cost.svg" alt="Affordable cost"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="whyItem">
                            <h5>We provide Pocket friendly designs</h5>
                        </div>
                    </div>
                    <div className="columnRow whyItemHeight">
                        <div className="iconDigiServ">
                            <img src="assets/images/icons/happy-customer.svg" alt="Happy customer"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="whyItem">
                            <h5>We assure 100 % customer Satisfaction</h5>
                        </div>
                    </div>
                    <div className="columnRow whyItemHeight">
                        <div className="iconDigiServ">
                            <img src="assets/images/icons/latest-tools.svg" alt="Latest tools"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="whyItem">
                            <h5>We use latest tools &amp; technologies to develop any website.</h5>
                        </div>
                    </div>
                    <div className="columnRow whyItemHeight">
                        <div className="iconDigiServ">
                            <img src="assets/images/icons/cutomer-relationship.svg" alt="Customer relationship"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="whyItem">
                            <h5>We believe in building Better Relationship with our clients.</h5>
                        </div>
                    </div>
                    <div className="columnRow whyItemHeight">
                        <div className="iconDigiServ">
                            <img src="assets/images/icons/achievement.svg" alt="Achievement"/>
                        </div>
                        <div className="clearfix"></div>
                        <div className="whyItem">
                            <h5>We work hard on your ideas and try our best to create a path to achieve the desired goals.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="zIndex position-relative redBg">
            <div className="containerFull">
                <div className="callAction">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="customLineHeight2">#1 Agency for Corporate Website Designing and Development in India with office in Mumbai and Delhi.</h4>
                            <Link href="#">Speak to our experts </Link>
                        </div>
                    </div>
                </div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#f02329" fill-opacity="1"></path> </svg>
            </div>
        </section>
    </CustomLayout>
  )
}
