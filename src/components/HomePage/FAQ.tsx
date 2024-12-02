"use client"
import { useState } from "react";

interface FAQDataType {
    title : string,
     description : string
}
const FAQ = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const FAQData : FAQDataType[] = [
        {
          title: "Why is digital marketing important for my business?",
          description: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.',
        },
        {
          title: "How can digital marketing help improve my website's visibility?",
          description: "Digital marketing improves website visibility by optimizing your site for search engines (SEO), using paid advertisements (PPC), and creating engaging content that attracts organic traffic. Social media marketing and link building also play crucial roles.",
        },
        {
          title: "How long does it take to see results from digital marketing efforts?",
          description: "The time to see results varies depending on the strategies used. SEO efforts may take several months, while paid ads can show results almost immediately. On average, measurable improvements may take 3 to 6 months.",
        },
        {
          title: "How do you measure the success of digital marketing campaigns?",
          description: "Success is measured using metrics like website traffic, conversion rates, lead generation, return on investment (ROI), and user engagement. Analytics tools like Google Analytics can help track and evaluate these metrics.",
        },
      ];
    const toggle = (idx : number) => {
      setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };
  
    return (
        <section className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 py-20 md:py-32 mx-auto">
             <div className="space-y-2">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Frequently</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">asked questions</h1>
            </div>
            <div className="w-full mt-10  rounded-lg bg-white  *:mix-blend-difference dark:bg-zinc-800">
            {FAQData.map((PerAccordion : FAQDataType  , idx) => (
                <div key={idx} className="border-b-2 border-white rounded-lg px-4 py-3 ">
                    <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium text-white outline-none">
                        <span className="text-left text-lg font-bold max-w-xs">{PerAccordion.title}</span>
                        <span className="rounded-full p-2">
                            <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                            </svg>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default FAQ;