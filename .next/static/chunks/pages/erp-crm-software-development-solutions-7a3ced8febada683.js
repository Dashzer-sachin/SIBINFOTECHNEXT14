(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9040],{8282:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/erp-crm-software-development-solutions",function(){return i(9240)}])},3443:function(e,s,i){"use strict";i.d(s,{Z:function(){return o}});var n=i(5893),a=i(7294);i(405);var t=i(5121),l=i(2920),c=i(6944);function o(){let e={"Content-Type":"multipart/form-data",Authorization:c.E0},[s,i]=(0,a.useState)(),[o,r]=(0,a.useState)({name:"",cname:"",email:"",phone:"",details:"",service:"Website Design",website:"",cpatchaText:""}),d=e=>{r(s=>({...s,[e.target.name]:e.target.value}))},m=async()=>{let s=new FormData;s.append("name",o.name),s.append("cname",o.cname),s.append("email",o.email),s.append("phone",o.phone),s.append("details",o.details),s.append("service",o.service),s.append("website",o.website),s.append("page_url",window.location.pathname);let i=await t.Z.post("".concat(c.T5,"home/submit_banner_enquiry"),s,{headers:e}).catch(e=>console.log(e)),n=await i.data;return n&&!n.error&&t.Z.post("".concat(c.T5,"send-email-any"),{html:"\n          <p>Dear Admin,</p>\n          <p>You have received an enquiry from:</p>\n          <table width='500' border='1' cellspacing='0'>\n              <tr>\n                  <td style='padding:10px;' width='250'>Full Name</td>\n                  <td style='padding:10px;'>".concat(o.name,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Company Name</td>\n                  <td style='padding:10px;'>").concat(o.cname,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Website url</td>\n                  <td style='padding:10px;'>").concat(o.website,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Email</td>\n                  <td style='padding:10px;'>").concat(o.email,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Phone Number</td>\n                  <td style='padding:10px;'>").concat(o.phone,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Service Name</td>\n                  <td style='padding:10px;'>").concat(o.service,"</td>\n              </tr>\n              <tr>\n                  <td style='padding:10px;' width='250'>Website Location</td>\n                  <td style='padding:10px;'>").concat("https://sibinfotech.com"+window.location.pathname,"</td>\n              </tr>\n          </table>"),fromWhere:"Banner"}),n};return(0,a.useEffect)(()=>{},[]),(0,n.jsx)("div",{children:(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m().then(e=>{e.error?l.Am.error(e.message):(l.Am.success(e.message),r({name:"",cname:"",email:"",phone:"",details:"",service:"",website:"",cpatchaText:""}),window.location.href="https://sibinfotech.com/thanks")})},method:"post",action:"#",children:[(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 pe-lg-1",children:(0,n.jsx)("input",{type:"text",name:"name",onChange:d,value:o.name,placeholder:"Name*",required:!0})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("input",{type:"text",name:"cname",onChange:d,value:o.cname,placeholder:"Company Name"})})]})}),(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 pe-lg-1",children:(0,n.jsx)("input",{type:"text",name:"website",onChange:d,value:o.website,placeholder:"Website URL"})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("input",{type:"email",name:"email",onChange:d,value:o.email,placeholder:"E-mail Address*",required:!0})})]})}),(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 pe-lg-1",children:(0,n.jsx)("input",{type:"tel",name:"phone",onChange:d,value:o.phone,placeholder:"Phone Number*",required:!0})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("select",{name:"service",onChange:d,value:o.service,required:!0,children:[(0,n.jsx)("option",{value:"Website Design",children:"Website Design"}),(0,n.jsx)("option",{value:"Website Development",children:"Website Development"}),(0,n.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),(0,n.jsx)("option",{value:"PPC",children:"PPC"}),(0,n.jsx)("option",{value:"SEO",children:"SEO"}),(0,n.jsx)("option",{value:"SMO",children:"SMO"}),(0,n.jsx)("option",{value:"Software Development",children:"Software Development"}),(0,n.jsx)("option",{value:"Graphic Design",children:"Graphic Design"}),(0,n.jsx)("option",{value:"Mobile App Development",children:"Mobile App Development"}),(0,n.jsx)("option",{value:"Offshore Outsourcing",children:"Offshore Outsourcing"})]})})]})}),(0,n.jsx)("div",{className:"bannerFormItem",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)("textarea",{placeholder:"Message",name:"details",onChange:d,value:o.details})})})}),(0,n.jsx)("div",{className:"bannerFormItem mt-2",children:(0,n.jsx)("button",{name:"submit",type:"submit",className:"btnTheme w-100 fontWeight700 rounded",children:"Get in Touch"})})]})})}i(9619)},9619:function(e,s,i){"use strict";i.d(s,{S:function(){return n}});var n=()=>{let e;document.getElementById("captcha").innerHTML="";for(var s="0123456789",i=[],n=0;n<6;n++){var a=Math.floor(Math.random()*s.length+1);-1==i.indexOf(s[a])?i.push(s[a]):n--}var t=document.createElement("canvas");t.id="captcha",t.width=120,t.height=35;var l=t.getContext("2d");return l.font="25px Arial",l.strokeText(i.join(""),0,30),e=i.join(""),document.getElementById("captcha").appendChild(t),e}},9240:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return o}});var n=i(5893);i(7294);var a=i(405),t=i(1664),l=i.n(t),c=i(3443);function o(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.ql,{children:[(0,n.jsx)("title",{children:"CRM & ERP Solutions Services Provider Companies Mumbai India"}),(0,n.jsx)("meta",{name:"keywords",content:"crm solutions,crm solutions india,crm solution provider,crm solution provider india,crm solution provider delhi,crm solution provider mumbai,crm solution provider dehi,crm solutions india,crm solutions mumbai,crm solutions delhi,crm solutions pune,crm sol"}),(0,n.jsx)("meta",{name:"description",content:"SIB Infotech solutions provides flexible customer relationship management (CRM) solutions for the financial services, home building, legal services and manufacturing industries. The SIB Infotech CRM software suite includes CRM tools for marketing automation and lead management, sales force automation (SFA), and customer service, as well as customer feedback management and partner management"}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.sibinfotech.com/erp-crm-software-development-solutions"})]}),(0,n.jsx)("div",{className:"innerWebDesign",children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-7 ps-lg-5",children:(0,n.jsxs)("div",{className:"innerBannerTitle venter",children:[(0,n.jsx)("h3",{className:"heading fontWeight700 text-white",children:"CRM Solutions"}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsxs)(l(),{href:"#requestQuote",className:"btnThemeRed me-3",children:[(0,n.jsx)("i",{class:"fa-solid fa-comment-dots"})," Get a Quote"]}),(0,n.jsxs)(l(),{href:"#",className:"btnThemewhiteBorder",children:[(0,n.jsx)("i",{className:"fa-solid fa-circle-question"})," Ask a Question"]})]})]})}),(0,n.jsx)("div",{className:"col-lg-5 d-none d-lg-block pe-lg-5",children:(0,n.jsxs)("div",{className:"bannerForm",children:[(0,n.jsx)("h4",{className:"small_heading  fontWeight700",children:"Accelerate Your Business Growth"}),(0,n.jsxs)("p",{children:["with ",(0,n.jsxs)("strong",{className:"fontWeight600 text_red",children:["Best ",(0,n.jsx)("span",{className:"textChange",children:"Press Release Submission "})," Company in India"]})]}),(0,n.jsx)(c.Z,{})]})})]})})}),(0,n.jsx)("div",{className:"col-lg-5 d-block d-lg-none pe-lg-5",children:(0,n.jsxs)("div",{className:"bannerForm",children:[(0,n.jsx)("h4",{className:"small_heading  fontWeight700",children:"Accelerate Your Business Growth"}),(0,n.jsxs)("p",{children:["with ",(0,n.jsxs)("strong",{className:"fontWeight600 text_red",children:["Best ",(0,n.jsx)("span",{className:"textChange",children:"Press Release Submission "})," Company in India"]})]}),(0,n.jsx)(c.Z,{})]})}),(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"containerFull",children:[(0,n.jsxs)("h3",{className:"customHeading customLineHeight text-center",children:[(0,n.jsx)("span",{children:"Customer Relationship Management"})," (CRM) covers all aspects of the company’s relationship with its customers."]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"crm-img-section",children:[(0,n.jsx)("img",{src:"assets/images/crm-solution-firm.png",alt:"CRM Solution Firm"}),(0,n.jsx)("img",{className:"image-1",src:"assets/images/crm-solution-company-in-delhi.png",alt:"CRM Solution Company"})]})}),(0,n.jsxs)("div",{className:"col-lg-6",children:[(0,n.jsx)("p",{className:"customText",children:"The today’s highly-computerized world is changing the buyers’ behavior and thus calls for new approaches in building corporate CRM strategies. With the advance of new selling channels due to popularization of WWW and mobile devices special emphasis is put on self-service tools, electronically-managed relationships and personalization of online consumer experience."}),(0,n.jsx)("p",{className:"customText",children:"We specialize in providing our customers with complete CRM. Our experienced consultants have considerable experience in different aspects of building an effective CRM system."}),(0,n.jsx)("p",{className:"customText",children:"In-depth understanding of all aspects of the CRM software implementation combined with strong technical expertise enable us to deliver CRM solutions fully customized to client’s requirements and business specifics. We will help you to enhance your existing information sharing and sales system enabling you to build highly effective channels for exchanging information with your customers, suppliers and employees worldwide based on the most up-to-date technologies."})]})]})]})}),(0,n.jsx)("section",{className:"bgGrey",children:(0,n.jsx)("div",{className:"containerFull",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("div",{className:"bgBlueDarkLeft bgBlueDarklgHeight",children:[(0,n.jsx)("h3",{className:"customHeading text-white customLineHeight2",children:"We will guide you through all the stages of the solution implementation giving a sound advice and helping you"}),(0,n.jsx)("h3",{className:"customHeading text-white",children:"Select the right strategy"})]})}),(0,n.jsxs)("div",{className:"col-lg-8",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-strategy.svg",alt:"CRM Strategy and Requirements Definition"}),(0,n.jsx)("p",{className:"customText",children:"CRM Strategy and Requirements Definition"})]})}),(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-business-process.svg",alt:"Business Processes Modeling"}),(0,n.jsx)("p",{className:"customText",children:"Business Processes Modeling & Streamlining"})]})}),(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-architechture-design.svg",alt:"Technical Architecture Design"}),(0,n.jsx)("p",{className:"customText",children:"Technical Architecture Design"})]})})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-gui-design.svg",alt:"GUI Design and Usability Modeling"}),(0,n.jsx)("p",{className:"customText",children:"GUI Design and Usability Modeling"})]})}),(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-3d-software.svg",alt:"3d Party Software Selection and Integration"}),(0,n.jsx)("p",{className:"customText",children:"3d Party Software Selection and Integration"})]})}),(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-customization.svg",alt:"Change Management"}),(0,n.jsx)("p",{className:"customText",children:"Customization / Change Management"})]})})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-implementation.svg",alt:"Implementation / Full Testing / Deployment"}),(0,n.jsx)("p",{className:"customText",children:"Implementation / Full Testing / Deployment"})]})}),(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-aplication-integration.svg",alt:"Legacy Applications Integration and Web-Enabling"}),(0,n.jsx)("p",{className:"customText",children:"Legacy Applications Integration and Web-Enabling"})]})}),(0,n.jsx)("div",{className:"col-lg-4 margin-padding-zero",children:(0,n.jsxs)("div",{className:"crm-solution-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-solution-data-migration.svg",alt:"Data Migration"}),(0,n.jsx)("p",{className:"customText",children:"Data Migration"})]})})]})]})]})})}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"containerFull",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-8",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("ul",{className:"square-li",children:[(0,n.jsx)("li",{className:"customText",children:"Lead Qualification & Tracking"}),(0,n.jsx)("li",{className:"customText",children:"Contacts and Accounts Management"}),(0,n.jsx)("li",{className:"customText",children:"Campaigns Scheduling and Tracking"})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("ul",{className:"square-li",children:[(0,n.jsx)("li",{className:"customText",children:"Team Management and Tasks Distribution"}),(0,n.jsx)("li",{className:"customText",children:"Document Circulation Management"}),(0,n.jsx)("li",{className:"customText",children:"Catalog Management"})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("ul",{className:"square-li",children:[(0,n.jsx)("li",{className:"customText",children:"Integrated Collaborative Tools"}),(0,n.jsx)("li",{className:"customText",children:"Customer Support Tools"}),(0,n.jsx)("li",{className:"customText",children:"Data Analysis and Multi-level Reporting"})]})})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("h3",{className:"customHeading customLineHeight2",children:["Our experts will help you understand all the implementation possibilities and help you select the right components of the future ",(0,n.jsx)("span",{className:"text_red",children:"CRM System "}),"that are important for your business"]})})]})})}),(0,n.jsx)("section",{className:"bgDarkBlue",children:(0,n.jsx)("div",{className:"containerFull",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsxs)("div",{className:"col-lg-7",children:[(0,n.jsx)("p",{className:"customText text-white text-center",children:"Our team has immense expertise in customizing CRM solutions for your business using the following 2 Open Source Software"}),(0,n.jsx)("p",{className:"customText text-white text-center mt-2",children:"At SIB Infotech we understand that the success is not only the right technology, it’s the right understanding of your business powered with the right technological solution."})]}),(0,n.jsx)("div",{className:"col-lg-5",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 col-6",children:(0,n.jsxs)("div",{className:"crm-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-sugar-crm.png",alt:"Sugar CRM"}),(0,n.jsx)("h4",{children:"Sugar CRM"})]})}),(0,n.jsx)("div",{className:"col-lg-6 col-6",children:(0,n.jsxs)("div",{className:"crm-box",children:[(0,n.jsx)("img",{src:"assets/images/icons/crm-vtiger-crm.png",alt:"vTiger"}),(0,n.jsx)("h4",{children:"vTiger CRM"})]})})]})})]})})})]})}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=8282)}),_N_E=e.O()}]);