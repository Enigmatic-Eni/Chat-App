import React from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";


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


function SignUp() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); 
    };

  return (
    <motion.div className=' justify-center items-center flex'  variants={container} initial="hidden" animate="show">
    <motion.div className="py-10 w-[450px]" variants={fadeUp}>
            
                      <IoIosArrowRoundBack onClick={handleBackClick} className="cursor-pointer mb-4 text-2xl font-bold" />
    <div  className="text-center mb-8">
        <p className="text-2xl font-bold mb-2">Sign Up to Chatbox</p>
        <p className=' text-sm'>Get chatting with friends and family today by signing up for our chat app!</p>
    </div>
    
    <div className="mb-6 flex flex-col">
        <label>Name</label>
        <input type="name" className="border-b p-2 rounded bg-none outline-none" />
    </div>

    <div className="mb-6 flex flex-col">
        <label>Email</label>
        <input type="email" className="border-b p-2 rounded bg-none outline-none" />
    </div>

    <div className="mb-6 flex flex-col">
        <label>Password</label>
        <input type="password" className="border-b p-2 bg-none outline-none" />
    </div>
    <div className="mb-14 flex flex-col">
        <label> Confirm Password</label>
        <input type="password" className="border-b p-2 bg-none outline-none" />
    </div>

    <motion.button whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className=' bg-black w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-600 mb-8'>Sign Up</motion.button>
</motion.div>

</motion.div>
  )
}

export default SignUp