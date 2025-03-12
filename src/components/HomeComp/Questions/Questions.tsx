"use client"
import AOS from 'aos';
import { useEffect } from "react";
import QuestionsAccordion from "./QuestionsAccordion/QuestionsAccordion";

const Questions = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    const qusetionAns = [
        {
            id: 1,
            question: "What services do you offer?",
            answer: "We provide a comprehensive range of services designed to meet diverse healthcare needs. These include personalized consultations, preventative care programs, advanced diagnostic tools, and specialized treatments."
        },
        {
            id: 2,
            question: "How can I book an appointment?",
            answer: "Booking an appointment is simple and convenient. You can use our online scheduling platform, which allows you to select a time slot that suits you best. Alternatively, you can call our dedicated support line, where a friendly team member will assist you."
        },
        {
            id: 3,
            question: "Are your services available 24/7?",
            answer: "Yes, we provide round-the-clock services to meet your needs. Our virtual consultation platform is accessible 24/7, allowing you to connect with healthcare professionals anytime. For in-person visits, our emergency care"
        },
        {
            id: 4,
            question: "Do you accept insurance?",
            answer: "Yes, we accept most major insurance plans to make healthcare accessible and affordable for everyone. Our team can assist you in understanding your coverage and submitting claims."
        },
        {
            id: 5,
            question: "What makes your care unique?",
            answer: "Our care stands out because of our commitment to personalized attention and patient satisfaction. We take the time to understand your specific needs and preferences, ensuring tailored solutions for optimal outcomes."
        }
    ]
    return (
        <div data-aos="zoom-in-up" className="pb-5">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">FAQ&lsquo;s</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">Frequently asked questions for quick answers</h2>
            </div>
            <div className="max-w-5xl mx-auto px-4">
                <QuestionsAccordion questionAnsData={qusetionAns} />
            </div>
        </div>
    );
};

export default Questions;