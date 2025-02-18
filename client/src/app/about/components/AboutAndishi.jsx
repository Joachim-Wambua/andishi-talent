import React from "react";

const AboutAndishi = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className=" text-center flex flex-col items-center">
        <h2 className="text-[#0D1216] text-4xl font-semibold my-2">About Andishi</h2>
        <p className="text-[16px] lg:w-3/4 sm:w-full text-[#314453] font-nunito my-2 mt-3">
          Andishi Academy is a premier tech education hub dedicated to equipping
          individuals with industry-relevant skills through hands-on training,
          expert mentorship, and real-world projects
        </p>
        <p className="text-[16px] lg:w-3/4 sm:w-full text-[#314453] font-nunito my-2">
          Our structured programs in Software Engineering, Data Science, and
          Cybersecurity provide a direct pathway to successful tech careers,
          ensuring students gain the knowledge, experience, and connections
          needed to thrive in the industry.
        </p>
      </div>
    </section>
  );
};

export default AboutAndishi;
