import { useState } from "react";
import { Upload, Loader2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function AddBrochure() {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    pdf: null,
  });

  // Handle title input change
  const handleTitleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please upload a PDF file");
        return;
      }
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        toast.error("File size should be less than 50MB");
        return;
      }
      setFormData((prev) => ({
        ...prev,
        pdf: file,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    if (!formData.pdf) {
      toast.error("Please select a PDF file");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Authentication required. Please login.");
      navigate("/login");
      return;
    }

    setUploading(true);
    try {
      const uploadData = new FormData();
      uploadData.append("title", formData.title);
      uploadData.append("pdf", formData.pdf);

      const response = await fetch(
        "https://saikrishnapolutary-backend.onrender.com/api/pdf/add",


        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          body: uploadData,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Brochure uploaded successfully");
        setSuccess(true);
        setFormData({ title: "", pdf: null });
        
        // Redirect after 2 seconds
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      } else if (response.status === 401) {
        toast.error("Session expired. Please login again.");
        navigate("/login");
      } else {
        toast.error(result.message || "Failed to upload brochure");
      }
    } catch (error) {
      console.error("Error uploading brochure:", error);
      toast.error("Failed to upload brochure");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white font-['Poppins']">
            Add New Brochure
          </h1>
          <p className="text-white/90 mt-2 font-['Poppins']">
            Upload a PDF with title
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 flex-1 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              {success ? (
                <div className="text-center space-y-4">
                  <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900 font-['Poppins']">
                    Success!
                  </h2>
                  <p className="text-gray-600 font-['Poppins']">
                    Your brochure has been uploaded successfully.
                  </p>
                  <p className="text-sm text-gray-500 font-['Poppins']">
                    Redirecting to catalogues...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="text-sm font-semibold text-gray-900 font-['Poppins']"
                    >
                      Brochure Title <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Enter brochure title"
                      value={formData.title}
                      onChange={handleTitleChange}
                      className="font-['Poppins'] text-sm"
                      disabled={uploading}
                    />
                    <p className="text-xs text-gray-500 font-['Poppins']">
                      Example: "Product Catalogue 2025", "Service Manual", etc.
                    </p>
                  </div>

                  {/* PDF File Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="pdf"
                      className="text-sm font-semibold text-gray-900 font-['Poppins']"
                    >
                      PDF File <span className="text-red-600">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="pdf"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="font-['Poppins'] text-sm cursor-pointer"
                        disabled={uploading}
                      />
                    </div>
                    <p className="text-xs text-gray-500 font-['Poppins']">
                      Maximum file size: 50MB. PDF format only.
                    </p>
                    {formData.pdf && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-sm text-green-700 font-semibold font-['Poppins']">
                          ✓ Selected: {formData.pdf.name}
                        </p>
                        <p className="text-xs text-green-600 font-['Poppins']">
                          Size: {(formData.pdf.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={uploading}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-['Poppins'] font-semibold py-2 inline-flex items-center justify-center gap-2"
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Upload Brochure
                      </>
                    )}
                  </Button>

                  {/* Cancel Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/allcatilogues")}
                    disabled={uploading}
                    className="w-full font-['Poppins']"
                  >
                    Cancel
                  </Button>
                </form>
              )}
            </div>

            {/* Info Box */}
            {!success && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900 font-['Poppins']">
                  <span className="font-semibold">💡 Tip:</span> Make sure your PDF file is properly formatted and not corrupted before uploading.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AddBrochure;
