import { useEffect, useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function DownloadBrochures() {
  const [brochures, setBrochures] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch brochures from backend
  useEffect(() => {
    const fetchBrochures = async () => {
      try {
        const response = await fetch("https://saikrishnapolutary-backend.onrender.com/api/pdf/getall");
        const result = await response.json();
        
        if (result.success) {
          setBrochures(result.data);
        } else {
          setBrochures([]);
        }
      } catch (error) {
        console.error("Error fetching brochures:", error);
        setBrochures([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBrochures();
  }, []);

  const handleDownload = (pdfUrl, title) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = title + ".pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Green Background */}


      {/* Brochures Grid */}
      <section className="py-12 flex-1 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
          ) : brochures.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-l text-gray-500 font-['Poppins']">
                No brochures available
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brochures.map((brochure) => (
                <button
                  key={brochure._id}
                  onClick={() => handleDownload(brochure.url, brochure.title)}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 text-left group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 font-['Poppins'] truncate">
                      {brochure.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Download className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DownloadBrochures;
