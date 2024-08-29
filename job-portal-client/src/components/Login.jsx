import React from 'react';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Perform actions after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        // Handle errors during login
      });
  };






  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl font-bold text-secondary sm:text-3xl text-center">
        Get Started Today
      </h1>
      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugiat
        dolorum laudantium totam a maxime?
      </p>

      <div className="mx-auto max-w-lg mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <form className="space-y-4 ">
          <p className="text-center text-red-400 text-lg font-medium">
            Sign into your Account
          </p>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            
              </span>
            </div>
          </div>

          {/* password */}
          <div>
            <label htmlFor="password" className="sr-only">
                Password
            </label>
            <div className="relative">
              <input
                // type={ ? 'text' : 'password'}
                name="password"
                placeholder="Enter Password"
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 grid place-content-center px-4">

               
              </span>
            </div>
          </div>

          <button onClick={handleLogin} type="submit" className="block w-full rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-white">Sign in</button>
          <p className="text-center text-sm text-gray-500">No account ? <button className="underline text-black" to="/register">Sign up</button></p>
        </form>

        {/* <GoogleLogin/> */}
        <motion.button
        onClick={handleLogin}
            // variants={buttonVariants}
            whileHover="hover"
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            {" "}
            Login
          </motion.button>
      </div>
    </div>
  );


};

export default Login;

