import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Download, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  // State for categories and products
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const CATEGORIES_API = "https://saikrishnapolutary-backend.onrender.com/api/categories/getallcategories";
  const PRODUCTS_BY_CATEGORY_API = "https://saikrishnapolutary-backend.onrender.com/api/products/category/";

  // Fetch all categories
  useEffect(() => {
    fetch(CATEGORIES_API)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        // Set first category as default selected
        if (data && data.length > 0) {
          setSelectedCategory(data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setCategories([]);
      });
  }, []);

  // Fetch products when category changes
  useEffect(() => {
    if (selectedCategory && productsDropdownOpen) {
      setLoadingProducts(true);
      fetch(`${PRODUCTS_BY_CATEGORY_API}${selectedCategory._id}`)
        .then((res) => res.json())
        .then((data) => {
          setCategoryProducts(Array.isArray(data) ? data : []);
          setLoadingProducts(false);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          setCategoryProducts([]);
          setLoadingProducts(false);
        });
    }
  }, [selectedCategory, productsDropdownOpen]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    try {
      const response = await fetch("https://saikrishnapolutary-backend.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (!response.ok) {
        setLoginError(result.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", result.token);
      setShowLogin(false);
      navigate("/admin");
    } catch (error) {
      setLoginError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Our Products", hasDropdown: true },
    { path: "/ourspeciality", label: "FAQ" },
    { path: "/ourprojects", label: "Our Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Professional 2025 Typography */}
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

        /* Scrolling line animation */
        @keyframes scrollLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scroll-line {
          animation: scrollLine 3s ease-in-out infinite;
        }

        /* Hover effect for product items */
        .product-item {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .product-item:hover {
          transform: translateY(-8px) scale(1.05);
        }

        .product-item:hover .product-image-container {
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.3);
          border-color: #DC2626;
        }

        .product-item:hover .product-name {
          color: #DC2626;
        }

        /* Category item hover effect */
        .category-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-item:hover {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          transform: translateX(5px);
        }

        .category-item.active {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          transform: translateX(5px);
        }

        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }
      `}</style>

      {/* Top Bar */}
      <motion.div 
        className="bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden hidden md:block"
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="container mx-auto px-4 relative">
            <div className="flex items-center justify-between text-xs font-body">
              {/* LEFT SIDE — CALL + EMAIL */}
              <div className="flex items-center gap-6">
                <motion.a
                  href="tel:+919440406200"
                  className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 94404 06200</span>
                </motion.a>

                <motion.a
                  href="mailto:info@saikrishnapoultry.com"
                  className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                >
                  <Mail className="w-3 h-3" />
                  <span>info@saikrishnapoultry.com</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-xl border-b-2 border-red-100"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            
            {/* Premium Logo */}
    <Link to="/" className="flex items-center gap-3 group">
  <div className="relative h-14 w-auto flex items-center transition-transform duration-300 group-hover:scale-105">
    
    {/* Logo Image */}
    <img
      src="/SKPELOGO.png"
      alt="SKPE - Sai Krishna Poultry Equipments"
      className="h-14 w-auto object-contain drop-shadow-lg relative z-10"
    />

    {/* Remove all shimmer/gradient effects */}

    {/* Red dot */}
    {/* <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-md" /> */}
  </div>
</Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setProductsDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setProductsDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 group flex items-center gap-1"
                  >
                    <span className={`text-sm font-body font-medium transition-colors duration-300 ${
                      isActive(link.path) ? "text-red-600" : "text-gray-700 group-hover:text-red-600"
                    }`}>
                      {link.label}
                    </span>

                    {link.hasDropdown && (
                      <motion.div
                        animate={{ rotate: productsDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-red-600" />
                      </motion.div>
                    )}

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: isActive(link.path) ? 1 : 0, opacity: isActive(link.path) ? 1 : 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-red-50 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>

                  {/* Enhanced Dropdown with Categories and Products */}
             {/* Enhanced Dropdown with Categories and Products */}
<AnimatePresence>
  {link.hasDropdown && productsDropdownOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 right-0 top-[88px] bg-white shadow-2xl border-t-4 border-red-600 rounded-b-2xl z-50 mx-auto"
      style={{ 
        width: "1200px", 
        maxWidth: "95vw"
      }}
      onMouseEnter={() => setProductsDropdownOpen(true)}
      onMouseLeave={() => setProductsDropdownOpen(false)}
    >
      <div className="flex h-[600px]">
        {/* Left Sidebar - Categories */}
        <div className="w-80 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200 rounded-bl-2xl relative overflow-hidden">
          {/* Animated scrolling line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-scroll-line"></div>
          
          <div className="p-6 relative z-10">
            <div className="flex flex-col items-center mb-6">
              <motion.img
                src="/SKPELOGO.png"
                alt="SKPE Logo"
                className="w-20 h-auto object-contain mb-3"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              
              <h2 className="text-xl font-heading text-gray-900 font-bold text-center mb-1">
                Our Products
              </h2>
              <p className="text-xs text-gray-600 text-center leading-relaxed mb-4">
                Select a category to view products
              </p>
            </div>

            {/* Categories List */}
            <div className="space-y-2 mb-6 max-h-[380px] overflow-y-auto custom-scrollbar pr-2">
              {categories.map((category) => (
                <div
                  key={category._id}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-item p-3 rounded-lg ${
                    selectedCategory?._id === category._id ? 'active' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body font-semibold">
                      {category.name}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      selectedCategory?._id === category._id ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl px-6 py-4 text-sm font-body font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              onClick={() => {
                setProductsDropdownOpen(false);
                navigate("/products");
              }}
            >
              View All Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Product Grid Section */}
        <div className="flex-1 p-8 bg-white rounded-br-2xl overflow-hidden">
          {loadingProducts ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p className="text-gray-500 font-body">Loading products...</p>
              </div>
            </div>
          ) : categoryProducts.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-500 font-body text-lg mb-2">No products found</p>
                <p className="text-gray-400 font-body text-sm">
                  {selectedCategory?.name || 'Select a category to view products'}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-heading text-gray-900 font-bold mb-1">
                  {selectedCategory?.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} available
                </p>
              </div>

              <div className="grid grid-cols-5 gap-6 max-h-[450px] overflow-y-auto custom-scrollbar pr-2">
                {categoryProducts.map((product, idx) => (
                  <Link
                    key={product._id}
                    to={`/products/${product._id}`}
                    onClick={() => setProductsDropdownOpen(false)}
                    className="product-item flex flex-col items-center group cursor-pointer"
                  >
                    <div className="product-image-container w-28 h-28 rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center mb-3 overflow-hidden shadow-md">
                      <img
                        src={product.files?.[0]?.url || "/favicon.png"}
                        alt={product.name}
                        className="w-20 h-20 object-contain"
                        onError={(e) => {
                          e.target.src = "/favicon.png";
                        }}
                      />
                    </div>
                    <h3 className="product-name text-xs font-body font-semibold text-gray-700 text-center leading-tight transition-colors px-2">
                      {product.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                className="text-sm font-body font-semibold bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/contact")}
                className="text-sm font-body font-semibold bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-red-600"
              >
                Get Quote
              </Button>

              <Button
                asChild
                className="relative text-sm font-body font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <a href="/SKPERed.pdf" download>
                  <Download className="w-3.5 h-3.5 mr-1.5 relative z-10" />
                  <span className="relative z-10">Catalogue</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <X size={24} className="text-gray-900" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -180, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Menu size={24} className="text-gray-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%", scale: 0.9 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: "100%", scale: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-b from-white to-gray-50 z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <img src="/SKPELOGO.png" alt="SKPE Logo" className="h-10 w-auto object-contain" />
                  </div>
                  <motion.button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-gray-200 transition-colors" whileTap={{ scale: 0.9, rotate: 90 }}>
                    <X size={24} className="text-gray-900" />
                  </motion.button>
                </div>

                <div className="space-y-2 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.div key={link.path} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                          isActive(link.path) ? "bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200" : "hover:bg-gray-100 border-2 border-transparent"
                        }`}
                      >
                        <span className={`text-base font-body font-semibold ${isActive(link.path) ? "text-red-600" : "text-gray-700"}`}>
                          {link.label}
                        </span>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive(link.path) ? "text-red-600 translate-x-1" : "text-gray-400 group-hover:translate-x-1 group-hover:text-red-600"}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="space-y-3 mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
               <Button
  variant="outline"
  className="w-full text-sm font-body font-semibold border-2 border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 rounded-full py-6 transition-all"
  onClick={() => {
    setIsOpen(false);  // close menu first
    navigate("/contact"); // then navigate
  }}
>
  Get Quote
</Button>

                  <Button
                    className="w-full text-sm font-body font-semibold 
                             bg-gradient-to-r from-red-600 to-red-700 
                             hover:from-red-700 hover:to-red-800 
                             text-white rounded-full py-6 shadow-lg 
                             inline-flex items-center justify-center gap-2"
                    asChild
                  >
                    <a href="/SKPERed.pdf" download>
                      <Download className="w-4 h-4" />
                      <span>Catalogue</span>
                    </a>
                  </Button>

                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full py-6 font-body font-semibold mt-4"
                    onClick={() => {
                      setShowLogin(true);
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Button>
                </motion.div>

                <motion.div className="p-5 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <p className="text-xs font-body font-semibold text-gray-500 uppercase tracking-wider mb-3">Contact Us</p>
                  <div className="space-y-3">
                    <a href="tel:+919440406200" className="flex items-center gap-3 text-sm font-body text-gray-700 hover:text-red-600 transition-colors">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-red-600" />
                      </div>
                      <span>+91 94404 06200</span>
                    </a>
                    <a href="mailto:info@saikrishnapoultry.com" className="flex items-center gap-3 text-sm font-body text-gray-700 hover:text-red-600 transition-colors">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-red-600" />
                      </div>
                      <span>info@saikrishnapoultry.com</span>
                    </a>
                  </div>
                </motion.div>

             
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]" 
               onClick={() => setShowLogin(false)}>
            <div 
              className="bg-white rounded-xl shadow-2xl w-96 p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
                onClick={() => setShowLogin(false)}
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold text-center mb-5 font-['Poppins']">
                Admin Login
              </h2>

              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder="Username"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                />

                <input 
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />

                {loginError && (
                  <p className="text-red-600 text-sm text-center">{loginError}</p>
                )}

                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full py-6 font-body font-semibold mb-4"
                  onClick={(e) => handleLogin(e)}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
