import TeamCard from "@/components/AboutUsComp/Team/TeamCard/TeamCard";
import TestimonialCard from "@/components/HomeComp/Testimonials/TestimonialCard/TestimonialCard";

const page = () => {
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
    const testimonialData = [
        {
            id: 1,
            imageUrl: "https://framerusercontent.com/images/2D6XtXtVf2ZPpchW6wNLcqq9Zc.webp",
            name: "Emily Johnson",
            desc: "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
            reviewStar: 5,
        },
        {
            id: 2,
            imageUrl: "https://framerusercontent.com/images/OSg5NrirhnZIfnqszjqlMPbQsg.svg",
            name: "Michael Roberts",
            desc: "The support I received was excellent. They truly cared about my needs and exceeded my expectations.",
            reviewStar: 5,
        },
        {
            id: 3,
            imageUrl: "https://framerusercontent.com/images/2m6Vf3e8eE5i2wfOrSvAT78ctmI.webp",
            name: "Achieve your vision",
            desc: "Experience seamless results as we bring your perfect vision to life with precision and care.",
            reviewStar: 5,
        },
        {
            id: 4,
            imageUrl: "https://framerusercontent.com/images/0ko6NgdhqGj0qbhzn4Aq5k20K8.webp",
            name: "Olivia Harris",
            desc: "They were attentive and thorough. Their professionalism and kindness made the entire process seamless.",
            reviewStar: 5,
        },
        {
            id: 5,
            imageUrl: "https://framerusercontent.com/images/ISS0EEHdkUjhAYoYmhKS3GAD0yE.webp",
            name: "James Anderson",
            desc: "My experience was remarkable. They delivered exactly what they promised with care and dedication.",
            reviewStar: 5,
        },
        {
            id: 6,
            imageUrl: "https://framerusercontent.com/images/2aBRvSse0zJnzpuCOdsM4CUcy0.webp",
            name: "Daniel Thompson",
            desc: "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.",
            reviewStar: 5,
        }
    ]

    return (
        <div className="pt-32 container mx-auto pb-10 px-4">
            <div className="flex flex-col justify-center items-center mb-5">
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
            <div className="flex flex-col justify-center items-center my-5 mt-12">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Testimonials</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">What our satisfied and happy clients have to say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
                {
                    testimonialData.map(testimonial => <TestimonialCard key={testimonial.id} testimonialCard={testimonial} />)
                }
            </div>
        </div>
    );
};

export default page;