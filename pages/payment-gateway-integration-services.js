import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function PaymentGatewayIntegrationServices() {
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
    						<h3 className="heading fontWeight700 text-white">Payment Gateway Integration Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Payment Gateway Integration</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="sib-custom-page">
          <div className="containerFull">
           <div className="row">
              <div className="col-md-1">
                  
              </div>
              <div className="col-md-10">
                 <div className="service-sub-title">
                    <p>
                       SIB Infotech absolutely devotes its business, skillset, experts, tools at your disposal.
                    </p>
                 </div>
              </div>
              <div className="col-md-1">
                  
              </div>
           </div>
           <div className="row">
              <div className="col-md-12">
                 <p>
                    SIB Infotech offers Powerful Payment Gateway Integration which is a mandatory component required for any E-commerce website. It is an integration used for authorization. It lets user complete the payment procedure especially required for those who use credit cards for their transactions. With a powerful application such as Payment Gateway Integration in an E-commerce website of yours, you will always be ready to accept any type of real-time payments that are made from your customers with diverse banking options.
                 </p>
              </div>
           </div>
           <div className="row">
              <div className="col-md-6">
                 <p>
                    The web presence of this kind of integration is increasing due to its features that are used for online sales. For each and every online transaction that involves money, a payment gateway is an outstanding option. For any type of authorization, payment process or each time consumers purchase any type of services or product this Payment Gateway Integration is an essential option. It has all the features as in security related to online transactions that are made by the consumers. It secures all transactions and its sensitive information related to your business. Along with that, business owners do not need to exert all the effort needed in the management of E-commerce website and collection of payments made by the consumers SIB Infotech will take care of all. Our services exceed all limitations to think of like geographical barriers. Time is also saved with the use of this integration as payments are made through real-time transactions but not the old fashion check receiving the procedure.
                 </p>
                 <p>There are many major payment procedures available in the market. Some of the leading payment procedures that are highly versatile among E-commerce Websites are PayPal, Google Checkout, etc.</p>
              </div>
              <div className="col-md-6">
                 <div className="custom-page-img">
                    <img src="assets/images/article-submission.png" alt="Payment Gateway Integration Services in India" className="img-fluid"/>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-md-12">
                 <div className="custom-content-title">
                    <p>What will Article Submission do for me?</p>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className="custom-page-img">
                    <img src="assets/images/article-submission.png" alt="Payment Gateway Integraion Services in Mumbai" className="img-fluid"/>
                 </div>
              </div>
              <div className="col-md-4">
                 <ul>
                    <li>
                       <p>Multi-currency, real-time transactions through debit and credit cards</p>
                    </li>
                    <li>
                       <p>Online consumer authentication</p>
                    </li>
                    <li>
                       <p>Real-time reporting and reconciliation</p>
                    </li>
                    <li>
                       <p>Custom payment solutions</p>
                    </li>
                    <li>
                       <p>The powerful fraud management system</p>
                    </li>
                    <li>
                       <p>Automatic recurring billing option</p>
                    </li>
                    <li>
                       <p>Alternative payment options</p>
                    </li>
                    <li>
                       <p>Integration of payment gateway with your business and website</p>
                    </li>
                    <li>
                       <p>Online merchant platform development</p>
                    </li>
                 </ul>
              </div>
              <div className="col-md-4">
                 <ul>
                    <li>
                       <p>One click virtual terminal for manual sales processing and issue of credits</p>
                    </li>
                    <li>
                       <p>Currency conversion facility</p>
                    </li>
                    <li>
                       <p>Phone billing and SMS billing facility</p>
                    </li>
                    <li>
                       <p>Download data in text format and import it into Excel sheet</p>
                    </li>
                    <li>
                       <p>Recurring billing on daily, weekly, monthly, quarterly, yearly basis</p>
                    </li>
                    <li>
                       <p>Multiple transactions support and shopping cart integration</p>
                    </li>
                    <li>
                       <p>Technical support and customer care services</p>
                    </li>
                 </ul>
              </div>
           </div>
         </div>
        </section>
    </CustomLayout>
  )
}
