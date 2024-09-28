import { CustomLayout } from "@/comps/CustomLayout";
import SEO from "@/comps/SEO/SEO";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function SearchEngineOptimizationServices() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const [activeTab, setActiveTab] = useState("section1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


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
      <SEO />
    </CustomLayout>
  );
}
