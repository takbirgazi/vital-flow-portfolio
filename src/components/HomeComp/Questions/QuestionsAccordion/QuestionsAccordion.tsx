import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionType {
    questionAnsData: {
        id: number,
        question: string,
        answer: string
    }[]
}

const QuestionsAccordion: React.FC<AccordionType> = ({ questionAnsData }) => {
    return (
        <Accordion type="multiple" className="w-full">
            {
                questionAnsData.map(questionAns => <AccordionItem key={questionAns.id} value={`item-${questionAns.id}`}>
                    <AccordionTrigger>{questionAns.question}</AccordionTrigger>
                    <AccordionContent>{questionAns.answer}</AccordionContent>
                </AccordionItem>)
            }
        </Accordion>
    )
}

export default QuestionsAccordion;