import { faqData } from "@/constants/faqData";
import React from "react";

const Faq = () => {
  return (
    <div className="w-fit mt-5 rounded-2xl bg-white md:pt-9 md:pr-[73px] md:pb-14 md:pl-20 p-5 shadow-lg max-w-[830px] ">
      <h1 className="max-w-[500px] text-gary-1 font-bold text-3xl mb-6">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, i) => (
        <div key={i}>
          <h3 className="text-[#0b1426] text-[20px] font-bold">
            {i + 1}. {faq.question}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: faq.answer }}
            className="faq"
          />
          <hr className="block border-t my-7 border-[rgba(201,207,221,0.60)]" />
        </div>
      ))}
    </div>
  );
};

export default Faq;
