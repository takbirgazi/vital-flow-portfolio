"use client"
import AOS from 'aos';
import { useEffect } from "react";
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";


const WhyUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    return (
        <div data-aos="zoom-in-up" className="flex flex-col lg:flex-row gap-4 justify-between my-5 lg:pb-16 pb-5">
            <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Why us</p>
                </div>
                <h2 className="text-4xl font-semibold max-w-[450px] py-5 mb-5">Why choose VitalFlow for your healthcare?</h2>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                        <p className=" p-3 border rounded-full h-10 w-10 flex justify-center items-center">
                            <span className="text-gray-800">01</span>
                        </p>
                        <div className="flex-grow px-4">
                            <h4 className="font-bold text-lg">Experienced Professionals</h4>
                            <p className="text-gray-600 font-semibold pt-2 lg:max-w-96">Our team of dedicated healthcare providers brings years of experience and expertise to deliver care</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className=" p-3 border rounded-full h-10 w-10 flex justify-center items-center">
                            <span className="text-gray-800">02</span>
                        </p>
                        <div className="flex-grow px-4">
                            <h4 className="font-bold text-lg">Advanced Technology</h4>
                            <p className="text-gray-600 font-semibold pt-2 lg:max-w-96">We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments</p>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <CustomButton link="/" title="Get Started" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 relative min-h-96">
                <figure className="rounded-3xl overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/VkQIGu6u7FhBCugBtnRpiFrmFw.jpg?scale-down-to=512" alt="Second Image" height={650} width={650} />
                </figure>


                <div className="absolute lg:-bottom-10 lg:-left-16 bottom-0 left-14 bg-white p-4 rounded-2xl w-60 lg:w-80">
                    <div className="py-4">
                        <h4 className="font-medium">Available Doctors</h4>
                        <p className="text-xs text-gray-600">Choose Doctors</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <Avatar className="border-2 border-white h-12 w-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <h4 className="font-bold text-lg">Jonathan Reed</h4>
                                <p className="text-gray-600 font-semibold text-sm pt-1">Gastroenterologist</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Avatar className="border-2 border-white h-12 w-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <h4 className="font-bold text-lg">Jonathan Reed</h4>
                                <p className="text-gray-600 font-semibold text-sm pt-1">Gastroenterologist</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center rounded-lg bg-[#4586ff1e] my-2">
                        <Link href="/" className="text-center text-primaryBg font-semibold py-2">Meet Our Experts</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;