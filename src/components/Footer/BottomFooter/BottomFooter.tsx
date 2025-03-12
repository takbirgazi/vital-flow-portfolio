import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/icon.svg";
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";


const BottomFooter = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">
                <div className="w-full lg:w-1/3">
                    <Link href="/" className="flex gap-1 items-center">
                        <figure>
                            <Image className="h-10 w-10" src={logo} height={200} width={200} alt="Logo" />
                        </figure>
                        <h2 className="font-semibold text-xl">Vital+Flow</h2>
                    </Link>
                    <p className="py-5 text-lg text-gray-600 font-semibold max-w-96">Creative healthcare template to launch your site quick and easily</p>
                    <CustomButton link="/" title="Book a call" />
                </div>
                <div className="w-full lg:w-2/3">
                    <h2 className="text-gray-800 text-2xl font-semibold">Stay up to date</h2>
                    <div className="">
                        <div className="flex flex-col sm:flex-row gap-3 w-full pt-5">
                            <input className="border-0 outline-0 py-3 px-5 rounded-xl bg-[#4586ff0e] bg-opacity-20 flex-grow max-w-96" type="text" placeholder="name@rmail.com" />
                            <input className="px-8 py-3 rounded-xl bg-primaryBg text-lg text-white font-semibold" type="submit" value="Subscribe" />
                        </div>
                        <p className="text-gray-500 font-semibold py-3">by subscribing you will agree to privacy and policy</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" >

                        <div>
                            <p className="text-gray-800 font-semibold py-8">Static pages</p>
                            <div className="flex flex-col gap-4">
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Home</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">About</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Contact</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">404</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold py-8">CMS Pages</p>
                            <div className="flex flex-col gap-4">
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Services</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Doctors</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Careers</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Blogs</Link>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-800 font-semibold py-8">Detail pages</p>
                            <div className="flex flex-col gap-4">
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Services (CMS)</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Doctors (CMS)</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Careers (CMS)</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Blogs (CMS)</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold py-8">Follow us</p>
                            <div className="flex flex-col gap-4">
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">LinkedIn</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Twitter</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Facebook</Link>
                                <Link className="text-gray-500 hover:text-gray-800 transition duration-300 font-semibold" href="/">Youtube</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomFooter;