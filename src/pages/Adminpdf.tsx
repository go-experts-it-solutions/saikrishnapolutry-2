import { useEffect, useState } from "react";
import { Trash2, FileText, Loader2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

function ManageBrochures() {
  const [brochures, setBrochures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Fetch brochures from backend
  const fetchBrochures = async () => {
    try {
      const response = await fetch(
        "https://saikrishnapolutary-backend.onrender.com/api/pdf/getall"
      );
      const result = await response.json();

      if (result.success) {
        setBrochures(result.data);
      } else {
        setBrochures([]);
      }
    } catch (error) {
      console.error("Error fetching brochures:", error);
      toast.error("Failed to load brochures");
      setBrochures([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrochures();
  }, []);

  // Delete brochure
const handleDelete = async () => {
  if (!deleteId) return;

  // Get token from localStorage
  const token = localStorage.getItem("token");
  
  if (!token) {
    toast.error("Authentication required. Please login.");
    return;
  }

  setDeleting(true);
  try {
    const response = await fetch(
      `https://saikrishnapolutary-backend.onrender.com/api/pdf/delete/${deleteId}`,
      {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    if (response.ok && result.success) {
      toast.success("Brochure deleted successfully");
      setBrochures(brochures.filter((b) => b._id !== deleteId));
      setDeleteId(null);
    } else if (response.status === 401) {
      toast.error("Session expired. Please login again.");
      // Optional: Redirect to login
      // navigate("/login");
    } else {
      toast.error(result.message || "Failed to delete brochure");
    }
  } catch (error) {
    console.error("Error deleting brochure:", error);
    toast.error("Failed to delete brochure");
  } finally {
    setDeleting(false);
  }
};


  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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
            Manage Brochures
          </h1>
          <p className="text-white/90 mt-2 font-['Poppins']">
            View and delete PDF brochures
          </p>
        </div>
      </section>

      {/* Brochures List */}
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 font-['Poppins']">
                        Title
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 font-['Poppins']">
                        PDF URL
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 font-['Poppins']">
                        Created At
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 font-['Poppins']">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {brochures.map((brochure) => (
                      <tr
                        key={brochure._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-50 rounded flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-red-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-900 font-['Poppins']">
                              {brochure.title}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={brochure.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline font-['Poppins'] truncate block max-w-md"
                          >
                            {brochure.url}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 font-['Poppins']">
                            {formatDate(brochure.createdAt)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => setDeleteId(brochure._id)}
                            className="inline-flex items-center gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total Count */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <p className="text-sm text-gray-600 font-['Poppins']">
                  Total Brochures: <span className="font-semibold">{brochures.length}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-['Poppins']">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Confirm Delete
            </DialogTitle>
            <DialogDescription className="font-['Poppins']">
              Are you sure you want to delete this brochure? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteId(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex items-center gap-2"
            >
              {deleting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  Delete
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

export default ManageBrochures;
