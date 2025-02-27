//TODO: adoauth with github and google g
'use client';
import React from 'react'
import Navbar from './LandingComponents/Navbar';
import MainArea from './LandingComponents/MainArea';
import BottomNav from './LandingComponents/BottomNav';
import Login from './Login/login';

const Landing = () => {
  return (
    <div>
      {/* <Navbar></Navbar>
      <MainArea></MainArea>  */}

        <Login></Login>

    </div>
  )
}

export default Landing