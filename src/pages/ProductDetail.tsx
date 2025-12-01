import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Award, CheckCircle2 } from "lucide-react";
import babyChickDrinker from "@/assets/Baby Chick Drinker.png";

const defaultBrochureUrl = "/SKPERed.pdf";

const parseSpecs = (specString) => {
  if (!specString) return [];
  return specString
    .split(/\r?\n/)
    .map((line) => {
      const [label, value] = line.split(/\t(.+)?/);
      if (!label || !value) return null;
      return { label: label.trim(), value: value.trim() };
    })
    .filter(Boolean);
};

const staticBenefits = [
  {
    icon: Package,
    title: "Products Range",
    description: "We offer a wide variety of fresh poultry and eggs, raised with care."
  },
  {
    icon: Award,
    title: "Quality Matters",
    description: "Every product reflects our promise of freshness and trust."
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction",
    description: "We deliver honest service and reliable quality."
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch single product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://saikrishnapolutary-backend.onrender.com/api/products/${id}`
        );

        const data = await res.json();
        const prod = data.product || data;

        setProduct(prod);

        // FIX: Your category is an array of IDs, not objects
        if (prod?.category?.length > 0) {
          const categoryId = prod.category[0];
          fetchCategoryProducts(categoryId, prod._id);
        }
      } catch (err) {
        setProduct(null);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  // Fetch category products
  const fetchCategoryProducts = async (categoryId, currentProductId) => {
    try {
      const res = await fetch(
        `https://saikrishnapolutary-backend.onrender.com/api/products/category/${categoryId}`
      );

      const data = await res.json();
      const list = data || [];

      // Remove the current product
      const filtered = list.filter((p) => p._id !== currentProductId);
      setRelatedProducts(filtered);
    } catch (err) {
      console.log("Failed to fetch category products");
    }
  };

  const image = product?.files?.[0]?.url || babyChickDrinker;
  const techSpecs = parseSpecs(product?.specifications);

  let pdfUrl = defaultBrochureUrl;
  if (product?.pdfs?.length > 0) pdfUrl = product.pdfs[0].url;

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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>

      <Navbar />

      {/* MAIN PRODUCT SECTION */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-heading text-gray-900 mb-4">{product.name}</h2>
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                {product.description || "No description available."}
              </p>

              <Button
                onClick={() => navigate("/products")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-full font-semibold"
              >
                Back to Products
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-xl border-8 border-white">
                <img src={image} className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      {techSpecs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading text-center mb-6">Technical Specifications</h2>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {techSpecs.map((spec, i) => (
                <div key={i} className="p-4 bg-white rounded-lg shadow">
                  <span className="font-bold">{spec.label}</span>
                  <span className="float-right text-gray-700">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading mb-6 text-center">
              Related Products
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {relatedProducts.map((item) => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/products/${item._id}`)}
                  className="min-w-[250px] bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-xl transition"
                >
                  <img
                    src={item?.files?.[0]?.url || babyChickDrinker}
                    className="w-full h-40 object-cover rounded-lg"
                    alt={item.name}
                  />

                  <h3 className="mt-4 font-semibold text-gray-800">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {staticBenefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Card key={i} className="shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="font-heading text-lg">{b.title}</h3>
                  <p className="text-gray-600 font-body">{b.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
