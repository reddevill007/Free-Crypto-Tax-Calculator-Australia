import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="md:flex hidden items-center justify-center w-full my-[140px]">
      <div className="bg-[url('/images/bg-mask.png')] w-[1110px] h-[288px] bg-no-repeat bg-center bg-cover flex items-center justify-center gap-20 rounded-2xl shadow-lg">
        <div>
          <Image src="/images/mail.png" alt="Mail" height={235} width={235} />
        </div>
        <div className="max-w-[557px] flex flex-col gap-8">
          <h1 className="text-white text-[28px] font-bold leading-9 liga-off">
            Stay up to date with latest crypto news and events. Subscribe to our
            newsletter
          </h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="h-12 px-4 py-[12px] rounded-tl rounded-bl"
            />
            <button className="bg-yellow border px-6 py-3 h-12 text-sm font-semibold leading-5 text-gary-1 rounded-tr rounded-br">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
