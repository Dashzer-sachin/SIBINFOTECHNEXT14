import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import BannerForm from "../comps/BannerForm";

export default function WebDevelopmentServices() {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  const faqsData = [
    {
      question: "What are Web Development services?",
      answer: `<div className="">
                  <p>Known for ensuring the online presence of company Web Development services involve developing the website for the Internet (World Wide Web) or an intranet (a private network). Among professionals, Web Development usually refers to the main design aspects of building websites i.e. markup and coding.</p>
                </div>`,
    },
    {
      question: "What does a Web Development company do?",
      answer: `<div className="">
                  <p>Web Development is all about maintaining the online presence of a company so that its services can reach out to its potential customers. Web Development services include various engaging activities such as ideating and freezing the framework, architecture and navigation.</p>
                  <p>There are several languages such as JavaScript, ASP, HTML, PHP etc. for coding and programming the backend.</p>
                </div>`,
    },
    {
      question: "What does Web development include?",
      answer: `<div className="">
                  <p>Web Development involves creating websites and apps for brands to reach customers. It includes aspects like web design, web publishing, web programming, and database management. A Web Developer designs websites and also writes the script in languages such as PHP and ASP.</p>
                </div>`,
    },
    {
      question: "How much does Web Development cost?",
      answer: `<div className="">
                  <p>The cost for Web Development depends on many factors such as:</p>
                  <ul>
                    <li>Variation in requirements.</li>
                    <li>Utilization of resources on projects.</li>
                    <li>The time frame for a particular project etc.</li>
                  </ul>
                </div>`,
    },
    {
      question: "What to look for in a Professional Web Development Company?",
      answer: `<div className="">
                  <p>Understanding what you look for in a web development company can be hard and at the same time can also have a major impact on the online presence of your business. We suggest choosing a website that has years of experience with an extensive portfolio of websites. Opt for checking reviews online to gauge how satisfied clients have been with the company's work.</p>
                </div>`,
    },
    {
      question: "Why SIB Infotech is the Best Web Development Agency in India?",
      answer: `<div className="">
                  <p>In a country like India, you will find thousands of Web Designing Companies running single-handedly or with multiple hands but what makes SIB Infotech unique is its years of experience and team of experts skilled in different areas. Feel free to check our portfolio for more information about the projects we have successfully delivered. We offer a free no-obligation consultation session so you can evaluate our capabilities and see if we are a good fit for your project. Contact us today to book an appointment.</p>
                </div>`,
    },
    {
      question: "How much does Website Development Costs in India?",
      answer: `<div className="">
                  <p>Web Development in a country like India is usually priced on the lower side of the scale. The total costing depends on the time utilization, resources on a particular project along with the custom requirements of clients.</p>
                </div>`,
    },
    {
      question:
        "What Web Development Platforms do you use for Developing a Website?",
      answer: `<div className="">
                  <p>Explainable from its name itself, website development deals with the designing of websites for hosting via the internet or intranet. It incorporates within itself, website designing, web content development, client-side/server-side scripting, network security configuration, etc.</p>
                  <p>Web development extensively includes all the actions, updates, and operations essential for administering and managing a site smoothly.</p>
                  <p>Apart from development, there are many activities performed to ensure the site's top rankings on the search results page. These tasks pertain to a distinct specialization, i.e. search engine optimization (SEO).</p>
                  <p>Website development is also recognized as web development while the experts who maintain websites are acknowledged to be web developers or web devs.</p>
                </div>`,
    },
    {
      question: "What is Website Development?",
      answer: `<div className="">
                  <p>Explainable from its name itself, website development deals with the designing of websites for hosting via the internet or intranet. It incorporates within itself, website designing, web content development, client-side/server-side scripting, network security configuration, etc.</p>
                  <p>Web development extensively includes all the actions, updates, and operations essential for administering and managing a site smoothly.</p>
                  <p>Apart from development, there are many activities performed to ensure the site's top rankings on the search results page. These tasks pertain to a distinct specialization, i.e. search engine optimization (SEO).</p>
                  <p>Website development is also recognized as web development while the experts who maintain websites are acknowledged to be web developers or web devs.</p>
                </div>`,
    },
    {
      question:
        "How do I choose a Website Development Company for my Business?",
      answer: `<div className="">
                  <p>Here are a few tips to consider when appointing a web development company and the obstacles that may appear by overlooking vital points:</p>
                  <ul>
                    <li>Before opting for website development services you need to answer a few questions. What are the elements you need in a website? How many webpages do you need on your website? What should be its key features?</li>
                    <li>Go through the company's website by analyzing its digital presence, social media handles, and content present. Also, investigate if the site is mobile-friendly.</li>
                    <li>Have a glance at their portfolio. If they don’t have one ask them to go through a test for you asking them about their latest works and if they have worked on something in the same niche. Visit those sites and check how they are performing now (most importantly have a keen eye on the UI and UX).</li>
                    <li>Check the reviews of their clients and pay further attention to the reviews from those clients that have similar businesses as yours. You may also monitor their overall rating and if they have any awards.</li>
                    <li>Make sure they provide transparency to their clients and are responsive enough. Even if they don't possess a sales team contact them to know how they acknowledge and their dedication towards your work.</li>
                  </ul>
                </div>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));

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
                <h1 className="heading fontWeight700 text-white fontHeading">
                  Website Development Services
                </h1>
                <div className="mt-4">
                  <Link href="https://www.sibinfotech.com/#requestQuote">
                    <span className="btnThemeRed me-3">
                      <i className="fa-solid fa-comment-dots"></i> Get a Quote
                    </span>
                  </Link>
                  <Link href="#">
                    <span className="btnThemewhiteBorder">
                      <i className="fa-solid fa-circle-question"></i> Ask a
                      Question
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700 fontHeading">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Website Development</span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Website Development</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <section>
        <div className="containerFull">
          <h2 className="customHeading text-center fontHeading">
            Most Trusted <span>Web development Company In India</span>
          </h2>
          <p className="customText">
            SIB Infotech - Best Website Development Company in India providing
            web development services since 2005 specializes in all kinds of
            website development that are compatible with all devices along with
            the{" "}
            <Link href="/search-engine-optimization-seo-services">
              <span className="text_red">SEO marketing services</span>
            </Link>
            . With its headquarters in Mumbai and branch offices in New Delhi
            &amp; New York, our website development services agency with its
            team of professional developers ensures to meet the expectations of
            clients with their white-collar skills. Our top web development
            services in Mumbai, India aim to meet all your digital requirements
            and provide better outreach to your website through digital
            marketing services.
          </p>
          {isShowMore && (
            <div className="moreBlock">
              <p className="customText">
                As the top web development company in India, we have a dedicated
                team of professional developers creating attractive websites in
                accordance with customer requirements. When developing websites
                for our clients, our professional developers focus on design
                driven by KPIs, strategic UX, agile development, etc. In less
                than a year, competition between different organizations
                regarding the online presence has increased, and earning a great
                deal of web traffic requires a level of design expertise and SEO
                marketing services. Your website is a virtual representation of
                your company profile including all your objectives and goals.
                Hence, attracting enormous traffic with a clear pattern of what
                services you offer calls for an expert level of digital
                marketing and{" "}
                <Link href="#">
                  <span className="text_red">web designing services</span>
                </Link>
                .
              </p>
              <h3 className="title">
                "Which is the Best Website Development Company in India?"
              </h3>
              <p className="customText mt-3">
                If you are confused about what your business website should look
                like, no worries our web development company in Mumbai, India or
                in New Delhi or New York expert web development consultants will
                help you solve all your queries. We offer our customers the
                opportunity to consult our web development experts and they
                ensure that the website meets the expectations of the clients.
                Our professional website developers will improve your
                click-to-sell outcomes while maintaining security and
                functionality as priorities. With our best web development
                services, your websites will look great and will deliver a
                better on page experience to users. It's time for your websites
                to be placed high on search engines, with our best website
                development services.
              </p>
            </div>
          )}
          <div className="text-center">
            <button
              className="moreless-button text-center text_red"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="customHeading">
                Invigorate Your Business DNA With Our{" "}
                <span className="text_red">
                  Website Development &amp; UX Designs
                </span>
              </h3>
              <p className="customText">
                Our plan thinking and client focused experience drove plans help
                us in efficiently removing client's necessities, practices,
                emotions, and contemplations while connecting with items in a
                certifiable setting and causes us make believable advanced
                encounters to construct versatile and web applications,
                web-based interfaces, web based business stores and
                significantly more.
              </p>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4">
                  <div className="web-devlp-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-7.svg"
                          alt="Website Development Company in India"
                        />
                      </div>
                      <h4>KPI led Design</h4>
                    </div>
                    <p className="customText">
                      Delivering measurable business results with our chosen
                      indicators, strategy and design.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="web-devlp-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-8.svg"
                          alt="Website Development Company in Mumbai"
                        />
                      </div>
                      <h4>Version Zero</h4>
                    </div>
                    <p className="customText">
                      Building High fidelity prototypes to communicate or
                      validate concepts by testing for feedback.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="web-devlp-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-9.svg"
                          alt="Website Development Company in Delhi"
                        />
                      </div>
                      <h4>Agile Development</h4>
                    </div>
                    <p className="customText">
                      Intersecting Agile/scrum methodology with design thinking
                      for remarkable UX development
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="web-devlp-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-10.svg"
                          alt="Website Development Agency in India"
                        />
                      </div>
                      <h4>Digital Transformation</h4>
                    </div>
                    <p className="customText">
                      Comprehending the breadth and depth of your business with
                      meaningful +engaging transformation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="web-devlp-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-ux.svg"
                          alt="Website Development Agency in Mumbai"
                        />
                      </div>
                      <h4>Strategic UX</h4>
                    </div>
                    <p className="customText">
                      Uniting strategy +creativity+ tools to weave strategic
                      user experiences and interfaces.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="web-devlp-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-7.svg"
                          alt="Website Development Agency in Delhi"
                        />
                      </div>
                      <h4>KPI led Design</h4>
                    </div>
                    <p className="customText">
                      Delivering measurable business results with our chosen
                      indicators, strategy and design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-4-left">
                <h3 className="customHeading text-center text-white">
                  Want a design that works for your business?
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-4-right text-center">
                <Link href="/contact-us">
                  <span className="customBtn" target="_blank">
                    Contact Our Consultants
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-4">
              <div className="leftDigiSer f-col">
                <h3 className="customHeading text-white customLineHeight">
                  Responsive And Highly Interactive Front End Web Development
                  Services
                </h3>
                <p className="customText text-off-white">
                  Creating state-of-the-art web architecture through compelling
                  user experiences, performance tuning, intuitive UI development
                  and usability assessment, testing and analysis services.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="front-end-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-18.svg"
                          alt="Website Development Firm in Mumbai"
                        />
                      </div>
                      <h4>Angular JS</h4>
                    </div>
                    <p className="customText">
                      Making dynamic web encounters with Angular JS improvement
                      that streamlines building more extravagant and
                      ground-breaking web applications with the full line of
                      adaptability.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="front-end-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-11.svg"
                          alt="Website Development Firm in Delhi"
                        />
                      </div>
                      <h4>React JS</h4>
                    </div>
                    <p className="customText">
                      Influence the dynamism and adaptability of React.JS
                      appropriate for enormous scope applications that easily
                      make intuitive UIs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="front-end-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-16.svg"
                          alt="Website Development Firm in India"
                        />
                      </div>
                      <h4>Ember JS</h4>
                    </div>
                    <p className="customText">
                      A viewpoint JavaScript system appropriate for building
                      elite, interoperable web applications with no exhibition
                      blocks.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="front-end-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-15.svg"
                          alt="Best Website Development Agency in Mumbai"
                        />
                      </div>
                      <h4>jQuery</h4>
                    </div>
                    <p className="customText">
                      Construct instinctive, light-weight, SEO benevolent,
                      cross-program viable and CSS3 consistent web and
                      applications with the jQuery JavaScript library.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="front-end-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-13.svg"
                          alt="Best Website Development Agency in Delhi"
                        />
                      </div>
                      <h4>Bootstrap</h4>
                    </div>
                    <p className="customText">
                      Grasp the truly versatile, responsive, portable first
                      front-end system Bootstrap that drives consistency and
                      speed, disentangles reconciliation, and facilitates
                      customization.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="front-end-box">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-14.svg"
                          alt="Best Website Development Agency in India"
                        />
                      </div>
                      <h4>Material UI</h4>
                    </div>
                    <p className="customText">
                      Rehash the vibe of your web applications with the
                      straightforwardness and accuracy of Google's Material
                      Design Color Palette, Typography, Material Design
                      Components, plan ideas and standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey text-center">
        <div className="containerFull">
          <h3 className="customHeading text-center">
            <span>
              Our Expert Back End <span>Web Development Services</span> With
              Enhanced Stability
            </span>
          </h3>
          <p className="customText text-center">
            Get Built A Reliable, Highly Secured And Stable Backbone Of Your
            Software Product (Mobile App, Front-End App, Web API) With Our
            Technology Expertise In:
          </p>
          <div className="row">
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  src="assets/images/icons/nodeJs.png"
                  alt="Website Development Companies in Mumbai"
                />
                <h4>Node JS Development Services</h4>
                <p className="customText">
                  Recruit our expert Node.js designers that take the upsides of
                  this lightweight and productive open source worker system for
                  building exceptionally adaptable, quick and continuous
                  applications.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  className="img-size"
                  src="assets/images/icons/php-logo.svg"
                  alt="Website Development Companies in Delhi"
                />
                <h4>Custom PHP Web Development Services</h4>
                <p className="customText">
                  Depend on our prepared PHP development advancement group for
                  creating custom websites, CMS and E-trade improvement, cross
                  stage web applications, web and gateway improvement and
                  informal communication arrangements in brisk turnaround time
                  with the amazing and spry PHP stage.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  className="img-size"
                  src="assets/images/icons/net.svg"
                  alt="Website Development Companies in India"
                />
                <h4>.Net Development Services</h4>
                <p className="customText">
                  Exploit our energy in creating collective venture web
                  applications, incredible online business stores, drawing in
                  versatile applications with .NET innovation. Incorporate
                  distinctive CRM, ERP, exclusive applications with WCF system
                  with information base mix.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  src="assets/images/icons/magento.png"
                  alt="web application development company"
                />
                <h4>Magento Development Services</h4>
                <p className="customText">
                  Benefit our most pined for Magento web improvement
                  administrations to assemble your webpage on the most
                  impressive eCommerce stage that is enabling a large number of
                  retailers and brands. Our redid Magento arrangements and
                  outsider augmentations are excessively adaptable and
                  versatile.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  src="assets/images/icons/laravel.svg"
                  alt="web application development company in India"
                />
                <h4>Laravel Web Development Services</h4>
                <p className="customText">
                  Imbue the force of MVC PHP structure to create web
                  applications, endeavor arrangements and relaxing application
                  improvement and influence excellent advantages like fast
                  turnover, powerful broadening limits utilizing different
                  modules, and profoundly versatile code of Laravel.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  className="img-size"
                  src="assets/images/icons/django.svg"
                  alt="web application development company in Delhi"
                />
                <h4>Django Development Services</h4>
                <p className="customText">
                  Get fabricated high performing and tastefully wonderful
                  applications utilizing Django, a practical Python structure
                  hailed for building basic sites to complex web applications.
                  We create and offer a full scope of Django improvement
                  administrations.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  src="assets/images/icons/opencart.png"
                  alt="Web Application Development Company in Mumbai"
                />
                <h4>Opencart Development Services</h4>
                <p className="customText">
                  Bring the best E-trade site and M-business application to
                  existence with OpenCart advancement administrations. OpenCart
                  CMS is a ground-breaking content administration framework
                  intended flawlessly with SEO benevolent highlights, simple
                  authoritative dashboard, exquisite topics, and considerably
                  more.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  src="assets/images/icons/codeigniter-logo.jpg"
                  alt="Web Application Development Agency in Mumbai"
                />
                <h4>CodeIgniter Web Development Services</h4>
                <p className="customText">
                  Create hearty and dynamic web applications with our profoundly
                  gifted group of Code Igniter having hands on experience for
                  huge scope Code Igniter projects across different industry
                  verticals.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="web-devlp-box-2 mdm-height">
                <img
                  src="assets/images/icons/yii.jpg"
                  alt="Web Application Development Agency in Delhi"
                />
                <h4>Yii Development Services</h4>
                <p className="customText">
                  Our instrumental mastery in this superior PHP structure best
                  for growing enormous scope Web applications can be your
                  experience system for profoundly versatile and hearty venture
                  arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-4-left text-center">
                <h3 className="customHeading text-white">
                  Multi-Tier API Web Development Services
                </h3>
                <p className="customText text-white">
                  Our End-To-End API development services with third party
                  integrations for developing your custom web portal solutions,
                  boasted long lasting performance, in quick turnaround time.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-4-right h-100">
                <Link href="/contact-us">
                  <span className="customBtn">Speak to our Experts</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="stickyItem">
                <h3 className="customHeading margin-left">
                  Affordable{" "}
                  <span className="text_red">QA Testing Services </span>In India
                </h3>
                <p className="customText margin-left">
                  We provide full-cycle testing and quality assurance services
                  to help you craft a product through accelerated testing
                  methods that minimize errors, mitigate risk and defects in
                  software and augments the user experience at a whole new
                  level. Our QA model efficiently meets today's dynamic business
                  needs and helps assure quality and maturity of testing
                  capabilities that would lead to delivering successful business
                  outcomes.
                </p>
                <img
                  className="image-full"
                  src="assets/images/web-devlp-img-19.svg"
                  alt="Web Development"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-22.svg"
                          alt="Web Application Development Firm in Mumbai"
                        />
                      </div>
                      <h4>Performance</h4>
                    </div>
                    <p className="customText">
                      UI responsiveness Transaction completion (s) Peak load
                      performance
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-23.svg"
                          alt="Web Application Development Firm in Delhi"
                        />
                      </div>
                      <h4>Compatibility</h4>
                    </div>
                    <p className="customText">
                      Mobile Platform Compatibility (e.g.ios6,ios 5.1.1,ios
                      5.1.1) Device Model Compatibility Backward Compatibility
                      (with previous app version)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-24.svg"
                          alt="Web Application Development Firm in India"
                        />
                      </div>
                      <h4>Conformance</h4>
                    </div>
                    <p className="customText">
                      Marketplace guideline compliance (e.g.apple App Store
                      policies) Enterprise policy compliance (e.g. prohibited
                      content
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-25.svg"
                          alt="Custom Web Application Development"
                        />
                      </div>
                      <h4>Installation and Provisioning</h4>
                    </div>
                    <p className="customText">
                      Installation process Un-installation process User
                      provisioning and de-provisioning
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-26.svg"
                          alt="Custom Web Application Development in India"
                        />
                      </div>
                      <h4>Usability</h4>
                    </div>
                    <p className="customText">User Experience</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-27.svg"
                          alt="Custom Web Application Development in Delhi"
                        />
                      </div>
                      <h4>Security</h4>
                    </div>
                    <p className="customText">
                      Data Retention on device Transmission Security
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-28.svg"
                          alt="Custom Web Application Development in Mumbai"
                        />
                      </div>
                      <h4>Functionally</h4>
                    </div>
                    <p className="customText">
                      User Interaction Testing Transaction testing
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="web-devlp-box bg-white">
                    <div className="front-end-box-heading">
                      <div className="front-end-img-circle">
                        <img
                          src="assets/images/icons/web-devlp-img-29.svg"
                          alt="Custom Web Application Development in Delhi"
                        />
                      </div>
                      <h4>Network</h4>
                    </div>
                    <p className="customText">
                      Network type (Wi-Fi, 2G, 3G, 4G) Impact of connectivity
                      Issues
                    </p>
                  </div>
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
              <img
                className="image-full"
                src="assets/images/web-devlp-secure-database.svg"
                alt="Custom Web Application Development Company in India"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="customHeading">
                <span className="text_red">Highly Reliable, Secured</span> And{" "}
                <span className="text_red">Scalable Database Development</span>
              </h3>
              <p className="customText">
                Committed Server Management, Setup, Installation, Maintenance,
                and Security Services with Firewall Configuration and On Demand
                Backup.
              </p>
              <div className="scalable-database-box">
                <div className="front-end-box-heading">
                  <div className="front-end-img-circle">
                    <img
                      src="assets/images/icons/web-devlp-img-20.svg"
                      alt="Custom Web Application Development Company in Delhi"
                    />
                  </div>
                  <h4 className="fontHeading">MySQL</h4>
                </div>
                <p className="customText mt-lg-0 mt-2">
                  Meet the monstrous flood of cutting edge highlights like
                  interest versatility, superior, information security, complete
                  work process control, decreased absolute expense of possession
                  and confirmation of 24X7 uptime with MySQL.
                </p>
              </div>
              <div className="scalable-database-box">
                <div className="front-end-box-heading">
                  <div className="front-end-img-circle">
                    <img
                      src="assets/images/icons/web-devlp-img-23.svg"
                      alt="Custom Web Application Development Company in Mumbai"
                    />
                  </div>
                  <h4 className="fontHeading">Mongo DB</h4>
                </div>
                <p className="customText mt-lg-0 mt-2">
                  Address new information challenges, store huge volumes of
                  information, scale information base engineering effectively
                  and modestly with Mongo DB, the main No SQL information base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <h3 className="customHeading text-center">
            Our <span className="text_red">Website Development Packages</span>,
            Plans And Pricing
          </h3>
          <div className="table-responsive">
            <table className="table table-bordered customTable">
              <tbody>
                <tr>
                  <th>Deliverable</th>
                  <th>Start Up</th>
                  <th>Enterepreneur</th>
                  <th>Wantrepreneur</th>
                  <th>E-Commerce</th>
                  <th>Custom</th>
                </tr>
                <tr>
                  <td>No. of Pages</td>
                  <td>Upto 5</td>
                  <td>Upto 10</td>
                  <td>Upto 15</td>
                  <td>TBD</td>
                  <td>TBD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <Link href="https://www.sibinfotech.com/website-design-development-services-packages">
              <span className="btnPlans">View Plans</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="blueBg2 position-relative">
        <div className="containerFull">
          <div className="callAction">
            <h4 className="customLineHeight2 fontHeading">
              A Best Website Development Company In India
            </h4>
            <p className="customText text-center  mb-0 text-off-white">
              We provide the best web development services to grow your
              business.
            </p>
            <p className="customText text-center mt-1 text-off-white">
              Let's talk about the website design that suits your brand!
            </p>
            <Link href="/contact-us">
              <span>Speak to our experts</span>
            </Link>
          </div>
          <svg
            id="pattner"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#528af9"
              fill-opacity="1"
            ></path>
          </svg>
        </div>
      </section>
      <section className="bgDarkGrey">
        <div className="containerFull">
          <h4 className="heading fw-bold text-center fontHeading">
            Website Development <span className="titleHighlight">FAQ?</span>
          </h4>
          <div className="space d-none d-lg-block"></div>
          {/* <div className="row">
            <div className="col-lg-6">
              <div className="faqRight">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        What are Web Development services?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                      <div className="accordion-body">
                        <p>Known for ensuring the online presence of company Web Development services involve developing the website for the Internet (World Wide Web) or an intranet (a private network). Among professionals, Web Development usually refers to the main design aspects of building websites i.e. markup and coding.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What does a Web Development company do?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                      <div className="accordion-body">
                        <p>Web Development is all about maintaining the online presence of a company so that its services can reach out to its potential customers. Web Development services include various engaging activities such as ideating and freezing the framework, architecture and navigation.</p>
                        <p>There are several languages such as JavaScript, ASP, HTML, PHP etc. for coding and programming the backend.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        What does Web development include?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                      <div className="accordion-body">
                        <p>Web Development involves creating websites and apps for brands to reach customers. It includes aspects like web design, web publishing, web programming, and database management. A Web Developer designs websites and also writes the script in languages such as PHP and ASP.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">How much does Web Development cost?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>The cost for Web Development depends on many factors such as:</p>
                        <ul>
                          <li>Variation in requirements.</li>
                          <li>Utilization of resources on projects.</li>
                          <li>The time frame for a particular project etc.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        What to look for in a Professional Web Development Company?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Understanding what you look for in a web development company can be hard and at the same time can also have a major impact on the online presence of your business. We suggest choosing a website that has years of experience with an extensive portfolio of websites. Opt for checking reviews online to gauge how satisfied clients have been with the company's work.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faqRight">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Why SIB Infotech is the Best Web Development Agency in India?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>In a country like India, you will find thousands of Web Designing Companies running single-handedly or with multiple hands but what makes SIB Infotech unique is its years of experience and team of experts skilled in different areas. Feel free to check our portfolio for more information about the projects we have successfully delivered. We offer a free no-obligation consultation session so you can evaluate our capabilities and see if we are a good fit for your project. Contact us today to book an appointment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        How much does Website Development Costs in India?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Web Development in a country like India is usually priced on the lower side of the scale. The total costing depends on the time utilization, resources on a particular project along with the custom requirements of clients.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven2" aria-expanded="false" aria-controls="collapseSeven2">
                        What Web Development Platforms do you use for Developing a Website?
                      </button>
                    </h2>
                    <div id="collapseSeven2" className="accordion-collapse collapse" aria-labelledby="headingSeven2" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Explainable from its name itself, website development deals with the designing of websites for hosting via the internet or intranet. It incorporates within itself, website designing, web content development, client-side/server-side scripting, network security configuration, etc.</p>
                        <p>Web development extensively includes all the actions, updates, and operations essential for administering and managing a site smoothly.</p>
                        <p>Apart from development, there are many activities performed to ensure the site's top rankings on the search results page. These tasks pertain to a distinct specialization, i.e. search engine optimization (SEO).</p>
                        <p>Website development is also recognized as web development while the experts who maintain websites are acknowledged to be web developers or web devs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        What is Website Development?
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Explainable from its name itself, website development deals with the designing of websites for hosting via the internet or intranet. It incorporates within itself, website designing, web content development, client-side/server-side scripting, network security configuration, etc.</p>
                        <p>Web development extensively includes all the actions, updates, and operations essential for administering and managing a site smoothly.</p>
                        <p>Apart from development, there are many activities performed to ensure the site's top rankings on the search results page. These tasks pertain to a distinct specialization, i.e. search engine optimization (SEO).</p>
                        <p>Website development is also recognized as web development while the experts who maintain websites are acknowledged to be web developers or web devs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        How do I choose a Website Development Company for my Business?
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Here are a few tips to consider when appointing a web development company and the obstacles that may appear by overlooking vital points:</p>
                        <ul>
                          <li>Before opting for website development services you need to answer a few questions. What are the elements you need in a website? How many webpages do you need on your website? What should be its key features?</li>
                          <li>Go through the company's website by analyzing its digital presence, social media handles, and content present. Also, investigate if the site is mobile-friendly.</li>
                          <li>Have a glance at their portfolio. If they don’t have one ask them to go through a test for you asking them about their latest works and if they have worked on something in the same niche. Visit those sites and check how they are performing now (most importantly have a keen eye on the UI and UX).</li>
                          <li>Check the reviews of their clients and pay further attention to the reviews from those clients that have similar businesses as yours. You may also monitor their overall rating and if they have any awards.</li>
                          <li>Make sure they provide transparency to their clients and are responsive enough. Even if they don't possess a sales team contact them to know how they acknowledge and their dedication towards your work.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row ">
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {faqsDataLeft.map((items, i) => {
                  return (
                    <Accordion.Item
                      className="rounded overflow-hidden"
                      key={i}
                      eventKey={i}
                    >
                      <Accordion.Header className="fontHeading">{items.question}</Accordion.Header>
                      <Accordion.Body
                        className=""
                        dangerouslySetInnerHTML={{ __html: items.answer }}
                      ></Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {faqsDataRight.map((items, i) => {
                  return (
                    <Accordion.Item
                      className="rounded overflow-hidden fontHeading"
                      key={i}
                      eventKey={i}
                    >
                      <Accordion.Header>{items.question}</Accordion.Header>
                      <Accordion.Body
                        className=""
                        dangerouslySetInnerHTML={{ __html: items.answer }}
                      ></Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
