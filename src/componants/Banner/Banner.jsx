import React from 'react'
// import BackgroundImg from "../../assets/image/BannerImg.png"
import BannerImgOne from "../../assets/image/Bannerimg.png"
// import { GiSparkles } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="bg-[#FFF4ED]"
        >

            <div className='font-alexandria flex max-w-[80%] mx-auto items-center justify-between h-full '>
                <div className='w-[666px] space-y-10'>
                    <h1 className='text-[70px] font-semibold text-[#000000]'>Orange  Tech Consultants</h1>
                    <p className='text-[18px] font-medium text-[#5A5A5A]'> Vision: “To be a trusted leader in AI-driven  technology fsolutions that <br /> enhance security,innovation, and operational excellence.”</p>
                      


                        <div className='flex gap-10 justify-start w-full '>
                            <div>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify  gap-2 rounded-[12px] hover:bg-[#FF7A00] px-4 py-2 text-[20px] font-medium text-[#FF6C0A] hover:text-[#FFFFFF] border border-[#E86F00] transition-colors w-[167px] h-[56px]"
                                >
                                    Explore Now
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 rounded-[12px] hover:bg-[#FF7A00]  px-4 py-2 text-[20px] font-medium text-[#FF6C0A] hover:text-[#FFFFFF] border border-[#E86F00] transition-colors w-[167px] h-[56px]"
                                >
                                    Connect Us
                                </Link>
                            </div>
                        </div>
                    
                </div>
                <div>

                    <img className='' src={BannerImgOne} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Banner