import {
  ChevronDownIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  TwitterIcon,
  UserIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const socialIcons = [
  { icon: <FacebookIcon className="w-4 h-4 text-white" />, alt: "Facebook" },
  { icon: <InstagramIcon className="w-4 h-4 text-white" />, alt: "Instagram" },
  { icon: <TwitterIcon className="w-4 h-4 text-white" />, alt: "Twitter" },
  { icon: <YoutubeIcon className="w-4 h-4 text-white" />, alt: "Youtube" },
];

const navItems = [
  { name: "Home", active: false },
  { name: "Shop", active: true, hasDropdown: true },
  { name: "About", active: false },
  { name: "Blog", active: false },
  { name: "Contact", active: false },
  { name: "Pages", active: false },
];

export const ShopHeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="w-full bg-white">
      {/* Top bar with contact info and social media */}
      <div className="w-full bg-[#23856d]">
        <div className="container mx-auto py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex items-center gap-1 p-2.5">
                <PhoneIcon className="w-4 h-4 text-white" />
                <span className="text-white text-sm tracking-[0.20px] leading-6 whitespace-nowrap font-bold [font-family:'Montserrat',Helvetica]">
                  (225) 555-0118
                </span>
              </div>

              <div className="flex items-center gap-1 p-2.5 rounded-[5px]">
                <MailIcon className="w-4 h-4 text-white" />
                <span className="text-white text-sm tracking-[0.20px] leading-6 whitespace-nowrap font-bold [font-family:'Montserrat',Helvetica]">
                  michelle.rivera@example.com
                </span>
              </div>
            </div>

            <div className="text-white text-sm tracking-[0.20px] leading-6 text-center md:text-left whitespace-nowrap font-bold [font-family:'Montserrat',Helvetica]">
              Follow Us and get a chance to win 80% off
            </div>

            <div className="flex items-center">
              <span className="text-white text-sm tracking-[0.20px] leading-6 whitespace-nowrap font-bold [font-family:'Montserrat',Helvetica] mr-2">
                Follow Us :
              </span>
              <div className="flex space-x-2">
                {socialIcons.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="p-1 h-auto w-auto hover:bg-white/10"
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#252b42] text-2xl tracking-[0.10px] leading-8">
            Bandage
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 mx-10">
            <ul className="flex items-center gap-[15px]">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <div
                    className={`flex items-center ${
                      item.active ? "text-[#252b42]" : "text-[#727272]"
                    } text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica] hover:text-[#252b42] cursor-pointer transition-colors`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-2.5 h-1.5 ml-1" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-[#23a6f0] font-bold text-sm [font-family:'Montserrat',Helvetica] hover:bg-[#23a6f0]/10"
            >
              <UserIcon className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Login / Register</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="p-3 hover:bg-[#23a6f0]/10"
            >
              <SearchIcon className="w-4 h-4 text-[#23a6f0]" />
            </Button>

            <Button
              variant="ghost"
              className="p-3 flex items-center hover:bg-[#23a6f0]/10"
            >
              <ShoppingCartIcon className="w-4 h-4 text-[#23a6f0]" />
              <Badge className="ml-1 bg-transparent text-[#23a6f0] text-xs">
                1
              </Badge>
            </Button>

            <Button
              variant="ghost"
              className="p-3 flex items-center hover:bg-[#23a6f0]/10"
            >
              <HeartIcon className="w-4 h-4 text-[#23a6f0]" />
              <Badge className="ml-1 bg-transparent text-[#23a6f0] text-xs">
                1
              </Badge>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="[font-family:'Montserrat',Helvetica] font-bold text-[#252b42] text-2xl tracking-[0.10px] leading-8">
                  Bandage
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="hover:bg-gray-100"
                >
                  <XIcon className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <div
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          item.active
                            ? "bg-[#23a6f0]/10 text-[#252b42]"
                            : "text-[#727272]"
                        } text-lg tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica] hover:bg-[#23a6f0]/5 transition-colors`}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-4 h-4" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex flex-col gap-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-center text-[#23a6f0] font-bold text-sm [font-family:'Montserrat',Helvetica] hover:bg-[#23a6f0]/10 py-3"
                  >
                    <UserIcon className="w-4 h-4 mr-2" />
                    Login / Register
                  </Button>
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="p-3 hover:bg-[#23a6f0]/10"
                    >
                      <SearchIcon className="w-4 h-4 text-[#23a6f0]" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="p-3 flex items-center hover:bg-[#23a6f0]/10"
                    >
                      <ShoppingCartIcon className="w-4 h-4 text-[#23a6f0]" />
                      <Badge className="ml-1 bg-transparent text-[#23a6f0] text-xs">
                        1
                      </Badge>
                    </Button>
                    <Button
                      variant="ghost"
                      className="p-3 flex items-center hover:bg-[#23a6f0]/10"
                    >
                      <HeartIcon className="w-4 h-4 text-[#23a6f0]" />
                      <Badge className="ml-1 bg-transparent text-[#23a6f0] text-xs">
                        1
                      </Badge>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Furniture cards grid */}
      <div className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row gap-[15px]">
          {/* Large card on the left */}
          <Card className="w-full lg:w-[452px] h-[300px] lg:h-[616px] border-0 rounded-none overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/card-cover-5.png)" }}
              >
                <div className="flex flex-col items-start justify-center gap-[5px] p-6 h-full">
                  <span className="text-success-text-color text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                    5 Items
                  </span>
                  <h2 className="text-[#252b42] text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] font-h-2 font-[number:var(--h-2-font-weight)]">
                    FURNITURE
                  </h2>
                  <span className="text-[#252b42] text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                    Read More
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right column with 3 cards */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Top medium card */}
            <Card className="w-full h-[300px] border-0 rounded-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <div
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: "url(/card-cover-6.png)" }}
                >
                  <div className="flex flex-col items-start justify-center gap-[5px] p-6 h-full">
                    <span className="text-success-text-color text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                      5 Items
                    </span>
                    <h2 className="text-[#252b42] text-2xl tracking-[0.10px] leading-8 font-bold [font-family:'Montserrat',Helvetica]">
                      FURNITURE
                    </h2>
                    <span className="text-[#252b42] text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                      Read More
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom two small cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Bottom left small card */}
              <Card className="w-full sm:w-1/2 h-[300px] border-0 rounded-none overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div
                    className="h-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/card-cover-6-1.png)" }}
                  >
                    <div className="flex flex-col items-start justify-center gap-[5px] p-6 h-full">
                      <span className="text-success-text-color text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                        5 Items
                      </span>
                      <h2 className="text-[#252b42] text-2xl tracking-[0.10px] leading-8 font-bold [font-family:'Montserrat',Helvetica]">
                        FURNITURE
                      </h2>
                      <span className="text-[#252b42] text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                        Read More
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bottom right small card */}
              <Card className="w-full sm:w-1/2 h-[300px] border-0 rounded-none overflow-hidden">
                <CardContent className="p-0 h-full">
                  <div
                    className="h-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/card-cover-7.png)" }}
                  >
                    <div className="flex flex-col items-start justify-center gap-[5px] p-6 h-full">
                      <span className="text-success-text-color text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                        5 Items
                      </span>
                      <h2 className="text-[#252b42] text-2xl tracking-[0.10px] leading-8 font-bold [font-family:'Montserrat',Helvetica]">
                        FURNITURE
                      </h2>
                      <span className="text-[#252b42] text-sm tracking-[0.20px] leading-6 font-bold [font-family:'Montserrat',Helvetica]">
                        Read More
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
