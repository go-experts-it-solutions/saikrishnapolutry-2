import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import config from "../config";

const AdminCategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch categories on mount
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${config.API_URL}/api/categories/getallcategories`);
      setCategories(res.data);
    } catch (err) {
      toast.error("Failed to load categories");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete category
const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this category?")) return;
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${config.API_URL}/api/categories/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Category deleted");
    // Remove from the local state list so UI updates instantly:
    setCategories(categories.filter((cat) => cat._id !== id));
  } catch (err) {
    toast.error(err.response?.data?.error || "Delete failed");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <button
          onClick={() => navigate("/admin")}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-2xl font-bold mb-6 text-gray-800">All Categories</h1>
        <button
          onClick={() => navigate("/admin/Addcategory")}
          className="mb-6 px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          + Add Category
        </button>
        <div className="overflow-x-auto">
          <table className="w-full border text-left rounded-xl">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center">
                    Loading...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center">
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr key={cat._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 font-semibold">{cat.name}</td>
                    <td className="px-4 py-2">{cat.description || "-"}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(cat._id)}
                        className="mr-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoriesList;
