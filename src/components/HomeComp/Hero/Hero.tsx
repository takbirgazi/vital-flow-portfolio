import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";


const Hero = () => {

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center pb-10">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <div className="flex gap-4">
                    <div className="flex gap-0.5">
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                    </div>
                    <p className="font-semibold text-gray-800">5.0 (980 Reviews)</p>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold pr-8">Partner in health and wellness</h2>
                <p className="text-lg text-gray-600 font-semibold max-w-96">Providing advanced healthcare solutions with a compassionate touch for every patient.</p>
                <div className="flex flex-wrap items-center gap-4">
                    <CustomButton link="/" title="Book a call" />
                    <div className="hover:scale-95 rounded-full font-medium font-sans overflow-hidden transition-transform duration-300 flex items-center gap-2 cursor-pointer">
                        <p className="border rounded-full flex justify-center items-center h-8 w-8"><FaPlay className="text-sm" /></p>
                        <p>Watch Video</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Avatar className="border-2 border-white h-12 w-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-white -ml-3 h-12 w-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-white -ml-3 h-12 w-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="pb-5">
                        <p className="font-medium text-gray-800 text-sm md:text-lg">5000+ Appointments</p>
                        <p className="text-xs md:text-sm text-gray-500 font-medium">Patients booked already</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <figure className="rounded-3xl overflow-hidden">
                    <Image className="w-full h-full rounded-tl-full rounded-tr-full" src="https://framerusercontent.com/images/QWGYc3VxV2AHgxTMvuMS6R0NryY.jpg" height={850} width={500} alt="Hero" />
                </figure>
            </div>
        </div>
    );
};

export default Hero;