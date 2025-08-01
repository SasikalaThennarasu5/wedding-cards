import React from "react";
import background from "../assets/images/background.png";
import chefImage from "../assets/images/Group 48.png";
import calendarIcon from "../assets/images/calendar-icon.png";
import videoIcon from "../assets/images/video-icon.png";
import recipeIcon from "../assets/images/recipe-icon.png";
import masterclassIcon from "../assets/images/masterclass-icon.png";
import followersIcon from "../assets/images/followers-icon.png";
import booksIcon from "../assets/images/books-icon.png";
import experienceIcon from "../assets/images/experience-icon.png";

const CloudKitchenBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center p-6 sm:p-12 text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-5xl mx-auto bg-black bg-opacity-60 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Launch & Grow Your Bakery Business in the next 60 Days with the Bakery Accelerator Program
        </h2>
        <p className="text-lg font-medium mb-6">
          Even If You Don’t Have Any Prior Experience In Baking!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Info Section */}
          <ul className="space-y-4 text-base text-white">
            <li className="flex items-center gap-3">
              <img src={calendarIcon} alt="calendar" className="w-6 h-6" />
              <span><strong>Batch II Start Date</strong> – 31st July 2024</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={videoIcon} alt="video" className="w-6 h-6" />
              <span>10+ Hrs Of Pre-Recorded Video Content</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={recipeIcon} alt="recipes" className="w-6 h-6" />
              <span>100+ Baking Recipes</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={masterclassIcon} alt="masterclass" className="w-6 h-6" />
              <span>Exclusive Masterclasses</span>
            </li>
          </ul>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="rounded-full border-[8px] border-lime-500 overflow-hidden w-64 h-64">
              <img src={chefImage} alt="Chef" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Fees and Button */}
        <div className="mt-8">
          <p className="text-2xl font-semibold">
            Program Fees: <span className="line-through">₹ 1 Lakh</span> | INR <strong>36,000/-</strong>
          </p>
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition">
            ENROLL NOW
          </button>
        </div>

        {/* Badge Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between bg-pink-100 text-black p-3 rounded-md text-sm">
          <p>We’re looking for Action Takers. Program open for 50 participants only</p>
          <div className="flex gap-4 mt-2 sm:mt-0 flex-wrap">
            <div className="flex items-center gap-1"><img src={followersIcon} className="w-4 h-4" />20M Followers</div>
            <div className="flex items-center gap-1"><img src={booksIcon} className="w-4 h-4" />Author 50+ books</div>
            <div className="flex items-center gap-1"><img src={experienceIcon} className="w-4 h-4" />30 Yrs+ Culinary Expertise</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudKitchenBanner;
