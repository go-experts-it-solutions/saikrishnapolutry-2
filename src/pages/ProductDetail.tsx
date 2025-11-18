import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Download, 
  Check, 
  Star,
  Share2,
  Heart,
  Phone,
  Mail,
  Package,
  Truck,
  Shield,
  Award,
  ChevronRight,
  CheckCircle2,
  Send,
  MapPin
} from "lucide-react";
import babyChickDrinker from "@/assets/Baby Chick Drinker.png";
import chickDrinker from "@/assets/Chick Drinker.png";
import vaccinator from "@/assets/Vaccinator.png";

// Background image for hero section - replace with your farm image
const heroBackgroundImage = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=600&fit=crop";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Product data
  const product = {
    id: "1",
    name: "Baby Chick Drinker",
    tagline: "Big, fat, tasty franks",
    category: "Drinking Systems",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    sku: "SKPE-BCD-001",
    shortDescription: "We're ready to welcome new flocks before the chicks even hatch",
    detailedDescription: "We nurture every flock with heart and care for the best results. The Baby Chick Drinker is engineered with precision to provide consistent water supply for 8-10 chicks. Made from food-grade materials, it ensures hygiene and durability.",
    image: babyChickDrinker,
    features: [
      "We have over 50 partner restaurants and attend many local markets.",
      "Enjoy premium poultry at home from our specially cared-for farm."
    ],
    specifications: [
      { label: "Capacity", value: "250ml" },
      { label: "Suitable For", value: "8-10 chicks" },
      { label: "Material", value: "Food-grade Plastic (BPA-free)" },
      { label: "Bowl Diameter", value: "132mm" },
      { label: "Lip Space", value: "20mm" },
      { label: "Trough Height", value: "135mm" },
      { label: "Weight", value: "200g" },
      { label: "Warranty", value: "1 Year" },
      { label: "Certification", value: "BESS LAB Approved" },
      { label: "Made In", value: "India" }
    ],
    benefits: [
      { icon: Package, title: "Products Range", description: "We offer a wide variety of fresh poultry and eggs, raised with care for every customer." },
      { icon: Award, title: "Quality Matters", description: "Every product reflects our promise of freshness, family tradition, and animal respect." },
      { icon: CheckCircle2, title: "Satisfaction", description: "We build trust through honest service and fresh poultry that exceeds expectations." },
      { icon: Truck, title: "Free Shipping", description: "Enjoy farm-fresh deliveries right to your door, fast, reliable, and completely free." }
    ],
    healthySection: {
      title: "Healthy & happy",
      heading: "All our birds roam freely with access to nests, perches, and fresh feed",
      description: "We raise our flocks with care and balance for healthier, happier poultry.",
      quote: "We're a family-run farm providing quality poultry since 1983."
    },
    bestSeller: true,
    certified: true
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button className="font-body font-semibold">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Professional 2025 Typography - Poppins + Inter */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-heading { 
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .font-body { 
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          line-height: 1.6;
        }
        
        .font-handwriting {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-style: italic;
        }
        
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
      `}</style>

      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBackgroundImage}
            alt="Poultry Farm Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-green-900/90" />
        </div>

        {/* Dot Pattern Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/></svg>')`,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading text-white mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center justify-center gap-3 text-sm font-body text-white/80">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">PRODUCTS</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold uppercase tracking-wide">
                {product.name}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content Section - Farm Style with 500x500 Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-green-600 font-handwriting text-2xl md:text-3xl mb-4">
                  {product.tagline}
                </p>
              </motion.div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 leading-tight">
                {product.shortDescription}
              </h2>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed font-body">
                {product.detailedDescription}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 font-body leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => navigate('/products')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-body font-bold px-8 py-6 rounded-full text-base uppercase tracking-wide shadow-lg"
                >
                  See Our Products
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - 500x500 Circular Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative z-10">
                <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Yellow Accent Lines */}
                <motion.div
                  className="absolute -bottom-10 -left-10 z-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <path d="M10 60 L50 20" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M10 80 L70 20" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M10 100 L90 20" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Icon Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <Card className="border-none shadow-md hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-lg font-heading text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-body leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healthy & Happy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - 500x500 Circular Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1 flex justify-center"
            >
              {/* Decorative Leaves */}
              <motion.div
                className="absolute -top-16 -left-16 z-0"
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                  <ellipse cx="75" cy="30" rx="25" ry="40" fill="#10B981" opacity="0.3" transform="rotate(-30 75 30)"/>
                  <ellipse cx="40" cy="70" rx="20" ry="35" fill="#10B981" opacity="0.4" transform="rotate(-60 40 70)"/>
                  <ellipse cx="85" cy="85" rx="22" ry="38" fill="#10B981" opacity="0.3" transform="rotate(15 85 85)"/>
                </svg>
              </motion.div>

              <div className="relative z-10">
                <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={chickDrinker}
                    alt="Healthy chickens"
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-8 -right-8 z-0"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M90 10 L50 50" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M90 30 L70 50" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M90 50 L90 50" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <p className="text-green-600 font-handwriting text-2xl md:text-3xl">
                {product.healthySection.title}
              </p>

              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 leading-tight">
                {product.healthySection.heading}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed font-body">
                {product.healthySection.description}
              </p>

              <div className="border-l-4 border-green-600 bg-green-50 pl-6 py-4 rounded-r-lg">
                <p className="text-base font-semibold text-gray-900 font-body">
                  {product.healthySection.quote}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-body font-bold px-8 py-6 rounded-full text-base uppercase tracking-wide shadow-lg"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-base text-gray-600 font-body">
              Detailed product information
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center p-5 bg-white rounded-lg hover:shadow-md transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-sm font-body font-bold text-gray-700">
                    {spec.label}
                  </span>
                  <span className="text-sm font-body text-gray-900">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="2" fill="white"/></svg>')`
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto font-body">
              Contact our team to learn more about this product and how it can benefit your farm
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-body font-bold px-8 py-6 rounded-full text-base shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 94404 06200
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-body font-bold px-8 py-6 rounded-full text-base"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
