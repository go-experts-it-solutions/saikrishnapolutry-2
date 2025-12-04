import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import chickDrinkerImg from "../assets/Chick Drinker.png";

function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://saikrishnapolutary-backend.onrender.com/api/projects/all")
      .then(res => res.json())
      .then(data => {
        const backendProjects = data.projects || data;
        
        if (Array.isArray(backendProjects) && backendProjects.length > 0) {
          setProjects(
            backendProjects.map(p => ({
              meta: p.meta || p.title,
              image: p.images && p.images[0] ? p.images[0].url : chickDrinkerImg,
              title: p.title,
              description: p.description,
            }))
          );
        }
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setProjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background font-['Poppins']">
      <Navbar />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
                <p className="text-slate-600 font-body">Loading projects...</p>
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <p className="text-slate-500 font-body text-lg mb-2">No projects found</p>
                <p className="text-slate-400 font-body text-sm">Check back soon for new projects</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-2">
                      {proj.meta}
                    </p>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">
                      {proj.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurProjects;
