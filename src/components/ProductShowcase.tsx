import { FunctionComponent } from "react";
import GheeImages from "./GheeImages";

const ProductShowcase: FunctionComponent = () => {
  return (
    <section className="w-full h-[2389px] absolute !m-[0] top-[1045px] right-[0px] left-[0px] text-center text-xl text-darkslateblue-400 font-poppins">
      <img
        className="absolute top-[2193px] left-[1136px] w-[187px] h-[196px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/mixed-pickle16-2@2x.png"
      />
      <img
        className="absolute top-[2209px] left-[819px] w-[153px] h-[161px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/mango-pickle16-2@2x.png"
      />
      <img
        className="absolute top-[2209px] left-[480px] w-[172px] h-[180px] object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/lemon-pickle16-2@2x.png"
      />
      <img
        className="absolute top-[2217px] left-[162px] w-[140px] h-[147px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/chilly-pcikle16-3@2x.png"
      />
      <img
        className="absolute top-[1777px] left-[360px] w-[1080px] h-[425px] object-contain z-[2]"
        alt=""
        src="/traditions18-1@2x.png"
      />
      <img
        className="absolute top-[1787px] left-[1112px] w-[235px] h-[45px] z-[3]"
        loading="lazy"
        alt=""
        src="/variant-buttons.svg"
      />
      <img
        className="absolute top-[1027px] left-[759px] w-[631px] h-[672.6px] object-contain z-[4]"
        loading="lazy"
        alt=""
        src="/oil-bottle-small@2x.png"
      />
      <img
        className="absolute top-[942px] left-[556px] w-[626.4px] h-[885.9px] object-contain z-[5]"
        alt=""
        src="/oil-bottle-big@2x.png"
      />
      <img
        className="absolute top-[1519px] left-[-195px] w-[651px] h-[624px] object-contain z-[7]"
        alt=""
        src="/pcikel-animation06-1@2x.png"
      />
      <img
        className="absolute top-[698px] left-[-53px] w-[316px] h-[335px] object-contain z-[7]"
        alt=""
        src="/animation-elements04-1@2x.png"
      />
      <GheeImages />
    </section>
  );
};

export default ProductShowcase;
