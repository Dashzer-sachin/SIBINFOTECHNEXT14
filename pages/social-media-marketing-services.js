import BannerForm from '@/comps/BannerForm';
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';

export default function SocialMediaMarketingServices() {
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
    						<h3 className="heading fontWeight700 text-white">Social Media Marketing Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Media Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Social Media Marketing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row my-3">
                    <div className="col-md-7">
                        <div className="seo-main-right">
                            <p className="customText">
                                Social media is one of the most contributing factors in the growth of any business. Social Media Marketing or popularly know as SMM, is a specific digital marketing technique that involves the use of social media platforms to connect with your target audience by creating and sharing content using text, images, and videos to build a strong social media presence for your company. SMM helps in boosting your business brand awarencess, increasing traffic to your website and bringing in a large number of leads which would increase your sales and help your company to achieve their marketing and branding goals.</p>
                            <p className="customText">
                                A successful social media marketing strategy can set your sales on fire in no time. But the success is dependent upon the Social Media Marketing agency you choose for your brand's prmotion. SIB infotech can be your messiah as it the best Social Media Marketing company in Mumbai offering measurable social media marketing campaigns in india. It is the sole platform to reach and connect with your audience, which takes your brand to the market's top shevles.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="seo-main-left">
                            <img src="assets/images/smm-image.svg" alt="Social Media Marketing Company in India"/></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgFull bgBlue">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="animate-circle">
                            <h3 className="customHeading" style={{marginLeft: '0 !important', color: '#fff'}}>
                                Benefits of Social Media Marketing</h3>
                            <p className="customText" style={{color: '#fff'}}>
                                When paired with reliable social-media marketing experts, it can bring your brand into the limelight along with huge audience engagement. Social Media Marketing agencies are responsible to run desired campaigns on social media platforms to increase traffic to your website and create a buzz about your brand. The correct marketing strategy can push you toward your goals and connect to the right customers on numerous platforms.</p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="smm-row">
                            <div className="slider-box">
                                <img src="assets/images/icons/social-care.svg" alt="Social Media Marketing Company in Delhi"/>
                                <h5>
                                    High Brand awarencess</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/honesty.svg" alt="Social Media Marketing Company in Mumbai"/>
                                <h5>
                                    Building customer loyalty</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/traffic-light.svg" alt="Social Media Marketing Companies in India"/>
                                <h5>
                                    Referral traffic to your website</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/brand-positioning.svg" alt="Social Media Marketing Companies in Delhi"/>
                                <h5>
                                    Brand establishment</h5>
                            </div>
                        </div>
                        <div className="smm-row">
                            <div className="slider-box">
                                <img src="assets/images/icons/content-promotion-smm.svg" alt="Social Media Marketing Companies in Mumbai"/>
                                <h5>
                                    Content promotion</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/improve.svg" alt="Social Media Marketing Agency in Mumbai"/>
                                <h5>
                                    Improve brand recognition</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/audience.svg" alt="Social Media Marketing Agency in Delhi"/>
                                <h5>
                                    Retargeting audience</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/chat.svg" alt="Social Media Marketing Agency in India"/>
                                <h5>
                                    Driving conversions</h5>
                            </div>
                        </div>
                        <div className="smm-row">
                            <div className="slider-box">
                                <img src="assets/images/icons/low-price.svg" alt="Social Media Marketing Firm in India"/>
                                <h5>
                                    Lower Marketing costs</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/seo-ranking.svg" alt="Social Media Marketing Firm in Mumbai"/>
                                <h5>
                                    Helps in improving SEO Rankings</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/sales-funnel.svg" alt="Social Media Marketing Firm in Delhi"/>
                                <h5>
                                    Greater ROI</h5>
                            </div>
                            <div className="slider-box">
                                <img src="assets/images/icons/brand-positioning.svg" alt="Best Social Media Marketing Agency in Delhi"/>
                                <h5>
                                    Brand establishment</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-5-left">
                            <h6 style={{marginBottom: '15px'}}>
                                SOCIAL MEDIA MARKETING AGENCY</h6>
                            <h3 className="customHeading">
                                A question arise tha how <span>social media marketing </span>helps a business?</h3>
                            <p className="customText">
                                Social media marketing ensure proper audience analysis and then optimizes your social profiles. Social media marketing includes market analysis, search engine optimization, customer usage statistics to ensure a correct strategy to boost your brand. It creates awarencess in the audience about your brand's products and services by posting content and information strategically on your social media platforms. Your brand become what people think it is'.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-5-right">
                            <p className="customText">
                                SMM agencies play a crucial role in creating an imprint on people's minds about your brand and its offerings. The agency is responsible for handling your social media handles to engage in huge traffic and create a crazy-buzz. Proper content can drive huge traffic to your website and generate new leads which increase signups and sales via websites and social media platforms. It boosts brand engagement and increases mentions in social media as well as media. Our Social Media Marketing Services will take your Social Media Campaigns to the next level.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/search-engine.svg" alt="Best Social Media Marketing Agency in Mumbai"/>
                            <p className="customText">
                                Social Media Optimization</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/user.svg" alt="Best Social Media Marketing Agency in India"/>
                            <p className="customText">
                                Influncer Marketing</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/blogger.svg" alt="Best Social Media Marketing Firm in India"/>
                            <p className="customText">
                                Blogger Marketing</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/fame.svg" alt="Best Social Media Marketing Company in India"/>
                            <p className="customText">
                                Reputation Management</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/publish.svg" alt="Best Social Media Marketing Company in Delhi"/>
                            <p className="customText">
                                Social Publishing</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/ads.svg" alt="Best Social Media Marketing Company in Mumbai"/>
                            <p className="customText">
                                Social Paid Advertising</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/twitter.svg" alt="Best Social Media Marketing Companies in India"/>
                            <p className="customText">
                                Twitter Marketing</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/instagram.svg" alt="Best Social Media Marketing Companies in Delhi"/>
                            <p className="customText">
                                Instagram Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/linkedin.svg" alt="Best Social Media Marketing Companies in Mumbai"/>
                            <p className="customText">
                                Linkedin Marketing</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/social-media-smm.svg" alt="SMM Companies in India"/>
                            <p className="customText">
                                Social Monitoring</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-5-box">
                            <img src="assets/images/icons/facebook.svg" alt="SMM Companies in Delhi"/>
                            <p className="customText">
                                Facebook Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-4">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-4-left">
                            <h3 className="customHeading text-white">
                                Launch your Social Media Marketing Campaign</h3>
                            <p className="customText" style={{color: '#fff'}}>
                                with #1 Agency for Social media marketing services in India with offices in Mumbai and Delhi</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-4-right">
                            <Link className="customBtn" href="/contact-us">Speak to Our Experts</Link></div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <h3 className="customHeading text-center">
                    Social Media Strategy at <span>SIB</span></h3>
                <p className="customText text-center">
                    A social media strategy is the roadmap for building awareness and engagement of your brand via social media platforms. The strategy is a composition of auditing existing social media platforms, objetives, target audience, approach and implementation of recommendations. At SIB we offer comprehensive SMM strategies for your business in India and abroad. A 360-degree social media marketing management strategy is generally a mixture of several tools.</p>
                </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="p-sticky">
                            <div className="strategyLeft">
                                <img src="assets/images/mobile-phone-3.svg" alt="SMM Companies in Mumbai"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/monitor.svg" alt="SMM Agency in India"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Real-time Monitoring</h4>
                                </div>
                            </div>
                            <p className="customText">
                                Real-time monitoring is very important to ensure the quality, and ideas of the mentions. Integrating real-time monitoring and social listening into the social media strategy helps you to build a reliable audience base according to audience interests.</p>
                        </div>
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/megaphone.svg" alt="SMM Agency in Delhi"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Contests and campaigns</h4>
                                </div>
                            </div>
                            <p className="customText">
                                Social media contests and quizzes play a dominating role in any successful social media strategy. We ensure that your brand fets possible proportion of audience engagement. Contests are a great source to collect user's choices and preferences which is very helpful for building and evoling the products and services of your company</p>
                        </div>
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/subscription.svg" alt="SMM Agency in Mumbai"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Strategic Content</h4>
                                </div>
                            </div>
                            <p className="customText">
                                The message projected to the audience is the crucial factor in creating the first impression. The first impression of any brand is the base of engaging the audience. The content used for end ad-campaigns and brand awareness must be effective, attractive and must include proper and relevant information. if the content includes relevant pictures, it can attract a huge audience.</p>
                        </div>
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/stats.svg" alt="SMM Firm in India"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Search Engine Optimization and Social Optimization</h4>
                                </div>
                            </div>
                            <p className="customText">
                                The target audience has preferences and choices which can be understood by monitoring but the things they search. Social media can be optimized by linking and updating the brand's social media handles at regular time intervals, according to audience preferences is very important. As a brand, linking and updating social media profiles can increase visibility and provide relevant information to the audience.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/monitor-brand.svg" alt="SMM Firm in Mumbai"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Brand Awarencess</h4>
                                </div>
                            </div>
                            <p className="customText">
                                Brand awarencess is a significant tool for SMM. It is the level up to which a consumer knows about the company. It is a measurement unit that plays a vital role in assessing the customer's ability to recognize and associate the brand's products and services, Growing your followers on various social media platforms will help you increase word of mouth publicity and bring in more referrals. Brand awarencess is responsible for encouraging customers to repeatedly purchase and avail services of the company. It is the major factor that drives the consumer's decision when they want to choose between several brands.</p>
                        </div>
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/conversion-smm.svg" alt="SMM Services Firm in Mumbai"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Building Conversions</h4>
                                </div>
                            </div>
                            <p className="customText">
                                Social Media marketing leads to higher conversion rates because of its approachable nature. Brand feel like an acquaintance or friend when interacting with customers via social media which warms up the users and builds trust, leading to higher to-close rate than outboundig marketing and that more social media followers improve the brand's credibility. Building audience for the company's social media profiles is an important part of our SMM strategy that can increase conversion rates on your existing traffic</p>
                        </div>
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/conversion-rate.svg" alt="SMM Services Firm in Delhi"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        Building Conversations</h4>
                                </div>
                            </div>
                            <p className="customText">
                                The audience community is the base of your brand's success. Successful brand make it certain that the users are always satisfied and happy with the services, as "one happy customer brings ten in". Our SMM strategy influence social media to reach the right audience and initiate a conversation with them.</p>
                        </div>
                        <div className="rightStrategy">
                            <div className="strategyItem">
                                <div className="strategyIcons shadow">
                                    <img src="assets/images/icons/user-engament-smm.svg" alt="SMM Services Firm in India"/></div>
                                <div className="strategyContent">
                                    <h4>
                                        User Engagement</h4>
                                </div>
                            </div>
                            <p className="customText">
                                A huge mass of audience is driven to the brand's website after looking at appealing and attractive posts on various social media platforms. User engagement is the measure of whether the audience finds the services and products of the brand valuable and worthy. it is mseasured by sevral activities such as the number of clicks, downloads shares, views and many more. The strategy which include effective post engagement is the ultimate tool for efficienct user engagement.</p>
                            <p className="customText">
                                These tools can prove to be helpful when you choose a correct SMM agency that can cover all the fields with ease and ensure desired results. SIB Infotech is one the best SMM or SMO service providing agency which can help you build your brand and take it to the heights of success.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="strategyLeft  p-sticky">
                            <img alt="SMM Services Company in Mumbai" src="assets/images/social-media-marketing-company-in-mumbai.svg"/></div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row my-3">
                    <div className="col-md-5 mt-4">
                        <div className="seo-main-left">
                            <img className="imgFulll" src="assets/images/smm-8.svg" alt="SMM Services Company in India"/>
                        </div>
                    </div>
                    <div className="col-md-7 mt-4">
                        <div className="seo-main-right">
                            <h3 className="customHeading">
                                Why choose our <span>Social Media Marketing Services</span></h3>
                            <p className="customText">
                                Brand promotion is a great concern for any company, but hiring a great social media marketing service provider can relieve the burden from your shoulders.</p>
                            <p className="customText">
                                We can help your brand to grow and reach the market's top shelves with our hard work and efficient strategies. As a digital marketing giant in India, we offer services to our customers in an ever-changing online world. We as an SMM agency make sure that your brand gets the best possible publicity and traffic on your brand's existing social media platforms.</p>
                            <p className="customText">
                                We leverage social media to reach the right audience and initiate a conversation with them. We make sure your customers can share, engage, add content, converse, and give ratings and recommendations of your content, services, and products.</p>
                            <p className="customText">
                                We help clients run ad campaigns on their social media and help implement technical methods to guarantee maximum social media impact. We create content and conversations that are interesting, compulsive, grab attention and are highly engaging. We can guarantee to take your brand to great heights with our reliable social media strategies which are based upon your brand's requirements and goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blueBg2">
            <div className="containerFull">
                <div className="callAction">
                    <h3 className="customLineHeight2">
                        Lounch your Social Media Marketing Campaign with<br/>
                        #1 Agency for Social media marketing services in India with offices in Mumbai and Delhi.</h3>
                    <Link href="/contact-us">Speak to Our Social Media Marketing Experts</Link></div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#528af9" fill-opacity="1"></path> </svg>
            </div>
        </section>
        <section className="accordtab">
            <div className="containerFull">
                <div className="webProces">
                    <h3 className="customHeading text-center">
                        Social Media Marketing <span>FAQ?</span></h3>
                </div>
                <div className="col-lg-5">
                    <div className="tabIcon">
                        <ul>
                            <li className="active" data-tabs="websiteCost">
                                Which Social Media platforms are ideal for my business?</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="tabList" id="websiteCost">
                        <p>
                            Social media platforms engage the huge mass of the population to your products and services. Currently, Facebook, Twitter, Instagram, YouTube, Tiktok, LinkedIn, Pinterest and Snapchat are the major social media platforms where your presence should be.</p>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
