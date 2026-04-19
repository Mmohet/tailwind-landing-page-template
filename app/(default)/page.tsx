export const metadata = {
  title: "AiFlow Consulting",
  description: "AI-powered software consulting — strategy, development, and products.",
};

import Hero from "@/components/hero-home";
import Services from "@/components/features-planet";
import Products from "@/components/products";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
