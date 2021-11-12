import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';

function Signin() {

const validate=(values)=>{
let errors = {}
  if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
   
   if (!values.password) {
     errors.password = ' Password Required';
   } else if (values.password.length < 20) {
errors.password = ' Password must be at least 8 characters'
   }
    
   return errors
}


  const Formik = useFormik({
    initialValues:{
      email: '',
      password: ''
     
    },
     validate,
  })


  return (
   <div class="grid grid-cols-1 lg:grid-cols-2 h-screen">

 <div className=" shadow-2xl">
        <Link to="/">
          <img
            class="nav_logo cursor-pointer h-10 m-8"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
        <h1 className="text-center text-3xl font-bold py-48">
          Sign in or create an account 🌟
        </h1>
      </div>
      <div className="flex signin flex-col py-28 items-center space-y-10">
        <form  onSubmit={Formik.handleSubmit} className="space-y-10 w-1/2">
          <input  value={Formik.values.email} onChange={Formik.handleChange} className="input focus:border-blue-500 focus:animate-bounce py-1" type="text" name="email" id="email"  placeholder="Email Address"/>
           {Formik.errors.email ? <div>{Formik.errors.email}</div> : null}
          <br/>
          <input value={Formik.values.passsword} onChange={Formik.handleChange} className="input focus:border-blue-500 py-1" type="text" placeholder="Password" name="password" id="password" />
          {Formik.errors.password ? <div>{Formik.errors.password}</div> : null}
          <div className="flex flex-col">
          <Link className="signup-Links">Forgot your username?</Link>
           <Link className="signup-Links">Forgot your password?</Link>
           <button className="button_sign bg-green-400 block w-20 mx-auto mt-5 rounded-full py-1 font-bold text-white"  type="submit">Sign In</button>
          </div>
        </form>
      </div>
     </div>
   );
 }

export default Signin;
