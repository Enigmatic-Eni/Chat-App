import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const container = {
  hidden: {opacity: 1},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.5},
  },
}

const fadeUp = {
  hidden: {opacity: 0, y: 10},
  show: {opacity: 1, y:0, transition:{ duration: 0.6, ease: "easeOut"}}
}

function SignIn() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); 
    };

    return (
         <motion.div className=' justify-center items-center flex'  variants={container} initial="hidden" animate="show">
        <motion.div className=" w-[450px] py-4" variants={fadeUp}>
          
            <IoIosArrowRoundBack onClick={handleBackClick} className="cursor-pointer mb-4 text-2xl font-bold" />

            <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-2">Log in to Chatbox</p>
                <p className=' text-sm'>Welcome back! Sign in using your social accounts or email</p>
            </div>

            <div className="mb-6 flex flex-col">
                <label>Email</label>
                <input type="email" className="border-b p-2 rounded bg-none outline-none" />
            </div>

            <div className="mb-14 flex flex-col">
                <label>Password</label>
                <input type="password" className="border-b p-2 bg-none outline-none" />
            </div>

            <button className=' bg-black w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-600 mb-8'>Sign In</button>

<div className=' text-center'>
            <Link className=' text-sm text-green-800 font-medium hover:text-black' to={""}>Forgot Password?</Link>
            </div>
        </motion.div>
        </motion.div>
    );
}

export default SignIn;
