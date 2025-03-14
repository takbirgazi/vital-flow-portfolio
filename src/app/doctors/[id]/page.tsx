import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa"

const page = () => {
    return (
        <div className="pt-32 container mx-auto max-w-[1200px] px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="w-full lg:w-2/5">
                    <figure className="rounded-3xl overflow-hidden bg-[#f5faff]">
                        <Image className="h-full w-full" src="https://framerusercontent.com/images/LIq8WkhPLY2ZsfOPWAoIwMmWm0.png" height={950} width={450} alt="Image" />
                    </figure>
                </div>
                <div className="w-full lg:w-3/5">
                    <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold py-1">Jonathan Reed</h2>
                    <h4 className="text-gray-500 text-lg font-semibold">Gastroenterologist</h4>
                    <div className="border-t border-b border-gray-400 py-5 my-5">
                        <div className="flex w-full justify-between gap-4 py-1">
                            <p className="w-1/2 text-base lg:text-lg font-semibold text-gray-800">Experience</p>
                            <p className="w-1/2 text-gray-500 text-base lg:text-lg font-semibold">5 years</p>
                        </div>
                        <div className="flex w-full justify-between gap-4 py-1">
                            <p className="w-1/2 text-base lg:text-lg font-semibold  text-gray-800">Qualifications</p>
                            <p className="w-1/2 text-gray-500 text-base lg:text-lg font-semibold">DO, MPH</p>
                        </div>
                        <div className="flex w-full justify-between gap-4 py-1">
                            <p className="w-1/2 text-base lg:text-lg font-semibold  text-gray-800">Working hours</p>
                            <p className="w-1/2 text-gray-500 text-base lg:text-lg font-semibold">7 Hours</p>
                        </div>
                        <div className="flex w-full justify-between gap-4 py-1">
                            <p className="w-1/2 text-base lg:text-lg font-semibold  text-gray-800">Location</p>
                            <p className="w-1/2 text-gray-500 text-base lg:text-lg font-semibold">45 Elm Avenue, New York, NY 10001</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a className="flex justify-center items-center border border-gray-300 rounded-md p-2" href="#"><FaLinkedinIn className="text-lg" /></a>
                        <a className="flex justify-center items-center border border-gray-300 rounded-md p-2" href="#"><FaTwitter className="text-lg" /></a>
                        <a className="flex justify-center items-center border border-gray-300 rounded-md p-2" href="#"><FaFacebookF className="text-lg" /></a>
                    </div>
                </div>
            </div>
            <div className="py-8 max-w-4xl mx-auto">
                <div className="py-4">
                    <h2 className="text-gray-800 text-3xl font-semibold py-1">About:</h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-7 font-semibold pb-5">Dr. Olivia Bennett is a board-certified dermatologist with over 14 years of experience in treating a wide range of skin conditions. She graduated with honors from the University of Pennsylvania Perelman School of Medicine and completed her dermatology residency at the University of California, San Francisco.</p>
                    <p className="text-gray-600 text-base lg:text-lg leading-7 font-semibold">Dr. Bennett is highly regarded for her expertise in both medical and cosmetic dermatology, providing patients with comprehensive care that addresses their skin health and aesthetic concerns. Her approach is centered on understanding each patient’s unique skin type and concerns, allowing her to create personalized treatment plans that achieve optimal results.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-gray-800 text-3xl font-semibold py-1">Experience:</h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-7 font-semibold pb-5">Where she led a team of dermatologists in providing state-of-the-art care for patients with complex skin conditions. Additionally, she has held a faculty position at the University of Southern California, where she taught dermatology residents and contributed to the development of new dermatological curricula.</p>
                    <p className="text-gray-600 text-base lg:text-lg leading-7 font-semibold">Dr. Bennett’s extensive experience in both clinical and cosmetic dermatology allows her to offer a wide range of treatments, from managing chronic skin conditions to performing advanced cosmetic procedures.</p>
                </div>
                <div className="py-4">
                    <h2 className="text-gray-800 text-3xl font-semibold py-1">Specialities & Info:</h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-7 font-semibold pb-5">Specializes in treating a variety of dermatological conditions, including acne, eczema, psoriasis, and rosacea, using the latest evidence-based practices to ensure effective and lasting results. She is also highly skilled in cosmetic dermatology, offering treatments such as Botox, dermal fillers, and laser therapy to help patients achieve their aesthetic goals. </p>
                    <p className="text-gray-600 text-base lg:text-lg leading-7 font-semibold">Dr. Bennett’s expertise in skin cancer detection and treatment is another key aspect of her practice, where she emphasizes the importance of early detection and prevention.</p>
                </div>
            </div>
        </div>
    );
};

export default page;