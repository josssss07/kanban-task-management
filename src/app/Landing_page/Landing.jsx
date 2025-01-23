'use client';

import { useRouter } from 'next/navigation';
import Navbar from '../Componets/Navbar';
import HomePageDesign from '../Componets/Home_layout';

export default function LandingPage() {

  return (
    <div>
      <Navbar></Navbar>
      <HomePageDesign></HomePageDesign>
    </div>
  );
}
