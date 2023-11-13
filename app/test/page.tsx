"use client";
import CalculatorForm from "@/components/test/CalculatorForm";
import ResultDisplay from "@/components/test/ResultDisplay";
import React, { useState } from "react";

interface TaxCalculationResult {
  taxRate: string;
  capitalGainsAmount: number;
  discountForLongTermGains: number;
  netCapitalGains: number;
  taxToPay: number;
}

interface FormData {
  purchasePrice: number;
  salePrice: number;
  expenses: number;
  investmentType: "Long Term" | "Short Term";
  annualIncome: string;
}

const calculateTax = (formData: FormData): TaxCalculationResult => {
  const taxBrackets = [0, 0.19, 0.325, 0.37, 0.45];

  let calculatedTaxRate = "0%";
  for (const bracket in taxBrackets) {
    const incomeBracket = parseInt(bracket);
    if (parseInt(formData.annualIncome.replace(/\D/g, "")) <= incomeBracket) {
      calculatedTaxRate = `${taxBrackets[incomeBracket] * 100}%`;
      break;
    }
  }

  const capitalGainsAmount =
    formData.salePrice - formData.purchasePrice - formData.expenses;

  let discountForLongTermGains = 0;
  if (formData.investmentType === "Long Term" && capitalGainsAmount > 0) {
    discountForLongTermGains = 0.5 * capitalGainsAmount;
  }

  const netCapitalGains =
    formData.investmentType === "Long Term"
      ? capitalGainsAmount - discountForLongTermGains
      : capitalGainsAmount;

  const calculatedTaxToPay =
    netCapitalGains *
    (taxBrackets[parseInt(formData.annualIncome.replace(/\D/g, ""))] || 0);

  return {
    taxRate: calculatedTaxRate,
    capitalGainsAmount,
    discountForLongTermGains,
    netCapitalGains,
    taxToPay: calculatedTaxToPay,
  };
};

const TestPage: React.FC = () => {
  const [result, setResult] = useState<TaxCalculationResult | null>(null);

  const calculateTaxHandler = (formData: FormData) => {
    const calculatedResult = calculateTax(formData);
    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Free Crypto Tax Calculator for Australia</h1>
      <CalculatorForm onSubmit={calculateTaxHandler} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
};

export default TestPage;
