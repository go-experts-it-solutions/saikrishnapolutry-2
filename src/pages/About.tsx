import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Building2, Globe, Zap , UserCheck, Lightbulb} from "lucide-react";

import henproductspage from "../assets/henproductspage.jpg"

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
   {/* Hero Section with Wave */}

<section
  className=" relative bg-gradient-to-r from-red-600/10 to-red-700/10 py-20 overflow-hidden bg-cover bg-center "
  style={{
    backgroundImage: `url(${henproductspage})`,
  }}
>

  {/* Dark overlay to improve text visibility */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Hero Content */}
  <div className="container mx-auto px-4 text-center relative z-20">
    <h1 className="text-5xl font-bold mb-4 font-['Poppins'] text-white">
      About Us
    </h1>
    <p className="text-lg text-gray-200 max-w-2xl mx-auto font-['Poppins']">
      Trailblazers in the poultry equipment industry since 2002
    </p>
  </div>

  {/* Decorative Light Dot Pattern */}
  <div
    className="absolute inset-0 opacity-10 z-10"
    style={{
      backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="2" fill="white" opacity="0.25"/></svg>')`,
    }}
  />

  {/* Bottom Wave Shape */}
<div className="absolute bottom-0 left-0 right-0 z-20">
  <svg
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
  >
    <path
      d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
      fill="white"
    />
  </svg>
</div>

</section>


      {/* Company Overview */}
   <section className="py-20 container mx-auto px-4 bg-[#f8eeee] -mt-12 pt-32">

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-center font-['Poppins']">
              Welcome to Sai Krishna Plastic Industries
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={1}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-['Poppins']">
              <p>
                Sai Krishna Plastic Industries, situated in Hyderabad, Telangana, has been a trailblazer 
                in the poultry equipment industry since its inception in 2002. With over two decades of 
                excellence, we have established ourselves as a trusted name in manufacturing high-quality 
                poultry equipment.
              </p>
              <p>
                Under the expert guidance of Managing Partners, <strong>Mr. Srikanth M</strong> and <strong>Naveen Kumar</strong>, 
                the company has thrived and expanded its reach across India and internationally. With a combined 
                experience of 25+ years, they bring unparalleled industry expertise to every aspect of our 
                business operations.
              </p>
              <p>
                Our state-of-the-art infrastructure, advanced Plastic Injection Molding Machines, and strategic 
                location in Hyderabad enable us to deliver premium quality products with timely service to our 
                customers nationwide and beyond.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="text-white">
                <div className="text-6xl font-bold mb-2 font-['Poppins']">25+</div>
                <div className="text-xl font-['Poppins']">Years of Experience</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={1}>
              <div className="text-white">
                <div className="text-6xl font-bold mb-2 font-['Poppins']">50+</div>
                <div className="text-xl font-['Poppins']">Number of Products</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Leadership</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-left">
              <Card className="hover-lift h-full border-2 border-red-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Poppins'] text-red-600">Expert Guidance</h3>
                  <p className="text-muted-foreground leading-relaxed font-['Poppins']">
                    Under the expert guidance of Managing Partners, <strong>Mr. Srikanth M</strong> and <strong>Naveen Kumar</strong>, 
                    the company has thrived. With a combined experience of 25+ years, they bring unparalleled 
                    industry expertise to drive innovation and excellence.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <Card className="hover-lift h-full border-2 border-red-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Poppins'] text-red-600">Company Heritage</h3>
                  <p className="text-muted-foreground leading-relaxed font-['Poppins']">
                    Established in 2002 in Hyderabad, Telangana, we have grown from a small operation to 
                    a leading manufacturer with extensive dealer networks across India and strong international 
                    presence.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Infrastructure & Capabilities */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Poppins']">
            Infrastructure & Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Poppins']">
            State-of-the-art facilities equipped with advanced technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Building2 className="w-10 h-10 text-red-600" />,
              title: "Modern Infrastructure",
              description: "State-of-the-art infrastructure spanning a vast area"
            },
            {
              icon: <Zap className="w-10 h-10 text-red-600" />,
              title: "Advanced Machinery",
              description: "Advanced Plastic Injection Molding Machines"
            },
            {
              icon: <Award className="w-10 h-10 text-red-600" />,
              title: "Storage Facilities",
              description: "Ample storage facilities for efficient operations"
            },
            {
              icon: <Globe className="w-10 h-10 text-red-600" />,
              title: "Strategic Location",
              description: "Strategic location in Hyderabad for optimal reach"
            }
          ].map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
              <Card className="hover-lift text-center h-full">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-['Poppins']">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-['Poppins']">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-left">
              <Card className="hover-lift h-full border-2 border-red-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Poppins']">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed font-['Poppins']">
                    To provide high-quality poultry equipment through cutting-edge technology, innovative 
                    product development, and customer-centric approach. We strive to deliver timely service 
                    while maintaining the highest standards of quality and customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <Card className="hover-lift h-full border-2 border-red-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-['Poppins']">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed font-['Poppins']">
                    To be recognized as the leading poultry equipment manufacturer in India and globally, 
                    setting industry standards through innovation, adaptability to market demands, and 
                    maintaining our Pan-India distribution network with strong international presence.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Poppins']">
            Our Key Strengths
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Poppins']">
            What sets us apart in the poultry equipment industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "25+ Years Expertise", description: "Industry expertise and innovation" },
            { title: "Cutting-edge Technology", description: "Latest technology for superior quality" },
            { title: "Pan-India Network", description: "Extensive distribution network" },
            { title: "Global Export", description: "Strong global export capabilities" },
            { title: "Timely Delivery", description: "Prompt and reliable service" },
            { title: "Customer Satisfaction", description: "Exceeding customer expectations" },
            { title: "High-Quality Products", description: "Premium quality in every product" },
            { title: "Market Adaptability", description: "Quick adaptation to demands" }
          ].map((strength, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.05}>
              <Card className="hover-lift h-full border-2 border-red-100 hover:border-red-300 transition-all">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold mb-2 font-['Poppins'] text-red-600">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground font-['Poppins']">{strength.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Quality & Service */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-['Poppins']">
              Quality & Service Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-['Poppins']">
              Sai Krishna Plastic Industries is renowned for exceptional quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "High-Quality Products",
                description: "Premium quality products that exceed industry standards",
                 icon: Award
              },
              {
                name: "Quick Service",
                description: "Fast and efficient service delivery",
                 icon: Zap
              },
              {
                name: "Customer-Centric",
                description: "Customer-focused approach in everything we do",
                  icon: UserCheck
              },
              {
                name: "Innovative Development",
                description: "Continuous innovative product development",
                  icon: Lightbulb
              }
            ].map((cert, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                <Card className="hover-lift text-center h-full border-2 border-green-100">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-['Poppins']">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground font-['Poppins']">{cert.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
