import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-20xl-6 text-darkslateblue-400 font-kalam">
      <div className="w-[1266px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1077px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="w-[223px] relative leading-[109.5%] inline-block shrink-0 mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
            Lorem ipsum
          </div>
          <div className="w-[223px] relative leading-[109.5%] inline-block shrink-0 mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
            Lorem ipsum
          </div>
          <div className="w-[223px] relative leading-[109.5%] inline-block shrink-0 mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
            Lorem ipsum
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[65px] max-w-full text-smi-4 mq750:gap-[32px] mq450:gap-[16px]">
        <div className="w-[214px] flex flex-col items-start justify-start pt-[366.9px] px-0 pb-0 box-border mq750:pt-[238px] mq750:box-border mq1050:hidden">
          <div className="self-stretch flex flex-col items-start justify-start gap-[41px]">
            <img
              className="w-[214px] h-[214px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/full-logo0403-2@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative leading-[23px] z-[1]">
                  Follow Us on:
                </div>
                <img
                  className="self-stretch h-[38px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/socials.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start max-w-[calc(100%_-_279px)] text-lgi font-poppins mq1050:max-w-full">
          <div className="w-[244px] flex flex-col items-start justify-start pt-[395.9px] px-0 pb-0 box-border mq750:hidden mq750:pt-[257px] mq750:box-border">
            <div className="self-stretch h-[291px] relative inline-block shrink-0 z-[1]">
              <p className="m-0 text-11xl font-kalam">
                <span>
                  <span>Our Products</span>
                </span>
              </p>
              <p className="m-0 text-base">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 leading-[180%]">Buffalo Ghee</p>
              <p className="m-0 leading-[180%]">Mustard Oil</p>
              <p className="m-0 leading-[180%]">Pickles</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[19.9px] max-w-[calc(100%_-_178px)] ml-[-65.5px] mq750:max-w-full">
            <img
              className="w-[603px] relative max-h-full object-contain max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/footer-illu25-3@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[758px] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                <div className="h-[289px] w-[243px] relative inline-block shrink-0 min-w-[243px] z-[1] mq750:flex-1">
                  <p className="m-0 text-11xl font-kalam">
                    <span>
                      <span>Useful Links</span>
                    </span>
                  </p>
                  <p className="m-0 text-base">
                    <span>
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0 leading-[180%]">About Us</p>
                  <p className="m-0 leading-[180%]">Blog/Recipes</p>
                  <p className="m-0 leading-[180%]">Terms of Service</p>
                  <p className="m-0 leading-[180%]">Track Order</p>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[335px] max-w-full">
                  <div className="self-stretch h-72 relative inline-block shrink-0 [debug_commit:1de1738] z-[1]">
                    <p className="m-0 text-11xl font-kalam">
                      <span>
                        <span>Reach Us</span>
                      </span>
                    </p>
                    <p className="m-0 text-base">
                      <span>
                        <span>&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0 leading-[180%]">
                      SevenGrow Farms Pvt. Ltd., Jaipur, Rajasthan, India
                    </p>
                    <p className="m-0 leading-[180%]">
                      Customercare@DoubllyDesi.com
                    </p>
                    <p className="m-0 leading-[180%]">+91 9967######</p>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-7 mt-[-5px] text-right text-xs">
                    <div className="w-[253px] relative leading-[12px] inline-block shrink-0 [debug_commit:1de1738] z-[1]">
                      © 2022 Doublly Desi. All Rights Reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
