import React from "react";
import { footerData, socialIcons } from "@/constants/footerData";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black lg:p-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="w-full flex items-center lg:justify-between lg:flex-row flex-col justify-center">
          <div className="h-[72px] w-fit flex items-center justify-center">
            <Image
              src="/images/logo_bland.png"
              alt="Mail"
              height={34}
              width={136}
            />
          </div>
          <div className="h-[72px] w-fit flex items-center justify-center gap-6">
            {socialIcons.map((icon, index) => (
              <Image
                key={index}
                src={`/images/socials/${icon}.svg`}
                alt={`Social Icon ${index + 1}`}
                height={24}
                width={24}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>

        <hr className="block border-t mb-8 border-[rgba(255,255,255,0.20)]" />
        <div className="md:flex justify-between w-full flex-wrap mb-8 md:p-0 p-4 grid grid-cols-2">
          {footerData.map((item, index) => (
            <div key={index} className="lg:w-[250px] w-[156px]">
              <p className="text-white text-base font-bold mb-4">
                {item.title}
              </p>
              <ul className="flex justify-center flex-col gap-5">
                {item.items.map((list, i) => (
                  <div
                    className="text-white text-[15px] font-normal myHtml"
                    dangerouslySetInnerHTML={{ __html: list }}
                  />
                ))}
              </ul>
              {index === 0 && (
                <div className="md:flex mt-5 w-full hidden">
                  <Image
                    src="/images/footer.png"
                    alt="Mail"
                    height={140}
                    width={140}
                  />
                </div>
              )}
            </div>
          ))}
          <div className="md:hidden mt-5 w-[160px] flex">
            <Image
              src="/images/footer.png"
              alt="Mail"
              height={50}
              width={50}
              className="object-cover w-40 h-40"
            />
          </div>
        </div>

        <hr className="block border-t mb-8 border-[rgba(255,255,255,0.20)]" />
        <p className="text-center text-white pb-8 md:text-base text-sm">
          © All rights reserved by Simplify Infotech Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
