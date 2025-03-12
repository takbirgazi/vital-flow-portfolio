"use client"
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';


const Mission = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])
    return (
        <div className="px-4 flex gap-8 justify-between flex-col lg:flex-row my-10 pt-5">
            <div data-aos="fade-up" className="w-full lg:w-1/2">
                <figure className="rounded-3xl overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/xolhj23w9rvPPDhG1vbAIr7CyM.jpg" alt="Second Image" height={650} width={650} />
                </figure>
            </div>
            <div data-aos="fade-up" className="w-full lg:w-1/2">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Our Mission</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold max-w-[450px] py-5">Transforming lives with  medical solutions</h2>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <div className="flex justify-center">
                            <figure className="p-2 border rounded-full h-10 w-10 ">
                                <Image src="https://framerusercontent.com/images/sdkm6N57fWncpomyI7AjAyaqb8.svg" height={100} width={100} alt="Icon" />
                            </figure>
                        </div>
                        <div className="flex-grow px-4">
                            <h4 className="font-bold text-lg">Compassionate care</h4>
                            <p className="text-gray-600 font-semibold pt-2 lg:max-w-96">Our mission is to provide personalized and empathetic healthcare for individual.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex justify-center">
                            <figure className="p-2 border rounded-full h-10 w-10 ">
                                <Image src="https://framerusercontent.com/images/20TytrC69fPY1WMd6xJoWcTjAQ.svg" height={100} width={100} alt="Icon" />
                            </figure>
                        </div>
                        <div className="flex-grow px-4">
                            <h4 className="font-bold text-lg">Excellence in service</h4>
                            <p className="text-gray-600 font-semibold pt-2 lg:max-w-96">We strive to deliver high-quality, reliable, and innovative medical solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <CustomButton link="/" title="Book a call" />
                </div>
            </div>
        </div>
    );
};

export default Mission;