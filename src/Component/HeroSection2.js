import React from 'react'
import { Link } from "react-router-dom";


function HeroSection2() {
    return (
        <section>
         <div className="mt-5 hero-section  flex flex-col-reverse sm:flex-col md:flex-row lg:px-20 lg:py-10 justify-center items-center">
        <div className="flex flex-col  justify-center items-center mt-10">
          <h2 className="star  p-3 pr-12">
          What's happening at Starbucks
          </h2>
          <p className="text-white">
           
          Find all the latest news and stories about our partners (employees), coffee and communities right here.
          </p>
          .
          <Link className="font-semibold text-white -mt-1 hover:bg-gray-400 section-link rounded-full border text-sm bg-transparent  border-white px-14 py-2  mb-5">
          See the Stories
          </Link>
        </div>

        <div>
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74420.jpg"
            alt=""
          />
        </div>
      </div>
        </section>
       
    
     
   
      
    )
}

export default HeroSection2
