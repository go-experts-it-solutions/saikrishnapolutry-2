import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBoxOpen, FaProjectDiagram, FaAddressBook, FaList } from "react-icons/fa";
import.meta.env.VITE_SOMETHING


const AdminDashboard = () => {
  const navigate = useNavigate();

const menuItems = [
  {
    id: 1,
    title: "Products",
    description: "Manage products with images and details",
    icon: <FaBoxOpen className="text-5xl text-blue-500" />,
    addRoute: "/admin/add-product",
    listRoute: "/admin/products",
    bgColor: "bg-blue-50 hover:bg-blue-100",
  },
  {
    id: 2,
    title: "Projects",
    description: "Manage projects with multiple images",
    icon: <FaProjectDiagram className="text-5xl text-green-500" />,
    addRoute: "/admin/add-project",
    listRoute: "/admin/projects",
    bgColor: "bg-green-50 hover:bg-green-100",
  },
  {
    id: 3,
    title: "Contacts",
    description: "Manage store locations with map",
    icon: <FaAddressBook className="text-5xl text-purple-500" />,
    addRoute: "/admin/add-contact",
    listRoute: "/admin/contacts",
    bgColor: "bg-purple-50 hover:bg-purple-100",
  },
  {
    id: 4,
    title: "Categories",
    description: "Create and manage product categories",
    icon: <FaList className="text-5xl text-orange-500" />,
    addRoute: "/admin/Addcategory",
    listRoute: "/admin/getallcategories",
    bgColor: "bg-orange-50 hover:bg-orange-100",
  },
    {
    id: 5,
    title: "Pdfs",
    description: "Pdfs Mangamenet",
    icon: <FaList className="text-5xl text-orange-500" />,
    addRoute: "/admin/add",
    listRoute: "/admin/pdf",
    bgColor: "bg-orange-50 hover:bg-orange-100",
  },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your products, projects, and contacts
          </p>


        </div>
<button
  onClick={() => {
    localStorage.clear();
    window.location.href = "https://saikrishnapolutry-2.vercel.app/";
  }}
  className="inline-block mt-1 mb-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-colors"
>
  Logout
</button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-gray-200`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white rounded-full shadow-md">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => navigate(item.listRoute)}
                    className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors flex items-center gap-2"
                  >
                    <FaList /> View All
                  </button>
                  <button
                    onClick={() => navigate(item.addRoute)}
                    className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition-colors"
                  >
                    + Add New
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
