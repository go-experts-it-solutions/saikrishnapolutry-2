import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import { 
  Fan, 
  Wind, 
  Droplets, 
  Award, 
  ArrowRight, 
  Sparkles,
  Shield,
  Zap,
  Factory,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Users,
  TrendingUp,
  Leaf,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImages from "../assets/hero-farm.jpg";

// Placeholder for poultry farm images - replace with actual images
const heroImage = heroImages;
const aboutImage = "https://afi.com.ph/wp-content/uploads/2022/09/Day2_AFI-06368-1024x683.jpg";
const serviceImage1 = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXjth1ym32MSgeWxwnT_fpI28tL5oiXtxHPtWAiVhba0GaI95uedQMGLtSsM7jqEMZRfHSkksh7kayYZy8-UYas6cCVCBmmjshBTI_asdxg65aVfh-mj2Dcg";
const serviceImage2 = "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&h=300&fit=crop";
const serviceImage3 = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop";

const Index = () => {
  const navigate = useNavigate();

  // Services/Features data
  const services = [
    {
      icon: Wind,
      title: "Industrial Ventilation",
      description: "BESS LAB certified exhaust fans with 44,000-51,020 m³/h capacity for optimal air circulation",
      image: serviceImage1,
      link: "/products"
    },
    {
      icon: Droplets,
      title: "Automated Feeding",
      description: "Innopan feeding systems with grill-less design serving 35-50 birds per pan efficiently",
      image: serviceImage2,
      link: "/products"
    },
    {
      icon: Zap,
      title: "Drinking Solutions",
      description: "Automatic nipple drinking systems with pressure regulators for 50-100 birds per unit",
      image: serviceImage3,
      link: "/products"
    }
  ];

  // Stats/Features with icons
  const features = [
    { icon: Factory, number: "3", label: "Manufacturing Units", color: "text-red-600" },
    { icon: Award, number: "15+", label: "Product Categories", color: "text-red-600" },
    { icon: Users, number: "1000+", label: "Happy Clients", color: "text-red-600" },
    { icon: CheckCircle2, number: "100%", label: "Quality Assured", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700;900&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Libre+Franklin:wght@300;400;500;600;700;800;900&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-heading { font-family: 'Merriweather', serif; }
        .font-body { font-family: 'IBM Plex Sans', sans-serif; }
        .font-accent { font-family: 'Libre Franklin', sans-serif; }
      `}</style>

      <Navbar />
      
      {/* Hero Section - Full Width Background with Zoom Animation */}
   {/* Hero Section - 50vh Height with Zoom Animation */}


<section className="relative h-[75vh] overflow-hidden">
  {/* Background Image with Zoom In Animation */}
  <motion.div 
    className="absolute inset-0 w-full h-full"
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
<motion.img   
  src={heroImage}
  alt="Poultry Farm"
  style={{
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    objectPosition: 'center center' // Adjust: 'top', 'bottom', '20% 50%', etc.
  }}
  initial={{ scale: 1 }}
  animate={{ scale: 1.1 }}
  transition={{
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
  }}
/>

    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
  </motion.div>

  {/* Content */}
  <div className="relative container mx-auto px-4 h-full flex items-center z-10">
    <motion.div 
      className="max-w-3xl text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-4"
      >
        <motion.span 
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-xs font-accent font-bold uppercase tracking-wider"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
            transition: { duration: 0.3 }
          }}
        >
          Innovative Poultry Equipment
        </motion.span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Growing <motion.span 
          className="text-red-600"
          whileHover={{ 
            scale: 1.1,
            display: "inline-block",
            transition: { duration: 0.3 }
          }}
        >
          Smarter
        </motion.span><br />
        Farming Better
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="text-base md:text-lg mb-6 text-gray-200 font-body leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        World-class poultry equipment certified by University of Illinois BESS LAB. 
        Premium ventilation, automated feeding, and complete farm solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button 
            size="lg" 
            onClick={() => navigate('/products')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-md text-sm font-accent font-semibold shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Discover More
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </span>
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ 
                x: '100%',
                transition: { duration: 0.6 }
              }}
            />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-background hover:text-red-600 px-6 py-4 rounded-md text-sm font-accent font-semibold transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Contact Us
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <ChevronRight className="w-4 h-4 ml-2" />
              </motion.div>
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div 
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    whileHover={{ scale: 1.2 }}
  >
    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-2 backdrop-blur-sm">
      <motion.div 
        className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </div>
  </motion.div>
</section>



      {/* Features Bar with Icons */}
      {/* <section className="relative -mt-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-background hover:shadow-xl transition-all duration-300 border-none">
                  <CardContent className="p-6 text-center">
                    <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-3`} />
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-display">
                      {feature.number}
                    </div>
                    <div className="text-sm text-gray-600 font-body">{feature.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="relative -mt-20 z-10"> 
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            y: -8,
            transition: { duration: 0.4, ease: "backOut" }
          }}
        >
          <Card className="bg-background hover:shadow-2xl transition-all duration-500 border-none relative overflow-hidden group">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            
            <CardContent className="p-6 text-center relative z-10">
              {/* Animated Icon */}
              <motion.div
                className="relative inline-block mb-3"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: {
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.6, ease: "easeInOut" }
                  }
                }}
              >
                {/* Pulsing Circle */}
                <motion.div
                  className="absolute inset-0 bg-red-100 rounded-full -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: [1, 1.5, 2],
                    opacity: [0.6, 0.3, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut"
                    }
                  }}
                />
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto`} />
              </motion.div>

              {/* Animated Counter */}
              <motion.div 
                className="text-3xl font-bold text-gray-900 mb-1 font-display group-hover:text-red-600 group-hover:scale-115 transition-all duration-300"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: index * 0.1 + 0.3
                  }
                }}
                viewport={{ once: true }}
              >
                {feature.number}
              </motion.div>

              {/* Label with subtle lift */}
              <motion.div 
                className="text-sm text-gray-600 font-body"
                whileHover={{
                  y: -2,
                  transition: { duration: 0.3 }
                }}
              >
                {feature.label}
              </motion.div>
            </CardContent>

            {/* Bottom Border Animation */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
            />
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* About Section - Two Column with Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage}
                  alt="About SKPE"
                  className="w-full h-[600px] object-cover"
                />
                {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-background backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl">
  <div className="flex items-center gap-3">
    
    {/* Logo Circle (Same size as before) */}
    <div className="w-12 h-12  overflow-hidden flex items-center justify-center ">
      <img 
        src="/favicon.png" 
        alt="Logo" 
        className="w-full h-full object-cover" 
      />
    </div>

    {/* Text Section (unchanged) */}
    <div>
      <p className="text-sm font-bold text-gray-900 font-accent">SKPE</p>
      <p className="text-xs text-gray-600 font-body">Saikrishna Polutry Equipments</p>
    </div>

  </div>
</div>

              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="text-red-600 font-accent font-semibold text-sm uppercase tracking-wider">
                  → Welcome to SKPE
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 font-heading leading-tight">
                  Pioneering Innovations in the Global Agriculture
                </h2>
              </div>

              <p className="text-base text-gray-600 leading-relaxed font-body">
                Sai Krishna Poultry Equipments is a leading manufacturer of innovative poultry farm equipment in India. Our state-of-the-art facilities produce world-class ventilation systems, automated feeding and drinking solutions, and complete environment control systems.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 font-heading mb-1">BESS LAB Certified Products</h4>
                    <p className="text-sm text-gray-600 font-body">All equipment tested and certified by University of Illinois</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 font-heading mb-1">Complete Farm Solutions</h4>
                    <p className="text-sm text-gray-600 font-body">From ventilation to feeding - everything you need</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md font-accent font-semibold"
                >
                  Discover More
                </Button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-body">Call Us Anytime</p>
                    <p className="text-sm font-bold text-gray-900 font-accent">+91 94404 06200</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid with Images */}
      <section className="py-24 bg-background-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-accent font-semibold text-sm uppercase tracking-wider">
              → Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 font-heading">
              Top Services in Sustainable Agriculture
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Dark CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wind, title: "Premium Ventilation", description: "BESS LAB certified exhaust systems with superior airflow" },
              { icon: Droplets, title: "Smart Feeding", description: "Automated pan feeding with precision control systems" },
              { icon: Zap, title: "Hydration Tech", description: "Pressure-regulated drinking systems for optimal health" },
              { icon: Shield, title: "Quality Assured", description: "International standards with comprehensive warranty" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center text-white"
              >
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading">{item.title}</h3>
                <p className="text-sm text-gray-400 font-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Experts Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-accent font-semibold text-sm uppercase tracking-wider">
              → Our Locations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 font-heading">
              Visit Our Facilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Factory 1", location: "Kondapur", address: "Industrial Park Kondapur, Medak Dist, Telangana" },
              { title: "Factory 2", location: "Karimnagar", address: "Behind Petrol Bunk, Padmanagar, Karimnagar - 505002" },
              { title: "Sales Depot", location: "Hyderabad", address: "Plot No: 16, Road No: 2, Mamatanagar Colony, Nagole" }
            ].map((location, index) => (
              <LocationCard key={index} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>


 <section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 font-Poppins">
      Our Core Values
    </h2>

    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {[
        {
          title: "Leadership",
          description:
            "Under the guidance of our Managing Partners with 25+ years of expertise, the company has grown consistently.",
        },
        {
          title: "Infrastructure & Capabilities",
          description:
            "We operate with modern machinery, large-scale storage, and a strategic location in Hyderabad.",
        },
        {
          title: "Key Strengths",
          description:
            "25+ years experience, advanced tech, pan-India supply, global exports, on-time delivery, and customer-first service.",
        },
        {
          title: "Product Portfolio",
          description:
            "We offer a complete lineup of poultry equipment including feeders, drinkers, brooders, and more.",
        },
      ].map((value, index) => (
        <SwiperSlide key={index}>
          <div className="h-full">
            <Card className="hover-lift h-full">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 font-Poppins">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-Poppins">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      {/* Newsletter/CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Get Our Comprehensive Agriculture Updates Newsletter
              </h2>
              <p className="text-lg mb-8 text-white/90 font-body">
                Stay updated with the latest in poultry farm technology and equipment innovations
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input 
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-4 rounded-md text-gray-900 font-body focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-background text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md font-accent font-bold">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const navigate = useNavigate(); // ← ADD THIS

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
          
          {/* Service Image */}
          <div className="relative h-64 overflow-hidden">
            <motion.img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <CardContent className="p-6 bg-background">
            <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">
              {service.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 font-body leading-relaxed">
              {service.description}
            </p>

            {/* FIXED BUTTON */}
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-red-600 font-accent font-semibold text-sm"
              onClick={() => navigate("/products")}
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </CardContent>

        </Card>
      </motion.div>
    </motion.div>
  );
};


// Location Card Component
const LocationCard = ({ location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
            {location.title}
          </h3>
          <p className="text-red-600 font-accent font-semibold mb-3">
            {location.location}
          </p>
          <p className="text-sm text-gray-600 font-body">
            {location.address}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Index;
