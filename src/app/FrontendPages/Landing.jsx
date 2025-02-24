//TODO: add a bottom nav bar that just does something????
'use client';
import React from 'react'
import Navbar from './LandingComponents/Navbar';
import MainArea from './LandingComponents/MainArea';
import BottomNav from './LandingComponents/BottomNav';

const Landing = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainArea></MainArea>
    </div>
  )
}

export default Landing