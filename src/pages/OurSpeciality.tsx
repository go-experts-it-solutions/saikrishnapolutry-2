import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Tailwind color palette for six backgrounds
const sectionColors = [
  "bg-[#1475E1]",
  "bg-[#664EFF]",
  "bg-[#00B87C]",
  "bg-[#FD7D3A]",
  "bg-[#FFB801]",
  "bg-[#27374D]"
];

// Example FAQ data
const sections = [
  {
    title: "Company Overview",
    questions: [
      {
        q: "What is Sai Krishna Plastic Industries?",
        a: "Sai Krishna Plastic Industries, situated in Hyderabad, Telangana, has been a trailblazer in the poultry equipment industry since 2002, offering high-quality products and innovative solutions."
      },
      {
        q: "Who are the leaders of the company?",
        a: "The company is led by Managing Partners Mr. Srikanth M and Naveen Kumar, who collectively bring over 25 years of industry expertise."
      }
    ]
  },
  {
    title: "Infrastructure & Capabilities",
    questions: [
      {
        q: "What infrastructure does the company have?",
        a: "Sai Krishna Plastic Industries boasts state-of-the-art infrastructure, including advanced plastic injection molding machines, ample storage facilities, and a strategic location in Hyderabad."
      },
      {
        q: "What technological capabilities does the company offer?",
        a: "With cutting-edge technology, the company ensures high-quality poultry equipment production and the ability to adapt to market demands."
      }
    ]
  },
  {
    title: "Market Presence",
    questions: [
      {
        q: "Where does Sai Krishna Plastic Industries operate?",
        a: "The company has an extensive dealer network across India and a strong international presence, exporting globally."
      },
      {
        q: "What are the key strengths of the company?",
        a: "Key strengths include over 25 years of industry experience, timely delivery, customer satisfaction, high-quality products, and adaptability to market demands."
      }
    ]
  },
  {
    title: "Products & Services",
    questions: [
      {
        q: "What products does the company offer?",
        a: "The company offers a comprehensive range of poultry equipment, including feeders, drinkers, brooders, and other essential tools for poultry farming."
      },
      {
        q: "How is the company's product quality and service?",
        a: "Sai Krishna Plastic Industries is renowned for high-quality products, quick service, a customer-centric approach, and continuous innovative product development."
      }
    ]
  },
  {
    title: "Innovation & Adaptability",
    questions: [
      {
        q: "How does the company stay ahead in the industry?",
        a: "The company stays ahead by monitoring market trends, developing new products, enhancing existing products, and continuously meeting customer needs."
      }
    ]
  },
  {
    title: "Customer Support",
    questions: [
      {
        q: "How can I contact Sai Krishna Plastic Industries?",
        a: "You can contact the team via the website's contact page or through official email and phone channels."
      }
    ]
  }
];


function ColorAccordionFAQ() {
  const [openSection, setOpenSection] = useState(null);
  const [openQuestion, setOpenQuestion] = useState({});

  return (
    <>
      <Navbar />
{/* Wave Hero Section */}
<section className="relative bg-gradient-to-br from-[#edf3fa] via-[#3f5e7f] to-[#0a4a92] py-28 text-white overflow-hidden">

  {/* Decorative background dots (same style as Products page) */}
  <div 
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="2" fill="white" opacity="0.3"/></svg>')`,
    }}
  />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-center">
    
    <h1 className="text-4xl md:text-5xl font-['Poppins'] font-bold mb-4">
      Frequently Asked <span className="text-yellow-300">Questions</span>
    </h1>

    <p className="text-white/90 max-w-2xl mx-auto text-base font-['Poppins']">
      Find quick answers to the most common questions about our services & products.
    </p>

    {/* Breadcrumb */}
    <div className="flex justify-center items-center gap-2 mt-6 text-sm text-white/70 font-['Poppins']">
      <a href="/" className="hover:text-white">HOME</a>
      <span className="opacity-50">/</span>
      <span className="text-white font-semibold">FAQ</span>
    </div>
  </div>

  {/* Bottom Wave Shape — SAME as Products Page */}
  <div className="absolute bottom-0 left-0 right-0">
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

      <div className="flex flex-col gap-6 max-w-3xl w-full mx-auto my-8 px-2">
        {sections.map((section, sectionIdx) => (
          <div
            key={section.title}
            className={`text-xl ${sectionColors[sectionIdx]} shadow-lg w-full transition-all`}
          >
            {/* Section Title */}
            <button
              onClick={() =>
                setOpenSection(openSection === sectionIdx ? null : sectionIdx)
              }
              className="w-full flex items-center justify-between p-4 cursor-pointer outline-none group"
            >
              <span className="text-white text-xl font-bold font-['Poppins']">
                {section.title}
              </span>
              <span
                className={`text-white ml-4 text-l font-extrabold transition-transform duration-200 ${
                  openSection === sectionIdx ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {/* Questions */}
            {openSection === sectionIdx && (
              <div className="pb-4 px-4">
                {section.questions.map((item, qIdx) => (
                  <div key={item.q}>
                    <button
                      className="flex w-full items-center justify-between py-4 px-2 cursor-pointer group"
                      onClick={() =>
                        setOpenQuestion((prev) =>
                          prev[sectionIdx] === qIdx
                            ? { ...prev, [sectionIdx]: null }
                            : { ...prev, [sectionIdx]: qIdx }
                        )
                      }
                    >
                      <span className="text-white font-semibold text-l text-left font-['Poppins']">
                        {item.q}
                      </span>
                      <span
                        className={`text-white ml-3 text-xl font-bold transition-transform duration-200 ${
                          openQuestion[sectionIdx] === qIdx ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    {openQuestion[sectionIdx] === qIdx && (
                      <div className="bg-white/95 rounded-xl p-4 text-[#1475E1] font-medium mb-2 font-['Poppins'] transition">
                        {item.a}
                      </div>
                    )}

                    {qIdx < section.questions.length - 1 && (
                      <div className="border-b border-sky-200/40 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ColorAccordionFAQ;
