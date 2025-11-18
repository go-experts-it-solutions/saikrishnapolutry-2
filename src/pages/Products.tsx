import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search,
  Filter,
  ArrowRight,
  CheckCircle2,
  Wind,
  Droplets,
  Zap,
  Factory,
  ChevronDown,
  Share2
} from "lucide-react";
import babyChickDrinker from "@/assets/Baby Chick Drinker.png";
import chickDrinker from "@/assets/Chick Drinker.png";
import vaccinator from "@/assets/Vaccinator.png";

const heroBackgroundImage = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=600&fit=crop";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const navigate = useNavigate();

  // Trigger card reveal animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsRevealed(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "All", icon: Factory, count: 12 },
    { name: "Industrial Fans", icon: Wind, count: 4 },
    { name: "Drinking Systems", icon: Droplets, count: 5 },
    { name: "Feeding Systems", icon: Zap, count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: "Baby Chick Drinker",
      category: "Drinking Systems",
      description: "Premium quality automatic drinker designed specifically for baby chicks with optimal water flow control and hygiene standards.",
      specs: "8-10 chicks | 250ml capacity",
      image: babyChickDrinker,
      features: ["Bowl Dia: 132mm", "Lip Space: 20mm", "Trough Height: 135mm"],
      inStock: true,
      bestSeller: true
    },
    {
      id: 2,
      name: "Chick Drinker",
      category: "Drinking Systems",
      description: "Efficient drinking system for growing chicks with durable construction and easy maintenance features.",
      specs: "50-70 birds | 3 Ltrs capacity",
      image: chickDrinker,
      features: ["Cone Height: 235mm", "Bottom Plate: 240mm", "2 Way Stand"],
      inStock: true,
      bestSeller: false
    },
    {
      id: 3,
      name: "Vaccinator Equipment",
      category: "Medical Equipment",
      description: "Professional-grade vaccination equipment for poultry farms with precision delivery mechanism.",
      specs: "Professional Grade",
      image: vaccinator,
      features: ["Precision Delivery", "Durable Construction", "Easy Operation"],
      inStock: true,
      bestSeller: true
    },
    {
      id: 4,
      name: "DJF(e)-1380 Butterfly Cone Fan",
      category: "Industrial Fans",
      description: "High-performance exhaust fan with BESS LAB certification for optimal poultry farm ventilation.",
      specs: "51,020 m³/h | 1380x1380x1300mm",
      image: babyChickDrinker,
      features: ["Krupp 430SS Blades", "Double-row French Bearings", "Mitsuboshi Belt"],
      inStock: true,
      bestSeller: true
    },
    {
      id: 5,
      name: "DJF-1380 Centrifugal Fan",
      category: "Industrial Fans",
      description: "Centrifugal exhaust fan with self-cleaning blades and anti-backflow design for superior performance.",
      specs: "44,000 m³/h | 1380x1380x450mm",
      image: chickDrinker,
      features: ["Self-cleaning SS Blades", "Anti-backflow Design", "Low Noise ≤70dB"],
      inStock: true,
      bestSeller: false
    },
    {
      id: 6,
      name: "Innopan Feeding System",
      category: "Feeding Systems",
      description: "Innovative grill-less feeding system with patent-pending design for improved FCR results.",
      specs: "35-50 birds/pan | 400-1300gm capacity",
      image: vaccinator,
      features: ["Grill-less Design", "6 Feed Adjustments", "Better FCR Results"],
      inStock: true,
      bestSeller: true
    },
    {
      id: 7,
      name: "Automatic Nipple Drinker",
      category: "Drinking Systems",
      description: "Automatic drinking system with pressure regulation for consistent water supply and minimal maintenance.",
      specs: "50-100 birds per drinker",
      image: babyChickDrinker,
      features: ["Pressure Regulated", "Low Maintenance", "Hygienic System"],
      inStock: true,
      bestSeller: false
    },
    {
      id: 8,
      name: "Jumbo Drinker",
      category: "Drinking Systems",
      description: "Large capacity drinking system for bigger flocks with durable construction and easy cleaning.",
      specs: "70-100 birds | 5 Ltrs capacity",
      image: chickDrinker,
      features: ["Large Capacity", "Durable Design", "Easy Cleaning"],
      inStock: false,
      bestSeller: false
    },
    {
      id: 9,
      name: "Heavy Hammer Exhaust Fan",
      category: "Industrial Fans",
      description: "Heavy-duty exhaust fan with weather-resistant design and low power consumption for efficiency.",
      specs: "40,000 m³/h capacity",
      image: vaccinator,
      features: ["Heavy Duty Motor", "Weather Resistant", "Low Power Consumption"],
      inStock: true,
      bestSeller: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Professional 2025 Font Setup */}
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
        
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
      `}</style>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBackgroundImage}
            alt="Poultry Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/90" />
        </div>

        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/></svg>')`,
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <Factory className="w-3.5 h-3.5 text-red-500" />
              <span className="text-xs text-white font-body font-medium tracking-wider uppercase">
                Premium Poultry Equipment
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading text-white mb-6">
              Our <span className="text-red-500">Products</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-body leading-relaxed">
              Explore our complete range of premium poultry equipment certified by University of Illinois BESS LAB
            </p>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/70 font-body">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              <span className="text-white font-semibold">PRODUCTS</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
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

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <motion.div
              className="relative w-full md:w-96"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-red-500 focus:outline-none text-sm font-body transition-all"
              />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {categories.map((category, index) => (
                <CategoryButton
                  key={category.name}
                  category={category}
                  isActive={selectedCategory === category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-600 font-body">
              Showing <span className="font-semibold text-red-600">{filteredProducts.length}</span> products
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid with Stacked Card Animation */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCardStacked 
              key={product.id} 
              product={product} 
              index={index}
              navigate={navigate}
              cardsRevealed={cardsRevealed}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-heading text-gray-900 mb-2">No products found</h3>
            <p className="text-sm text-gray-600 font-body">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-base mb-8 text-white/90 max-w-xl mx-auto font-body">
              Our experts are here to help you find the perfect equipment for your poultry farm
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-sm px-8 py-5 rounded-full bg-white text-red-600 hover:bg-gray-100 shadow-xl font-body font-semibold"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Category Button
const CategoryButton = ({ category, isActive, onClick, index }) => {
  const Icon = category.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-semibold transition-all duration-300 ${
        isActive
          ? "bg-red-600 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4" />
      <span>{category.name}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full ${
        isActive ? "bg-white/20" : "bg-gray-200"
      }`}>
        {category.count}
      </span>
    </motion.button>
  );
};

// Stacked Card Animation Component
const ProductCardStacked = ({ product, index, navigate, cardsRevealed }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ 
        scale: 0.8,
        opacity: 0,
        z: -index * 10,
        y: index * -20
      }}
      animate={cardsRevealed ? {
        scale: 1,
        opacity: 1,
        z: 0,
        y: 0,
        transition: {
          delay: index * 0.15,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      } : {}}
    >
      <Card className="overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        <motion.div
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate(`/products/${product.id}`)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-56 bg-gray-50 overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-6"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {product.bestSeller && (
                <div className="bg-yellow-500 text-white px-3 py-1 rounded-md text-xs font-body font-bold shadow-lg">
                  Best Seller
                </div>
              )}
              {!product.inStock && (
                <div className="bg-gray-600 text-white px-3 py-1 rounded-md text-xs font-body font-bold shadow-lg">
                  Out of Stock
                </div>
              )}
            </div>

            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <CardContent className="p-6 flex-1">
            <div className="mb-3">
              <span className="text-xs font-body font-semibold text-red-600 uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <h3 className="text-xl font-heading text-gray-900 mb-3 line-clamp-2">
              {product.name}
            </h3>

            <p className="text-sm text-gray-600 font-body mb-4 line-clamp-3">
              {product.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 font-body mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              <span>{product.specs}</span>
            </div>
          </CardContent>
        </motion.div>

        <div className="p-4 pt-0 border-t border-gray-100">
          <div className="flex gap-2">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="sm"
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-body font-semibold"
                disabled={!product.inStock}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${product.id}`);
                }}
              >
                {product.inStock ? "View Details" : "Out of Stock"}
              </Button>
            </motion.div>

            <motion.button
              className="px-4 py-2 border-2 border-gray-200 rounded-md hover:border-red-600 hover:bg-red-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Share2 className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Products;
