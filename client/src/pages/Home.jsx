import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gradient-to-b from-purple-950 to-black min-h-screen text-white px-14">
      <div className=' text-[65px] leading-[5.5rem]'>Connect <br />friends <br /> <span className=' font-bold'>easily & <br />quickly</span></div>
      <div className=' leading-8 pt-6'>Our chat app is the perfect way to stay connected to friends and family.</div>

      <div>
      <div className=' flex items-center justify-center gap-6 p-5'>
        <div className=' border rounded-full p-2'>
          <FaFacebook className=' cursor-pointer text-2xl' />
        </div >
        <div className=' border rounded-full p-2'>
          <FcGoogle className=' cursor-pointer text-2xl' /></div>
        <div className=' border rounded-full p-2'>
          <FaApple className=' cursor-pointer text-2xl' />
        </div>
      </div>
<div className=' text-center'>OR</div>
<div className=' flex justify-center pt-4 flex-col'>

      <button onClick={()=>navigate('/SignUp')} className=' bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-slate-200'>Sign up with email</button>
      </div>
    
        <div className=' text-center pt-4 text-xs'>Already have an account?  
        <Link to="/SignIn" className=' font-bold pl-1'>
        Log in 
        </Link>
        </div>
</div>

    </div>
  )
}

export default Home