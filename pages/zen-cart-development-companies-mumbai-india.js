
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ZenCartDevelopmentCompaniesMumbaiIndia() {
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
    						<h3 className="heading fontWeight700 text-white">Zen Cart Development Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Zen Cart Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Zen Cart Development </span> Company in India</strong></p>
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
                        <p>SIB Infotech ensures to deliver the best of Zen Cart Ecommerce Development services to its customer’s worldwide.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <p>
                        With a team of talented and expert zencart web developers it becomes quite easy on our part to deliver goods as per our client’s requirement. It is a free open source online store management and shopping cart system solution.
                     </p>
                  </div>
                  <div className="col-md-6">
                     <p>
                        Zen Cart is considered to be one of the rewarding e-commerce systems that is PHP-based and uses MySQL database and HTML components. The system is apparently a good support for many languages and currencies, and is available for free under the GNU General Public License.
                     </p>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>
                           Zen Cart CMS Customization features:
                        </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <p>
                              Multiple customer modes
                           </p>
                        </li>
                        <li>
                           <p>
                              Unlimited category depth
                           </p>
                        </li>
                        <li>
                           <p>
                              Multiple sales and discounts
                           </p>
                        </li>
                        <li>
                           <p>
                              Multiple display modes
                           </p>
                        </li>
                        <li>
                           <p>
                              XHTML 1.0 compliant template system
                           </p>
                        </li>
                        <li>
                           <p>
                              Unlimited extra pages
                           </p>
                        </li>
                        <li>
                           <p>
                              Multiple ad banner controller
                           </p>
                        </li>
                        <li>
                           <p>
                              PhpBB integration through external module
                           </p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <ul>
                        <li>
                           <p>
                              Multiple shipping options
                           </p>
                        </li>
                        <li>
                           <p>
                              Multiple payment options
                           </p>
                        </li>
                        <li>
                           <p>
                              Newsletter manager
                           </p>
                        </li>
                        <li>
                           <p>
                              Discount coupons
                           </p>
                        </li>
                        <li>
                           <p>
                              Gift certificates
                           </p>
                        </li>
                        <li>
                           <p>
                              Featured products
                           </p>
                        </li>
                        <li>
                           <p>
                              Quantity discounts
                           </p>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <div className="custom-page-img">
                        <img alt="Zen Cart Development Companies in India" className="img-fluid" src="assets/images/article-submission.png"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </CustomLayout>
  )
}
