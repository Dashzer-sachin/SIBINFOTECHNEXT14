import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SocialMediaOptimizationServices() {
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
                                <h1 className="heading fontWeight700 text-white fontHeading ">Social Media Optimization Services</h1>
                                <h2 className="small_heading fw-bold mt-3 text-white">Top Rated SEO Company in India</h2>
                                <div className="mt-4">
                                    <Link href="#">
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
                                <h4 className="small_heading  fontWeight700 social-media-optimization-services">Accelerate Your Business Growth</h4>
                                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SMO</span> Company in India</strong></p>
                                <BannerForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 d-block d-lg-none pe-lg-5">
                <div className="bannerForm">
                    <h4 className="small_heading  fontWeight700 social-media-optimization-services">Accelerate Your Business Growth</h4>
                    <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SMO</span> Company in India</strong></p>
                    <BannerForm />
                </div>
            </div>
            <section className="seoBlock">
                <div className="containerFull">
                    <div className="row">
                        <div className="col-md-8 order-lg-1 order-2 mt-3 mt-lg-0">
                            <div className="seoItem">
                                <p className="mb-2">Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours.</p>
                                <p className="mb-2"> Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>
                            </div>
                        </div>
                        <div className="col-md-4 order-lg-2 order-1">
                            <div className="rightSeo text-center">
                                <img src="assets/images/smo-banner.png" className="img-responsive" alt="SMO Banner" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rightSeo">
                                <img src="assets/images/smo_img.png" className="img-responsive" alt="SMO" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="seoItem">
                                <p className="mb-2">Effective Affiliate Marketing is not throwing a bunch of links at different website owners in the hopes that something will stick. It is a well-planned, specified effort intended to develop long-term relationships with third party websites, research industry-relevant websites with trusted pages and build up a valuable affiliate network for your website that will bring in quality, converted traffic.</p>
                                <p className="mb-1"> Social Media Marketing is in many ways connected as a technique to viral marketing where word of mouth is created not through friends or family but through the use of networking in social book-marking, video and photo sharing websites. In a similar way the engagement with blogs achieves the website popularity by sharing content through the use of RSS in the blogsphere and special blog search engines such as Technorati. Social Media Marketing is closely related to other Online Marketing Techniques, such as Search Engine Optimization, Search Engine Marketing, Viral Marketing Word of Mouth Marketing, and Social Media Optimization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <section className="differenceBlock">
                <div className="containerFull has_mob_padding">
                    <div className="diffItem">
                        <div className="row">
                            <div className="col-md-8 order-lg-1 order-2 mt-3 mt-lg-0">
                                <div className="rightDiff">
                                    <h5 className="redText fontHeading">We focus on the following aspects of Social Media Optimization</h5>
                                    <ul className="fullList">
                                        <li className="redBullet">Increasing your linkability through fresh,informative and eye catching content</li>
                                        <li className="blueBullet">Making tagging and bookmarking easy through implementation of Social Bookmarking buttons on your blogs and important pages</li>
                                        <li className="redBullet">Rewarding Inbound links</li>
                                        <li className="blueBullet">Making your content travel through creation of presentations and submission of the same across social sharing sites</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 order-lg-2 order-1">
                                <div className="seoLeft mt-2">
                                    <img src="assets/images/smo_img2.png" alt="SMO Services" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="diffItem">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="seoLeft mt-2">
                                    <img src="assets/images/smo_img3.png" alt="SMO Agency" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="rightDiff">
                                    <h5 className="blueText fontHeading">If the power of Social Media Marketing has been utilized in the right way, it can help</h5>
                                    <ul className="fullList">
                                        <li className="redBullet">Increase direct traffic to your site</li>
                                        <li className="blueBullet">Increase the number of quality back-links resulting in higher natural ranking</li>
                                        <li className="redBullet">Improved brand visibility &amp; brand reputation</li>
                                        <li className="blueBullet">Making your content travel through creation of presentations and submission of the same across social sharing sites</li>
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
