import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[131px] box-border gap-[166px] max-w-full text-left text-54xl text-white font-kalam lg:gap-[83px] lg:pb-[85px] lg:box-border mq750:gap-[41px] mq750:pb-[55px] mq750:box-border mq450:gap-[21px]">
      <div className="w-[720px] flex flex-row items-start justify-start pt-0 px-[5px] pb-[30px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
          <h1 className="m-0 w-[674px] relative text-inherit leading-[80px] font-normal font-inherit inline-block max-w-full z-[1] mq1050:text-39xl mq1050:leading-[64px] mq450:text-25xl mq450:leading-[48px]">{`Lorem ipsum dolor `}</h1>
          <div className="self-stretch relative text-6xl leading-[126.5%] font-poppins z-[1] mq450:text-xl mq450:leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[17px] max-w-full text-20xl-6">
        <div className="self-stretch grid flex-row items-start justify-start gap-[47.3px] grid-cols-[repeat(4,_minmax(217px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(217px,_376px))] mq750:gap-[24px] mq750:grid-cols-[minmax(217px,_1fr)]">
          <div className="h-[430px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mockup-1-1@2x.png"
            />
          </div>
          <img
            className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[431px] z-[1] mq750:w-full"
            loading="lazy"
            alt=""
            src="/mockup-3-1@2x.png"
          />
          <img
            className="relative max-w-full overflow-hidden max-h-full object-contain z-[1] mq750:w-full"
            loading="lazy"
            alt=""
            src="/mockup-2-1@2x.png"
          />
          <div className="h-[429px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mockup-4-2@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[41px] pl-11 box-border max-w-full lg:pl-[22px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
            <div className="w-[223px] relative leading-[109.5%] inline-block shrink-0 z-[1] mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
              Lorem ipsum
            </div>
            <div className="w-[226px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border">
              <div className="self-stretch relative leading-[109.5%] z-[1] mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
                Lorem ipsum
              </div>
            </div>
            <div className="w-[247px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="self-stretch relative leading-[109.5%] z-[1] mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
                Lorem ipsum
              </div>
            </div>
            <div className="w-[223px] relative leading-[109.5%] inline-block shrink-0 z-[1] mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
              Lorem ipsum
            </div>
          </div>
        </div>
      </div>
      <div className="w-[720px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-darkslateblue-400">
        <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
          <div className="w-[674px] flex flex-row items-start justify-start relative max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[80px] font-normal font-inherit inline-block max-w-full mq1050:text-39xl mq1050:leading-[64px] mq450:text-25xl mq450:leading-[48px]">
              Desi Recipes!
            </h1>
            <div className="h-[840px] w-[1393px] absolute !m-[0] right-[-675px] bottom-[-541px]">
              <img
                className="absolute top-[435px] left-[0px] w-[1345.5px] h-[405px]"
                alt=""
                src="/recipe-modules.svg"
              />
              <img
                className="absolute top-[0px] left-[582px] w-[823px] h-[504px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/pickle-illustrations2326-1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch relative text-6xl leading-[126.5%] font-poppins mq450:text-xl mq450:leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
