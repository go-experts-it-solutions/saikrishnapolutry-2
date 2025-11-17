import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Heart, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-farm.jpg";

const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "Organic Feed",
      description: "100% organic, non-GMO feed for healthier and tastier products"
    },
    {
      icon: Shield,
      title: "Hygienic Environment",
      description: "State-of-the-art facilities with strict hygiene protocols"
    },
    {
      icon: Heart,
      title: "Ethical Farming",
      description: "Free-range, stress-free environment for our birds"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "USDA certified and internationally recognized standards"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Poultry Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Playfair_Display']">
              Premium Poultry You Can Trust
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Farm-fresh eggs, premium chicken, and quality poultry products from our certified organic farm
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" variant="default">
                  Explore Products
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Introduction */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-['Playfair_Display']">
            Welcome to Premium Poultry Farm
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over 20 years, we've been dedicated to providing the finest quality poultry products. 
            Our commitment to ethical farming, organic practices, and superior care ensures that every 
            product meets the highest standards of quality and taste.
          </p>
        </AnimatedSection>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12 font-['Playfair_Display']">
              Why Choose Us
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection 
                  key={index} 
                  animation="scale-in" 
                  delay={index + 1}
                >
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-['Playfair_Display']">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of high-quality poultry products
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <AnimatedSection 
              key={product.id} 
              animation="fade-up" 
              delay={index + 1}
            >
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold mb-6 font-['Playfair_Display']">
              Certified Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our farm is certified by leading organizations, ensuring the highest standards 
              of quality, safety, and ethical practices.
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <AnimatedSection animation="scale-in" delay={1} className="text-center">
              <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-2 shadow-soft">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <p className="font-semibold">USDA Organic</p>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={2} className="text-center">
              <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-2 shadow-soft">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <p className="font-semibold">Halal Certified</p>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={3} className="text-center">
              <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-2 shadow-soft">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <p className="font-semibold">Animal Welfare</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection animation="scale-in">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 font-['Playfair_Display']">
                Ready to Experience Premium Quality?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Download our complete product brochure to learn more about our offerings
              </p>
              <Button size="lg" variant="secondary">
                Download Brochure
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
