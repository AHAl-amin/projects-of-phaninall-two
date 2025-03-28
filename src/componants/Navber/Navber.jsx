
import React, { useState } from 'react'
import LogoImage from "../../assets/image/Logoimg.png"
import MicrophonImage from "../../assets/image/microphon.png"
import { Link } from 'react-router-dom';

function Navber() {

    const [isOpen, setIsOpen] = useState(false);
    return (


       <div className='w-full  z-50 fixed py-8'>
         <div className="flex sm:justify-between max-w-[80%] mx-auto font-lora  absulote"> 
            <div className='flex flex-row-reverse gap-3'>
                <div><img src={LogoImage} alt="" /></div>

                {/* Mobile menu button */}


                <div className="md:hidden ">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            <div
                className={`absolute top-16 left-0 rounded-lg  text-center  transition-all duration-300 md:static md:w-auto md:bg-transparent md:flex md:items-center md:gap-6 w-1/3 ${isOpen ? "block" : "hidden"
                    }`}
            >


                <ul className='flex md:flex-row flex-col gap-10 text-[#1A0E05]   '>

                    <Link className=' rounded'>Home</Link>
                    <Link className='rounded '>About Us</Link>
                    <Link className=' rounded'>Our Services</Link>
                    <Link className=' rounded'>Capability Statement</Link>
                    <Link className=' rounded'>Careers </Link>
                    <Link className=' rounded'>Contact Us </Link>
                </ul>
            </div>
            <div className='flex gap-2 text-[#1A0E05]'>
                <div>
                    <img className='text-[#1A0E05]' src={MicrophonImage} alt="" />
                </div>
                <p className=' h-[12px]'>+1 636-244-3219</p>
            </div>
        </div>
       </div>







    )
}

export default Navber