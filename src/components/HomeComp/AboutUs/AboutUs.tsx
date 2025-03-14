"use client"
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';


const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])
    return (
        <div data-aos="zoom-in-up" className="flex gap-8 justify-between flex-col lg:flex-row my-10 pt-5">
            <div className="w-full lg:w-1/2">
                <figure className="rounded-3xl overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/xolhj23w9rvPPDhG1vbAIr7CyM.jpg" alt="Second Image" height={650} width={650} />
                </figure>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">About us</p>
                </div>
                <h2 className="text-4xl font-semibold max-w-[450px] py-5">Vision for a healthier and brighter tomorrow</h2>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <div className="flex justify-center">
                            <figure className="p-2 border rounded-full h-10 w-10 ">
                                <Image src="https://framerusercontent.com/images/A1ZmC0IwvYRr5KwUKiM7Ie8KCUc.svg" height={100} width={100} alt="Icon" />
                            </figure>
                        </div>
                        <div className="flex-grow px-4">
                            <h4 className="font-bold text-lg">Our Mission</h4>
                            <p className="text-gray-600 font-semibold pt-2 lg:max-w-96">Our mission is to deliver compassionate and high-quality healthcare services.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex justify-center">
                            <figure className="p-2 border rounded-full h-10 w-10 ">
                                <Image src="https://framerusercontent.com/images/SyIOdBm4fZQjyR5wOYEZ0L7VV4.svg" height={100} width={100} alt="Icon" />
                            </figure>
                        </div>
                        <div className="flex-grow px-4">
                            <h4 className="font-bold text-lg">Our Vision</h4>
                            <p className="text-gray-600 font-semibold pt-2 lg:max-w-96">Leading healthcare provider, recognized for innovative practices and care.</p>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <CustomButton link="/" title="What we do" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;