"use client"
import AOS from 'aos';
import { useEffect } from "react";
import TeamCard from "./TeamCard/TeamCard";

const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    const teamData = [
        {
            id: 1,
            name: "Jonathan Reed",
            imageUrl: "https://framerusercontent.com/images/LIq8WkhPLY2ZsfOPWAoIwMmWm0.png",
            deg: "Gastroenterologist",
        },
        {
            id: 2,
            name: "Olivia Bennett",
            imageUrl: "https://framerusercontent.com/images/uy58zG5Y51l3vrf4YpJ035IAazY.png",
            deg: "Dermatologist",
        },
        {
            id: 3,
            name: "David Harris",
            imageUrl: "https://framerusercontent.com/images/yE9PhxJZefSZDzbKrFIGp3iX7c.png",
            deg: "Pediatrician",
        },
        {
            id: 4,
            name: "Emily Rogers",
            imageUrl: "https://framerusercontent.com/images/Z567nO19AiXrUBAUGhCiIDOtE.png",
            deg: "Orthopedic",
        },
        {
            id: 5,
            name: "Michael Carter",
            imageUrl: "https://framerusercontent.com/images/iZQkSsxwXep32bgrVNG17hmx4qs.png",
            deg: "Cardiologist",
        },
        {
            id: 6,
            name: "Sarah thompson",
            imageUrl: "https://framerusercontent.com/images/U3kCZ3nHpAQPEt6WqmIwbmjcGQU.png",
            deg: "Neurologist",
        },
    ];

    return (
        <div>
            <div data-aos="fade-up" className="flex flex-col justify-center items-center mb-5">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Team</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">Meet our dedicated and experienced team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    teamData.map(team => <TeamCard key={team.id} teamData={team} />)
                }
            </div>
        </div>
    );
};

export default Team;