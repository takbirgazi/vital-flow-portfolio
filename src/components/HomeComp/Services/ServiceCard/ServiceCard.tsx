"use client"
import AOS from 'aos';
import { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

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
        <Link href={`/services/${serviceCard.id}`} data-aos="zoom-in-up" className="p-4 rounded-3xl bg-[#f5faff] group cursor-pointer">
            <div className="flex justify-center items-center">
                <figure className="bg-[#edf4ff] h-14 w-14 p-2.5 rounded-full">
                    <Image className="h-full w-full" src={serviceCard.iconUrl} alt={serviceCard.title} height={100} width={100} />
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
        </Link>
    );
};

export default ServiceCard;