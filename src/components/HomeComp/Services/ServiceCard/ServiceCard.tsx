"use client"
import AOS from 'aos';
import { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface ServiceType {
    serviceCard: {
        id: number,
        iconUrl: string,
        title: string,
        desc: string,
    }
}

const ServiceCard: React.FC<ServiceType> = ({ serviceCard }) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    return (
        <div data-aos="zoom-in-up" className="p-4 rounded-3xl bg-[#f5faff] group cursor-pointer">
            <div className="flex justify-center items-center">
                <figure className="bg-[#edf4ff] p-4 rounded-full">
                    <Image className="h-10 w-10" src={serviceCard.iconUrl} alt="Icon" height={200} width={200} />
                </figure>
            </div>
            <div className="pt-5">
                <h4 className="font-bold text-lg text-center">{serviceCard.title}</h4>
            </div>
            <div className="py-3">
                <p className="font-bold text-center text-gray-500 max-w-72 mx-auto">{serviceCard.desc}</p>
            </div>
            <div className="flex gap-2 group-hover:gap-4 transition-all duration-300 justify-center items-center">
                <p className="text-gray-800 font-semibold text-center">View Services</p>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default ServiceCard;