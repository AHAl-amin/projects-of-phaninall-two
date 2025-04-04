import React from "react";
import AboutBannerImg from "../../assets/image/aboutBannerimg.png";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";

function About() {
    return (
        <div className="h-screen "
            style={{
                backgroundImage: `url(${AboutBannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}
        >
            <div className="max-w-[80%] mx-auto  font-alexandria py-32">
                <h1 className="text-[#FF6C0A] text-[32px] font-bold text-center  ">ABOUT  US
                <div className="w-[60px] h-[2px] bg-[#303030] mx-auto "></div>
                </h1>
                <p className="text-[#B29D8F] text-[16px] w-[750px] text-center mx-auto py-10">Our mission is to drive innovation and empower businesses with cutting-edge technology solutions that exceed expectations and fuel long-term success.</p>

                <div className="flex gap-10">

                    <div className="w-1/2 mt-14">
                   <img src={"/AboutImg.svg"} alt="" />
                    </div>
                    <div className="w-1/2 ">
                        <h1 className="text-[48px] font-semibold text-[hsl(25,67%,12%)] pb-6">Orange Tech Consultants
                           
                        </h1>
                        <div className="text-[20px] text-[#4D3A2E] font-medium space-y-8">
                            <p>At Orange Tech Consultants, we redefine innovation in technology services. Specializing in AI/ML, Generative AI, DevSecOps, Cloud & Data Engineering, SRE, and Full Stack Development, we deliver cutting-edge solutions for a digital-first world.</p>
                            <p>
                                We help businesses unlock their potential through custom solutions, automation, and modern web applications. With a focus on security, scalability, and performance, we navigate challenges and drive lasting success.
                            </p>
                            <Link
                                href="#"
                                className=" flex  gap-2 rounded-[12px] hover:bg-[#FF7A00] px-4 py-2 text-[20px] font-medium text-[#FF6C0A] hover:text-[#FFFFFF] border border-[#E86F00] transition-colors w-[190px] h-[50px]"
                            >
                                Read More
                                <GoArrowRight />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
