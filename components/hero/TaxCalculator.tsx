"use client";

import { taxBrackets } from "@/constants/taxData";
import { useState } from "react";
import ConstantFeilds from "../tax-calculator-items/ConstantFeilds";
import TickSvg from "../svg/TickSvg";

const TaxCalculator = () => {
  const [selectedIncomeRange, setSelectedIncomeRange] = useState(
    taxBrackets[1].incomeRange
  );
  const [taxRate, setTaxRate] = useState(1);
  const [isLongTerm, setIsLongTerm] = useState(true);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedIncomeRange(e.target.value);
    setTaxRate(selectedIndex);
  };

  return (
    <div className="flex-1 rounded-2xl bg-white pt-9 pr-[73px] pb-14 pl-20">
      <h1 className="bg-white text-gary-1 text-center font-bold text-4xl leading-10 mb-10">
        Free Crypto Tax Calculator Australia
      </h1>
      <ConstantFeilds />
      <hr className="block border-t my-7 border-[rgba(201,207,221,0.60)]" />

      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-between items-center">
          <div className="w-[300px] h-20 flex flex-col gap-2">
            <label
              htmlFor="purchasePrice"
              className="text-sm font-normal text-gary-1"
            >
              Enter purchase price of Crypto
            </label>
            <input
              type="text"
              className="p-4 w-full rounded-lg bg-textarea"
              id="purchasePrice"
            />
          </div>
          <div className="w-[300px] h-20 flex flex-col gap-2">
            <label
              htmlFor="salePrice"
              className="text-sm font-normal text-gary-1"
            >
              Enter sale price of Crypto
            </label>
            <input
              type="text"
              className="p-4 w-full rounded-lg bg-textarea"
              id="salePrice"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-[300px] h-20 flex flex-col gap-2">
            <label
              htmlFor="expence"
              className="text-sm font-normal text-gary-1"
            >
              Enter your Expenses
            </label>
            <input
              type="text"
              className="p-4 w-full rounded-lg bg-textarea"
              id="expence"
            />
          </div>
          <div className="w-[300px] flex gap-2 flex-col">
            <span className="text-sm font-normal text-gary-1">
              Investment Type
            </span>
            <div className="items-center justify-between flex">
              <div className="flex flex-col gap-2 w-[49%]">
                <button
                  onClick={() => setIsLongTerm(!isLongTerm)}
                  className={`px-4 py-2 flex leading-8 w-full rounded-lg bg-white border border-[#3E424A]  ${
                    !isLongTerm &&
                    "border-[#0052FE] text-[#0141CF] font-medium bg-[rgba(0,82,254,0.06)]"
                  }`}
                >
                  Short Term {!isLongTerm && <TickSvg />}
                </button>
                <span className="text-sm">&lt; 12 months</span>
              </div>
              <div className="flex flex-col gap-2 w-[49%]">
                <button
                  onClick={() => setIsLongTerm(!isLongTerm)}
                  className={`px-4 py-2 flex leading-8 w-full rounded-lg bg-white border border-[#3E424A]  ${
                    isLongTerm &&
                    "border-[#0052FE] text-[#0141CF] font-medium bg-[rgba(0,82,254,0.06)]"
                  }`}
                >
                  Long Term {isLongTerm && <TickSvg />}
                </button>
                <span className="text-sm">&gt; 12 months</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-[300px] h-20 flex flex-col gap-2">
            <label
              htmlFor="annualIncome"
              className="text-sm font-normal text-gary-1"
            >
              Select Your Annual Income
            </label>
            <select
              id="annualIncome"
              className="w-full py-4 px-3 rounded-lg bg-textarea border-none outline-none"
              value={selectedIncomeRange}
              onChange={handleSelectChange}
            >
              {taxBrackets.map((range, i) => (
                <option key={i}>{range.incomeRange}</option>
              ))}
            </select>
          </div>
          <div className="w-[300px] h-20 flex flex-col gap-2 justify-center">
            <p className="text-sm text-[#3E424A]">Tax Rate</p>
            <p className="text-sm text-[#3E424A]">
              {taxBrackets[taxRate].taxRate}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-[300px] h-20 flex flex-col gap-2">
            <label
              htmlFor="capitalGain"
              className="text-sm font-normal text-gary-1"
            >
              Capital gains amount
            </label>
            <input
              type="text"
              className="p-4 w-full rounded-lg bg-textarea"
              id="capitalGain"
            />
          </div>
          <div className="w-[300px] h-20 flex flex-col gap-2">
            <label
              htmlFor="discount"
              className="text-sm font-normal text-gary-1"
            >
              Discount for long term gains
            </label>
            <input
              type="text"
              className="p-4 w-full rounded-lg bg-textarea"
              id="discount"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
