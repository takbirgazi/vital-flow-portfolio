import AboutUs from "@/components/HomeComp/AboutUs/AboutUs";
import Blog from "@/components/HomeComp/Blog/Blog";
import Features from "@/components/HomeComp/Features/Features";
import Hero from "@/components/HomeComp/Hero/Hero";
import Questions from "@/components/HomeComp/Questions/Questions";
import Reviews from "@/components/HomeComp/Reviews/Reviews";
import Services from "@/components/HomeComp/Services/Services";
import Testimonials from "@/components/HomeComp/Testimonials/Testimonials";
import WhyUs from "@/components/HomeComp/WhyUs/WhyUs";
import Works from "@/components/HomeComp/Works/Works";

export default function Home() {
  return (
    <div className="pt-20 container mx-auto px-4">
      <Hero />
      <Reviews />
      <WhyUs />
      <Services />
      <AboutUs />
      <Features />
      <Works />
      <Testimonials />
      <Blog />
      <Questions />
    </div>
  );
}
