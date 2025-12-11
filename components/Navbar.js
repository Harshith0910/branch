"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname();

  const showNav = ["/"].includes(pathname);

  return (
    <>
      {showNav &&
        <nav className='bg-white w-[95vw] lg:w-[90vw] mx-auto my-auto shadow-md rounded-full p-3 lg:p-5 top-4 lg:top-11 left-0 right-0 px-5 lg:px-10 fixed z-50'>
          <div className="flex mx-auto my-auto items-center justify-between">
            <Link href={"/"}>
              <div className="logo flex items-center cursor-pointer gap-2">
                <h1 className='text-black text-2xl lg:text-3xl font-bold'>branch</h1>
                <img src="./assets/branch.png" className="h-8 w-6 lg:h-10 lg:w-[30px]" alt="branch" />
              </div>
            </Link>
            <div className="buttons ml-auto flex items-center gap-2 lg:gap-4">
              <Link href={"/generate"}>
              <button className='text-black font-bold rounded-lg border-gray-400 bg-gray-300 py-2 px-4 lg:py-4 lg:px-6 cursor-pointer hover:bg-gray-200 text-sm lg:text-base'>Try Now</button>
              </Link>
              <Link href={"/about"}>
              <button className='bg-black text-white font-bold py-2 px-4 lg:py-4 lg:px-6 rounded-full cursor-pointer hover:bg-gray-800 text-sm lg:text-base'>About</button>
              </Link>
            </div>
          </div>
        </nav>
      }
    </>
  )
}

export default Navbar