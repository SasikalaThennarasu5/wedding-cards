import React from "react";
import bgImage from "../assets/images/COURSES.png"; // Update with actual image path

const CourseCard = ({ title, desc, offer, oldPrice, newPrice }) => {
  return (
    <div
      className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "680px",
      }}
    >
      {/* Title Overlay */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-white text-xl font-bold uppercase drop-shadow-lg tracking-wide">
          {title}
        </h2>
      </div>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%] w-[85%]  p-6 text-center z-10">
        <p className="text-black text-lg font-medium leading-relaxed mb-4">{desc}</p>
        <p className="text-black text-lg font-bold mb-2">{offer}</p>
        <p className="text-black text-lg font-semibold line-through inline-block mr-2">
          ₹ {oldPrice}
        </p>
        <p className="text-black text-lg font-bold inline-block">₹ {newPrice}</p>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button className="bg-[#C74646] text-white px-8 py-2 text-lg font-semibold rounded-full hover:bg-red-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

const AllCourses = () => {
  const courses = [
    {
      title: "Vegetarian's Delight",
      desc: "Cook The Tastiest Vegetarian Dishes Using Everyday Ingredients For Your Loved Ones At Home.",
      offer: "Get 37% OFF",
      oldPrice: 4000,
      newPrice: 2499,
    },
    {
      title: "Baking Essentials",
      desc: "Master the art of baking cakes, cookies, and pastries like a pro right from your home kitchen.",
      offer: "Save 40%",
      oldPrice: 3500,
      newPrice: 2100,
    },
    {
      title: "South Indian Magic",
      desc: "Learn the secrets of authentic South Indian cuisine with step-by-step recipes.",
      offer: "Intro Price",
      oldPrice: 2999,
      newPrice: 1799,
    },
    {
      title: "Street Food Fiesta",
      desc: "Recreate your favorite Indian street food at home – hygienic, tasty, and crowd-pleasing.",
      offer: "Limited Time Deal",
      oldPrice: 3200,
      newPrice: 1899,
    },
    {
      title: "Healthy Meal Prep",
      desc: "Plan and cook nutritious meals for the entire week with ease and flavor.",
      offer: "Now at 45% OFF",
      oldPrice: 3700,
      newPrice: 2035,
    },
    {
      title: "Quick Recipes",
      desc: "30-minute recipes for busy professionals and students – quick, tasty, and fulfilling!",
      offer: "Flash Offer",
      oldPrice: 2800,
      newPrice: 1540,
    },
  ];

  return (
    <div className="py-10 px-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;

