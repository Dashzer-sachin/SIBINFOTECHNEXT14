import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function XhtmlConversionServices() {
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
    						<h3 className="heading fontWeight700 text-white">XHTML Conversion</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">XHTML Conversion</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">XHTML Conversion</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <h3 className="customHeading customLineHeight text-center">
                    <span>XHTML </span>performs the quick, Effortless, Inexpensive and cross browser compatibility with fast and specialized suspensions for your coding requirements</h3>
                <div className="row margin-top">
                    <div className="col-lg-6">
                        <p className="customText">
                            SIB Infotech offers you an elite XHTML conversion services.We can convert any basic html, psd or jpeg within committed time into a completely optimized, user friendly and webpage accessible with hand coded XHTML with the help of advanced technology like HTML5 and CSS3.</p>
                        <p className="customText">
                            Our Expert designers and programmers is ready to work with all xhtml projects, big or small, to suit all budgets and technical needs. In 24 working hours or less depending on your project, we aim to deliver the highest PSD TO XHTML conversion quality at an affordable price.</p>
                        <div className="bgBlueDarkLeft bgBlueDarkxsmHeight">
                            <p className="customText text-white">
                                We can also redesign your existing website from a Table based layout to a lightweight table-less layout by using HTMl 5 and CSS3 techniques.</p>
                            <p className="customText text-white">
                                Making things simple and affordable for you matter to us. With the technical capacity of the highest standards and efficient customer service with fast results – that's what PSD TO XHTML conversion is all about for us.PSD image slicing in detail, exporting it to XHTML is our mission.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="xhtml-img">
                            <img className="image-full" src="assets/images/xhtml-conversion-company-in-india.png" alt="xhtml-conversion-company-in-india"/></div>
                        <p className="customText margin-top">
                            PSD to XHTML conversion is done by using clean W3C valid markup from all the common known formats like PSD, JPG, GIF, TIF, PNG, AI, EPS, CDR, BMP, and PDF. We put search engine optimized tags on the website to get more traffic to your website as well as better ranking. We provide quick, reliable and quality XHTML coding for existing designs. You give us the details and we will give you back standards compliant, cross browser and W3C validated code.</p>
                        <Link className="dark-btn" href="/contact-us">Speak To Our Experts</Link></div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
