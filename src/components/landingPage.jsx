import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";

function LandingPage() {
  return (
    <div className="w-full h-screen   ">
      <div className="text-structure mt-36 px-16 font-Oswald ">
        {["we create", "eye-opening", "presentations"].map((heading, i) => (
          <div>
            {i == 1 ? <img /> : null}
            <div className="text-[7.8rem] uppercase font-semibold  leading-[8rem] tracking-tight">
              {heading}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t  flex  justify-evenly text-xl pt-4 border-zinc-800 mt-32">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
          "START THE PROJECT",
        ].map((item, i) => (
          <p>
            {i !== 2 ? (
              item
            ) : (
              <button className="flex">
                {item} <TiLocationArrowOutline />
              </button>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
