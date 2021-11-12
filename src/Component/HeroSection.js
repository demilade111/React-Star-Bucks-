import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="sections">
      <div className="mt-5 flex flex-col-reverse sm:flex-col md:flex-row lg:px-20 lg:py-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-10">
          <h2>
            Investing in our
           communities
          </h2>
          <p>
         
            The Starbucks Foundation awarded grants to over 400 nonprofits
            serving communities of color. Recipients were nominated by Starbucks
            partners (employees)
          </p>
          .
          <Link className="font-semibold -mt-2 section-link rounded-full border text-sm bg-transparent border-black px-4 py-2  mb-5">
            Learn More
          </Link>
        </div>

        <div>
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center  bg-white py-10">
       <h1 className="font-bold text-3xl lg:text-5xl tracking-wider section-link">TODAY IS YOURS</h1>
      </div>
     
    </section>
  );
}

export default HeroSection;
