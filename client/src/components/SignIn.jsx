import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); 
    };

    return (
        <div className=" px-12 py-4">
          
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
        </div>
    );
}

export default SignIn;
