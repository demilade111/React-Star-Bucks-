import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <div className="flex  background">
        <p className=" px-10 max-w-3xl m-auto py-7 text-base lg:text-xl font-semibold">
          We’re working hard to put the health and well-being of our partners
          and customers first in all that we do.
          <Link className="underline hover:no-underline">Learn more</Link>{" "}
        </p>
      </div>
        </>
    )
}

export default Hero
