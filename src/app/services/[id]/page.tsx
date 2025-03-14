import Image from "next/image";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";


const page = () => {
    return (
        <div className="pt-32 container mx-auto max-w-[1200px] px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pb-8">
                <div className="w-full lg:w-1/2">
                    <div className="flex">
                        <figure className="bg-[#edf4ff] h-14 w-14 p-2.5 rounded-full">
                            <Image className="h-full w-full" src="https://framerusercontent.com/images/oa7iWbia3J9oxRWSoVclVtaRMs.svg" alt="Icon" height={100} width={100} />
                        </figure>
                    </div>
                    <div className="py-8">
                        <h2 className="text-5xl font-semibold pb-4">Pediatrics</h2>
                        <p className="text-gray-500 font-semibold text-xl max-w-xl leading-8">Monitor your childs growth and development closely to ensure their health at every stage.</p>
                    </div>
                    <div className="flex">
                        <Link href="/" className="flex justify-evenly">
                            <figure className="bg-[#edf4ff] h-12 w-12 rounded-full overflow-hidden">
                                <Image className="w-full h-full" src="https://framerusercontent.com/images/iZQkSsxwXep32bgrVNG17hmx4qs.png" height={400} width={400} alt="Icon" />
                            </figure>
                            <div className="flex-grow px-4">
                                <h2 className="text-lg font-medium text-gray-800">Michael Carter</h2>
                                <p className="text-gray-500 text-xs font-medium">Cardiologist</p>
                            </div>
                            <div className="pl-4">
                                <figure className="p-1 overflow-hidden h-6 w-6">
                                    <Image src="https://framerusercontent.com/images/H2yMxEfG2x7BhV8t8KeF48vFI.svg" height={20} width={20} alt="Icon" />
                                </figure>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <figure className="rounded-3xl overflow-hidden">
                        <Image className="h-full w-full" src="https://framerusercontent.com/images/gxvvbRkfpK9f5pTvHEVqSICheBI.jpg" height={950} width={450} alt="Image" />
                    </figure>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 pb-8 mt-8">
                <div className="w-full lg:w-1/3 bg-[#f5faff] rounded-3xl p-8">
                    <h1 className="text-gray-800 font-semibold text-3xl">Book a call with specialist Now!!</h1>
                    <div className="pt-8 flex flex-col gap-3">
                        <a className="flex items-center gap-4 text-lg font-semibold" href="tel:(253) 456 - 1189">
                            <MdCall className="text-2xl" />
                            <span>(253) 456 - 1189</span>
                        </a>
                        <a className="flex items-center gap-4 text-lg font-semibold" href="tel:(253) 456 - 1189">
                            <FaEnvelope className="text-2xl" />
                            <span>name@gmail.com</span>
                        </a>
                        <a className="flex items-center gap-4 text-lg font-semibold" href="tel:(253) 456 - 1189">
                            <FaMapMarkerAlt className="text-2xl" />
                            <span>(253) 456 - 1189</span>
                        </a>
                    </div>
                    <div className="pt-7 w-full">
                        <CustomButton link="/" title="Book a call" />
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <h2 className="text-4xl font-semibold pb-4">About service:</h2>
                    <p className="text-gray-500 text-lg font-semibold">Our orthopaedics department specializes in diagnosing and treating musculoskeletal conditions, ensuring mobility and quality of life. From fractures to joint replacements, we provide advanced care tailored to your specific needs. <br /> <br /> Equipped with modern facilities and expert surgeons, we offer effective solutions for sports injuries, arthritis, and other orthopedic challenges. Your recovery and long-term health are our utmost priority.</p>
                    <ul className="pt-4 pl-5.5">
                        <li className="list-disc text-gray-500 text-lg font-semibold pb-2">Advanced diagnostic imaging and musculoskeletal assessments.</li>
                        <li className="list-disc text-gray-500 text-lg font-semibold pb-2">Surgical and non-surgical treatment options for fractures, dislocations, and other injuries.</li>
                        <li className="list-disc text-gray-500 text-lg font-semibold pb-2">Specialized care for joint disorders, including arthritis and tendonitis.</li>
                        <li className="list-disc text-gray-500 text-lg font-semibold pb-2">Comprehensive rehabilitation and physical therapy programs.</li>
                        <li className="list-disc text-gray-500 text-lg font-semibold pb-2">Preventive care and education to support long-term musculoskeletal health.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;