import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import config from "../config"; 

// const BACKEND_URL = "https://saikrishnapolutary-backend.onrender.com";

const AdminContactList = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${config.API_URL}/api/contact/all`);
      setContacts(res.data.contacts || res.data);
      setIsLoading(false);
    } catch (err) {
      toast.error("Failed to fetch contacts");
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${config.API_URL}/api/contact/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Contact deleted successfully");
      fetchContacts();
    } catch (err) {
      toast.error("Failed to delete contact");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <button
              onClick={() => navigate("/admin")}
              className="mb-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-3xl font-bold">Store Locations</h1>
          </div>
          <button
            onClick={() => navigate("/admin/add-contact")}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            + Add Contact
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-xl">No contacts found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {contact.images && contact.images[0] && (
                  <img
                    src={contact.images[0].url}
                    alt={contact.storeName}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">{contact.storeName}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    {contact.address && (
                      <div className="flex items-start gap-2">
                        <FaMapMarkerAlt className="mt-1 text-purple-600" />
                        <span>
                          {contact.address.street}, {contact.address.city}, {contact.address.state}
                        </span>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-purple-600" />
                        <span>{contact.phone}</span>
                      </div>
                    )}
                    {contact.email && (
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-purple-600" />
                        <span>{contact.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/editcontact/${contact._id}`)}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContactList;
