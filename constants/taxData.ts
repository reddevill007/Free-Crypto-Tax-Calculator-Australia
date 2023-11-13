export const taxBrackets = [
  { incomeRange: "$0 - $18,200", taxRate: "0%" },
  {
    incomeRange: "$18,201 - $45,000",
    taxRate: "Nil+19% of excess over $18,200",
  },
  {
    incomeRange: "$45,001 - $120,000",
    taxRate: "$5,092 + 32.5% of excess over $45,000",
  },
  {
    incomeRange: "$120,001 - $180,000",
    taxRate: "$29,467 + 37% of excess over $120,000",
  },
  {
    incomeRange: "$180,001+",
    taxRate: "$51,667 + 45% of excess over $180,000",
  },
];

export const taxData = [0, 19, 32.5, 37, 45];
