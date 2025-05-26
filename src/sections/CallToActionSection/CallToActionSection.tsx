import React from "react";
import { Button } from "../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="w-full h-[640px] bg-[url(/unsplash-xemajam-4ne.png)] bg-cover bg-center">
        <div className="flex flex-col items-center gap-6 pt-40 pb-28 mx-auto max-w-[1050px]">
          <div className="flex flex-col items-center gap-9 max-w-[607px]">
            <p className="font-['Montserrat',Helvetica] font-bold text-[#23a6f0] text-sm text-center tracking-[0.20px] leading-6">
              Designing Better Experience
            </p>

            <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-[#252b42] text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
              Problems trying to resolve <br />
              the conflict between
            </h2>

            <p className="max-w-[447px] font-['Montserrat',Helvetica] font-normal text-[#727272] text-sm text-center tracking-[0.20px] leading-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>

            <div className="px-[3px] inline-flex items-start gap-[5px]">
              <p className="text-2xl leading-8 whitespace-nowrap font-['Montserrat',Helvetica] font-bold text-secondary-color-1 text-center tracking-[0.10px]">
                $16.48
              </p>
            </div>

            <div className="inline-flex items-start gap-2.5">
              <Button className="h-[52px] px-10 py-[15px] bg-[#23a6f0] rounded-[5px] font-btn-text font-[number:var(--btn-text-font-weight)] text-white text-[length:var(--btn-text-font-size)] tracking-[var(--btn-text-letter-spacing)] leading-[var(--btn-text-line-height)] [font-style:var(--btn-text-font-style)]">
                ADD YOUR CALL TO ACTION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};