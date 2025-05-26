import React from "react";
import { BlogSection } from "./sections/BlogSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { ShopHeaderSection } from "./sections/ShopHeaderSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const SampleEcommerce = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white">
      <ShopHeaderSection />
      <ProductShowcaseSection />
      <FeaturesSection />
      <BlogSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
