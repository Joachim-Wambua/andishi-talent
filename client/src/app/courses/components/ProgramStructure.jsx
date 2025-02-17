import React from "react";

const ProgramStructure = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center w-full py-12">
      <div className="text-center px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl text-[#0D1216] sm:text-4xl font-semibold">
          Program Structure and Pricing
        </h2>
        <p className="text-[16px] w-2/3 text-[#314453] font-bold font-nunito my-4">
          Our 4-month program includes 3 months of focused coursework and 1
          month of hands-on internship with Andishi Software Ltd
        </p>
      </div>

      <div className="flex items-center justify-center w-3/4 rounded-xl my-8 p-8 bg-[#A8E1F5]">
        <div>
          <h3 className="text-xl text-[#0D1216] font-semibold py-2">
            Duration: 4 months (3 months coursework + 1 month internship)
          </h3>
          <h2 className="text-2xl text-[#0D1216] sm:text-3xl font-semibold py-4">
            Course Breakdown
          </h2>
          <ul className="list-disc list-inside text-[#314453] font-nunito">
            <li className="py-2">
              <span className="font-semibold">
                Foundational Module (1 month): KES 20,000
              </span>{" "}
              - Build your programming and design foundation.
            </li>
            <li className="py-2">
              <span className="font-semibold">
                Core Module (1 month): KES 20,000
              </span>{" "}
              - Master full stack development and database management.
            </li>
            <li className="py-2">
              <span className="font-semibold">
                Specialization Module (1 month): KES 20,000
              </span>{" "}
              - Choose a specialization to align with your career goals.
            </li>
          </ul>
          <p className="font-nunito py-2 text-[16px] mt-6">
            <span className="font-semibold">Total Fee: KES 60,000</span> (if
            paid in installments) or{" "}
            <span className="font-semibold">KES 50,000</span> (if paid upfront).
          </p>
          <p className="font-nunito py-2 pt-4 text-[16px]">
            Flexible Payment Plans:
            <span className="font-semibold"> Pay KES 20,000</span> per module as
            you progress.{" "}
            <span className="font-semibold">Save KES 10,000 </span> with a
            one-time payment of
            <span className="font-semibold"> KES 50,000</span>
          </p>

          <button className="w-full bg-[#E65C21] text-white rounded-full py-4 my-4 font-semibold">
            View Payment Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
