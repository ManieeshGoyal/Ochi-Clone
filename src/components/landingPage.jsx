import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className="w-full mb-36">
      <div className="text-structure mt-28 px-16 font-Oswald ">
        {["we create", "eye-opening", "presentations"].map((heading, i) => (
          <div className=" text-[7.8rem] uppercase font-semibold  leading-[8rem] tracking-tight">
            {i === 1 && (
              <div className=" inline-block w-44 h-[6.4rem] mr-4 rounded-md bg-red-600">
                <img src="" alt="" />
              </div>
            )}
            {heading}
          </div>
        ))}
      </div>
      <div className="border-t flex justify-between text-[1.2rem] pt-6 font-light px-20 border-zinc-800 mt-32">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, i) => (
          <p>{item}</p>
        ))}

        <button className="flex items-center">
          <div className="  border border-zinc-400 px-4 py-1 rounded-full">
            START THE PROJECT
          </div>
          <div className="border flex justify-center items-center border-zinc-400 ml-2 w-10 h-10 rounded-full">
            <MdArrowOutward size={"1.6rem"} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
