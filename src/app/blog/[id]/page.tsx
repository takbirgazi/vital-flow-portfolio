import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="pt-32 container mx-auto max-w-[1200px] pb-10 px-4">
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg text-gray-500">Sep 4, 2024</p>
                </div>
                <h2 className="text-xl lg:text-5xl font-bold text-center max-w-[750px] py-5">The Benefits of Regular Exercise: A Pathway to Health</h2>
            </div>
            <div className="flex justify-center items-center pb-8">
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
            <div className="pt-5">
                <figure className="rounded-3xl overflow-hidden">
                    <Image className="h-full w-full" src="https://framerusercontent.com/images/u2V0kvYmCKhMOsHxZZQ9QDUTg.jpg" height={450} width={980} alt="Icon" />
                </figure>
            </div>
            <div className="max-w-3xl mx-auto pt-9">
                <p className="font-semibold text-lg text-gray-500">Regular exercise is one of the most effective ways to enhance overall health and well-being. Engaging in physical activity offers numerous benefits that extend beyond just physical fitness. From improving cardiovascular health to boosting mental clarity, incorporating exercise into your daily routine can lead to a healthier and more fulfilling life.</p>
                <h2 className="text-xl lg:text-3xl font-bold py-5">How Exercise Enhances Physical Health</h2>
                <p className="font-semibold text-lg text-gray-500">Exercise has a profound impact on physical health by strengthening the heart, improving circulation, and increasing lung capacity. Regular physical activity helps to maintain a healthy weight, reduce the risk of chronic diseases such as diabetes and heart disease, and improve muscle and bone strength. <br /> <br /> Furthermore, exercise can enhance flexibility and balance, reducing the risk of falls and injuries, particularly as we age. </p>
                <h2 className="text-xl lg:text-3xl font-bold py-5">Incorporating Exercise into Your Daily Routine</h2>
                <p className="font-semibold text-lg text-gray-500">Incorporating exercise into your routine does not require hours at the gym. Simple activities like brisk walking, cycling, or even gardening can provide substantial health benefits. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, along with muscle-strengthening exercises on two or more days. Finding activities you enjoy can make exercise feel less like a chore and more like a rewarding part of your daily life. <br /> <br /> Regular exercise is a cornerstone of a healthy lifestyle. By making physical activity a consistent part of your routine, you can enjoy a range of health benefits and improve your overall quality of life.</p>
            </div>
        </div>
    );
};

export default page;