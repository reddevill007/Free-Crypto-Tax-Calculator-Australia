"use client";

import React from "react";

interface ResultDisplayProps {
  result: TaxCalculationResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div>
      <h2>Calculation Results</h2>
      <p>Tax Rate: {result.taxRate}</p>
      <p>Capital Gains Amount: {result.capitalGainsAmount}</p>
      <p>Discount for Long Term Gains: {result.discountForLongTermGains}</p>
      <p>Net Capital Gains: {result.netCapitalGains}</p>
      <p>Tax to Pay: {result.taxToPay}</p>
    </div>
  );
};

export default ResultDisplay;
