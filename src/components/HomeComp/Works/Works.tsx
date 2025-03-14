import WorksCard from "./WorksCard/WorksCard";

const Works = () => {
    const workData = [
        {
            id: 1,
            imageUrl: "https://framerusercontent.com/images/BwJlMFVIoFqaHXWgG0P7vlIqAM.webp?scale-down-to=512",
            title: "Share your preferences",
            desc: "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
        },
        {
            id: 2,
            imageUrl: "https://framerusercontent.com/images/jJjwlImmKLqhr5SdvtunsDUAME.jpg?scale-down-to=512",
            title: "Customized solutions",
            desc: "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
        },
        {
            id: 3,
            imageUrl: "https://framerusercontent.com/images/3f9q0tEEcQxswK0pZCZ91xK4aA4.webp?scale-down-to=512",
            title: "Achieve your vision",
            desc: "Experience seamless results as we bring your perfect vision to life with precision and care.",
        }
    ]
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">How it works</p>
                </div>
                <h2 className="text-4xl font-semibold text-center max-w-[450px] py-5">Step-by-step process for seamless user experience</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
                {
                    workData.map(work => <WorksCard key={work.id} workCard={work} />)
                }
            </div>
        </div>
    );
};

export default Works;