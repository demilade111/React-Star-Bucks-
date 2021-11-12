import React from 'react'
import { Link } from "react-router-dom";

function Discover() {
    return (
        <section className="flex flex-col md:flex-row  space-y-4 md:space-x-4">
        <div className="background">
        <img className="mb-10 w-full object-cover" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg" alt="" />
        <h2>Order and pick up. Easy as that.</h2>
        <p>Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.</p>
        
        </div>
        <div className="background">
        <img className="mb-10" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg" alt="" />
         <h2 className="mt-10">Coffee delivered. Day made.</h2>
        <p>Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31.</p>
      
        </div>
            
        </section>
    )
}

export default Discover
