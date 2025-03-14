import React from "react";

const CallToAction = ({ title, description, buttonText }) => {
  return (
    <section className="w-full bg-white py-12">
      <div className=" text-center flex flex-col items-center">
        <h2 className="text-[#0D1216] text-4xl font-semibold">
            {title}
        </h2>
        <p className="text-[16px] lg:w-1/2 sm:w-full text-[#314453] font-nunito my-6">
          {description}
        </p>
        <button className="bg-[#21B1E6] px-12 py-4 rounded-full text-[#0D1216] font-bold hover:bg-blue-600 hover:text-white transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
