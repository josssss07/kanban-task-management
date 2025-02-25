//TODO: add a bottom nav bar that just does something????
'use client';
import React from 'react'
import Navbar from './LandingComponents/Navbar';
import MainArea from './LandingComponents/MainArea';
import BottomNav from './LandingComponents/BottomNav';
import PomodoroTimer from './Pomodoro/pomodoro';
const Landing = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainArea></MainArea> 
      <PomodoroTimer></PomodoroTimer>
    </div>
  )
}

export default Landing