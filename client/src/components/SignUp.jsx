import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from 'axios';


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

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
    });

  // state for loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit =async (e)=>{
      e.preventDefault();
      setError('')
      if(!formData.name || !formData.email || !formData.password){
        setError("Please fill in all required fields");
        return;
      }

      setLoading(true);
  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
console.log("Success: ", response.data);
navigate('/SignIn')
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    setError(error.response?.data?.message || "Signup failed. Please try again")

  }finally{
    setLoading(false)
  }
}

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
    
{
  error && (
    <div className='mb-4 p-3 bg-red-100 text-red-700 rounded'>
      {error}
    </div>
  )
}
<form onSubmit={handleSubmit}>
 <div className="mb-6 flex flex-col">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b p-2 rounded bg-none outline-none"
            />
          </div>

          <div className="mb-6 flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b p-2 rounded bg-none outline-none"
            />
          </div>

    <div className="mb-6 flex flex-col">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-b p-2 bg-none outline-none"
            />
          </div>
{/* 
          <div className="mb-14 flex flex-col">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-b p-2 bg-none outline-none"
            />
          </div> */}

    <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className='bg-black w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-600 mb-8 disabled:opacity-50'
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </motion.button>

</form>
</motion.div>

</motion.div>
  )
}

export default SignUp