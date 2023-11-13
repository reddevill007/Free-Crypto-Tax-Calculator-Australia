"use client";

import React, { useState } from "react";

interface CalculatorFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  purchasePrice: number;
  salePrice: number;
  expenses: number;
  investmentType: "Long Term" | "Short Term";
  annualIncome: string;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    purchasePrice: 0,
    salePrice: 0,
    expenses: 0,
    investmentType: "Long Term",
    annualIncome: "$45,001 - $120,000",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow-md"
    >
      <label className="block mb-4">
        Purchase Price:
        <input
          type="number"
          name="purchasePrice"
          value={formData.purchasePrice}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Sale Price:
        <input
          type="number"
          name="salePrice"
          value={formData.salePrice}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Expenses:
        <input
          type="number"
          name="expenses"
          value={formData.expenses}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Investment Type:
        <select
          name="investmentType"
          value={formData.investmentType}
          onChange={handleChange}
          className="form-select mt-1 block w-full"
        >
          <option value="Long Term">Long Term</option>
          <option value="Short Term">Short Term</option>
        </select>
      </label>

      <label className="block mb-4">
        Annual Income:
        <select
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleChange}
          className="form-select mt-1 block w-full"
        >
          <option value="$0 - $18,200">$0 - $18,200</option>
          <option value="$18,201 - $45,000">$18,201 - $45,000</option>
          <option value="$45,001 - $120,000">$45,001 - $120,000</option>
          <option value="$120,001 - $180,000">$120,001 - $180,000</option>
          <option value="$180,001+">$180,001+</option>
        </select>
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Calculate
      </button>
    </form>
  );
};

export default CalculatorForm;
