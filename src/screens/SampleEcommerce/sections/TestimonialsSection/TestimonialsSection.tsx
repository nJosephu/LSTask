import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data
  const testimonial = {
    title: "What they say about us",
    author: "Regina Miles",
    role: "Designer",
    rating: 4,
    text: "Slate helps you see how many more days you need to work to reach your financial goal.",
  };

  // Gallery images data
  const galleryImages = [
    { src: "/unsplash-0y8p69vwiym.svg", alt: "Unsplash" },
    { src: "/unsplash-ah7yixwrtks.svg", alt: "Unsplash" },
    { src: "/unsplash-6-dx4h4yi1y.svg", alt: "Unsplash" },
    { src: "/unsplash-ghztzvllodq.svg", alt: "Unsplash ghztzvllodq" },
    { src: "/unsplash-uutouxqaexk.svg", alt: "Unsplash uutouxqaexk" },
    { src: "/unsplash-rhn8ff1g-qy.svg", alt: "Unsplash QY" },
    { src: "/unsplash-jo40qkbxup0.svg", alt: "Unsplash" },
    { src: "/unsplash-qlga5zv3doo.svg", alt: "Unsplash" },
    { src: "/unsplash-1r1echv4i0y.svg", alt: "Unsplash" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Testimonial Column */}
          <div className="w-full md:w-[438px] flex flex-col items-center gap-7">
            <h2 className="font-['Montserrat',Helvetica] font-bold text-2xl text-[#252b42] tracking-[0.10px] leading-8">
              {testimonial.title}
            </h2>

            <Card className="w-full bg-white rounded-[5px] shadow-none">
              <CardContent className="flex flex-col items-center gap-5 p-[30px]">
                {/* User Avatar */}
                <div className="w-[90px] h-[90px] bg-[url(/-user-1.png)] bg-cover bg-center rounded-full" />

                {/* Rating Stars */}
                <div className="flex items-center gap-[5px]">
                  {[...Array(5)].map((_, i) =>
                    i < testimonial.rating ? (
                      <img
                        key={i}
                        className="w-[22.01px] h-[22.01px]"
                        alt="Filled star"
                        src="/icn-bxs-star.svg"
                      />
                    ) : (
                      <img
                        key={i}
                        className="w-[22.01px] h-[22.01px]"
                        alt="Empty star"
                        src="/icn-bx-star.svg"
                      />
                    ),
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#727272] text-sm text-center tracking-[0.20px] leading-6 font-['Montserrat',Helvetica] font-bold">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <span className="font-link text-[#23a6f0] text-[length:var(--link-font-size)] text-center tracking-[var(--link-letter-spacing)] leading-[var(--link-line-height)]">
                    {testimonial.author}
                  </span>
                  <span className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-sm text-center tracking-[0.20px] leading-6">
                    {testimonial.role}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Grid */}
          <div className="w-full md:w-[464px]">
            <div className="grid grid-cols-3 gap-[18px]">
              {galleryImages.slice(0, 6).map((image, index) => (
                <img
                  key={index}
                  className="w-[143px] h-[143px] object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              ))}
              {galleryImages.slice(6).map((image, index) => (
                <img
                  key={index + 6}
                  className="w-[143px] h-[109px] object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
