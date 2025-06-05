import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react';
import logo from "@/assets/images/logo-light.png";
import { AlignRight, Eclipse, HandMetal, Sun,X } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full py-4 px-4 md:px-8 z-50 transition duration-500  ${isScroll ? 'bg-sky-600' : 'bg-gradient-to-tl from-sky-500 to-sky-700'}`}>
        {/* <div className={`absolute top-0 left-0 w-full h-full bg-sky-700 transition duration-500 ${isScroll ? 'opacity-100' : 'opacity-0'}`}></div> */}
        <div className='container mx-auto flex items-center justify-between'>
          <a href='#top'>
              <Image 
                  alt='Jemson Logo'
                  src={logo}
                  width={145}
                  height={70}
                  className='w-28 cursor-pointer mr-14'
              />
          </a>
          <ul className='hidden md:flex item-center gap-6 lg:gap-8 px-12 py-3'>
            <li><a className='font-montserrat text-white' href='#top' >Home</a></li>
            <li><a className='font-montserrat text-white' href='#about' >About Me</a></li>
            <li><a className='font-montserrat text-white' href='#work'>My Work</a></li>
            <li><a className='font-montserrat text-white' href='#contact' >Contact me</a></li>
          </ul>
          <div className='flex items-center gap-4'>
            <a className='hidden font-montserrat lg:flex items-center gap-3 px-8 py-1.75 border-2 border-orange-300 rounded-full ml-4 text-white hover:bg-orange-300 duration-200' href='#contact'>
              Say hello <HandMetal />
            </a>
            <button onClick={() => setIsDarkMode(prev => !prev)} className="cursor-pointer">
              {isDarkMode ? <Eclipse color='white'/> : <Sun color='white'/>}
            </button>
            <button className='block md:hidden ml-3' onClick={openMenu}>
              <AlignRight color='white'/>
            </button>
          </div>
        </div>
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-sky-700 transition duration-500'>
            <div className='cursor-pointer absolute right-6 top-6' onClick={closeMenu}>
              <X />
            </div>
            <li><a className='font-montserrat text-white' onClick={closeMenu} href='#top' >Home</a></li>
            <li><a className='font-montserrat text-white' onClick={closeMenu} href='#about' >About Me</a></li>
            <li><a className='font-montserrat text-white' onClick={closeMenu} href='#work'>My Work</a></li>
            <li><a className='font-montserrat text-white' onClick={closeMenu} href='#contact' >Contact me</a></li>
          </ul>
      </nav>
      <></>
    </>
  )
}

export default Navbar
