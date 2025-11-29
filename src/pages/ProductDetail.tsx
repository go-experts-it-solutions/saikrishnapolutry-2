import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Check,
  Package,
  Truck,
  Award,
  ChevronRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import babyChickDrinker from "@/assets/Baby Chick Drinker.png";
import chickDrinker from "@/assets/Chick Drinker.png";

// Fallback PDF location
const defaultBrochureUrl = "/SKPERed.pdf";

// Parse "specifications" string (tab/newline separated) to {label,value}[]
const parseSpecs = (specString) => {
  if (!specString) return [];
  return specString.split(/\r?\n/).map(line => {
    const [label, value] = line.split(/\t(.+)?/);
    if (!label || !value) return null;
    return { label: label.trim(), value: value.trim() };
  }).filter(Boolean);
};

// Static benefits
const staticBenefits = [
  {
    icon: Package,
    title: "Products Range",
    description: "We offer a wide variety of fresh poultry and eggs, raised with care for every customer.",
  },
  {
    icon: Award,
    title: "Quality Matters",
    description: "Every product reflects our promise of freshness, family tradition, and animal respect.",
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction",
    description: "We build trust through honest service and fresh poultry that exceeds expectations.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy farm-fresh deliveries right to your door, fast, reliable, and completely free.",
  },
];

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=600&fit=crop";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product from backend on mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://saikrishnapolutary-backend.onrender.com/api/products/${id}`
        );
        const data = await res.json();
        setProduct(data.product || data);
      } catch (err) {
        setProduct(null);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  // Fallback image if files missing
  const image =
    product && product.files && product.files[0]
      ? product.files[0].url
      : babyChickDrinker;

  // Parse technical specifications
  const techSpecs = parseSpecs(product && product.specifications);

  // Dynamic brochure download logic
  let pdfUrl = defaultBrochureUrl;
  if (product && product.pdfs && product.pdfs.length > 0) {
    // If your API returns pdfs array
    pdfUrl = product.pdfs[0].url;
  } else if (product && product.files && Array.isArray(product.files)) {
    // If your API returns pdf under files array
    const pdfFile = product.files.find(f =>
      (f.type && f.type.toLowerCase().includes('pdf')) ||
      (f.url && f.url.toLowerCase().endsWith('.pdf'))
    );
    if (pdfFile) pdfUrl = pdfFile.url;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <span className="animate-spin inline-block w-12 h-12 border-t-4 border-green-400 rounded-full" />
          <p className="mt-4 text-gray-500">Loading product...</p>
        </div>
        <Footer />
      </div>
    );
  }

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}
        .font-heading {font-family:'Poppins',sans-serif;font-weight:700;line-height:1.2;}
        .font-body {font-family:'Inter',sans-serif;font-weight:400;line-height:1.6;}
        .font-handwriting {font-family:'Poppins',sans-serif;font-weight:500;font-style:italic;}
        .font-medium{font-weight:500;}.font-semibold{font-weight:600;}.font-bold{font-weight:700;}
      `}</style>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Poultry Farm Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-green-900/90" />
        </div>
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
              {product.name || "Product Name"}
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm font-body text-white/80">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">PRODUCTS</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold uppercase tracking-wide">
                {product.name || "Product Name"}
              </span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Product Main Info */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-green-600 font-handwriting text-2xl md:text-3xl mb-4">
                  {product.category || "Category"}
                </p>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 leading-tight">
                {product.name || "Product Name"}
              </h2>
          <p className="text-base text-gray-600 font-body leading-relaxed max-w-2xl mx-auto">
                {product.description || "No description yet."}
              </p>
        <div className="space-y-4">
  {[`Category: ${product.category || "N/A"}`].map((feature, index) => (
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
            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative z-10">
                <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={image}
                    alt={product.name || "Product"}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative lines */}
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
              {techSpecs.length === 0 ? (
                <div className="text-gray-400 col-span-2 text-center">No technical specifications available.</div>
              ) : (
                techSpecs.map((spec, index) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staticBenefits.map((benefit, index) => {
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

      {/* Technical Specifications */}

      {/* CTA Section */}
    
      <Footer />
    </div>
  );
};

export default ProductDetail;
