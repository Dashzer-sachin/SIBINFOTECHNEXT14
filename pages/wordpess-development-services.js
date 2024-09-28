import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WordpressDevelopmentServices() {
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
                            <h3 className="heading fontWeight700 text-white">Wordpress Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Wordpress Development Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Wordpress Development Services </span> Company in India</strong></p>
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
                        <p>We have team members having hand-on experience on delivering Wordpress sites as per customer requirements.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <div className="custom-content-title">
                        <p>
                           What will Wordpress Development do for me?
                        </p>
                     </div>
                     <ul>
                        <li>
                           <p>Themes allow you to change the design of your website quickly according to your choice.</p>
                        </li>
                        <li>
                           <p>You can select your theme rom a wide range of themes</p>
                        </li>
                        <li>
                           <p>If you don't understand programming it's ok. Wordpress allows you to extend its functionality by adding plugins. Wide variety of plugins is available</p>
                        </li>
                        <li>
                           <p>They are easy to update</p>
                        </li>
                        <li>
                           <p>If you are not happy with the free theme or plugin go PRO and buy paid version and buy some additional functionalities and best designs.</p>
                        </li>
                        <li>
                           <p>It has responsive web design</p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img alt="article submission" className="img-fluid" src="assets/images/article-submission.png"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="sib-custom-page" className="bgGrey">
            <div className="containerFull">
              <div className="row">
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-10">
                     <div className="service-sub-title">
                        <p>SIB Infotech's Wordpress Website Development Services acts like an architecture allowing Clients to extend the features and functionality of any website or blog.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-12">
                    <p>SIB Infotech have a dedicated team for WordPress. Wordpress is the most popular tool used for managing, designing and redesigning your website. Sib Infotech offers you the perfect customization that will help you gain more clients. Wordpress Website Development Services offers a lot of themes. Today more than half of the website you see have originated from WordPress.</p>

                    <p>We give our clients the power to choose any theme. The theme can be paid or free. If you want customization in theme our experts will redesign the theme you have selected. The most anticipated service through SIB Infotech is the moderate cost that we charge to our client. Wordpress Website development services involve less coding. This results in easier maintenance of your site, Lower investment higher Profit. Our methods are simple so that even clients having least technical knowledge can handle his/her website in the future too.</p>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="custom-content-title">
                      <p>
                        Benefits</p>
                    </div>
                    <ul>
                      <li>
                        <p>
                          Themes allow you to change the design of your website quickly according to your choice.</p>
                      </li>
                      <li>
                        <p>
                          You can select your theme from a wide range of themes</p>
                      </li>
                      <li>
                        <p>
                          If you don’t understand programming it’s ok. Wordpress allows you to extend its functionality by adding plugins. A wide variety of plugins is available</p>
                      </li>
                      <li>
                        <p>
                          They are easy to update</p>
                      </li>
                      <li>
                        <p>
                          If you are not happy with the free theme or plugin go PRO and buy paid version and buy some additional functionalities and best designs</p>
                      </li>
                      <li>
                        <p>
                          It has responsive web design.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="custom-page-img">
                      <img alt="article submission" className="img-fluid" src="assets/images/article-submission.png"/></div>
                  </div>
                </div>
            </div>
         </section>
    </CustomLayout>
  )
}
