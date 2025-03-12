"use client"
import AOS from 'aos';
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
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      // delay: 100,
      once: true,
    });
  }, [])

  return (
    <div className="pt-20 container mx-auto px-4">
      <div data-aos="zoom-in-up">
        <Hero />
      </div>
      <div data-aos="zoom-in-up">
        <Reviews />
      </div>
      <div data-aos="zoom-in-up">
        <WhyUs />
      </div>
      <div data-aos="zoom-in-up">
        <Services />
      </div>
      <div data-aos="zoom-in-up">
        <AboutUs />
      </div>
      <div data-aos="zoom-in-up">
        <Features />
      </div>
      <div data-aos="zoom-in-up">
        <Works />
      </div>
      <div data-aos="zoom-in-up">
        <Testimonials />
      </div>
      <div data-aos="zoom-in-up">
        <Blog />
      </div>
      <div data-aos="zoom-in-up">
        <Questions />
      </div>
    </div>
  );
}
