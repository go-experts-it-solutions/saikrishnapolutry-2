import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBackgroundImage from "../assets/henproductspage.jpg"

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
