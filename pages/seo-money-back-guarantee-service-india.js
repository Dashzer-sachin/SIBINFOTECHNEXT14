import BannerForm from '@/comps/BannerForm';
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';


export default function SeoMoneyBackGuranteerServicesIndia() {
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
                                <h3 className="heading fontWeight700 text-white">Money Back Guarantee</h3>
                                <div className="mt-4">
                                    <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                    <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                            <div className="bannerForm">
                                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO Money Back Guarantee</span> Company in India</strong></p>
                                <BannerForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="col-lg-5 d-block d-lg-none pe-lg-5">
                <div className="bannerForm">
                    <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                    <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO Money Back Guarantee</span> Company in India</strong></p>
                    <BannerForm/>
                </div>
            </div>
            <section>
                <div className="containerFull">
                    <div className="row mt-4 align-items-center">
                    <div className="col-lg-6">
                        <h3 className="customHeading customLineHeight2">
                        If you’re not happy with SIB infotech services get in touch with us and we’ll sort out an alternative, provide you with a store credit or give you your <span>Money Back</span>. It’s your choice</h3>
                        <p className="customText">
                        SIB Infotech will payback for those clients that understand that SEO is an ongoing requirement but need to know that their SEO Company can deliver, SIB Infotech will commit to achieving results or give you your money back.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="tiktok-img-section">
                        <img className="image-full" alt="SEO Money back Guarantee Services in India" src="assets/images/socila-bookmarking-img.svg"/></div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bgGrey">
            <div className="containerFull">
                <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="bgBlueDarkLeft">
                    <p className="customText text-white">
                        We delight ourselves on reaching the right things. It doesn’t represent we’re just right, but when we make error we fix them.</p>
                    <span className="divider3">&nbsp;</span>
                    <h3 className="customHeading text-white">
                        How Does It Work ?</h3>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="mny-back-box">
                        <img alt="SEO Money back Guarantee Services in Delhi" src="assets/images/money-back-target-keywords.svg"/>
                        <p className="customText">
                            Identify the main target keywords for the website.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mny-back-box">
                        <img alt="SEO Money back Guarantee Services in Mumbai" src="assets/images/money-back-determine-budget.svg"/>
                        <p className="customText">
                            Determine a realistic budget for 12 months to invest in SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mny-back-box">
                        <img alt="SEO Money back Guarantee Services Company in India" src="assets/images/money-back-strategy.svg"/>
                        <p className="customText">
                            Structure and agree a 12 month strategy</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="mny-back-box">
                        <img alt="SEO Money back Guarantee Services Company in Delhi" src="assets/images/money-back-set-and-agree.svg"/>
                        <p className="customText">
                            Set and agree on measurable results with a money back guarantee</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mny-back-box">
                        <img alt="SEO Money back Guarantee Services Company in Mumbai" src="assets/images/money-back-proceed-with-campaign.svg"/>
                        <p className="customText">
                            Proceed with the campaign</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mny-back-box">
                        <img alt="SEO Money back Guarantee Services Agency in India" src="assets/images/money-back-fornightly-reporting.svg"/>
                        <p className="customText">
                            Fortnightly reporting on progress from your dedicated Campaign Manager</p>
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
