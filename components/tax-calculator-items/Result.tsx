import React from "react";
type ResultProps = {
  isLongTerm: boolean;
  capitalGain: number;
  discount: number;
  netTax: number;
  tax: number;
};

const Result = ({
  isLongTerm,
  capitalGain,
  discount,
  netTax,
  tax,
}: ResultProps) => {
  return (
    <>
      {isLongTerm && (
        <div className="flex w-full justify-between items-center flex-col md:flex-row md:gap-0 gap-6">
          <div className="md:w-[300px] w-full h-20 flex flex-col gap-2">
            <span className="text-sm font-normal text-gary-1">
              Capital gains amount
            </span>
            <div className="p-4 w-full rounded-lg bg-textarea">
              $ {capitalGain}
            </div>
          </div>
          <div className="md:w-[300px] w-full h-20 flex flex-col gap-2">
            <span className="text-sm font-normal text-gary-1">
              Discount for long term gains
            </span>
            <div className="p-4 w-full rounded-lg bg-textarea">
              $ {discount}
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full justify-between items-center flex-col md:flex-row md:gap-0 gap-6">
        <div className="p-4 w-full md:w-[48%] rounded-lg flex flex-col gap-2 bg-[#EBF9F4] items-center justify-center">
          <span className="text-gray-1 text-base font-medium">
            Net Capital gains tax amount
          </span>
          <span className="text-[#0FBA83] text-2xl font-bold">$ {netTax}</span>
        </div>
        <div className="p-4 w-full md:w-[48%]  rounded-lg bg-[#EBF2FF] items-center justify-center flex flex-col gap-2">
          <span className="text-gray-1 text-base font-medium">
            The tax you need to pay
          </span>
          <span className="text-[#0141CF] text-2xl font-bold">$ {tax}</span>
        </div>
      </div>
    </>
  );
};

export default Result;
