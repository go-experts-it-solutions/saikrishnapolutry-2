import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Wind,
  Droplets,
  Zap,
  Factory,
  ChevronDown,
  Share2,
  Search,
  ArrowRight
} from "lucide-react";
import babyChickDrinker from "@/assets/Baby Chick Drinker.png";
import henproductspage from "../assets/henproductspage.jpg";

const API_URL = "https://saikrishnapolutary-backend.onrender.com/api/products/getallproducts";

const heroBackgroundImage = henproductspage;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const productList = data.products || data;
        setProducts(productList);

        // Generate unique categories from API
        const uniqueCategories = [
          {
            name: "All",
            icon: Factory,
            count: productList.length
          },
          ...Array.from(new Set(productList.map((p) => p.category))).map(
            (cat) => ({
              name: cat,
              icon:
                cat.includes("Fan")
                  ? Wind
                  : cat.includes("Drink")
                  ? Droplets
                  : cat.includes("Feed")
                  ? Zap
                  : Factory,
              count: productList.filter((p) => p.category === cat).length
            })
          )
        ];

        setCategories(uniqueCategories);
      } catch (err) {}
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  // Animate cards
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setCardsRevealed(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .font-heading { font-family: 'Poppins', sans-serif; font-weight: 700; line-height: 1.2; }
        .font-body { font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.6; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 py-30 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Poultry Products"
            className="w-full h-50 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/90" />
        </div>

        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/></svg>')`
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
              <span className="text-xs text-white font-body uppercase tracking-wider">
                Premium Poultry Equipment
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading text-white mb-6">
              Our <span className="text-red-500">Products</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-body">
              Explore our complete range of premium poultry equipment certified by University of Illinois BESS LAB
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-16 container mx-auto px-4 flex flex-col md:flex-row md:gap-8">
        
        {/* SIDEBAR */}
        <div className="hidden md:block w-72 min-w-[200px] bg-white border-r border-gray-200 mr-8 rounded-xl shadow-md">
          <div className="py-8 px-6">
            <h2 className="text-lg font-heading font-semibold mb-6 text-gray-900">
              Product Categories
            </h2>

            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <CategorySidebarButton
                  key={category.name}
                  category={category}
                  isActive={selectedCategory === category.name}
                  onClick={() => setSelectedCategory(category.name)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE CATEGORY TABS */}
        <div className="md:hidden mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-body text-sm font-semibold transition-all ${
                  selectedCategory === category.name
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-red-100"
                }`}
              >
                {category.name}
                <span className="ml-2 bg-white rounded-full px-2 text-xs font-semibold text-red-600">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="flex-1">
          <div className="mb-8 flex items-center justify-between">
            <div className="w-full max-w-lg relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-red-500 focus:outline-none text-sm font-body transition-all"
              />
            </div>

            <span className="text-gray-600 font-body text-sm ml-4">
              Showing{" "}
              <span className="font-semibold text-red-600">
                {filteredProducts.length}
              </span>{" "}
              products
            </span>
          </div>

          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-red-400" />
              <p className="mt-6 text-gray-500">Loading products...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCardStacked
                    key={product._id}
                    product={product}
                    index={index}
                    navigate={navigate}
                    cardsRevealed={cardsRevealed}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-heading text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-sm text-gray-600 font-body">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
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

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
      className="text-sm px-8 py-5 rounded-full bg-white text-red-600 hover:bg-gray-100 shadow-xl font-body font-semibold"
      onClick={() => navigate("/contact")}
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

// CATEGORY BUTTON
const CategorySidebarButton = ({ category, isActive, onClick }) => {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-body transition-all ${
        isActive
          ? "bg-red-100 text-red-700 font-bold shadow border border-red-200"
          : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-100"
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? "text-red-500" : "text-gray-400"}`} />

      <span>{category.name}</span>

      <span
        className={`ml-auto text-xs px-2 py-0.5 rounded ${
          isActive ? "bg-red-200" : "bg-gray-200"
        }`}
      >
        {category.count}
      </span>
    </button>
  );
};

// PRODUCT CARD
const ProductCardStacked = ({ product, index, navigate, cardsRevealed }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.8, opacity: 0, z: -index * 10, y: index * -20 }}
      animate={
        cardsRevealed
          ? {
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
            }
          : {}
      }
    >
      <Card className="overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        <motion.div
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate(`/products/${product._id}`)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-56 bg-gray-50 overflow-hidden">
            <motion.img
              src={
                product.files && product.files[0]
                  ? product.files[0].url
                  : babyChickDrinker
              }
              alt={product.name}
              className="w-full h-full object-contain p-6"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            />

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
              <span>{product.specifications}</span>
            </div>
          </CardContent>
        </motion.div>

        <div className="p-4 pt-0 border-t border-gray-100">
          <div className="flex gap-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
              <Button
                size="sm"
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-body font-semibold"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${product._id}`);
                }}
              >
                View Details
              </Button>
            </motion.div>

            <motion.button
              className="px-4 py-2 border-2 border-gray-200 rounded-md hover:border-red-600 hover:bg-red-50 transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => e.stopPropagation()}
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
