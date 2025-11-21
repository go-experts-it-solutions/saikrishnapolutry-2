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
    className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 shadow-lg rounded mb-6"
  />
);

const AdminEditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [storeName, setStoreName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = useState([]); // [{file, preview, name, isRemote, remoteId}]
  const [isLoading, setIsLoading] = useState(true);

  // Fetch contact data on mount
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/contact/${id}`);
        const contact = res.data.contact || res.data;

        setStoreName(contact.storeName || "");

        // Parse address JSON string or object safely
        let addressObj = {};
        if (typeof contact.address === "string") {
          try {
            addressObj = JSON.parse(contact.address);
          } catch {
            addressObj = {};
          }
        } else if (typeof contact.address === "object") {
          addressObj = contact.address || {};
        }
        setStreet(addressObj.street || "");
        setCity(addressObj.city || "");
        setState(addressObj.state || "");
        setZipCode(addressObj.zipCode || "");

        setLatitude(contact.latitude || "");
        setLongitude(contact.longitude || "");
        setPhone(contact.phone || "");
        setEmail(contact.email || "");

        // Map existing images for preview
        setImages(
          Array.isArray(contact.images)
            ? contact.images.map(img => ({
                preview: img.url,
                name: img.name || img.url.split("/").pop(),
                isRemote: true,
                remoteId: img._id,
              }))
            : []
        );
      } catch (err) {
        toast.error("Failed to load contact");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContact();

    return () => {
      // Cleanup previews for new uploads only
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

    // Basic required fields validation
    if (!storeName || !city || !latitude || !longitude) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("storeName", storeName);
    formData.append(
      "address",
      JSON.stringify({
        street,
        city,
        state,
        zipCode,
        country: "India",
      })
    );
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("phone", phone);
    formData.append("email", email);

    // Append new images only
    images.filter(img => !img.isRemote).forEach(img => formData.append("images", img.file));

    // Pass existing remote image ids
    const existingImageIds = images.filter(img => img.isRemote).map(img => img.remoteId);
    formData.append("existingImageIds", JSON.stringify(existingImageIds));

    try {
      const token = localStorage.getItem("token");
      await axios.put(`${config.API_URL}/api/contact/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Contact updated successfully!");
      setTimeout(() => navigate("/admin"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update contact");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
        <AnimatedLine />
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-purple-400" />
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
        <h1 className="text-3xl font-bold mb-6">Edit Store Location</h1>
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <div>
            <label className="block font-semibold mb-1">Store Name*</label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Street</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">City*</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Zip Code</label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Latitude*</label>
              <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="17.385044"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Longitude*</label>
              <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="78.486671"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Store Images</label>
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
            className={`w-full py-3 rounded-lg font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors ${
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

export default AdminEditContact;
