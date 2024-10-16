import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    const menuOpen = () =>{
        setIsOpen(!isOpen);
    }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between 
    border-b border-b-gray-700 bg-black/70 px-16 py-10 text-white background-blur-md md:justify-evenly">
      
      <a href="#home" className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 
      text-3xl font-semibold transition-all duration-300 hover:opacity-100'>Jarvis</a>

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Home</li>
        </a>

        <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Tech</li>
        </a>

        <a href="#Project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Project</li>
        </a>

        <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
        </a>
      </ul>

      {isOpen ?(
        <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>   
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col item-start justify-start gap-10 
        border-1 border-gray-800 bg-black/90 p-12 ${ isOpen ? "block" : "hidden"}`}>
            
            <ul className="flex flex-col gap-8">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </a>

                <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>

                <a href="#Project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Project</li>
                </a>    

                <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar