import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBackgroundImage from "../assets/henproductspage.jpg";

// FAQ data
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

      {/* Hero Section */}
      {/* <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-[#111827]">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="FAQ Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-[#111827]/60 to-[#111827]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#B91C1C] rounded-full mb-6 shadow-2xl"
            >
              <HelpCircle className="w-10 h-10 text-[#FFFFFF]" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4 font-['Poppins']">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#F9F3F3] font-['Poppins'] font-light">
              Find answers to common questions about our products and services
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Content Section */}
      <section className="bg-[#F9F3F3] py-10 md:py-24 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {sections.map((section, sectionIdx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIdx * 0.1, duration: 0.5 }}
                  className="bg-[#FFFFFF] rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  {/* Section Header */}
                  <button
                    onClick={() =>
                      setOpenSection(openSection === sectionIdx ? null : sectionIdx)
                    }
                    className="w-full flex items-center justify-between p-2 md:p-3 bg-gradient-to-r from-[#B91C1C] to-[#991B1B] hover:from-[#991B1B] hover:to-[#7F1D1D] transition-all duration-300 group"
                  >
                    <span className="text-[#FFFFFF] text-xl md:text-2xl font-bold font-['Poppins'] text-left">
                      {section.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openSection === sectionIdx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-[#FFFFFF] group-hover:scale-110 transition-transform" />
                    </motion.div>
                  </button>

                  {/* Questions Container */}
                  <AnimatePresence>
                    {openSection === sectionIdx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 space-y-3">
                          {section.questions.map((item, qIdx) => (
                            <motion.div
                              key={item.q}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: qIdx * 0.1, duration: 0.4 }}
                              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#B91C1C] transition-colors duration-300"
                            >
                              {/* Question */}
                              <button
                                className="flex w-full items-center justify-between p-5 md:p-3 bg-[#FFFFFF] hover:bg-[#F9F3F3] transition-colors duration-200 group"
                                onClick={() =>
                                  setOpenQuestion((prev) =>
                                    prev[sectionIdx] === qIdx
                                      ? { ...prev, [sectionIdx]: null }
                                      : { ...prev, [sectionIdx]: qIdx }
                                  )
                                }
                              >
                                <span className="text-[#111827] font-semibold text-base md:text-lg text-left font-['Poppins'] pr-4">
                                  {item.q}
                                </span>
                                <motion.div
                                  animate={{
                                    rotate: openQuestion[sectionIdx] === qIdx ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className="flex-shrink-0"
                                >
                                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#B91C1C] group-hover:scale-110 transition-transform" />
                                </motion.div>
                              </button>

                              {/* Answer */}
                              <AnimatePresence>
                                {openQuestion[sectionIdx] === qIdx && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-5 md:p-6 bg-[#F9F3F3] border-t border-gray-200">
                                      <p className="text-[#111111] text-sm md:text-base leading-relaxed font-['Poppins']">
                                        {item.a}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 text-center bg-gradient-to-br from-[#B91C1C] to-[#7F1D1D] rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-4 font-['Poppins']">
                Still have questions?
              </h3>
              <p className="text-[#F9F3F3] text-base md:text-lg mb-6 font-['Poppins']">
                Our team is here to help. Get in touch with us today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFFFFF] text-[#B91C1C] px-8 py-4 rounded-full font-bold text-lg font-['Poppins'] shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </motion.button>
            </motion.div> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ColorAccordionFAQ;
