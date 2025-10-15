import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";


const container = {
  hidden: {opacity: 1},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.4},
  },
}

const fadeUp = {
  hidden: {opacity: 0, y: 10},
  show: {opacity: 1, y:0, transition:{ duration: 0.9, ease: "easeOut"}}
}

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div className=" justify-center text-center bg-gradient-to-b from-purple-950 to-black min-h-screen text-white px-14  lg:pt-11 items-center flex"
    variants={container} initial="hidden" animate="show">
      <div className='w-[600px]'>
      <motion.div variants={fadeUp}>
      <div className=' text-[65px] leading-[5.5rem]'>Connect friends <br /> <span className=' font-bold'>easily & quickly</span></div>
      <div className=' leading-8 pt-6'>Our chat app is the perfect way to stay connected to friends and family.</div>
      </motion.div>

      <div className=' mt-5'>
      {/* <div className=' flex items-center justify-center gap-6 p-5'>
        <div className=' border rounded-full p-2'>
          <FaFacebook className=' cursor-pointer text-2xl' />
        </div >
        <div className=' border rounded-full p-2'>
          <FcGoogle className=' cursor-pointer text-2xl' /></div>
        <div className=' border rounded-full p-2'>
          <FaApple className=' cursor-pointer text-2xl' />
        </div>
      </div>
<div className=' text-center'>OR</div> */}

<motion.div variants={fadeUp} className=' flex justify-center pt-4 flex-col'>

      <motion.button whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} onClick={()=>navigate('/SignUp')} className=' bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-slate-200'>Sign up with email</motion.button>
      </motion.div>
    
        <motion.div variants={fadeUp} className=' text-center pt-4 text-xs'>Already have an account?  
        <Link to="/SignIn" className=' font-bold pl-1'>
        Log in 
        </Link>
        </motion.div>
</div>
</div>
    </motion.div>
  )
}

export default Home