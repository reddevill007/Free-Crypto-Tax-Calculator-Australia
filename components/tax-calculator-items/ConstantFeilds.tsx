import React from "react";

const ConstantFeilds = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex lg:items-center justify-center gap-3 lg:flex-row flex-col items-start">
        <label
          htmlFor="year"
          className="text-gary-1 font-normal leading-6 text-sm"
        >
          FY 2023-24
        </label>
        <select
          id="year"
          className="lg:w-[228px] w-40 py-2 lg:py-4 px-3 rounded-lg bg-textarea border-none outline-none"
          defaultValue="FY 2023-24"
        >
          <option>FY 2023-24</option>
        </select>
      </div>
      <div className="flex lg:items-center justify-center gap-3 lg:flex-row flex-col items-start">
        <label
          htmlFor="country"
          className="text-gary-1 font-normal leading-6 text-sm"
        >
          Country
        </label>
        <select
          id="country"
          className="lg:w-[228px] w-40 py-2 lg:py-4 px-3 rounded-lg bg-textarea border-none outline-none"
          defaultValue="Australia"
        >
          <option>Australia</option>
        </select>
      </div>
    </div>
  );
};

export default ConstantFeilds;
