import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I find a recipe on your website?",
    answer:
      "You can easily find a recipe by using the search bar at the top of the page. Simply type in the dish you're looking for, and we’ll provide a list of relevant recipes. Alternatively, you can browse recipes by category (e.g., Quick Meals, Desserts, Vegan, etc.).",
  },
  {
    question: "Can I save my favorite recipes?",
    answer:
      "Yes, you can create an account and bookmark your favorite recipes for easy access anytime.",
  },
  {
    question: "How do I submit my own recipes?",
    answer:
      "Navigate to the 'Submit a Recipe' page from the menu, fill out the form, and upload your recipe with images.",
  },
  {
    question: "Are the recipes suitable for beginners?",
    answer:
      "Absolutely! We offer a range of easy-to-follow recipes perfect for beginners and home cooks.",
  },
  {
    question: "How do I know if a recipe is vegan, gluten-free, or dairy-free?",
    answer:
      "Each recipe is labeled with dietary tags. You can also filter recipes using our dietary filter options.",
  },
  {
    question: "Can I print recipes from the website?",
    answer:
      "Yes! Every recipe page includes a print-friendly version for your convenience.",
  },
  {
    question: "Do you offer video tutorials?",
    answer:
      "Many of our popular recipes include step-by-step video tutorials to guide you through the process.",
  },
  {
    question: "Can I share recipes with my friends and family?",
    answer:
      "Of course! Use the share buttons on each recipe page to easily send links via email or social media.",
  },
  {
    question: "How can I contact you if I have questions or suggestions?",
    answer:
      "Please visit our Contact Us page and fill out the form. We typically respond within 24–48 hours.",
  },
  {
    question: "Is there a mobile app for this website?",
    answer:
      "A mobile app is currently in development. Stay tuned for updates and release announcements!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-[Poppins]">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm mb-3 transition-all duration-300"
        >
          {/* Question Section */}
          <div
            className="flex justify-between items-center px-5 py-4 text-[#333] text-base md:text-lg font-medium cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <span>{index + 1}. {item.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="text-[#A7C957]" />
            ) : (
              <FaChevronDown className="text-[#D57A66]" />
            )}
          </div>

          {/* Answer Section */}
          {openIndex === index && (
            <div className="relative px-6 pb-5 pt-2 bg-white text-black border rounded-md text-base leading-relaxed">
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500 focus:outline-none"
              >
                ×
              </button>
              <ul className="list-disc ml-6 mt-4">
                <li>{item.answer}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
