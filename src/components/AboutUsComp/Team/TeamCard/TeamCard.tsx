import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface TeamType {
    teamData: {
        id: number,
        name: string,
        imageUrl: string,
        deg: string
    }
}

const TeamCard: React.FC<TeamType> = ({ teamData }) => {
    return (
        <div className=" group cursor-pointer">
            <figure className="rounded-3xl bg-[#f5faff] h-96 overflow-hidden">
                <Image className="w-full h-full" src={teamData.imageUrl} height={850} width={450} alt={teamData.name} />
            </figure>
            <div className="py-5 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800">{teamData.name}</h2>
                    <p className="border rounded-md p-2 mx-2">
                        <FaArrowRight />
                    </p>
                </div>
                <h4 className="text-gray-500 text-lg font-semibold">{teamData.deg}</h4>
            </div>
        </div>
    );
};

export default TeamCard;