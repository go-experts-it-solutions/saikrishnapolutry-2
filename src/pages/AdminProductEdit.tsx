import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import config from "../config";

const AnimatedLine = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.05, ease: "easeOut" }}
    className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg rounded mb-8"
  />
);

const fieldAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, type: "spring", stiffness: 60, damping: 18 }
  }),
};

const AdminEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [priority, setPriority] = useState(0); // ⭐ new priority state
  const [files, setFiles] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  // Load Product Once
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/products/${id}`);
        const p = res.data.product || res.data;
        setName(p.name || "");
        setDescription(p.description || "");
        setCategory(p.category || "");
        setSpecifications(p.specifications || "");
        setPriority(p.priority || 0); // ⭐ set priority from backend
        setFiles(
          Array.isArray(p.files)
            ? p.files.map(f => ({
                preview: f.url,
                name: f.name || f.url.split("/").pop(),
                type: (f.name || f.url).split(".").pop(),
                isRemote: true,
                remoteId: f._id,
              }))
            : []
        );
      } catch {
        toast.error("Failed to load product");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Clear previews on unmount
  useEffect(() => {
    return () => {
      files.forEach(f => f.preview && !f.isRemote && URL.revokeObjectURL(f.preview));
    };
  }, [files]);

  // File management
  const handleFileChange = e => {
    const selectedFiles = Array.from(e.target.files).map(file => ({
      file,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
      type: file.type,
      name: file.name,
    }));
    setFiles(files.concat(selectedFiles));
  };

  const removeFile = idx => {
    const nf = [...files];
    if (nf[idx].preview && !nf[idx].isRemote) URL.revokeObjectURL(nf[idx].preview);
    nf.splice(idx, 1);
    setFiles(nf);
  };

  // Submission
  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !description || !category) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("specifications", specifications);
    formData.append("category", category);
    formData.append("priority", priority); // ⭐ append priority

    // Only append new uploads
    files.filter(f => !f.isRemote).forEach(f => formData.append("files", f.file));

    // Existing file IDs
    const remainRemote = files.filter(f => f.isRemote).map(f => f.remoteId);
    formData.append("existingFileIds", JSON.stringify(remainRemote));

    try {
      const token = localStorage.getItem("token");
      await axios.put(`${config.API_URL}/api/products/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product updated successfully!");
      setTimeout(() => navigate("/admin"), 1600);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update product");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
        <AnimatedLine />
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <AnimatedLine />

        <button
          onClick={() => navigate("/admin")}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence>
            {/* Product Name */}
            <motion.div initial="hidden" animate="visible" exit="hidden" custom={0} variants={fieldAnim}>
              <label className="block font-semibold mb-1">Product Name*</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            {/* Description */}
            <motion.div initial="hidden" animate="visible" exit="hidden" custom={1} variants={fieldAnim}>
              <label className="block font-semibold mb-1">Description*</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="4"
                required
              />
            </motion.div>

            {/* Specifications */}
            <motion.div initial="hidden" animate="visible" exit="hidden" custom={2} variants={fieldAnim}>
              <label className="block font-semibold mb-1">Specifications</label>
              <textarea
                value={specifications}
                onChange={e => setSpecifications(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="2"
              />
            </motion.div>

            {/* Category */}
            <motion.div initial="hidden" animate="visible" exit="hidden" custom={3} variants={fieldAnim}>
              <label className="block font-semibold mb-1">Category*</label>
              <input
                type="text"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            {/* Priority ⭐ */}
            <motion.div initial="hidden" animate="visible" exit="hidden" custom={4} variants={fieldAnim}>
              <label className="block font-semibold mb-1">Priority*</label>
              <input
                type="number"
                value={priority}
                onChange={e => setPriority(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min={0}
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Lower numbers = higher priority (1 = highest)
              </p>
            </motion.div>

            {/* Files */}
            <motion.div initial="hidden" animate="visible" exit="hidden" custom={5} variants={fieldAnim}>
              <label className="block font-semibold mb-1">Files*</label>
              <input
                type="file"
                multiple
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="w-full border p-2 rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* File preview */}
          {files.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {files.map((f, i) => (
                <div key={i} className="relative group">
                  {f.preview ? (
                    <img
                      src={f.preview}
                      alt={f.name}
                      className="w-full h-32 object-cover rounded-lg border transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded-lg border font-semibold">
                      {f.name.split(".").pop().toUpperCase()}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProduct;
