import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ========== WHAT WE DO SECTION ========== */}
      <section className="relative bg-gradient-to-r from-green-600/10 to-green-700/10 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg"
            alt="Poultry equipment background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
    
        <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className=" text-7xl font-semibold  pb-3 text-white  text-bold font-['Poppins']">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-200 font-['Poppins']">
            <span>Home</span>
            <span>›</span>
            <span>What We Do?</span>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* What We Do Content */}
      <section className=" mt-1 pt-2 bg-background">
        <div className="container mx-auto px-4 ">
               <h1 className="text-5xl font-bold mb-4 ml-6 font-['Poppins'] text-black">
            What We Do?
          </h1>
          {/* Text and Image Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20 max-w-6xl ml-5">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-['Poppins']">
                  Sai Krishna Plastic Industries designs, develops, manufactures and markets products & solutions 
                  for the Poultry Industry by providing innovative products of world-class quality. The company 
                  offers a comprehensive range of poultry equipment, including poultry feeders, drinkers, brooders, 
                  etc. Our company has established an extensive dealer network across India and strong international 
                  presence. We supply to various countries around the world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  "https://images.pexels.com/photos/5779099/pexels-photo-5779099.jpeg",
                  "https://images.pexels.com/photos/4911703/pexels-photo-4911703.jpeg",
                  "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg",
                  "https://images.pexels.com/photos/4992830/pexels-photo-4992830.jpeg",
                ].map((src, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-lg shadow-lg group
                      ${idx === 0 ? "row-span-2 h-80" : "h-36"}`}
                  >
                    <img
                      src={src}
                      alt={`Facility ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== WHO WE ARE SECTION ========== */}
      <section className="relative bg-gradient-to-r py-10 overflow-hidden mt-10">
        <div className="container mx-auto px-2 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 font-['Poppins'] text-black">
            Who We Are?
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-200 font-['Poppins']">
            <span>›</span>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Who We Are Content */}
      <section className="py-2 mt-6 pt-1 bg-background">
        <div className="container mx-auto px-4">
          {/* Company Story */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20 max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-['Poppins']">
                  Sai Krishna Plastic Industries, situated in Hyderabad, Telangana, has been a trailblazer 
                  in poultry equipment manufacturing since its inception in 2002. Under the expert guidance 
                  of Managing Partners, Mr. Srikanth M and Naveen Kumar, the company has thrived. With a 
                  combined experience of 23+ years, they bring unparalleled industry expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-['Poppins']">
                  The company boasts state-of-the-art infrastructure spanning a vast area with Advanced 
                  Plastic Injection Molding Machines and ample storage space in a strategic location in 
                  Hyderabad. Sai Krishna has been the cornerstone of evolution and growth by continuously 
                  investing in Research & Development combined with excellent business ethics. The company 
                  enjoys national leadership in its business, being among the largest producers of drinking 
                  and feeding systems in India.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/5779099/pexels-photo-5779099.jpeg"
                  alt="Sai Krishna facility"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Optional: Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Originality Counts & Endeavors */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-['Poppins'] text-gray-800">
                  Key Strengths....
                </h2>
                <ul className="text-muted-foreground leading-relaxed font-['Poppins'] space-y-2">
                  <li>• 25+ years of industry expertise</li>
                  <li>• Cutting-edge technology</li>
                  <li>• Pan India distribution network</li>
                  <li>• Global export capabilities</li>
                  <li>• Timely delivery</li>
                  <li>• Customer satisfaction</li>
                  <li>• High-quality products</li>
                  <li>• Adaptability to market demands</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-['Poppins'] text-gray-800">
                  Innovation & Adaptability.....
                </h2>
                <p className="text-muted-foreground leading-relaxed font-['Poppins']">
                  The company stays ahead by monitoring market trends, introducing new products, and enhancing 
                  existing products to meet customer needs. Sai Krishna Plastic Industries is renowned for 
                  high-quality products, quick service, customer-centric approach, and innovative product 
                  development. Whenever farmers have a problem or any new requirement, they do not hesitate 
                  to contact us where new ideas and innovative concepts are constantly taking shape.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
