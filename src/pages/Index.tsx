import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { 

  Wind, 
  Droplets, 
  Award, 
  ArrowRight, 

  Zap,
  Factory,
  CheckCircle2,
  Phone,

  MapPin,
  Users,

  ChevronRight,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import aboutimage from "../assets/companyimage.png";
import service1 from "../assets/ventilation (1).png";
import service2 from "../assets/polutry-drinking (1).png";
import service3 from "../assets/auto-feeding (1).png"
import slider from "../assets/slider.jpg"



const heroImage = slider;
const aboutImage = aboutimage;
const serviceImage1 = service1;
const serviceImage2 = service2;
const serviceImage3=service3;




const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      title: "Polutry Drinking Solutions",
      description: "Automatic nipple drinking systems with pressure regulators for 50-100 birds per unit",
      image: serviceImage2,
      link: "/products"
    },
    {
      icon: Droplets,
      title: "Polutry Feeding Solutions",
      description: "Innopan feeding systems with grill-less design serving 35-50 birds per pan efficiently",
      image: serviceImage3,
      link: "/products"
    },
    {
      icon: Wind,
   title: "Poultry Ventilation Solutions", 
      description: "Exhaust fans with 44,000-51,020 m³/h capacity for optimal air circulation",
      image: serviceImage1,
      link: "/products"
    },
  ];

  const features = [
    { icon: Factory, number: "3", label: "Manufacturing Units", color: "text-red-600" },
    { icon: Award, number: "15+", label: "Product Categories", color: "text-red-600" },
    { icon: Users, number: "1000+", label: "Happy Clients", color: "text-red-600" },
    { icon: CheckCircle2, number: "100%", label: "Quality Assured", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
     
.font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      <Navbar />

      {/* Hero Section */}
<section className="relative min-h-[400px] h-[65vh] overflow-hidden">
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
            className="w-full h-full object-cover absolute top-0 left-0"
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

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-[700] flex items-center z-10">
          <motion.div 
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <motion.span 
                className="inline-block bg-red-600 text-white px-4 py-2 mt-9 rounded-full text-xs font-accent font-bold uppercase tracking-wider"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Innovative Poultry Equipment
              </motion.span>
            </motion.div>

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

            <motion.p 
              className="text-base md:text-lg mb-6 text-gray-200 font-body leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
            Manufacturers of World-Class Poultry Equipment, Premium Ventilation, Auto-Feeding Systems & Complete Farming Solutions
            </motion.p>

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
                  className="
                    bg-white 
                    text-red-600 
                    border-2 border-red-600
                    px-6 py-4 
                    rounded-md 
                    text-sm 
                    font-accent font-semibold 
                    transition-all duration-300 
                    group relative overflow-hidden
                
                  "
                  onClick={() => navigate("/contact")}
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
                      <ChevronRight className="w-4 h-4 ml-2 text-red-600" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
  {/* Scroll Indicator - Alternative (Visible on all screens, better positioned) */}
<motion.div 
  className="absolute left-1/2 -translate-x-1/2 z-20 cursor-pointer bottom-8 md:bottom-12"

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


      {/* Features Section */}
{/* Features Section */}


{/* Features Section */}
<section className="relative py-14 bg-gradient-to-b from-gray-50 bg-background"> 
  <div className="container mx-auto px-6">

    {/* Wrapper with controlled negative offset */}
    <div className="relative -mt-24 mb-8 z-30">

      {/* 👉 2 per row on mobile, 4 per row on desktop, NO GAPS */}
   <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-[740px] mx-auto">


        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full flex justify-center"
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

            <Card 
              className="
                bg-background hover:shadow-2xl transition-all duration-500 
                border-none relative overflow-hidden group 
               w-[150px] h-[150px]
 flex items-center justify-center rounded-xl
              "
            >

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 
                opacity-0 group-hover:opacity-100 transition-opacity duration-400" 
              />

              <CardContent className="p-4 text-center relative z-10 flex flex-col items-center justify-center">

                {/* Icon */}
                <motion.div
                  className="relative inline-block mb-2"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: {
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.6, ease: "easeInOut" }
                    }
                  }}
                >
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
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </motion.div>

                {/* Number */}
                <motion.div 
                  className="text-3xl font-bold text-gray-900 mb-1 font-display 
                  group-hover:text-red-600 group-hover:scale-110 transition-all duration-300"
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

                {/* Label */}
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

              {/* Bottom Hover Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 
                origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out"
              />

            </Card>

          </motion.div>
        ))}

      </div>
    </div>
  </div>
</section>



      {/* About Section */}
      <section className="py-5 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
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
  className="w-full md:w-2/4 lg:w-full h-60 sm:h-[400px] object-cover mx-auto"
 />

              </div>
            </motion.div>

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
                  Pioneering Innovations 
                </h2>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                Sai Krishna Poultry Equipments is a leading manufacturer of innovative poultry farm equipment in India. Our state-of-the-art facilities produce world-class ventilation systems, automated feeding and drinking solutions, and complete environment control systems.
              </p>

              <div className="space-y-4">
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

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Link to="/products" className="w-full sm:w-auto">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md font-accent font-semibold w-full sm:w-auto"
                  >
                    Discover More
                  </Button>
                </Link>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <a href="tel:+919440406200" className="flex items-center gap-2 cursor-pointer text-gray-900 font-accent font-semibold">
                      <p className="text-xs text-gray-500 font-body">Call Us Anytime</p>
                      <p className="text-sm">+91 94404 06200</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="bg-background-50 py-12">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-red-600 font-accent font-semibold text-sm uppercase tracking-wider">
        → Our Services
      </span>

      <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 text-gray-900">
        Our Sustainable Poultry Services
      </h2>
    </motion.div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-5">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>

  </div>
