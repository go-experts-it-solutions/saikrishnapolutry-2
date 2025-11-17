import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 font-['Playfair_Display']">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about our commitment to quality, sustainability, and ethical farming practices
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center font-['Playfair_Display']">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2003, Premium Poultry Farm began as a small family-owned operation with a 
              simple mission: to provide the highest quality poultry products while maintaining ethical 
              and sustainable farming practices.
            </p>
            <p>
              Over the past two decades, we've grown into one of the region's most trusted poultry 
              producers, but our core values remain unchanged. We believe in treating our birds with 
              respect, feeding them the finest organic feed, and maintaining impeccable standards of 
              hygiene and care.
            </p>
            <p>
              Today, our state-of-the-art facilities combine traditional farming wisdom with modern 
              technology to ensure every product meets our exacting standards. From farm to table, 
              we're committed to excellence at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide premium quality poultry products through ethical farming practices, 
                  sustainable methods, and unwavering commitment to animal welfare and environmental 
                  responsibility. We strive to nourish our community while respecting nature.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as the leading premium poultry brand, setting industry standards 
                  for quality, sustainability, and ethical practices. We envision a future where 
                  healthy, responsibly-raised poultry is accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Playfair_Display']">
            Our Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest industry standards through rigorous certification and regular audits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "USDA Organic",
              description: "Certified organic farming practices and feed"
            },
            {
              name: "Halal Certified",
              description: "Processing meets Islamic dietary guidelines"
            },
            {
              name: "Animal Welfare Approved",
              description: "Highest standards of animal care and treatment"
            }
          ].map((cert, index) => (
            <Card key={index} className="hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-['Playfair_Display']">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Quality First", description: "Never compromise on product excellence" },
              { title: "Ethical Practices", description: "Treating animals and people with respect" },
              { title: "Sustainability", description: "Protecting the environment for future generations" },
              { title: "Transparency", description: "Open and honest about our processes" }
            ].map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
