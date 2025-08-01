import React, { useEffect } from 'react';
import CourseDescriptionHero from '../components/CourseDescriptionHero';
import CourseCurriculum from '../components/CourseCurriculum';

import Testimonials from '../components/Testimonials';


import Samplevideo from '../components/SampleVideo';
import Features from '../components/Features';
import { SiAmazonsimpleemailservice } from 'react-icons/si';

const CourseDescription = () => {
    useEffect(() => {
            document.title = "Flavour Theory | CourseDescription";
          }, []);
    return (
        <div className="w-full flex flex-col items-center bg-[#fff7f0] px-4 text-center">

            <CourseDescriptionHero />
            <CourseCurriculum />
            
            <SiAmazonsimpleemailservice />
            <Testimonials />
            
            <Features />

            <CourseBanner />
            
        </div>
    );
};

export default CourseDescription;