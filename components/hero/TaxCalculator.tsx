"use client";

import { taxBrackets, taxData } from "@/constants/taxData";
import { useState, useEffect } from "react";
import ConstantFeilds from "../tax-calculator-items/ConstantFeilds";
import TickSvg from "../svg/TickSvg";
import Result from "../tax-calculator-items/Result";
import TaxBracket from "../tax-calculator-items/TaxBracket";

const TaxCalculator = () => {
  const [selectedIncomeRange, setSelectedIncomeRange] = useState(
    taxBrackets[2].incomeRange
  );
  const [taxRate, setTaxRate] = useState(2);
  const [isLongTerm, setIsLongTerm] = useState(true);
  const [salePrice, setSalePrice] = useState(30000);
  const [purchasePrice, setPurchasePrice] = useState(20000);
  const [expenses, setExpenses] = useState(5000);
  const [discount, setDiscount] = useState(2500);
  const [capitalGain, setCapitalGain] = useState(5000);
  const [netTax, setNetTax] = useState(2500);
  const [tax, setTax] = useState(812.5);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedIncomeRange(e.target.value);
    setTaxRate(selectedIndex);
  };

  useEffect(() => {
    let newValue = salePrice - purchasePrice - expenses;

    let newDiscount = newValue / 2;

    setCapitalGain(newValue);
    setDiscount(newDiscount);

    if (isLongTerm) {
      let newnetTax = capitalGain - discount;
      console.log(newnetTax);

      setNetTax(newnetTax);
    } else {
      setNetTax(capitalGain);
    }

    let taxPercentage = taxData[taxRate];
    let finalTax = (taxPercentage * netTax) / 100;
    setTax(finalTax);
  }, [
    isLongTerm,
    taxRate,
    salePrice,
    purchasePrice,
    expenses,
    discount,
    netTax,
    tax,
  ]);

  return (
    <div className="flex-1 sm:w-[90%] rounded-2xl bg-white lg:pt-9 lg:pr-[73px] lg:pb-14 lg:pl-20 p-4 shadow-lg">
      <h1 className="bg-white text-gary-1 text-center font-bold md:text-4xl leading-10 mb-10 text-2xl">
        Free Crypto Tax Calculator Australia
      </h1>
      <ConstantFeilds />
      <hr className="block border-t my-7 border-[rgba(201,207,221,0.60)]" />

      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-between items-center flex-col md:flex-row md:gap-0 gap-6">
          <div className="md:w-[300px] w-full h-20 flex flex-col gap-2">
            <label
              htmlFor="purchasePrice"
              className="text-sm font-normal text-gary-1"
            >
              Enter purchase price of Crypto
            </label>
            <input
              type="number"
              className="p-4 w-full rounded-lg bg-textarea"
              id="purchasePrice"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(parseInt(e.target.value))}
            />
          </div>
          <div className="md:w-[300px] w-full h-20 flex flex-col gap-2">
            <label
              htmlFor="salePrice"
              className="text-sm font-normal text-gary-1"
            >
              Enter sale price of Crypto
            </label>
            <input
              type="number"
              className="p-4 w-full rounded-lg bg-textarea"
              id="salePrice"
              value={salePrice}
              onChange={(e) => setSalePrice(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center flex-col md:flex-row md:gap-0 gap-6">
          <div className="md:w-[300px] w-full h-20 flex flex-col gap-2">
            <label
              htmlFor="expence"
              className="text-sm font-normal text-gary-1"
            >
              Enter your Expenses
            </label>
            <input
              type="number"
              className="p-4 w-full rounded-lg bg-textarea"
              id="expence"
              value={expenses}
              onChange={(e) => setExpenses(parseInt(e.target.value))}
            />
          </div>
          <div className="md:w-[300px] w-full flex gap-2 flex-col">
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
        <div className="flex w-full justify-between items-center flex-col md:flex-row md:gap-0 gap-6">
          <div className="md:w-[300px] w-full h-20 flex flex-col gap-2">
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
          <TaxBracket taxRate={taxBrackets[taxRate].taxRate} />
        </div>
        <Result
          isLongTerm={isLongTerm}
          capitalGain={capitalGain}
          discount={discount}
          netTax={netTax}
          tax={tax}
        />
      </div>
    </div>
  );
};

export default TaxCalculator;
