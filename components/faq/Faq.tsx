import { faqData } from "@/constants/faqData";
import React from "react";

const Faq = () => {
  return (
    <div className="w-fit mt-5 rounded-2xl bg-white pt-9 pr-[73px] pb-14 pl-20 max-w-[830px]">
      <h1 className="max-w-[500px] text-gary-1 font-bold text-3xl mb-6">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, i) => (
        <div key={i}>
          <h3 className="text-[#0b1426] text-[20px] font-bold">
            {i + 1}. {faq.question}
          </h3>
          <p className="text-[#3e424a] text-sm mt-[10px] leading-[160%] font-medium">
            {faq.answer}
          </p>
          <hr className="block border-t my-7 border-[rgba(201,207,221,0.60)]" />
        </div>
      ))}
    </div>
  );
};

export default Faq;

/*
height: 129px;
flex-shrink: 0;
align-self: stretch;
color: var(--gray-2, #3E424A);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 160%;
 */
