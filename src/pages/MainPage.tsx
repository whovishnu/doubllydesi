import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import ProductShowcase from "../components/ProductShowcase";
import FrameComponent from "../components/FrameComponent";

const MainPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 pb-[66.1px] pr-[62.5px] pl-[86px] box-border gap-[327px] leading-[normal] tracking-[normal] text-left text-55xl text-darkslateblue-400 font-poppins mq750:gap-[163px] mq750:pl-[43px] mq750:pr-[31px] mq750:box-border mq450:gap-[82px] mq450:pl-5 mq450:box-border">
      <img
        className="w-[1440px] h-[527.2px] absolute !m-[0] right-[-0.5px] bottom-[0px]"
        alt=""
        src="/website-content.svg"
      />
      <FrameComponent2 />
      <img
        className="w-full h-[1074px] absolute !m-[0] right-[0px] bottom-[1507px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/website-content1.svg"
      />
      <div className="w-[487px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-white font-kalam">
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[103%] font-normal font-inherit z-[4] mq1050:text-40xl mq1050:leading-[61px] mq450:text-25xl mq450:leading-[46px]">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="w-[440px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-6xl font-poppins">
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
              <div className="self-stretch h-[138px] relative leading-[126.5%] whitespace-pre-wrap inline-block shrink-0 z-[4] mq450:text-xl mq450:leading-[25px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporlabore et dolore magna aliqua. Ut enim  ad minim veniam, quis . `}</div>
              <div className="w-[287px] flex flex-row items-start justify-start text-center text-xl text-darkslateblue-400">
                <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
                  <div className="w-[179px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="w-[72px] rounded-3xl bg-snow box-border flex flex-row items-start justify-start py-[13px] px-[15px] z-[4] border-[2px] border-solid border-darkslateblue-400">
                        <div className="h-[73px] w-[72px] relative rounded-3xl bg-snow box-border hidden border-[2px] border-solid border-darkslateblue-400" />
                        <div className="h-[41px] flex-1 relative leading-[120%] font-semibold flex items-center justify-center z-[1] mq450:text-base mq450:leading-[19px]">
                          1 Lt
                        </div>
                      </div>
                      <div className="w-[72px] rounded-3xl bg-darkslateblue-400 box-border flex flex-row items-start justify-start py-[13px] px-[15px] z-[4] text-white border-[2px] border-solid border-white">
                        <div className="h-[73px] w-[72px] relative rounded-3xl bg-darkslateblue-400 box-border hidden border-[2px] border-solid border-white" />
                        <div className="h-[41px] flex-1 relative leading-[120%] font-semibold flex items-center justify-center z-[1] mq450:text-base mq450:leading-[19px]">
                          2 Lt
                        </div>
                      </div>
                    </div>
                  </div>
                  <b className="self-stretch h-[60px] relative text-41xl leading-[120%] inline-block text-left shrink-0 whitespace-nowrap z-[4] mq1050:text-29xl mq1050:leading-[58px] mq450:text-17xl mq450:leading-[43px]">
                    ₹ 1500
                  </b>
                </div>
                <div className="w-[79px] flex flex-col items-start justify-start gap-[22px] ml-[-3px]">
                  <div className="w-[72px] rounded-3xl bg-snow box-border flex flex-row items-start justify-start pt-3 px-[15px] pb-[13px] z-[4] border-[2px] border-solid border-darkslateblue-400">
                    <div className="h-[73px] w-[72px] relative rounded-3xl bg-snow box-border hidden border-[2px] border-solid border-darkslateblue-400" />
                    <div className="h-[42px] flex-1 relative leading-[120%] font-semibold flex items-center justify-center z-[1] mq450:text-base mq450:leading-[19px]">
                      3 Lt
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] text-left text-base">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                      <div className="relative leading-[20px] font-semibold inline-block min-w-[76px] z-[5]">
                        Quantity
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-1 text-center text-xl text-darkslateblue-200">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <div className="self-stretch h-3.5 relative leading-[120%] font-semibold flex items-center justify-center shrink-0 min-w-[14px] z-[4] mq450:text-base mq450:leading-[19px]">
                              -
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[120%] font-semibold text-darkslateblue-400 z-[4] mq450:text-base mq450:leading-[19px]">
                            1
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <div className="h-3.5 relative leading-[120%] font-semibold flex items-center justify-center shrink-0 min-w-[14px] z-[4] mq450:text-base mq450:leading-[19px]">
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-4 pr-[26.3px] pl-[27.3px] bg-white w-[280px] rounded-3xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[4] border-[2px] border-solid border-darkslateblue-300 hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslateblue-100">
                <div className="h-[90px] w-[280px] relative rounded-3xl bg-white box-border hidden border-[2px] border-solid border-darkslateblue-300" />
                <b className="h-[52px] flex-1 relative text-13xl-4 leading-[120%] flex font-poppins text-darkslateblue-400 text-center items-center justify-center shrink-0 z-[1]">
                  BUY NOW
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1075px] relative bg-lightcoral hidden max-w-full z-[4]" />
      <img
        className="w-full h-[823px] absolute !m-[0] top-[2005px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[3]"
        alt=""
        src="/website-content2.svg"
      />
      <FrameComponent1 />
      <img
        className="w-[826.2px] relative max-h-full object-contain hidden max-w-full z-[7]"
        alt=""
        src="/oil-bottle-small@2x.png"
      />
      <img
        className="w-[1137.1px] relative max-h-full object-contain hidden max-w-full z-[8]"
        alt=""
        src="/oil-bottle-big@2x.png"
      />
      <img
        className="w-full h-[1184px] absolute !m-[0] top-[1930px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[6]"
        alt=""
        src="/oil-illustrations@2x.png"
      />
      <ProductShowcase />
      <img
        className="w-full h-[808px] absolute !m-[0] top-[110px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/bg1.svg"
      />
      <div className="w-[1440px] h-[110px] relative bg-white hidden max-w-full z-[12]" />
      <div className="w-[380px] h-[29px] relative hidden max-w-full z-[13] text-center text-lg">
        <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[101px] h-[29px]">
          PRODUCTS
        </div>
        <div className="absolute top-[0px] left-[161px] font-semibold inline-block w-[86px] h-[29px]">
          SHOP ALL
        </div>
        <div className="absolute top-[0px] left-[307px] font-semibold inline-block w-[73px] h-[29px]">
          RECIPES
        </div>
      </div>
      <div className="w-[1437px] h-[1039px] relative hidden max-w-full z-[14] text-xl">
        <img
          className="absolute top-[9px] left-[-5px] w-[1440px] h-[1025px] object-cover hidden"
          alt=""
          src="/web-lp-preview01-1@2x.png"
        />
        <img
          className="absolute top-[17px] left-[0px] w-[1437px] h-[1022px] object-cover"
          alt=""
          src="/lp-illustrations01-4@2x.png"
        />
        <img
          className="absolute top-[0px] left-[482px] w-[134px] h-[238px] object-contain"
          alt=""
          src="/limbu-mirchi-illu02-1@2x.png"
        />
        <div className="absolute top-[255px] left-[91px] w-[436px] h-[592px]">
          <div className="absolute top-[241px] left-[0px] leading-[126.5%] whitespace-pre-wrap inline-block w-[436px] h-[351px] mq450:text-base mq450:leading-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Ut enim ad
            minim veniam, quis. Excepteut proident. Excepteur sint occaecat
            cupidatat non proident.
          </div>
          <div className="absolute top-[0px] left-[0px] text-[64px] leading-[210px] font-croissant-one inline-block w-[436px] h-[210px] mq1050:text-[51px] mq1050:leading-[56px] mq450:text-[38px] mq450:leading-[42px]">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
      <img
        className="w-[1443px] relative max-h-full object-cover hidden max-w-full z-[15]"
        alt=""
        src="/landing-page-illustrations@2x.png"
      />
      <FrameComponent />
    </div>
  );
};

export default MainPage;
