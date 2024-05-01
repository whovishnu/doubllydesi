import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="w-[1268px] flex flex-row items-start justify-start pt-0 px-[5px] pb-[818px] box-border max-w-full lg:pb-[532px] lg:box-border mq1050:pb-[346px] mq1050:box-border mq450:pb-[225px] mq450:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[637px] max-w-full lg:gap-[318px] mq750:gap-[159px] mq450:gap-[80px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[239px] flex flex-col items-start justify-start pt-[59px] px-0 pb-0 box-border">
            <img
              className="w-[30px] h-[30px] relative overflow-hidden shrink-0 mix-blend-normal z-[2]"
              loading="lazy"
              alt=""
              src="/menu01.svg"
            />
          </div>
          <div className="h-[229px] w-[366px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-[248px] h-[183px]">
              <div className="absolute top-[-65px] left-[0px] rounded-[50%] bg-white box-border w-[248px] h-[248px] z-[2] border-[0px] border-solid border-goldenrod" />
              <img
                className="absolute top-[-8px] left-[42px] w-[164px] h-[165px] object-contain z-[3]"
                alt=""
                src="/full-logo0403-1@2x.png"
              />
            </div>
            <img
              className="absolute top-[-9px] left-[232px] w-[134px] h-[238px] object-cover z-[3]"
              alt=""
              src="/limbu-mirchi-illu02-1@2x.png"
            />
          </div>
          <div className="w-[121px] flex flex-col items-start justify-start pt-[59px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-[30px] w-[30px] relative min-h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/user03.svg"
              />
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/shoppingbag03.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-7 pl-5 box-border max-w-full">
          <div className="w-[323.6px] flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[1022px] w-[1437px] absolute !m-[0] top-[-871px] right-[-559.4px] object-cover z-[4]"
              alt=""
              src="/main-page-illu01-1@2x.png"
            />
            <button className="cursor-pointer py-[18px] pr-[30.5px] pl-[31.5px] bg-darkslateblue-400 flex-1 rounded-3xl box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full z-[5] border-[3px] border-solid border-white hover:bg-steelblue hover:box-border hover:border-[3px] hover:border-solid hover:border-gainsboro">
              <div className="h-[104px] w-[323.6px] relative rounded-3xl bg-darkslateblue-400 box-border hidden max-w-full border-[3px] border-solid border-white" />
              <b className="h-[60.1px] flex-1 relative text-13xl-4 leading-[120%] flex font-poppins text-white text-center items-center justify-center z-[1]">
                SHOP ALL
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
