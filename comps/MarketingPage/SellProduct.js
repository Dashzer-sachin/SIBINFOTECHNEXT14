import Image from "next/image";
import React, { useState } from "react";

const SellProduct = () => {
  const [transform, setTransform] = useState({
    xRotation: 0,
    yRotation: 0,
    scale: 1.1,
  });

  const handleMouseMove = (e) => {
    const el = e.target;
    const { clientWidth: width, clientHeight: height } = el;
    const xVal = e.nativeEvent.offsetX;
    const yVal = e.nativeEvent.offsetY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    setTransform({
      ...transform,
      xRotation,
      yRotation,
    });
  };

  const resetTransform = () => {
    setTransform({
      xRotation: 0,
      yRotation: 0,
      scale: 1,
    });
  };

  const handleMouseDown = () => {
    setTransform({
      ...transform,
      scale: 0.9,
    });
  };

  const handleMouseUp = () => {
    setTransform({
      ...transform,
      scale: 1.1,
    });
  };
  return (
    <section className="bgsection_m3">
      <div className="containerFull">
        <div>
          <h5 data-aos="flip-up" className="fontHeading2 heading fontWeight700">
   Sell Your Products On <span className="text_red">WhatsApp</span>
          </h5>
          <p className="mt-2 fontWeight500 fontWeight600 mt-3 fontHeading2 text-primary">
            WhatsApp Catalog, Cart & Payments in One Place!
          </p>
          <div data-aos="fade-up" className="sell_product">
            <div className="row ">
              <div className="col-lg-6">
                <div className="items">
                  <h5 className="fontHeading2  fontWeight700">
                    {" "}
                    DRAG & DROP CHATBOT & CATALOG BUILDER
                  </h5>
                  <p className="mt-2 ">
                    Build your Own Chatbot Flows your Way! Easy- to-use Chatbot
                    & Catalog Flow builder to build your conversational journeys
                  </p>
                </div>
                <div className="items">
                  <h5 className="fontHeading2  fontWeight700">
                    {" "}
                    WHATSAPP CART & CATALOGS
                  </h5>
                  <p className="mt-2 ">
                    Drive Orders via WhatsApp with WhatsApp Catalogs and Cart.
                    Seamlessly build your Catalog in 10 minutes and get going!
                  </p>
                </div>
                <div className="items">
                  <h5 className="fontHeading2  fontWeight700">
                    {" "}
                    WHATSAPP PAYMENTS
                  </h5>
                  <p className="mt-2 ">
                    Yes! Collect Payments now on WhatsApp Seamlessly with
                    WhatsApp Pay and other modes of Payments (Razorpay, Payu
                    etc) and grow your revenues.
                  </p>
                </div>
              </div>
              <div className=" col-lg-6 pt-3">
                <div
                  
                  className="imgboxm tilt"
                  onMouseMove={handleMouseMove}
                  onMouseOut={resetTransform}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  style={{
                    transform: `perspective(500px) scale(${transform.scale}) rotateX(${transform.xRotation}deg) rotateY(${transform.yRotation}deg)`
                  }}
                >
                  <Image
                    className="w-100 h-auto "
                    width={500}
                    height={400}
                    src={"/assets/images/api-features---whatsapp-screen-3.webp"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellProduct;
