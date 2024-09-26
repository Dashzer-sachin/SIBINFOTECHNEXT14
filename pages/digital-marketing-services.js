import { CustomLayout } from "@/comps/CustomLayout";
import DigitalMarkServices from "@/comps/digitalmarketingservices/DigitalMarkServices";
import "aos/dist/aos.css";


export default function DigitalMarketingServices() {

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
    <>
      <CustomLayout meta={metaTags}>
        <DigitalMarkServices />
      </CustomLayout>
    </>
  );
}
