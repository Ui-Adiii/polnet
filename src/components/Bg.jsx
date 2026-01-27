import React from "react";

const Bg = () => {
  return (
<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

  {/* TOP LEFT GLOW */}
  <div
    className="
      absolute -top-40 -left-40
      w-[520px] h-[520px]
      rounded-full
      bg-purple-600/40
      blur-[160px]
    "
  />

  {/* TOP LEFT RING */}
  <div
    className="
      absolute -top-32 -left-32
      w-[420px] h-[420px]
      rounded-full
      border border-purple-400/40
    "
  />

  {/* BOTTOM RIGHT GLOW */}
  <div
    className="
      absolute -bottom-40 -right-40
      w-[560px] h-[560px]
      rounded-full
      bg-indigo-600/40
      blur-[180px]
    "
  />

  {/* BOTTOM RIGHT RING */}
  <div
    className="
      absolute -bottom-32 -right-32
      w-[460px] h-[460px]
      rounded-full
      border border-indigo-400/40
    "
  />

</div>

  );
};

export default Bg;
