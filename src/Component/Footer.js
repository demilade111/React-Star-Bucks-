import React from 'react'


function Footer() {
    return (

<footer class="footer bg-white relative pt-20 border-b-2 border-gray-700">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 uppercase mb-2 cursor-pointer">About Us</span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">Our Heritage</a></span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">Our Coffee</a></span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">Stories and News</a></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Careers</span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">Culture and Values</a></span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">College Acheivement Plan</a></span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">International Careers</a></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Order and Pickup</span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium">Order on the Web</a></span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium ">Order on the App</a></span>
                    <span class="my-2"><a href="#" class="text-gray-600  text-base font-medium ">Delivery</a></span>
                </div>
            </div>
        </div>
    </div>
     <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-gray-600 font-bold mb-2">
                    © 2021 by Demilade
                </p>
            </div>
        </div>
    </div>
    
</footer>
    )
}

export default Footer
