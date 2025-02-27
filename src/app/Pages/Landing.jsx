//TODO: add a bottom nav bar that just does something????
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