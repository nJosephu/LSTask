import React from "react";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection/ProductShowcaseSection";
import { ShopHeaderSection } from "./sections/ShopHeaderSection/ShopHeaderSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const App = (): JSX.Element => {
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