import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import AllCourses from "../components/AllCourses";
import FAQ from "../components/FAQ"; // adjust path if needed
import GroupImage from "../assets/images/Group 40.png"; 

const Courses = () => {
  return (
    
    <div className="font-[Poppins]">
      
      
      {/* Section: Featured Courses */}
      <section className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-BLACK mb-6 text-center">FEATURED COURSES</h2>
        <FeaturedCourses />
      </section>

      {/* Section: All Courses */}
      <section className="py-10 px-4 ">
        <h2 className="text-2xl md:text-3xl font-bold text-bLACK mb-6 text-center">ALL COURSES</h2>
        <AllCourses />
      </section>

      {/* ✅ Full-width Image Section with Rounded Corners */}
      <div className="w-full px-4">
        <img
          src={GroupImage}
          alt="Promotional Banner"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Section: FAQ */}
      <section className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#D57A66] mb-6 text-center">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      {/* ✅ CTA Section: From Uploaded Image */}
      <section className="py-10 px-4 text-center  relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-black leading-relaxed mb-8">
            Homemakers to busy executives, budding chefs to food entrepreneurs,
            grandparents to moms, health conscious people or foodies – there's a
            course for all.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-[#BA4E4E] hover:bg-[#a84343] text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-200"
          >
            VIEW COURSES
          </button>
        </div>
        {/* Optional: Add icon image to bottom right if you want */}
        {/* <img src={...} alt="..." className="absolute bottom-4 right-4 w-8 h-8" /> */}
      </section>






    </div>
  );
};

export default Courses;
