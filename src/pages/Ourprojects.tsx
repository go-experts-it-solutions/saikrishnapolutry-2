import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import chickDrinkerImg from "../assets/Chick Drinker.png";
import Chickfeeder from "../assets/Chick-Feeder1.png";

// Only used if there is no backend response
const staticProjects = [
  {
    meta: "Ventilation · Project",
    image: chickDrinkerImg,
    title: "Butterfly Cone Fan for Poultry Houses",
    description:
      "Custom high-efficiency butterfly cone fans, installed at large-scale poultry houses, deliver ultra-low noise, high volume airflow, and minimal maintenance due to self-cleaning Krupp stainless blades.",
  },
  {
    meta: "Feeding Solution · Project",
    image: Chickfeeder,
    title: "Automated Pan Feeding & Nipple Drinking",
    description:
      "Modern pan feeder and nipple drinker installs with smart feed adjustment and anti-waste features. Maximizes feed conversion and flock health for major integrator partners.",
  },
  {
    meta: "Export · Global",
    image: chickDrinkerImg,
    title: "Heavy Hammer Exhaust Fans For International Markets",
    description:
      "Large-volume orders shipped across Africa and the Middle East. Plastic blade, high-efficiency, robust frame, optimized for harsh environments and long-term reliability.",
  },
  {
    meta: "Environment · Control",
    image: chickDrinkerImg,
    title: "Centrifugal Exhaust Fan Systems",
    description:
      "Centrifugal exhaust fans maximize air quality in greenhouses and animal sheds—430 stainless blades, galvanized frames, BESS Lab certified for high performance.",
  },
  {
    meta: "Feeding · Precision Systems",
    image: chickDrinkerImg,
    title: "Chick Drinker, Jumbo Drinker & Trays",
    description:
      "Projects delivering ultra-reliable chick drinkers, feeders, and trays with advanced pressure regulators and parent feeders for optimal brooding environments.",
  },
];

function OurProjects() {
  const [projects, setProjects] = useState(staticProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://saikrishnapolutary-backend.onrender.com/api/projects/all")
      .then(res => res.json())
      .then(data => {
        // If backend responds as {projects: [...]} or raw array:
        const backendProjects = data.projects || data;
        // Transform backend structure to match UI needs:
        if (
          Array.isArray(backendProjects) &&
          backendProjects.length > 0 &&
          backendProjects[0].title
        ) {
          setProjects(
            backendProjects.map(p => ({
              meta: p.meta || p.title, // fallback to title if meta missing
              image: p.images && p.images[0] ? p.images[0].url : chickDrinkerImg,
              title: p.title,
              description: p.description,
            }))
          );
        }
      })
      .catch(() => setProjects(staticProjects))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background font-['Poppins']">
      <Navbar />

      <section
        className="relative py-20 text-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            `url("https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=600&fit=crop")`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white font-['Poppins']">
            Our Projects
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 font-['Poppins']">
            Notable projects and innovations by Sai Krishna Plastic Industries
          </p>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {loading ? (
              staticProjects.map((proj) => (
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
              ))
            ) : (
              projects.map((proj) => (
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
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurProjects;
