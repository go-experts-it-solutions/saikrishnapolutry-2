import { Link, useLocation ,useNavigate} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Download, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);



    const [showLogin, setShowLogin] = useState(false); // 👈 LOGIN POPUP
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();


  


  const DYNAMIC_API = "https://saikrishnapolutary-backend.onrender.com/api/products/getallproducts";

// Add at top
const [productCategories, setProductCategories] = useState([]);

useEffect(() => {
  fetch(DYNAMIC_API)
    .then((res) => res.json())
    .then((data) => {
      const products = data.products || data;
      const seen = {};
      const categories = products
        .map((p) => p.category)
        .filter(cat => cat && !seen[cat] && (seen[cat] = true));
      setProductCategories(
        categories.map(category => ({
          name: category,
          path: "/products/" +
            category.toLowerCase().replace(/[^a-z0-9]/gi, "-").replace(/-+/g, "-").replace(/(^-|-$)/g, "")
        }))
      );
    })
    .catch(() => setProductCategories([]));
}, []);
  

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

      // Save token
      localStorage.setItem("token", result.token);

      setShowLogin(false);      // close popup
      navigate("/admin");       // redirect 👈

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
    { path: "/ourspeciality", label: "Our Speciality" },
    { path: "/ourprojects", label: "Our Projects" },
    { path: "/contact", label: "Contact" },
  ];



  const isActive = (path) => location.pathname === path;

  // Animation variants
  const topBarVariants = {
    initial: { scaleX: 0, opacity: 0, height: 0 },
    animate: { 
      scaleX: 1, 
      opacity: 1, 
      height: "auto",
      transition: {
        scaleX: { duration: 0.6, ease: "easeOut" },
        opacity: { duration: 0.4, delay: 0.2 },
        height: { duration: 0.4, delay: 0.2 }
      }
    }
  };

  const navBarVariants = {
    initial: { scale: 0.7, opacity: 0, y: -50 },
    animate: { 
      scale: [0.7, 1.15, 0.95, 1.05, 1],
      opacity: 1,
      y: 0,
      transition: {
        scale: {
          duration: 1.2,
          ease: [0.34, 1.56, 0.64, 1],
          times: [0, 0.3, 0.6, 0.8, 1]
        },
        opacity: { duration: 0.4, delay: 0.3 },
        y: { duration: 0.6, delay: 0.3, ease: "easeOut" }
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: {
      scale: [0, 1.3, 0.9, 1.1, 1],
      rotate: [-180, 20, -10, 5, 0],
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.6
      }
    }
  };

  const linkVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: [0, 1.3, 1],
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.9 + (i * 0.1),
        ease: [0.34, 1.56, 0.64, 1]
      }
    })
  };

  const buttonVariants = {
    initial: { scale: 0, opacity: 0, rotate: -90 },
    animate: (i) => ({
      scale: [0, 1.2, 1],
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 1.3 + (i * 0.15),
        ease: [0.34, 1.56, 0.64, 1]
      }
    })
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

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
      `}</style>



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

        {/* RIGHT SIDE — LOGIN + CERTIFICATION */}
        <div className="flex items-center gap-4">

          <Button 
            className="text-sm font-body font-semibold bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md transition-all"
            onClick={() => setShowLogin(true)}
          >
            Login
          </Button>

          <motion.div 
            className="font-body font-medium tracking-wide whitespace-nowrap"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: [0, 1, 1] }}
            transition={{
              x: { delay: 1, duration: 0.4 },
              opacity: { delay: 1, duration: 0.4 },
            }}
          >
            Certified by University of Illinois BESS LAB
          </motion.div>

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
        // variants={navBarVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            
            {/* Premium Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative"
                // variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="relative h-14 w-auto flex items-center">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-lg blur-md"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.img
                    src="/SKPELOGO.png"
                    alt="SKPE - Sai Krishna Poultry Equipments"
                    className="h-14 w-auto object-contain relative z-10 drop-shadow-lg"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))" }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hasAnimated ? "-100%" : "200%" }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    whileHover={{ x: "200%" }}
                  />
                </div>

                <motion.div
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-md"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ scale: { delay: 1.4, duration: 0.4 }, opacity: { delay: 1.4, duration: 0.4 } }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation with Left Margin Dropdown */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  custom={index}
                  // variants={linkVariants}
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

                  {/* Dropdown with Left Margin */}
                  <AnimatePresence>
                    {link.hasDropdown && productsDropdownOpen && (
                   <motion.div
  initial="hidden"
  animate="visible"
  exit="exit"
className="absolute left-0 bg-white/25 shadow-xl border-t border-gray-200"

    style={{
    top: "100%",      // attach exactly below the nav item
    left: "0px",      // no shifting, stays aligned to nav item
  }}
  onMouseEnter={() => setProductsDropdownOpen(true)}
  onMouseLeave={() => setProductsDropdownOpen(false)}
>
                        <div className="container mx-auto px-2">
                          <div className="flex rounded-lg overflow-hidden  ml-0 w-[900px] max-w-full">
                            {/* Left Sidebar Section */}
                            <div className="w-80 bg-gray-50 p-8 border-r border-gray-200">
 <div className="flex flex-col items-start mb-4">
  <img
    src="/favicon.png"
    alt="favicon"
  className="w-20 h-auto ml-12 object-contain"
  />

  <h2 className="text-2xl font-heading text-gray-900 font-bold mt-12">
    Our All Products
  </h2>
  <p>Pioneering Innovations in the Global Agriculture</p>
</div>


                              <Button 
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 text-sm font-body font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                             onClick={() => {
  setProductsDropdownOpen(false);
  navigate("/products");
}}
                                
                              >
                                Explore All Products
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Right Content Section - 2 Column Grid */}


<div className="flex-1 p-8 grid grid-cols-2 gap-x-8 gap-y-4">
  {productCategories && productCategories.length > 0 ? (
    productCategories.map((category, idx) => (
      <Link
        key={idx}
        to={
          // Generate slug route /products/drinking-equipments from name
          "/products"
        }
        onClick={() => setProductsDropdownOpen(false)}
        className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
      >
        <span className="text-base font-body text-gray-900 group-hover:text-red-600 transition-colors">
          {category.name}
        </span>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
      </Link>
    ))
  ) : (
    <div className="py-3 px-4 text-gray-400 col-span-2">No categories found</div>
  )}
</div>


                          
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

           
<div className="hidden lg:flex items-center gap-3">
  


  <Button 
    variant="outline"
    className="text-sm font-body font-semibold border-2 border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 rounded-full px-5 py-2 transition-all duration-300 hover:shadow-lg"
  >
    Get Quote
  </Button>

<Button asChild className="relative text-sm font-body font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
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
                  <Button variant="outline" className="w-full text-sm font-body font-semibold border-2 border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 rounded-full py-6 transition-all">
                    Get Quote
                  </Button>
                  <Button className="w-full text-sm font-body font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full py-6 shadow-lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Catalogue
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

                <motion.div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
                  <p className="text-xs font-body font-semibold text-white/90 leading-relaxed">
                    Certified by University of Illinois BESS LAB
                  </p>
                </motion.div>
              </div>
            </motion.div>



            
          </>
        )}
      </AnimatePresence>

      {/* ---------------- LOGIN MODAL ADDED ---------------- */}
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
          className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg p-3 font-semibold"
          onClick={handleLogin}
        >
          Login
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
