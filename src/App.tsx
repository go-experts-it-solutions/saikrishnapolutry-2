import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop ";

import OurSpeciality from "./pages/OurSpeciality"
import OurProjects from "./pages/Ourprojects";
import Admin from "./pages/Admin"
import AdminAddProduct from "./pages/AdminAddProduct";
import AdminAddProject from "./pages/AdminAddProject";
import AdminAddContact from "./pages/AdminAddContact";
import AdminProductList from "./pages/AdminProductList";
import AdminProjectList from "./pages/AdminProjectList";
import AdminContactList from "./pages/AdminContactList";
import AdminEditProduct from "./pages/AdminProductEdit";
import AdminEditProject from "./pages/AdminEditProject";
import AdminEditContact from "./pages/AdminEditContact";
import CategoryProduct from "./pages/CategoryProducts"
import AdminAddCategory from "./pages/Addcategory";
import AdminCategoriesList from "./pages/AdminCategoriesList";
import Catilogues from "./pages/catiloguespage"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
         <ScrollToTop />
        <Routes>
        
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourspeciality" element={<OurSpeciality />} />
          <Route path="/ourprojects" element={<OurProjects />} />
          <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-product" element={<AdminAddProduct />} />
        <Route path="/admin/add-project" element={<AdminAddProject />} />
        <Route path="/admin/add-contact" element={<AdminAddContact />} />
         <Route path="/admin/products" element={<AdminProductList />} />
            <Route path="/admin/Addcategory" element={<AdminAddCategory />} />
                <Route path="/admin/getallcategories" element={<AdminCategoriesList />} />
             <Route path="/admin/projects" element={<AdminProjectList />} />
              <Route path="/admin/contacts" element={<AdminContactList />} />
              <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
                    <Route path="/admin/:id" element={<AdminEditProject />} />
                       <Route path="/admin/editcontact/:id" element={<AdminEditContact />} />
                       {/* <Route path="/products/:category" element={<ProductsPage />} /> */}

                       <Route path="/products/:category" element={<CategoryProduct />} />
                       
                       <Route path="/allcatilogues" element={< Catilogues/>} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
