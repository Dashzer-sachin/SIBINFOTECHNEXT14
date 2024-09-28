import Link from 'next/link';


import { CustomLayout } from '@/comps/CustomLayout';

export default function TermsOfUse() {

  const createMarkup = (content) => {
    return { __html: content };
  }

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
			        <div className="col-lg-12">
    					<div className="innerBannerTitle venter">
    						<h1 className="heading fontWeight700 text-center text-white">Terms & Conditions</h1>
                            <div className="mt-5 text-center">
                                <Link href="https://www.sibinfotech.com/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
    					</div>
        			</div>
                </div>
            </div>
        </div>
        <section id="sib-custom-page" className="privacyPolicy">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-12">
                        <div className="custom-page-icon-box icon-with-title">
                            <p>
                                The following terms and conditions will be deemed to have been accepted by the User on usage of the website <Link href="https://www.sibinfotech.com/">www.sibinfotech.com</Link>. You are requested to read them carefully before you use the services of this site. This Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. By using the Site, you agree to follow and be bound by the following terms and conditions concerning your use of the Site. SIB Infotech may revise the Terms and Condition at any time without notice to you.</p>
                            </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                General</p>
                            <p>
                                As a condition of your use of the Site, you will not use the Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the Site in any manner that could damage, disable, overburden, or impair any SIB Infotech Site or the network(s) connected to the Site or interfere with any other party's use and enjoyment of any Site. You may not attempt to gain unauthorised access to any Site, other accounts, computer systems or networks connected to the Site, through hacking, password mining or any other means. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Site.</p>
                            <p>
                                SIB Infotech shall have no responsibility for any damage to User's computer system or loss of data that results from the download of any content, materials, and information from the Site.</p>
                            <p>
                                SIB Infotech may change or discontinue any aspect of its website at any time, including, its content or features. SIB Infotech reserves the right to change the terms and conditions applicable to use of the Site without any notice.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Content</p>
                            <p>
                                All content present on this site is the exclusive property of SIB Infotech. No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from eBrandz. All rights not expressly granted herein are reserved. Unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Privacy Policy</p>
                            <p>
                                We value your privacy and we will not share any information submitted by you to any third party. You should review our complete “Privacy Policy” regularly at privacy_policy</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Cancellation Policy</p>
                            <p>
                                Clients wish to cancel any of our services will need to contact our billing department by sending an email to <Link href="mailto:billing@sibinfotech.com">billing@sibinfotech.com</Link></p>
                            <p>
                                Cancellation of service, renewals for on-going website promotion, any kind digital marketing, Social Media Marketing, PPC Management or any Monthly retainer service provided by the company must be made at least 30 days prior to the end of the current service period.</p>
                            <p>
                                Requests received later than 30 days prior to the end of the current service period will be treated as cancellation of services for the next service period.</p>
                            <p>
                                No cancellations are entertained for those services that SIB Infotech had offered on promotional offer / special occasions or discount period. These are limited occasion offers by the company and hence cancellations are not possible in any conditions.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Refund Policy</p>
                            <p>
                                SIB Infotech operates as a business and we expect CLIENTS to understand and respect our policies. Our goal as a Digital Marketing company is to bring the highest value per dollar spent by our CLIENTS, and in order to help us in that pursuit, we need to cover expenses and fuel our operations. Therefore, we require payments to be made on-time in respect to the services offered to CLIENT.</p>
                            <p>
                                Our refund policy has been devised to define the situations under which SIB Infotech will provide a refund. By registering for any of our services you are declaring that you accept and agree with all the terms and conditions outlined in the refund policy.</p>
                            <p>
                                We at SIB Infotech, adhere to Refund/Cancellation Policies for all the web services providing to our CLIENTS and adopts to various refund policies related to our different services.</p>
                            <p>
                                If a client request for a cancellation of services, then will not guarantee for the acceptance of refund. We will analyse the various factors involved in these services, such as verification of signed contract, email acceptance, electronically or physically signed between the two parties then only we decide to go for refund or not.</p>
                            <p>
                                SIB Infotech is not responsible for reimbursement for any transaction charges made for the project. Also amount send to third parties for the services rendered, or any miscellaneous charges that are not recoverable for SIB Infotech.</p>
                            <p>
                                We will try our level best to offer quality services that matches for our clients. However, despite every measure if the client is not satisfied with the results and chooses to go for the dispute resolution process, we consider refund requests as per the below refund policy which is very clearly listed:</p>
                            <ol className="bulletList">
                                <li>
                                    100% refund, if service is cancelled within 24 Hours &amp; not initiated.</li>
                                <li>
                                    If we fail to complete the service in accordance with the service agreement. The amount will be calculated by SIB Infotech taking into account the proportion of the service completed and the proportion yet to be completed as per the pre-defined scope of the project.</li>
                                <li>
                                    If a service gets cancelled, delayed or postponed by the CLIENT, then all money paid will be retained by SIB Infotech and if applicable, an additional cost will be charged to the CLIENT for all work completed beyond what was already paid for. No exceptions.</li>
                                <li>
                                    There are no refunds on dedicated servers, administrative fees, install fees for custom software.</li>
                                <li>
                                    Payments for Digital Marketing, Search Engine Optimization &amp; Social Media Marketing services are non-refundable.</li>
                                <li>
                                    Setup fees are non-refundable.</li>
                            </ol>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <h4>
                                Hosting &amp; Domain Registration</h4>
                            <p className="small_heading mt-3">
                                Hosting Registration:</p>
                            <p>
                                All web hosting payments plans whether present or past months are Non-refundable. Web hosting accounts are set up from the date of your order and are allotted a limited amount of server resources depending on the plan you have purchased. If client did not make use of the web hosting, payment for the services is still due. Cancellations of pre-paid web hosting on a yearly basis are non-refundable once purchased. In case of web hosting cancellation request submitted by the customer, a prorated refund will be issued if the account is eligible for a refund. If client received free products and/or services with their hosting plan purchase, the value of the free services will be deducted from the refund amount. SIB Infotech reserves the right to disable and/or terminate a user’s account if a user is found in violation of the terms. Accounts terminated due to policy violations will not be refunded.</p>
                            <p className="small_heading">
                                Domain Registration:</p>
                            <p>
                                Once you purchase your Domain Name, you are its owner and it cannot be "cancelled" until the duration of the domain term has expired. Domain names are controlled worldwide by ICANN organization and we do not have any control over. There are no refunds on domain registrations, SMTP Server, Dedicated Hosting, SSL Certificates. Refund requests for shared and reseller accounts after the initial 30 days non-conditional money back period will be refunded on a prorated basis of any unused time.</p>
                            <p>
                                &nbsp;</p>
                            <div className="table-responsive">
                                <table border="1" cellpadding="1" cellspacing="1" classNmae="w-100">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p align="center">
                                                    <strong>Reasons for Cancellation</strong></p>
                                            </td>
                                            <td>
                                                <p align="center">
                                                    <strong>Refund Policy</strong></p>
                                            </td>
                                            <td>
                                                <p align="center">
                                                    <strong>Explanation of Refund Policy</strong></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    Within 24 Hours after placing order.</p>
                                            </td>
                                            <td>
                                                <p>
                                                    100% Refund – Cancellation Charges if Applicable.</p>
                                            </td>
                                            <td>
                                                <p>
                                                    USD 3.5% cancellation charges as Currency Mark-up Fees / Payment Gateways / Bank Charges.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    Within 72 Hours of placing the order.</p>
                                            </td>
                                            <td>
                                                <p>
                                                    50% Refund or Proportionate refund.</p>
                                            </td>
                                            <td>
                                                <p>
                                                    In accordance with the amount of work done till the time client decides to cancel the order. But not more than 50%.</p>
                                                <p>
                                                    USD 3.5% cancellation charges as Currency Mark-up fees / Payment Gateways / Bank Charges.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                    After 72 Hours of placing the order.</p>
                                            </td>
                                            <td>
                                                <p>
                                                    No Refund</p>
                                            </td>
                                            <td>
                                                <p>
                                                    No Refund</p>
                                            </td>
                                        </tr>
                                        <tr style={{background:'#F1F1F1'}}>
                                            <td>
                                                <p>
                                                    Technical Glitches&nbsp;</p>
                                            </td>
                                            <td>
                                                <p>
                                                    No Refund</p>
                                            </td>
                                            <td>
                                                <p>
                                                    If there is a problem with the hosting and domain issues from third party vendors then we are not responsible for the losses</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Chargebacks:</p>
                            <p>
                                We normally ask for CLIENT credit card or payment info so that we can charge the CLIENTS card for services provided OR we may also send an invoice so that you can pay from your end. Claiming that you didn’t provide your card info or that you are not aware of such charges is illegal and fraudulent.</p>
                            <p>
                                If any chargeback or payment dispute is caused by CLIENT to a bank or credit card company, then CLIENT services and/or projects will be suspended and in some cases all work will be undone (reversed) without notice. Furthermore, the amount of the chargeback fee will be issued to CLIENT (to recover any fees passed on to us by the credit card company).</p>
                            <p>
                                In Addition, any outstanding balances accrued as a result of the chargeback(s) will have to be paid in full before we restore service, deliver any files, or commence any work.</p>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Account Suspension:</p>
                            <p>
                                SIB Infotech also reserves the rights to disable and/or terminate a user’s account, services, or contract any time without any notice and refund in the following cases</p>
                            <ul>
                                <li>
                                    Payments that are 15 days past due and unpaid.</li>
                                <li>
                                    Found in violation of our terms and policies.</li>
                            </ul>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Processing of Refunds:</p>
                            <p>
                                The partial refunds will be processed and mailed within 60 business days of the date of cancellation and will be brought about using the method of payment agreed upon in the beginning of the project i.e.; refund by check or refund by credit card.</p>
                            <p>
                                And the full refunds will be processed and mailed within 45 business days of the date of cancellation and will be brought about using the method of payment agreed upon in the beginning of the project i.e.; refund by check or refund by credit card.</p>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="small_heading">
                                    Contacting us regarding our refund policy</p>
                                <p>
                                    If you have queries or suggestions regarding our refund policies kindly e–mail us at <Link href="mailto:billing@sibinfotech.com">billing@sibinfotech.com</Link></p>
                                <p>
                                    THIS IS OUR REFUND AND CANCELLATION POLICY AND BY HIRING SIB INFOTECH FOR SERVICES YOU ARE BOUND BY THIS AGREEMENT AND YOU AGREE TO ABIDE BY OUR POLICIES.</p>
                            </div>
                        </div>
                        <div className="custom-page-icon-box icon-with-title">
                            <p className="small_heading">
                                Law</p>
                            <p>
                                The laws of India govern this agreement. You hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Mumbai, India in all disputes arising out of or relating to the use of the Site</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CustomLayout>
  )
}
