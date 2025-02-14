import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className=" text-center flex flex-col items-center">
        <h2 className="text-[#0D1216] text-4xl font-semibold">Join Us</h2>
        <p className="text-[16px] lg:w-1/2 sm:w-full text-[#314453] font-nunito my-6">
          Build Your Tech Skills, Shape Your Future, and Secure Your Career in
          Tech. Master a new tech skill and open doors to endless opportunities
        </p>
        <button className="bg-[#21B1E6] px-12 py-4 rounded-full text-[#0D1216] font-bold hover:bg-blue-600 hover:text-white transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
