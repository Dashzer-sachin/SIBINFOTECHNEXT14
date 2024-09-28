import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import { useState } from "react";

export default function SocialMediaMarketingSMMServicesPackages() {
  const [open, setOpen] = useState(1);

  const handleOpen = (e) => {
    setOpen(e);
  };

  const tableData1 = [
    {
      col1: "Additional Pages",
      col2: "TBD",
      col3: "TBD",
      col4: "TBD",
      col5: "TBD",
      col6: "TBD",
    },
    {
      col1: "Domain Name",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Hosting",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Responsive Design",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "AMP Pages",
      col2: "Optional",
      col3: "Optional",
      col4: "Optional",
      col5: "Optional",
      col6: "Optional",
    },
    {
      col1: "Social Media Buttons",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Newsletter",
      col2: "false",
      col3: "false",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Blog",
      col2: "false",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "CMS",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "SEO Semantic HTML Code",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "SEO Friendly Page & URL Structure",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "Enquiry/Contact Form",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Home Page Banner Management",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "Gallery Management",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "Video Management",
      col2:"Optional",
      col3:"Optional",
      col4:"Optional",
      col5:"Optional",
      col6:"Optional",
    },
    {
      col1: "News Management",
      col2: "false",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Registration, Login, Forget Password Management",
      col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Testimonial Management",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "true",
    },
    {
      col1: "Search Management",
      col2: "true",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    { col1: "Wishlist", col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD", },
    {
      col1: "Multi Language",
      col2: "Optional",
      col3: "Optional",
      col4: "Optional",
      col5: "Optional",
      col6: "Optional",
    },
    { col1: "Manage Order",col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD", },
    {
      col1: "Catalog Management",
   col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Multi Language",
   col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Discount Management",
   col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "SSL Implementation",
      col2: "false",
      col3: "true",
      col4: "true",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Payment Gateway Integration",
       col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    { col1: "Shopping Cart",   col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD", },
    {
      col1: "Category Management",
       col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Product Sort Option Management",
       col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Filter Option Management",
       col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Checkout Management",
       col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    {
      col1: "Product Images Zoom Option",
       col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD",
    },
    { col1: "Support",   col2: "false",
      col3: "false",
      col4: "false",
      col5: "true",
      col6: "TBD", },
  ];
  const tableData2 = [
    { col1: 'Email', col2: 'true', col3: 'true', col4: 'true', col5: 'true', col6: 'true' },
    { col1: 'Chat/Skype', col2: 'true', col3: 'true', col4: 'true', col5: 'true', col6: 'true' },
    { col1: 'Phone', col2: 'true', col3: 'true', col4: 'true', col5: 'true', col6: 'true' },
    { col1: 'Phone Call for Review Meetings', col2: 'true', col3: 'true', col4: 'true', col5: 'true', col6: 'true' }
];


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
                <h3 className="heading fontWeight700 text-white text-center">
                  Website Design Development Services Packages
                </h3>
                <div className="mt-5 d-flex justify-content-center">
                  <Link href="#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="#" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="containerFull ">
          <h2 className="customHeading text-center">
            <span> Website Design Development Services Packages</span>, Pricing
            &amp; Plans
          </h2>
          <div className="tabs">
            <div className="row">
              <div className="col-lg-3">
                <div className="tag-line">
                  <img
                    className="image-full"
                    src="assets/images/seo-packages-3.png"
                  />
                  <h4>CHOOSE YOUR PLAN</h4>
                  <p className="customText">
                    INCREASE YOUR WEBSITE
                    <br />
                    CONVERSIONS
                  </p>
                  <Link className="green-btn" href="tel:+91-9222260000">
                    CALL US NOW
                  </Link>
                </div>
                <div className="tab-header ">
                  <div
                    className={`tab  ${open == 1 ? "active" : ""}`}
                    onClick={() => handleOpen(1)}
                  >
                    <h5>Website Design &amp;  Development Services</h5>
                  </div>
                  <div
                    className={`tab  ${open == 2 ? "active" : ""}`}
                    onClick={() => handleOpen(2)}
                  >
                    <h5>Customer Support</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tab-content">
                  <div className={`${open == 1 ? "active " : ""}`}>
                    <h4>Initial Research &amp; Analysis</h4>
                    <div className="table-responsive">

                    <table className="table-web-development table">
                      <thead>
                        <tr>
                          <th>Deliverables</th>
                          <th className="bg-blue-4">StartUp</th>
                          <th className="bg-blue-4">Enterepreneur</th>
                          <th className="bg-blue-4">Wantrepreneur</th>
                          <th className="bg-blue-4">E- Commerce</th>
                          <th className="bg-blue-4">Custom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>No. of Pages</td>
                          <td>Upto 5</td>
                          <td>Upto 10</td>
                          <td>Upto 15</td>
                          <td>TBD</td>
                          <td>TBD</td>
                        </tr>
                        {tableData1.map((value, i) => {
                          return (
                            <tr  key={i}>
                              <td>{value.col1}</td>
                              <td>
                                {" "}
                                {value.col2 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col2 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col2
                                )}
                              </td>
                              <td>
                                {value.col3 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col3 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col3
                                )}
                              </td>
                              <td className="text-center">
                                {value.col4 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col4 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col4
                                )}
                              </td>
                              <td className="text-center">
                                {value.col5 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col5 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col5
                                )}
                              </td>
                              <td className="text-center">
                                {value.col6 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col6 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col6
                                )}
                              </td>
                            </tr>
                          );
                        })}
                          <tr>
                          <td>Pricing</td>
                          <td><button className="package-btn">ENQUIRE</button></td>
                          <td><button className="package-btn">ENQUIRE</button></td>
                          <td className="text-center"><button className="package-btn">ENQUIRE</button></td>
                          <td className="text-center"><button className="package-btn">ENQUIRE</button></td>
                          <td className="text-center"><button className="package-btn">ENQUIRE</button></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </div>
                  <div className={`${open == 2 ? "active" : ""}`}>
                    <h4>Customer Support</h4>
                    <div className="table-responsive">
                    <table className="table-web-development table">
                      <thead>
                        <tr>
                          <th>Deliverables</th>
                          <th className="bg-blue-4">StartUp</th>
                          <th className="bg-blue-4">Enterepreneur</th>
                          <th className="bg-blue-4">Wantrepreneur</th>
                          <th className="bg-blue-4">E- Commerce</th>
                          <th className="bg-blue-4">Custom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>No. of Pages</td>
                          <td>Upto 5</td>
                          <td>Upto 10</td>
                          <td>Upto 15</td>
                          <td>TBD</td>
                          <td>TBD</td>
                        </tr>
                        {tableData2.map((value, i) => {
                          return (
                            <tr key={i}>
                              <td>{value.col1}</td>
                              <td>
                                {" "}
                                {value.col2 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col2 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col2
                                )}
                              </td>
                              <td>
                                {value.col3 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col3 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col3
                                )}
                              </td>
                              <td className="text-center">
                                {value.col4 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col4 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col4
                                )}
                              </td>
                              <td className="text-center">
                                {value.col5 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col5 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col5
                                )}
                              </td>
                              <td className="text-center">
                                {value.col6 === "true" ? (
                                  <img
                                    src="assets/images/tick.svg"
                                    alt="tick"
                                  />
                                ) : value.col6 === "false" ? (
                                  <img
                                    src="assets/images/crossed.svg"
                                    alt="crossed"
                                  />
                                ) : (
                                  value.col6
                                )}
                              </td>
                            </tr>
                          );
                        })}
                          <tr>
                          <td>Pricing</td>
                          <td><button className="package-btn">ENQUIRE</button></td>
                          <td><button className="package-btn">ENQUIRE</button></td>
                          <td className="text-center"><button className="package-btn">ENQUIRE</button></td>
                          <td className="text-center"><button className="package-btn">ENQUIRE</button></td>
                          <td className="text-center"><button className="package-btn">ENQUIRE</button></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
