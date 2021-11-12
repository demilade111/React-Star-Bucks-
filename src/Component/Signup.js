import React from 'react'
import {useForm} from 'react-hook-form'

function Signup() {
    const form = useForm()
      const { register } = useForm();
    
    return (
   
       <div className="mx-auto max-w-xl flex flex-col p-20" >
      <h4 className="mb-5 text-center font-bold text-2xl">Signup</h4>
      <form className="flex justify-center item-center flex-col w-80 ">
        <input  className=" border-2 bg-green-100 text-black focus:outline-none py-2 px-10 mb-4"  placeholder="Username"  />
        <input className=" border-2 bg-green-100 text-black focus:outline-none py-2 px-10 mb-4" placeholder="Email"/>
        <input className=" border-2 bg-green-100 text-black focus:outline-none py-2 px-10 mb-4" placeholder="Password"  />
        <button className="border-2 w-20 mx-auto bg-black text-white py-2 " type="submit">Submit</button>
      </form>
    </div>
     
    )
}

export default Signup
