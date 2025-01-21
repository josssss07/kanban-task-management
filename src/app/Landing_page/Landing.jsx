'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/#'); 
  };

  return (
    <div className='bg-black h-full w-full p-3'>
      <button
        onClick={handleRedirect}
        className='px-4 py-3 bg-main-purple text-white rounded hover:bg-main-purple-hover'
      >
        Go to Dashboard
      </button>

    </div>

    // <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-red">
    //   <nav className="p-10 flex items-center justify-between">
    //     <div className="text-xl font-bold">Navbar goes here (make this a component)</div>
    //     <button
    //       onClick={handleRedirect}
    //       className="flex items-center px-6 py-3 text-white font-semibold text-sm uppercase tracking-wide rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out"
    //     >
    //       Go to Dashboard
    //     </button>
    //   </nav>
    //   <div className="flex items-center justify-center">
    //     <h1 className="text-4xl font-extrabold text-gray-200">Kanban</h1>
    //   </div>
    // </div>
  );
}
