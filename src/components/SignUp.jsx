import React from 'react'
// import { useNavigate } from 'react-router-dom';


function SignUp() {
    //    const navigate = useNavigate();
    
    //     const handleBackClick = () => {
    //         navigate('/'); 
    //     };
  return (
    <div className=" px-12 py-10">
           {/* <IoIosArrowRoundBack onClick={handleBackClick} className="cursor-pointer mb-4 text-2xl font-bold" /> */}
    <div className="text-center mb-8">
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

    <button className=' bg-black w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-600 mb-8'>Sign Up</button>


</div>
  )
}

export default SignUp