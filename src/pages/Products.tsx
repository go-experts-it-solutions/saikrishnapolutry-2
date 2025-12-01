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
  Share2,
  Search,
  ArrowRight,
  Egg,
  Star,
  Leaf,
  Feather,
  Flame
} from "lucide-react";
import babyChickDrinker from "@/assets/Baby Chick Drinker.png";
import henproductspage from "../assets/slider.png";

const PRODUCTS_API = "https://saikrishnapolutary-backend.onrender.com/api/products/getallproducts";
const CATEGORIES_API = "https://saikrishnapolutary-backend.onrender.com/api/categories/getallcategories";

const heroBackgroundImage = henproductspage;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const [categories, setCategories] = useState([]);
  
  const navigate = useNavigate();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(CATEGORIES_API);
        const data = await res.json();
        if (Array.isArray(data)) {
          setCategories(data);
          if (data.length > 0) setSelectedCategory(data[0]);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedCategory) return;
      setIsLoading(true);
      try {
        const url = selectedCategory._id 
          ? `https://saikrishnapolutary-backend.onrender.com/api/products/category/${selectedCategory._id}`
          : PRODUCTS_API;
        const res = await fetch(url);
        const data = await res.json();
        const productList = Array.isArray(data) ? data : (data.products || []);
        setProducts(productList);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [selectedCategory]);

  // Animate cards
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setCardsRevealed(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Filter by search query
  const filteredProducts = products.filter((product) => 
    product.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .font-heading { font-family: 'Poppins', sans-serif; font-weight: 700; line-height: 1.2; }
        .font-body { font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.6; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navbar />

      {/* MAIN CONTENT SECTION */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT SIDEBAR / MOBILE TABS */}
            <div className="lg:w-80 flex-shrink-0">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-heading font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <Factory className="w-5 h-5 text-red-600" />
                  Product Categories
                </h2>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <CategoryButton
                      key={category._id}
                      category={category}
                      isActive={selectedCategory?._id === category._id}
                      onClick={() => setSelectedCategory(category)}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Horizontal Tabs */}
              <div className="lg:hidden bg-white rounded-2xl shadow-md p-3 mb-6 overflow-x-auto no-scrollbar">
                <div className="flex gap-3">
                  {categories.map((category) => (
                    <CategoryButton
                      key={category._id}
                      category={category}
                      isActive={selectedCategory?._id === category._id}
                      onClick={() => setSelectedCategory(category)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Products Grid */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-2xl shadow-md p-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none text-sm font-body transition-all"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-body text-sm whitespace-nowrap">
                    <span className="font-semibold text-red-600">{filteredProducts.length}</span> Products
                  </span>
                </div>
              </div>

              {/* Category Title */}
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h2 className="text-3xl font-heading font-bold text-gray-900">
                    {selectedCategory.name}
                  </h2>
                  <p className="text-gray-600 font-body mt-1">
                    Browse our selection of {selectedCategory.name.toLowerCase()}
                  </p>
                </motion.div>
              )}

              {/* Products Grid */}
              {isLoading ? (
                <div className="text-center py-20">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-red-600 border-r-4 border-r-transparent" />
                  <p className="mt-6 text-gray-500 font-body">Loading products...</p>
                </div>
              ) : (
                <>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard
                        key={product._id}
                        product={product}
                        index={index}
                        navigate={navigate}
                        cardsRevealed={cardsRevealed}
                      />
                    ))} 
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                      <Factory className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-heading text-gray-900 mb-2">
                        No products found
                      </h3>
                      <p className="text-sm text-gray-600 font-body">
                        Try adjusting your search criteria
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white">
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
                className="text-sm px-8 py-6 rounded-full bg-white text-red-600 hover:bg-gray-100 shadow-xl font-body font-semibold"
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

// Category Button Component
const CategoryButton = ({ category, isActive, onClick }) => {
  const Icon = getCategoryIcon(category.name);

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-body transition-all whitespace-nowrap w-64
        ${isActive
          ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105"
          : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
      }`}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-red-600"}`} />
      <span className={`${isActive ? "text-white" : "text-gray-800"} font-semibold`}>
        {category.name}
      </span>
    </motion.button>
  );
};

// Get category icon helper
const getCategoryIcon = (categoryName) => {
  const name = typeof categoryName === "string" ? categoryName.toLowerCase() : "";
  if (!name) return Factory;
  if (name.includes("drink")) return Droplets;
  if (name.includes("feed")) return Zap;
  if (name.includes("cool") || name.includes("fan")) return Wind;
  if (name.includes("incub") || name.includes("hatch")) return Egg;
  if (name.includes("brood")) return Flame;
  if (name.includes("nest")) return Feather;
  if (name.includes("disinfect")) return Leaf;
  if (name.includes("meat") || name.includes("process")) return Star;
  return Factory;
};

// Product Card Component
const ProductCard = ({ product, index, navigate, cardsRevealed }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleShareClick = async (e) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/products/${product._id}`;
    const shareText = `Check out this product: ${product.name}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text: shareText, url: shareUrl });
      } catch (err) {
        console.error("Share cancelled or failed", err);
      }
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Product link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link", err);
      }
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={
        cardsRevealed
          ? {
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }
            }
          : {}
      }
    >
      <Card
        className="overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white rounded-2xl cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`/products/${product._id}`)}
      >
        {/* Image */}
        <div className="relative h-56 bg-gray-50 overflow-hidden">
          <motion.img
            src={product.files?.[0]?.url || babyChickDrinker}
            alt={product.name}
            className="w-full h-full object-contain p-6"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          />
        </div>

        {/* Content */}
        <CardContent className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl text-sm font-body font-semibold shadow-md"
                onClick={(e) => { e.stopPropagation(); navigate(`/products/${product._id}`); }}
              >
                View Details
              </Button>
            </motion.div>

            <motion.button
              className="px-3 py-2 border-2 border-gray-200 rounded-xl hover:border-red-600 hover:bg-red-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShareClick}
            >
              <Share2 className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Products;
