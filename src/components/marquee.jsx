import React from "react";

function Marquee() {
  return (
    <div className="w-full h-[100vh] bg-[#004d43] pt-40 rounded-t-3xl ">
      <div className=" border-t border-b border-zinc-200 flex">
        {["WE ARE OCHI", "WE ARE OCHI", "WE ARE OCHI"].map((marquee) => (
          <div className="text-[20rem] font-bold font-Oswald leading-none -mt-8 py-2 tracking-tighter">
            {marquee}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
