import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import config from "../config";

const AnimatedLine = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.1, ease: "easeOut" }}
    className="h-1 bg-gradient-to-r from-green-600 to-green-400 shadow-lg rounded mb-6"
  />
);

const AdminEditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]); // [{ file, preview, name, isRemote, remoteId }]
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/projects/${id}`);
        const proj = res.data.project || res.data;

        setTitle(proj.title || "");
        setDescription(proj.description || "");
        setImages(
          Array.isArray(proj.images)
            ? proj.images.map(img => ({
                preview: img.url,
                name: img.name || img.url.split("/").pop(),
                isRemote: true,
                remoteId: img._id,
              }))
            : []
        );
      } catch (err) {
        toast.error("Failed to load project");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();

    // Cleanup previews on unmount
    return () => {
      images.forEach(img => img.preview && !img.isRemote && URL.revokeObjectURL(img.preview));
    };
  }, [id]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages(prev => [...prev, ...selectedFiles]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    if (!newImages[index].isRemote) {
      URL.revokeObjectURL(newImages[index].preview);
    }
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    // Append new uploaded images only
    images.filter(img => !img.isRemote).forEach(img => formData.append("images", img.file));

    // Pass IDs of existing remote images so backend can keep them
    const existingImageIds = images.filter(img => img.isRemote).map(img => img.remoteId);
    formData.append("existingImageIds", JSON.stringify(existingImageIds));

    try {
      const token = localStorage.getItem("token");
      await axios.put(`${config.API_URL}/api/projects/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Project updated successfully!");
      setTimeout(() => navigate("/admin"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update project");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
        <AnimatedLine />
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-green-400" />
      </div>
    );
  }

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
        <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <div>
            <label className="block font-semibold mb-1">Project Title*</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description*</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Project Images*</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.map((img, i) => (
                <div key={i} className="relative group">
                  <img
                    src={img.preview}
                    alt={img.name}
                    className="w-full h-32 object-cover rounded-lg border transition-transform duration-200 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors ${
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

export default AdminEditProject;
