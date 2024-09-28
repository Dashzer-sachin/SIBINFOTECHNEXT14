import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function SoftwareDevelopementServices() {
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
                                <h1 className="heading fontWeight700 text-white fontHeading">Software Development Services</h1>
                                <h2 className="small_heading fw-bold mt-3 text-white">Top Rated SEO Company in India</h2>
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
                                <h4 className="small_heading  fontWeight700 fontHeading">Accelerate Your Business Growth</h4>
                                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Software Development</span> Company in India</strong></p>
                                <BannerForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 d-block d-lg-none pe-lg-5">
                <div className="bannerForm">
                    <h4 className="small_heading  fontWeight700 fontHeading">Accelerate Your Business Growth</h4>
                    <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Software Development</span> Company in India</strong></p>
                    <BannerForm />
                </div>
            </div>
            <section>
                <div className="containerFull">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="image-full" src="assets/images/img-8.svg" alt="Software Development Company in India" /></div>
                        <div className="col-md-7">
                            <p className="customText">
                                Since the past few years, the capabilities of computer technology has reached to new heights.</p>
                            <p className="customText">
                                Everyone around the globe uses a computer in some or the other way, but a few of them understand the crucial role of software in the basic functionality of the simplest devices. Ranging from cell phones, smartphones to supercomputers that manage spacecraft of rockets function just because of software. Software is the sole that gives life to devices and machines.</p>
                            <p className="customText">
                                All the software and applications comprise a set of instructions that are specially designed for a particular task and a set of outcomes. Software development is a vast and demanding field that call for experienced experts who can meet all the expectations and demands of the users.</p>
                            <p className="customText">
                                Generally, people spend 70% of their cell phone time on applications and software. Software development awarencess is a must for any enterpreneur, they must have a wide.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bgGrey">
                <div className="containerFull">
                    <h3 className="customHeading text-center">
                        <span className="text_red">Software development</span> - Divided into three subcategories, namely</h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="devlp-inner-box">
                                <div className="sd-circle">
                                    <img src="assets/images/icons/system-software-developement.svg" alt="Software Development Company in Delhi" /></div>
                                <h4>
                                    System Software</h4>
                                <p className="customText">
                                    It made to offer core functions like operating systems, hardware management, disk space management, utilities and various operational necessities</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="devlp-inner-box">
                                <div className="sd-circle">
                                    <img src="assets/images/icons/smartphone.svg" alt="Software Development Company in Mumbai" /></div>
                                <h4>
                                    Application Software Development</h4>
                                <p className="customText">
                                    These are software or applications made to help users perform and automate tasks. Data management <span className="collapse" id="multiCollapseExample2">software, office productivity tools, accounting software, media players, security programs, etc.. are a few examples of application software. Applications like online shopping on Amazon or eBay and Social media platforms like Facebook, Twitter or LinkedIn are also referred to Web and mobile applications software's.</span></p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="devlp-inner-box">
                                <div className="sd-circle">
                                    <img src="assets/images/icons/programing-software.svg" alt="Software Development Agency in India" /></div>
                                <h4>
                                    Programming Software</h4>
                                <p className="customText">
                                    It is made to provide tools for programmers for example text editors, compilers, linkers, debuggers and various tools to develop a code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="background-gradient">
                <div className="containerFull">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3 className="customHeading ml-10 color-white">
                                How to Software Development can benefit your company?</h3>
                            <p className="customText ml-10 color-white">
                                Software development can lead your business to new heights. It makes your brand accessible from anywhere using mobile phones and computers. If a business uses a well-built platform for providing the services to its users it can lead to huge profit and user satisfaction.</p>
                            <p className="customText ml-10 color-white">
                                Software is an ultimate solution for any business that wants to generalize its services with a reliable and friendly user interface that engages a mass of audience. Software development comprises identifying, designing, programming, testing, and bug fixing in developing software.</p>
                        </div>
                        <div className="col-lg-8">
                            <div className="sd-benefit-row">
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/improve.svg" alt="Improve" />
                                    <h5>
                                        Takes your business to new heights</h5>
                                </div>
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/fast-delivery.svg" alt="Fast Delivery" />
                                    <h5>
                                        Improves sales and service delivery</h5>
                                </div>
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/analytics.svg" alt="Analytics" />
                                    <h5>
                                        Ensures conversions by analyzing incoming traffic</h5>
                                </div>
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/calculator.svg" alt="Calculator" />
                                    <h5>
                                        Cuts down the maintenance costs and depreciated authorizing charges</h5>
                                </div>
                            </div>
                            <div className="sd-benefit-row">
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/direct-audience-communication.svg" alt="Direct audience communication" />
                                    <h5>
                                        Ensures direct communication with the audience</h5>
                                </div>
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/padlock.svg" alt="Padlock" />
                                    <h5>
                                        Reliable and secure</h5>
                                </div>
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/measuring-tool.svg" alt="Measuring tool" />
                                    <h5>
                                        Elastic and scalable</h5>
                                </div>
                                <div className="sd-benefit-box">
                                    <img src="assets/images/icons/improve.svg" alt="Improve Business" />
                                    <h5>
                                        Takes your business to new heights</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="containerFull">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="customHeading ml-10">
                                How <span className="text_red"> Software Development</span> Services From SIB Would Help You?</h3>
                            <p className="customText ml-10 text-justify">
                                SIB Infotech's Software Development Service is the solution to all your constantly evolving software developmental challenges. We provide new technologies and tools for your business aiming to achieve success. We employ industry best practices to deliver software that can take your business to new heights. Our services are innovative and aimed at providing new trends in the field of software designing and development. This is done following the software development standards to produce compatible software solutions.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="image-size" src="assets/images/img-7.svg" alt="Top Software Development Companies in Delhi" /></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="customText ml-10 text-justify">
                                We own a growing set of tools and technologies that have helped the developers build more interactive and dynamic solution. Our software development experts are aimed to design, monitor and display applications and fulfill the client's needs.</p>
                            <p className="customText ml-10 text-justify">
                                We at SIB Infotech develop custom software as per the client's requirements and the process they follow. The custom software development enables one’s business to work as they are working earlier but helps them to automate their business and increase productivity.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="customText ml-10 text-justify">
                                If you are looking for the best software development companies in India who can develop an attractive, engaging and user-friendly software; SIB could be your right choice as it among the best software development company in India with offices in Mumbai and Delhi, offering best custom software designing and development in India.</p>
                            <p className="customText ml-10 text-justify">
                                We believe that each brand or business has different requirements and goals and we offer custom tailor-made services for all their requirements as per their needs. We offer a diverse range of services to suit everyone's requirements.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bgGrey">
                <div className="containerFull">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="help-inner-box">
                                <div className="offering-heading">
                                    <div className="img-circle">
                                        <img src="assets/images/icons/human-resources.svg" alt="Top Software Development Companies in India" /></div>
                                    <h4>
                                        Software Consulting</h4>
                                </div>
                                <p className="customText">
                                    We evaluate, analyze, explore and then provide you a wide range of solutions.</p>
                                <ul>
                                    <li className="customText">
                                        <img src="assets/images/icons/analysis.svg" alt="Top Software Development Companies in Mumbai" />Technology Consultation</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/plan.png" alt="Top Software Development Companies in India" />Planning</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/test.png" alt="Top Software Development Agency in Delhi" />Designing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="help-inner-box">
                                <div className="offering-heading">
                                    <div className="img-circle">
                                        <img src="assets/images/icons/directory.svg" width="50px;" alt="Top Software Development Agency in India" /></div>
                                    <h4>
                                        Enterprise Software Solution</h4>
                                </div>
                                <p className="customText">
                                    We deliver software solutions that meet all your needs and goals of your company.</p>
                                <ul>
                                    <li className="customText">
                                        <img src="assets/images/icons/cloud.png" alt="Top Software Development Agency in Mumbai" />Cloud Solutions</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/security.png" alt="Top Software Development Firm in Mumbai" />Highly Secure</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/enterprise.png" alt="Top Software Development Firm in Delhi" />Enterprise Flexibility</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="help-inner-box">
                                <div className="offering-heading">
                                    <div className="img-circle">
                                        <img src="assets/images/icons/computer.png" alt="Top Software Development Firm in India" /></div>
                                    <h4>
                                        Offshore Software Development</h4>
                                </div>
                                <p className="customText">
                                    We have top-rated and creative software solutions at a very low cost.</p>
                                <ul>
                                    <li className="customText">
                                        <img src="assets/images/icons/security.png" alt="Best Software Development Companies in India" />Guaranteed Privacy</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/fast.png" alt="Best Software Development Companies in Delhi" />On-Time Delivery</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/system-1.png" alt="Best Software Development Companies in Mumbai" />Dedicated Developers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="help-inner-box">
                                <div className="offering-heading">
                                    <div className="img-circle">
                                        <img src="assets/images/icons/code.svg" alt="Best Software Development Company in Delhi" /></div>
                                    <h4>
                                        Software Integration</h4>
                                </div>
                                <p className="customText">
                                    We provide reliable data integration, API and microservices to improve your software.</p>
                                <ul>
                                    <li className="customText">
                                        <img src="assets/images/icons/saas.png" alt="Best Software Development Company in India" />SAAS Platform</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/img-9.png" alt="Software Development Services Company in Delhi" />Reliable Software Architecture</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="help-inner-box">
                                <div className="offering-heading">
                                    <div className="img-circle">
                                        <img src="assets/images/icons/sketch-1.png" alt="Software Development Services Company in Mumbai" /></div>
                                    <h4>
                                        Custom Software Development</h4>
                                </div>
                                <p className="customText">
                                    These are software or applications made to help<span className="collapse" id="multiCollapseExample3"> users perform and automate tasks. Data management software, office productivity tools, accounting software, media players, security programs, etc.. are a few examples of application software. Applications like online shopping on Amazon or eBay and Social media platforms like Facebook, Twitter or LinkedIn are also referred to Web and mobile applications software's. </span></p>
                                <ul>
                                    <li className="customText">
                                        <img src="assets/images/icons/mobile-app.png" alt="Software Development Services Company in Delhi" />Mobile Applications</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/design.png" alt="Software Development Services Company in India" />Web Applications</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/webpage.png" alt="Software Development Services Agency in India" />UI/UX</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="help-inner-box">
                                <div className="offering-heading">
                                    <div className="img-circle">
                                        <img src="assets/images/icons/technical-support.png" alt="Software Development Services Agency in Delhi" /></div>
                                    <h4>
                                        Maintenance &amp; Support</h4>
                                </div>
                                <p className="customText">
                                    Our service providers are 24*7 available for maintenance &amp; support services for bugs &amp; issues if encountered any.</p>
                                <ul>
                                    <li className="customText">
                                        <img src="assets/images/icons/bug.png" alt="Software Development Services Agency in Mumbai" />Regular Bug Fixes</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/design.png" alt="Bespoke Software Development Company in India" />DevOps</li>
                                    <li className="customText">
                                        <img src="assets/images/icons/time-management.png" alt="Bespoke Software Development Company in Mumbai" />Active Software Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="containerFull">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="comp-right">
                                <ul>
                                    <li>
                                        <div className="i-circle">
                                            &nbsp;</div>
                                        <h4>
                                            Your project is our greatest concern</h4>
                                    </li>
                                    <li>
                                        <div className="i-circle">
                                            &nbsp;</div>
                                        <h4>
                                            Your project gets the maximum attention from our expert developer</h4>
                                    </li>
                                    <li>
                                        <div className="i-circle">
                                            &nbsp;</div>
                                        <h4>
                                            We assure fast and efficient software development</h4>
                                    </li>
                                    <li>
                                        <div className="i-circle">
                                            &nbsp;</div>
                                        <h4>
                                            Our services incur low and worthy development Costs</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className="customText">
                                We build custom software solutions that help your business to optimize operations, unlock a new level of efficiency and transform your ideas into an innovative service or an engaging product and deliver it to the market on time.</p>
                            <p className="customText">
                                We are among the top software development agency in India offering high-quality services to our clients.</p>
                            <p className="customText">
                                We at SIB Infotech always ensure that with our expertise, experience, efficiency, and excellence your business reaches the top graphs of the market. Our services can prove to be the best for your business, because.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="domain-expert bgGrey">
                <div className="containerFull">
                    <h3 className="customHeading text-center">
                        Some of our <span className="text_red">software development</span> domain where we experts</h3>
                    <ul className="mt-4">
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/online-shopping.svg" alt="Bespoke Software Development Agency in Mumbai" /></div>
                            <h5>
                                E-commerce Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/suitcases.svg" alt="Bespoke Software Development Agency in Delhi" /></div>
                            <h5>
                                Travel Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/gift-voucher.svg" alt="Bespoke Software Development Agency in India" /></div>
                            <h5>
                                Discount Coupon Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/food.svg" alt="Bespoke Software Development Firm in Mumbai" /></div>
                            <h5>
                                Food Resturant Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/directory.svg" alt="Bespoke Software Development Firm in Delhi" /></div>
                            <h5>
                                classNameified / Directory Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/crm.svg" alt="Bespoke Software Development Firm in India" /></div>
                            <h4>
                                CRM Software</h4>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/human-resources.svg" alt="Custom Software Development" /></div>
                            <h5>
                                HRMS Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/salary.svg" alt="Custom Software Development Company in India" /></div>
                            <h5>
                                Payroll Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/lead.svg" alt="Custom Software Development Company in Delhi" /></div>
                            <h4>
                                Lead Management Software</h4>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/accounting.svg" alt="Custom Software Development Company in Mumbai" /></div>
                            <h5>
                                Accounting Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/doctor.svg" alt="Custom Software Development Firm in India" /></div>
                            <h5>
                                Doctor Management Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/hospital-management.svg" alt="Custom Software Development Firm in Delhi" /></div>
                            <h5>
                                Hospital Managment Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/inventory.svg" alt="Custom Software Development Firm in Mumbai" /></div>
                            <h5>
                                Inventory Management Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/salon.svg" alt="Custom Software Development Agency in India" /></div>
                            <h5>
                                Salon Management Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/human-resources.svg" alt="Custom Software Development Agency in Delhi" /></div>
                            <h5>
                                HRMS Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/code.svg" alt="Custom Software Development Agency in Mumbai" /></div>
                            <h5>
                                MLM Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/wedding-couple.svg" alt="Custom Software Development Firm in Mumbai" /></div>
                            <h5>
                                Matrimonial Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/lawyer.svg" alt="Custom Software Development Firm in Delhi" /></div>
                            <h5>
                                Advocate Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/repair.svg" alt="Custom Software Development Firm in India" /></div>
                            <h5>
                                Mobile Repair Shop Software</h5>
                        </li>
                        <li>
                            <div className="img-circle-domain">
                                <img src="assets/images/icons/party.svg" alt="Custom Software Development Companies in Mumbai" /></div>
                            <h5>
                                Event Management Software</h5>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="containerFull">
                    <div className="row">
                        <div className="col-lg-5">
                            <img className="image-full" src="assets/images/software.svg" alt="Custom Software Development Companies in Delhi" /></div>
                        <div className="col-lg-7">
                            <p className="customText">
                                Through our impeccable track record, we have positioned ourselves as one of the top custom software development company in India and a preferred choice for companies looking for agile software development services, software testing services, quality assurance, Database designs, client-server software outsourcing from India, software support at affordable prices.</p>
                            <p className="customText">
                                Reliable software can take your company to the highest graphs of the market and overall boosting sales and user engagement.</p>
                            <p className="customText">
                                SIB Infotech understands their client’s business perspective and chooses the rightmost technology to design and deploy the products, following all grades of software development life cycle (SDLC).</p>
                            <p className="customText">
                                We have a team of capacious domain savvy persons, with vast experience in technology. Our offshore application development team is best suited to understand and analyze the application requirements, then architect, develop, test its endurance, and finally deploy it to the clients with post project delivery management and support services.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="strategy-section bgGrey">
                <div className="containerFull">
                    <div className="row">
                        <div className="col-lg-7">
                            <h3 className="customHeading">
                                Our <span className="text_red">Software Development</span> Strategy</h3>
                            <ul>
                                <li className="customText">
                                    <div className="img-div">
                                        <img src="assets/images/icons/perspective.svg" alt="Custom Software Development Companies in India" /></div>
                                    We know our client’s business perspective and choose the rightmost technology to design and deploy the products.</li>
                                <li className="customText">
                                    <div className="img-div">
                                        <img src="assets/images/icons/wallet.png" alt="Top Custom Software Development Companies in Mumbai" /></div>
                                    We provide pocket-friendly solutions within the proper time frame.</li>
                                <li className="customText">
                                    <div className="img-div">
                                        <img src="assets/images/icons/application-strategist.png" alt="Top Custom Software Development Companies in Delhi" /></div>
                                    Our application software developing team develops expandable and flexible software applications integrating client business axioms for efficient products.</li>
                                <li className="customText">
                                    <div className="img-div">
                                        <img src="assets/images/icons/software-development-strategy.png" alt="Top Custom Software Development Companies in India" /></div>
                                    We use advanced software processes to keep track of your website’s software application development at each stage.</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <img className="image-full" src="/assets/images/strategy-3.svg" alt="Top Custom Software Development Company in Mumbai" /></div>
                    </div>
                </div>
            </section>
            <section className="section-360">
                <div className="containerFull">
                    <h3 className="text-center customHeading">
                        Our 360-degree <span className="text_red">software development</span> strategy is<br />
                        generally a mixture of several tools</h3>
                    <div className="row">
                        <div className="col-lg-5">
                            <img className="image-full" src="assets/images/360-img.svg" alt="Top Custom Software Development Company in Delhi" />
                            <p className="customText mt-2">
                                We always make it certain that your custom software includes all the basic services to trend in the market.</p>
                            <p className="customText">
                                We can help your brand to grow and reach the market’s top shelves with our hard work and efficient strategies. As a leading software development company in India, we offer custom tailor-made services to our customers in an ever-changing online world.</p>
                            <p className="customText">
                                We always make certain that your company gets the exposure it needs. We believe that your success is our success.</p>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/prototyping-analytics.png" alt="Top Custom Software Development Company in India" />
                                        <h5>
                                            Prototyping &amp; analyzing</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/sketch.svg" alt="Top Custom Software Development Agency in Mumbai" />
                                        <h5>
                                            Design &amp; architecture<br />
                                            development</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/web-programming.png" alt="Top Custom Software Development Company in Delhi" />
                                        <h5>
                                            Code generation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/winner.png" alt="Top Custom Software Development Agency in Mumbai" />
                                        <h5>
                                            Quality testing</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/development-1.png" alt="Top Custom Software Development Agency in Delhi" />
                                        <h5>
                                            Deployment &amp; training</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/updated.png" alt="Top Custom Software Development Firm in Mumbai" />
                                        <h5>
                                            Active maintenance<br />
                                            &amp; updates</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/analytics-5.png" alt="Top Custom Software Development Firm in India" />
                                        <h5>
                                            User engagement analysis</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/analytics-6.png" alt="Top Custom Software Development Firm in Delhi" />
                                        <h5>
                                            Reporting</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box-360">
                                        <img src="assets/images/icons/prototyping-analytics.png" alt="Custom Software Development Services Agency in Mumbai" />
                                        <h5>
                                            Prototyping &amp; analyzing</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blueBg2">
                <div className="containerFull">
                    <div className="callAction">
                        <h4 className="customLineHeight fontHeading">
                            Are you ready to partner #1 software development company in India for ultimate software solutions?</h4>
                        <p className="customText text-white">
                            Our team of experienced software developers are ready to provide you with a FREE Consultation to get it started</p>
                        <Link href="/contact-us">
                            <span>Speak to our experts</span>
                        </Link></div>
                    <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#528af9" fill-opacity="1"></path> </svg>
                </div>
            </section>
        </CustomLayout>
    )
}
