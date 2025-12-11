import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './pages/Profile';


function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path = 'profile' element={<Profile/>}/>
     </Routes>
      
    </>
  )
}

export default App
