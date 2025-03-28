import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdOutlinePermPhoneMsg } from 'react-icons/md'
import AboutImgOne from "../../assets/image/Logoimg.png"

function Footer() {
    return (
        <div className='flex max-w-[80%] mx-auto justify-between py-20'>
           
                <div>
                    <img className='w-[150px] ' src={AboutImgOne} alt="" />
                    <p>we are dedicated to <br /> providing innovative and <br />strategic IT solutions <br /> that drive business <br /> success.</p>
                </div>
                <div className=''>
                    <h1 className='text-[24px] font-bold text-[#12151A]'>Useful Link</h1>
                    <ul>

                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Capability Statement</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

          

            <div>
                <h1 className='text-[24px] font-bold text-[#12151A]'>Get In Touch</h1>
                <p> <MdOutlinePermPhoneMsg /> +1 636-244-3219</p>
                <p><FaLocationDot /> 7827 Town Square Ave Suite 104-1167 Ofallon, MO 63368 United States</p>
                <p> <MdEmail />info@orangetechconsultants.com</p>
            </div>

        </div>
    )
}

export default Footer