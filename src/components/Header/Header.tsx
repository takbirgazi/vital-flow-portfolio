import logo from "@/assets/images/icon.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu/MobileMenu";
import CustomButton from "../SharedComponent/CustomButton/CustomButton";


const Header = () => {
    const links = [
        {
            id: 1,
            title: "About",
            slag: "/about"
        },
        {
            id: 2,
            title: "Services",
            slag: "/services"
        },
        {
            id: 3,
            title: "Doctors",
            slag: "/doctors"
        },
        {
            id: 4,
            title: "Blog",
            slag: "/blog"
        }
    ]
    return (
        <nav className="bg-white p-4 z-40 fixed w-full">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex gap-1 items-center">
                    <figure>
                        <Image className="h-10 w-10" src={logo} height={200} width={200} alt="Logo" />
                    </figure>
                    <h2 className="font-semibold text-xl">Vital+Flow</h2>
                </Link>
                <div className="hidden md:flex justify-center items-center gap-4">
                    {
                        links.map(menu => <Link className="font-bold text-gray-800" href="/" key={menu.id}>{menu.title}</Link>)
                    }
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <CustomButton link="/" title="Book a call" />
                </div>
                <MobileMenu links={links} />
            </div>
        </nav>
    );
};

export default Header;