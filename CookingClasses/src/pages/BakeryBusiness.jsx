import React, { useEffect } from 'react';
import BakeryBanner from '../components/BakeryBanner';

import Features from '../components/Features';

function BakeryBusiness() {
  useEffect(() => {
      document.title = "Flavour Theory | BAKERY BUSINESS";
    }, []); 
  return (
        <div className="w-full flex flex-col items-center bg-white px-4 text-center mt-10">
            {/* Title */}
                        <p className="max-w-4xl text-3xl font-bold text-gray-800 mt-6">
                            BAKERY BUSINESS ACCELERATOR PROGRAM.
                        </p>
            
                        <p className="mt-2 mb-8 max-w-4xl text-2xl font-semibold text-rose-800">
                            Program Limited to 50 people Only!
                        </p>
            <BakeryBanner />

            <Features />

            
        </div>
    );
};

export default BakeryBusiness