import { BlogSection } from "./screens/sections/BlogSection";
import { CallToActionSection } from "./screens/sections/CallToActionSection";
import { FeaturesSection } from "./screens/sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./screens/sections/FooterSection/FooterSection";
import { ProductShowcaseSection } from "./screens/sections/ProductShowcaseSection";
import { ShopHeaderSection } from "./screens/sections/ShopHeaderSection";
import { TestimonialsSection } from "./screens/sections/TestimonialsSection";

const App = (): JSX.Element => {
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
