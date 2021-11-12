import React from "react";
import { Link } from "react-router-dom";

function HeroSection3() {
  return (
    <section>
      <div className="mt-5 hero-section3  flex flex-col-reverse sm:flex-col md:flex-row lg:px-20 lg:py-10 justify-center items-center">
        <div className="flex flex-col  justify-center items-center mt-10">
          <h2 className="stars  p-3 pr-12">COMFORT TO THE CORE</h2>
          <p className=" star-p">Introducing the new Apple Crisp Macchiato with notes of caramelized apples, brown sugar and spiced apple drizzle. Available hot or iced.*</p>.
          <Link className="font-semibold links text-white -mt-1 section-link rounded-full border text-sm  border-white px-14 py-2  mb-5">
            Join Now
          </Link>
        </div>

        <div>
          <img
            src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg'
            alt=""
          />
        </div>
      </div>
       <div className="flex justify-center  bg-white py-14">
       <h1 className="font-bold text-3xl lg:text-5xl tracking-wider section-link">MORE TO DISCOVER</h1>
      </div>
    </section>
  );
}

export default HeroSection3;









