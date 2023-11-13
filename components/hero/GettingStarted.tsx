import Image from "next/image";
import React from "react";

const GettingStarted = () => {
  return (
    <div className="flex max-w-[426px] py-[55px] px-4 flex-col gap-9 bg-blue rounded-lg h-fit">
      <div>
        <h1 className="text-white text-2xl font-bold leading-10 mb-4 text-center">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-text-muted text-center text-sm font-medium leading-6 mb-9">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <Image
          src="/images/gettingstarted.svg"
          alt="Getting Started"
          height={178}
          width={166}
        />
      </div>

      <div className="inline-flex justify-center items-center gap-2 px-6 py-2 text-gary-1 text-base font-semibold leading-7 bg-white rounded-lg w-fit mx-auto">
        Get Started For Free <span>-&gt;</span>
      </div>
    </div>
  );
};

export default GettingStarted;
