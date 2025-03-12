import Link from "next/link";

interface ButtonType {
    title: string,
    link: string
}

const CustomButton: React.FC<ButtonType> = ({ title, link }) => {
    return (
        <div className="flex h-[45px]">
            <Link href={link} className="group relative bg-[#3D66FF] text-white rounded-full px-6 py-3 font-medium font-sans overflow-hidden transition-all duration-300 hover:bg-opacity-90" >
                <span className="block transition-transform duration-300 group-hover:-translate-y-8"> {title} </span>
                <span className="absolute transition-all duration-300 group-hover:top-3 top-14"> {title} </span>
            </Link>
        </div>
    );
};

export default CustomButton;