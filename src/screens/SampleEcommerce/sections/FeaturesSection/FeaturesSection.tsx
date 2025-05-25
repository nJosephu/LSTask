import { BookOpenIcon, BookTextIcon, TrendingUpIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      icon: <BookOpenIcon className="w-[72px] h-[72px] text-primary-color" />,
      title: "Easy Wins",
      description: "Get your best looking smile now!",
    },
    {
      icon: <BookTextIcon className="w-[72px] h-[72px] text-primary-color" />,
      title: "Concrete",
      description:
        "Defalcate is most focused in helping you discover your most beautiful smile",
    },
    {
      icon: <TrendingUpIcon className="w-[72px] h-[72px] text-primary-color" />,
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="flex flex-col items-center gap-20 max-w-[1050px] mx-auto">
        <div className="flex flex-col items-center max-w-[692px]">
          <div className="flex flex-col items-center gap-2.5">
            <p className="font-['Montserrat',Helvetica] font-normal text-[#727272] text-xl text-center tracking-[0.20px] leading-[30px]">
              Featured Products
            </p>

            <h2 className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-2xl text-center tracking-[0.10px] leading-8">
              THE BEST SERVICES
            </h2>

            <p className="font-['Montserrat',Helvetica] font-normal text-[#727272] text-sm text-center tracking-[0.20px] leading-5">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {featureCards.map((card, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="flex flex-col items-center gap-5 px-10 py-[35px]">
                <div className="relative w-[72px] h-[72px]">{card.icon}</div>
                <h3 className="font-h-3 font-[number:var(--h-3-font-weight)] text-[#252b42] text-[length:var(--h-3-font-size)] text-center tracking-[var(--h-3-letter-spacing)] leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)] w-[235px]">
                  {card.title}
                </h3>
                <p className="font-['Montserrat',Helvetica] font-normal text-[#727272] text-sm text-center tracking-[0.20px] leading-5 w-[225px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
