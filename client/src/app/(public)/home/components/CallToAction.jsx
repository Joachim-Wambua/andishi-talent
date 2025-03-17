import React from "react";

const CallToAction = ({ title, description, buttonText }) => {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-[#0D1216] text-3xl sm:text-4xl font-semibold">
          {title}
        </h2>
        <p className="text-[16px] text-[#314453] font-nunito my-6 max-w-3xl">
          {description}
        </p>
        <button className="w-full sm:w-auto bg-[#21B1E6] px-12 py-4 rounded-full text-[#0D1216] font-bold hover:bg-blue-600 hover:text-white transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
