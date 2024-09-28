   
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SeoMethologyMumbaiIndia() {
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
                                <h3 className="heading fontWeight700 text-white">SEO Methodology and Process</h3>
                                <div className="mt-4">
                                    <Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                    <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                            <div className="bannerForm">
                                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO Methodology</span> Company in India</strong></p>
                                <BannerForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 d-block d-lg-none pe-lg-5">
                <div className="bannerForm">
                    <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                    <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO Methodology</span> Company in India</strong></p>
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
                                <p>Every website is unique so we try and take a counselling approach to every SEO project that comes our way.</p>
                            </div>
                        </div>
                        <div className="col-md-1">
                            &nbsp;
                        </div>
                        <div className="col-md-12">
                            <p>In this globalisation it is important that your website is standing as highly as possible for relevant keywords. Afterwards, this results in additional website traffic and so boost in online sales, leads and visibility. Because every website is unique, we try and take a consultative approach to every SEO project that comes our way.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                            Stage 1. Initial Consultation</p>
                            <p>
                            Every SEO project requires Initial Consultation, and it is crucial when you’re not aware of with SEO or SEM. Without carefully understanding of your industry, your objective, and your aim, we cannot implement any of our idea to the SEO project. We thoroughly examine your business, opposition, and existing position in an attempt to expand the most efficient internet marketing strategy for your company.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                            Stage 2. Keyword &amp; competitor research</p>
                            <p>
                            We will research and compile a list of keywords that we recommend be targeted throughout the course of your SEO strategy. We also research your main competitors to identify their strategies to see where you currently sit in comparison.</p>
                            <p>
                            We research and identify target market(s) – segmenting customers based on their internal and external needs and values.</p>
                            <p>
                            We research competitor’s natural SEO and SEM strategies and identify the optimal marketing strategy in your industry.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                            Stage 3. Internet Marketing Plan</p>
                            <p>
                            We design a comprehensive project plan designed to meet your marketing objectives, perform keyword research, and work with you to prioritize your keyword list.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="custom-box-title">
                            Stage 4. Implementation</p>
                            <p>
                            We work closely with you on each and every step of the project plan. Nothing is implemented unless approved by you first. We measure results every month, make the necessary improvements, and work to meet your needs and goals.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </CustomLayout>
  )
}
