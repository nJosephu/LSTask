import React from "react";
import { BlogSection } from "./screens/SampleEcommerce/sections/BlogSection";
import { CallToActionSection } from "./screens/SampleEcommerce/sections/CallToActionSection";
import { FeaturesSection } from "./screens/SampleEcommerce/sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./screens/SampleEcommerce/sections/FooterSection/FooterSection";
import { ProductShowcaseSection } from "./screens/SampleEcommerce/sections/ProductShowcaseSection";
import { ShopHeaderSection } from "./screens/SampleEcommerce/sections/ShopHeaderSection";
import { TestimonialsSection } from "./screens/SampleEcommerce/sections/TestimonialsSection";

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

export default App;