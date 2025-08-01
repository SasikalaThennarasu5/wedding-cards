import React from 'react';
import { Link } from "react-router-dom";
import ChatSection from '../Components/Inbox';
import Chefcooking from "../assets/images/Group 24.png";
import Rectangle1 from "../assets/images/Rectangle 26.png";
import Rectangle2 from "../assets/images/Group 40.png";
import Rectangle3 from "../assets/images/Group 46.png";
const AboutUs = () => {
  return (
    <div>
    <section className="bg-[#fff5e4] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Card */}
        <div className="flex-1 bg-gradient-to-b from-[#c1dc8c] to-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            MORE POWER TO YOUR COOKING! <br /> THROUGH LEARNING
          </h2>
          <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
            Discover A Better Way Of Cooking Amazing Dishes <br />
            With Recipes Specially Curated By The Most <br />
            Celebrated Face In The Indian Cuisine.
          </p>
         <Link to="/courses">  <button className="bg-[#b94646] hover:bg-[#a33d3d] text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300">
            VIEW COURSES
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={Chefcooking} // Replace with your image if needed
            alt="Chefs Cooking"
            className="rounded-3xl shadow-md object-cover w-full h-full"
          />
        </div>
      </div>
    </section>


<section className="bg-[#fff5e4] px-6 py-16 text-center text-black">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* About Us Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT US</h2>
          <p className="text-lg leading-relaxed">
            Welcome to Flavour theory, your go-to place for delicious recipes, culinary inspiration, and a
            community of food lovers!
          </p>
          <p className="text-lg leading-relaxed mt-6">
            At Flavour theory, we believe that cooking is more than just preparing food—it's about creativity, joy,
            and bringing people together. Whether you're a seasoned chef or just starting your culinary journey,
            our mission is to make cooking easy, fun, and accessible to everyone.
          </p>
        </div>

        {/* Our Story Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR STORY</h2>
          {/* You can add more content below this if desired */}
        </div>
      </div>
    </section>



    <section className="relative bg-[#fff5e4]py-16 px-4">
      <div
        className="rounded-3xl overflow-hidden max-w-7xl mx-auto"
        style={{
  backgroundImage: `url(${Rectangle1})`, // ✅ Fix this too!
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}

        
      >
        {/* Overlay */}
        <div className=" bg-opacity-70 text-white p-10 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our journey began with a passion for food and the desire to share it with others. Flavour theory, a passionate home cook and food enthusiast, started the website to create a space where anyone, no matter their skill level, could discover new recipes, learn helpful cooking tips, and explore a world of flavors.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-4xl mx-auto">
            Over the years, our team has grown, but our core values remain the same: to inspire home cooks everywhere to embrace the magic of the kitchen and make every meal a special occasion.
          </p>
        </div>
      </div>
    </section>



      <section className="bg-[#fff5e4] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          WHAT WE OFFERS
        </h2>
        <ul className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
          <li className="flex items-start gap-3">
            <span className="text-[#d75b5b] text-2xl mt-1">•</span>
            <p>
              <span className="font-bold text-[#d75b5b]">Tasty Recipes:</span>{' '}
              From quick weeknight dinners to indulgent desserts, our recipes
              cover every occasion and dietary preference. Each recipe is tested
              and designed to be easy to follow, so you can enjoy the process as
              much as the result!
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d75b5b] text-2xl mt-1">•</span>
            <p>
              <span className="font-bold text-[#d75b5b]">Helpful Cooking Tips:</span>{' '}
              Our step-by-step guides, cooking hacks, and ingredient substitutions
              will help you master new techniques and cook with confidence.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d75b5b] text-2xl mt-1">•</span>
            <p>
              <span className="font-bold text-[#d75b5b]">Community of Food Lovers:</span>{' '}
              Join our vibrant community of home cooks, share your own recipes,
              leave reviews, and inspire others. We believe cooking is even more
              enjoyable when shared!
            </p>
          </li>
        </ul>
      </div>
    </section>

    {/* ✅ Full-width Image Section with Rounded Corners */}
          <section className="w-full px-0 py-12 bg-[#fff5e4]">
  <div className="max-w-7xl mx-auto px-4">
    <img
      src={Rectangle2}
      alt="Promotional Banner"
      className="w-full rounded-3xl object-cover"
    />
  </div>
</section>

      <section className="relative bg-[#fff5e4] py-16 px-4">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">OUR Values</h2>
          {/* You can add more content below this if desired */}
        </div>

      <div
  className="rounded-3xl overflow-hidden max-w-7xl mx-auto min-h-[400px]"
  style={{
    backgroundImage: `url(${Rectangle3})`, // ✅ Corrected
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay */}
  <div className=" text-white p-10 text-center">
    <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
      Simplicity: our recipes are even approachable for beginners
    </p>
    <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-4xl mx-auto">
      Creativity: We encourage experimenting in foods
    </p>
  </div>
</div>

    </section>

<ChatSection/>


    </div>
  );
};

export default AboutUs;
