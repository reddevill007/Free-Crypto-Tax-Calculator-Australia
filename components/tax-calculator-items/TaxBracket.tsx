import React from "react";

type TaxBracketProps = {
  taxRate: string;
};
const TaxBracket = ({ taxRate }: TaxBracketProps) => {
  return (
    <div className="md:w-[300px] w-full h-20 flex flex-col gap-2 justify-center">
      <p className="text-sm text-[#3E424A]">Tax Rate</p>
      <p className="text-sm text-[#3E424A]">{taxRate}</p>
    </div>
  );
};

export default TaxBracket;
