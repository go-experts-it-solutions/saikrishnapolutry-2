import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import config from "../config";

const AdminAddCategory = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!name) {
      toast.error("Category name is required");
      setIsLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${config.API_URL}/api/categories/add`, 
        { name, description }, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Category created successfully!");
      setTimeout(() => navigate("/admin/categories"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to create category");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
        <button
          onClick={() => navigate("/admin")}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
        >
          ← Back to dashboard
        </button>

        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Category</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Category Name*</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              rows="3"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Creating..." : "Add Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddCategory;