</section>


      {/* Core Values Section */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <h2 className="text-4xl font-semibold text-center mb-12 font-Poppins">
      Our Core Values
    </h2>

    {/* Swiper Carousel */}
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
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-Poppins">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-Poppins">
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


      {/* Locations Section */}
<section className="bg-background py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-red-600 font-accent font-semibold text-sm uppercase tracking-wider">
        → Our Locations
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 font-Poppins">
        Visit Our Facilities
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          title: "Hyderabad Factory",
          location: "Kondapur (Medak)",
          address:
            "Industrial Park Kondapur, Kondapur Village, Medak District - 502336, Telangana",
          phone: [,
            "9440406200","9849059508","9030059508","9246659508" ],
          image:"", // Replace with your local asset
        },
        {
          title: "Karimnagar Factory",
          location: "Karimnagar",
          address:
            "Behind Petrol Bunk, Padmanagar, Karimnagar - 505002, Telangana",
       phone: [,
            "9440406200","9849059508","9030059508","9246659508" ],
          image: "/assets/karimnagar-factory.jpg",
        },
        {
          title: "Hyderabad Sales Depot",
          location: "Nagole",
          address:
            "Plot No: 16, Road No: 2, Mamatanagar Colony, Nagole, Hyderabad - 500068,Telangana",
        phone: [,
            "9440406200","9849059508","9030059508","9246659508" ],
          image: "/assets/hyderabad-sales.jpg",
        }
      ].map((location, index) => (
        <LocationCard key={index} location={location} index={index} />
      ))}
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
  const navigate = useNavigate();

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
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-md mx-auto">
          <div className="relative h-48 md:h-64 overflow-hidden">
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
<CardContent className="p-6 bg-background flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 font-heading">
              {service.title}
            </h3>

            <p className="text-sm md:text-base text-gray-600 mb-4 font-body leading-relaxed">
              {service.description}
            </p>

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

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-heading">
            {location.title}
          </h3>

          <p className="text-red-600 font-accent font-semibold mb-3">
            {location.location}
          </p>

<p className="text-base text-gray-600 font-body mb-4 leading-relaxed">
            {location.address}
          </p>

          <div className="flex flex-col items-center gap-1 mt-3">
            {location.phone?.map((num, i) => (
              <a
                key={i}
                href={`tel:${num}`}
                className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-body hover:text-red-600 transition"
              >
                <PhoneCall className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                {num}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Index;
