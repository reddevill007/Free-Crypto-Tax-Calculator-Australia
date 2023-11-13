import React from "react";
import TaxCalculator from "./TaxCalculator";
import GettingStarted from "./GettingStarted";
import Faq from "../faq/Faq";

const Hero = () => {
  return (
    <>
      <div className="flex gap-5 lg:flex-row flex-col lg:items-start items-center">
        <TaxCalculator />
        <GettingStarted />
      </div>
      <Faq />
    </>
  );
};

export default Hero;
