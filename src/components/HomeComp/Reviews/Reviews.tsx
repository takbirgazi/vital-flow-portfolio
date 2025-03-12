"use client"
import AOS from 'aos';
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";


const Reviews = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    return (
        <div data-aos="zoom-in-up" className="container mx-auto px-8 py-10 rounded-4xl bg-[#4586ff1a] my-5">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <h2 className="text-xl lg:text-4xl text-gray-800 font-semibold">Virtual Consultation</h2>
                <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex gap-0.5">
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                    </div>
                    <p className="font-semibold text-lg text-gray-800">5.0 (980 Reviews)</p>
                </div>
            </div>
            <div className="py-5">
                <form className="flex flex-col lg:flex-row justify-between items-center gap-4" action="">
                    <div className="flex flex-col w-full">
                        <label className="font-semibold pb-2 text-gray-600" htmlFor="name">Name</label>
                        <input className="w-full border border-transparent outline-0 focus:border-[#4586ff] py-3 px-5 rounded-xl bg-white bg-opacity-20 flex-grow" type="text" placeholder="Jane Smith" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-semibold pb-2 text-gray-600" htmlFor="doctor">Doctor</label>
                        <input className="w-full border border-transparent outline-0 focus:border-[#4586ff] py-3 px-5 rounded-xl bg-white bg-opacity-20 flex-grow" type="text" placeholder="Dr Maria Cleven" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-semibold pb-2 text-gray-600" htmlFor="location">Location</label>
                        <input className="w-full border border-transparent outline-0 focus:border-[#4586ff] py-3 px-5 rounded-xl bg-white bg-opacity-20 flex-grow" type="text" placeholder="Amsterdem" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold pb-2 text-gray-600" htmlFor="name">&nbsp;</label>
                        <input className="px-8 py-3 rounded-xl bg-primaryBg text-lg text-white font-semibold" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <h2 className="text-4xl lg:text-6xl font-semibold">200K+</h2>
                <p className="max-w-52 font-semibold text-gray-600">Cured satisfied patients around the globe</p>
            </div>
        </div>
    );
};

export default Reviews;