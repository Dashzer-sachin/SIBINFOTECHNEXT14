(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9396],{9587:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return t(5516)}])},3443:function(e,i,t){"use strict";t.d(i,{Z:function(){return r}});var n=t(5893),s=t(7294);t(405);var a=t(5121),o=t(2920),c=t(6944);function r(){let e={"Content-Type":"multipart/form-data",Authorization:c.E0},[i,t]=(0,s.useState)(),[r,l]=(0,s.useState)({name:"",cname:"",email:"",phone:"",details:"",service:"Website Design",website:"",cpatchaText:""}),d=e=>{l(i=>({...i,[e.target.name]:e.target.value}))},h=async()=>{let i=new FormData;i.append("name",r.name),i.append("cname",r.cname),i.append("email",r.email),i.append("phone",r.phone),i.append("details",r.details),i.append("service",r.service),i.append("website",r.website),i.append("page_url",window.location.pathname);let t=await a.Z.post("".concat(c.T5,"home/submit_banner_enquiry"),i,{headers:e}).catch(e=>console.log(e)),n=await t.data;return n&&!n.error&&a.Z.post("".concat(c.T5,"send-email-any"),{html:"\n          <p>Dear Admin,</p>\n          <p>You have received an enquiry from:</p>\n          <table width='500' border='1' cellspacing='0'>\n              <tr>\n                  <td style='padding:10px;' width='250'>Full Name</td>\n                  <td style='padding:10px;'>".concat(r.name,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Company Name</td>\n                  <td style='padding:10px;'>").concat(r.cname,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Website url</td>\n                  <td style='padding:10px;'>").concat(r.website,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Email</td>\n                  <td style='padding:10px;'>").concat(r.email,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Phone Number</td>\n                  <td style='padding:10px;'>").concat(r.phone,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Service Name</td>\n                  <td style='padding:10px;'>").concat(r.service,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Website Location</td>\n                  <td style='padding:10px;'>").concat("https://sibinfotech.com"+window.location.pathname,"</td>\n              </tr>\n          </table>"),fromWhere:"Banner"}),n};return(0,s.useEffect)(()=>{},[]),(0,n.jsx)("div",{children:(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h().then(e=>{e.error?o.Am.error(e.message):(o.Am.success(e.message),l({name:"",cname:"",email:"",phone:"",details:"",service:"",website:"",cpatchaText:""}),window.location.href="https://sibinfotech.com/thanks")})},method:"post",action:"#",children:[(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 pe-lg-1",children:(0,n.jsx)("input",{type:"text",name:"name",onChange:d,value:r.name,placeholder:"Name*",required:!0})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("input",{type:"text",name:"cname",onChange:d,value:r.cname,placeholder:"Company Name"})})]})}),(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 pe-lg-1",children:(0,n.jsx)("input",{type:"text",name:"website",onChange:d,value:r.website,placeholder:"Website URL"})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("input",{type:"email",name:"email",onChange:d,value:r.email,placeholder:"E-mail Address*",required:!0})})]})}),(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 pe-lg-1",children:(0,n.jsx)("input",{type:"tel",name:"phone",onChange:d,value:r.phone,placeholder:"Phone Number*",required:!0})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("select",{name:"service",onChange:d,value:r.service,required:!0,children:[(0,n.jsx)("option",{value:"Website Design",children:"Website Design"}),(0,n.jsx)("option",{value:"Website Development",children:"Website Development"}),(0,n.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),(0,n.jsx)("option",{value:"PPC",children:"PPC"}),(0,n.jsx)("option",{value:"SEO",children:"SEO"}),(0,n.jsx)("option",{value:"SMO",children:"SMO"}),(0,n.jsx)("option",{value:"Software Development",children:"Software Development"}),(0,n.jsx)("option",{value:"Graphic Design",children:"Graphic Design"}),(0,n.jsx)("option",{value:"Mobile App Development",children:"Mobile App Development"}),(0,n.jsx)("option",{value:"Offshore Outsourcing",children:"Offshore Outsourcing"})]})})]})}),(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("textarea",{placeholder:"Message",name:"details",onChange:d,value:r.details})})})}),(0,n.jsx)("div",{className:"bannerFormItem mt-2",children:(0,n.jsx)("button",{name:"submit",type:"submit",className:"btnTheme w-100 fontWeight700 rounded",children:"Get in Touch"})})]})})}t(9619)},9619:function(e,i,t){"use strict";t.d(i,{S:function(){return n}});var n=()=>{let e;document.getElementById("captcha").innerHTML="";for(var i="0123456789",t=[],n=0;n<6;n++){var s=Math.floor(Math.random()*i.length+1);-1==t.indexOf(i[s])?t.push(i[s]):n--}var a=document.createElement("canvas");a.id="captcha",a.width=120,a.height=35;var o=a.getContext("2d");return o.font="25px Arial",o.strokeText(t.join(""),0,30),e=t.join(""),document.getElementById("captcha").appendChild(a),e}},5516:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return r}});var n=t(5893);t(7294);var s=t(405),a=t(1664),o=t.n(a),c=t(3443);function r(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(s.ql,{children:[(0,n.jsx)("title",{children:"Privacy Policy"}),(0,n.jsx)("meta",{name:"keywords",content:""}),(0,n.jsx)("meta",{name:"description",content:""}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.sibinfotech.com/privacy-policy"})]}),(0,n.jsx)("div",{className:"innerWebDesign",children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-7 ps-lg-5",children:(0,n.jsxs)("div",{className:"innerBannerTitle venter",children:[(0,n.jsx)("h3",{className:"heading fontWeight700 text-white",children:"Privacy Policy"}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsxs)(o(),{href:"#requestQuote",className:"btnThemeRed me-3",children:[(0,n.jsx)("i",{class:"fa-solid fa-comment-dots"})," Get a Quote"]}),(0,n.jsxs)(o(),{href:"#",className:"btnThemewhiteBorder",children:[(0,n.jsx)("i",{className:"fa-solid fa-circle-question"})," Ask a Question"]})]})]})}),(0,n.jsx)("div",{className:"col-lg-5 d-none d-lg-block pe-lg-5",children:(0,n.jsxs)("div",{className:"bannerForm",children:[(0,n.jsx)("h4",{className:"small_heading  fontWeight700",children:"Accelerate Your Business Growth"}),(0,n.jsxs)("p",{children:["with ",(0,n.jsxs)("strong",{className:"fontWeight600 text_red",children:["Best ",(0,n.jsx)("span",{className:"textChange",children:"Digital Marketing"})," Company in India"]})]}),(0,n.jsx)(c.Z,{})]})})]})})}),(0,n.jsx)("div",{className:"col-lg-5 d-block d-lg-none pe-lg-5",children:(0,n.jsxs)("div",{className:"bannerForm",children:[(0,n.jsx)("h4",{className:"small_heading  fontWeight700",children:"Accelerate Your Business Growth"}),(0,n.jsxs)("p",{children:["with ",(0,n.jsxs)("strong",{className:"fontWeight600 text_red",children:["Best ",(0,n.jsx)("span",{className:"textChange",children:"Digital Marketing"})," Company in India"]})]}),(0,n.jsx)(c.Z,{})]})}),(0,n.jsx)("section",{id:"sib-custom-page",className:"privacyPolicy",children:(0,n.jsxs)("div",{className:"containerFull",children:[(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"We are committed to protecting your privacy"}),(0,n.jsx)("p",{children:"We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This policy indicates the type of processes that may result in data being collected about you. Your use of this website gives us the right to collect that information."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Information Collected"}),(0,n.jsx)("p",{children:"We may collect any or all of the information that you give us depending on the type of transaction you enter into, including your name, address, telephone number, and email address, together with data about your use of the website. We take precautions to protect your information. When you submit sensitive information via website, your information is protected both online & offline. Sensitive information such as credit card data are collected through trusted vendors like Google Checkout or CCAvenue. Appropriate measures are taken by them at the bottom of your web browser or looking for “https” at the beginning of the web address when you are in the process of transaction."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Security"}),(0,n.jsx)("p",{children:"While encryption is used to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computer/servers in which we store personally identifiable information are kept in a secure environment behind a hardware firewall."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Information Use"}),(0,n.jsx)("p",{children:"We use the information collected primarily to process the task for which you visited the website. Data collected in the UK is held in accordance with the Data Protection Act. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"What Information do we collect about you?"}),(0,n.jsx)("p",{children:"We collect information about you when you complete our call back form. Website using information is collected using cookies."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"How will we use the information about you?"}),(0,n.jsx)("p",{children:"We collect information about you to understand your needs and contact you if you have requested contact regarding our services."}),(0,n.jsx)("p",{children:"We may use your information collected from the website to personalise your repeat visit to our website."}),(0,n.jsx)("p",{children:"SIB Infotech will not share your information with third parties for marketing purposes unless we specifically have your permission."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Contact Use"}),(0,n.jsx)("p",{children:"In order for us to contact you, a user must first complete the contact form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the product/services on our site in which you have expressed interest."}),(0,n.jsx)("p",{className:"mt-3",children:"This Privacy Policy explains how SIB Infotech uses any personal information we collect about you when you use this website."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Update or Delete Data"}),(0,n.jsxs)("p",{children:["You can update or delete your personal data by sending and email with your request to ",(0,n.jsx)(o(),{href:"mailto:contact@sibinfotech.com",children:"contact@sibinfotech.com"})]})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("h4",{className:"tite",children:"Cookies"}),(0,n.jsx)("p",{className:"small_heading mt-3",children:"Why are cookies essential to your website?"}),(0,n.jsx)("p",{children:"Cookies save information about you to customize the content of the website to make a visitor’s experience more tailored. Without cookies enabled we can’t guarantee that the website and your experience of it are as we intended it to be."}),(0,n.jsx)("p",{children:"None of the cookies we use collect any personal information and cannot be used to identify you in any way."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Types of cookies:"}),(0,n.jsx)("p",{children:"The length of time a cookie stays on the device depends on its type."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Session cookie"}),(0,n.jsx)("p",{children:"These are mainly used by online shops and allow you to keep items in your basket when shopping online. These cookies are expired when the browser is closed."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Persistent cookie:"}),(0,n.jsx)("p",{children:"These remain in operation, even when you have closed the browser. They remember your login details so you don’t have to type them in every time you use the site."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Third-party cookie:"}),(0,n.jsx)("p",{children:"These are installed by third-parties with the aim of collecting certain information to carry out various research into behaviour, demographics etc."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Privacy Policy Changes"}),(0,n.jsx)("p",{children:"In the event SIB Infotech updates, it's privacy policy then that information will be posted here."})]}),(0,n.jsxs)("div",{className:"custom-page-icon-box icon-with-title",children:[(0,n.jsx)("p",{className:"small_heading",children:"Contact Details"}),(0,n.jsx)("p",{children:(0,n.jsx)(o(),{href:"mailto:contact@sibinfotech.com",children:"contact@sibinfotech.com"})}),(0,n.jsx)("p",{children:(0,n.jsx)(o(),{href:"tel:+91-922222-60000",children:"+91-922222-60000"})})]})]})})]})}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=9587)}),_N_E=e.O()}]);