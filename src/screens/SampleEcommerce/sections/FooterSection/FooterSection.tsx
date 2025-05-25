import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const footerCategories = [
    {
      title: "Company Info",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <footer className="w-full bg-white">
      {/* Top section with brand and social icons */}
      <div className="w-full bg-light-gray-1">
        <div className="max-w-[1050px] mx-auto px-4 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center sm:items-start gap-2.5">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-2xl tracking-[0.10px] leading-8">
                Bandage
              </h2>
            </div>

            <div className="flex items-center justify-center gap-5">
              <Button variant="ghost" size="icon" className="p-0 h-6 w-6">
                <FacebookIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-6 w-6">
                <InstagramIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="p-0 h-6 w-6">
                <TwitterIcon className="h-6 w-[19.76px]" />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="max-w-[1057px] mx-auto" />
      </div>

      {/* Main footer links section */}
      <div className="w-full bg-white">
        <div className="max-w-[1050px] mx-auto px-4 py-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerCategories.map((category, index) => (
              <div key={index} className="flex flex-col items-start gap-5">
                <h3 className="font-h-5 text-[#252b42] font-[number:var(--h-5-font-weight)] text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                  {category.title}
                </h3>
                <div className="flex flex-col items-start gap-2.5">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="font-['Montserrat',Helvetica] font-bold text-[#727272] text-sm tracking-[0.20px] leading-6"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Get In Touch section */}
            <div className="flex flex-col items-start gap-5 col-span-1 sm:col-span-2 md:col-span-1">
              <h3 className="font-h-5 text-[#252b42] font-[number:var(--h-5-font-weight)] text-[length:var(--h-5-font-size)] tracking-[var(--h-5-letter-spacing)] leading-[var(--h-5-line-height)] [font-style:var(--h-5-font-style)]">
                Get In Touch
              </h3>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    placeholder="Your Email"
                    className="h-[58px] sm:rounded-r-none bg-[#f8f8f8] border-[#e6e6e6] font-['Montserrat',Helvetica] text-[#727272] text-sm"
                  />
                  <Button className="h-[58px] sm:rounded-l-none bg-[#23a6f0] border border-[#e6e6e6] font-['Montserrat',Helvetica] text-white text-sm whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="font-['Montserrat',Helvetica] font-normal text-[#727272] text-xs tracking-[0.20px] leading-7 mt-1">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full bg-[#f9f9f9]">
        <div className="max-w-[1050px] mx-auto px-4 py-[25px]">
          <div className="flex items-center justify-center sm:justify-start">
            <p className="font-h-6 text-[#727272] font-[number:var(--h-6-font-weight)] text-[length:var(--h-6-font-size)] text-center sm:text-left tracking-[var(--h-6-letter-spacing)] leading-[var(--h-6-line-height)] [font-style:var(--h-6-font-style)]">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};