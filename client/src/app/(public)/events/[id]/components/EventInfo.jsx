import React from "react";

const EventInfo = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center w-full py-12 px-4">
      <div className="w-full sm:w-4/5 lg:w-3/4 rounded-xl my-8 p-6 sm:p-8 bg-[#E2E9EE] bg-opacity-50">
        <div className="text-center sm:text-left">
          {/* Introduction */}
          <h2 className="text-2xl sm:text-3xl mt-6 mb-4 text-[#314453] font-semibold">
            Introduction
          </h2>
          <p className="text-base sm:text-lg text-[#314453] font-nunito">
            Cyber threats are evolving every day, making cybersecurity more
            important than ever. Join us for an insightful session where
            industry experts will share their knowledge, strategies, and
            experiences in tackling cybersecurity challenges.
          </p>

          {/* Talk with Experts */}
          <h2 className="text-2xl sm:text-3xl mt-6 mb-4 text-[#314453] font-semibold">
            Talk with Experts in Cyber Security
          </h2>
          <p className="text-base sm:text-lg text-[#314453] font-nunito">
            This event is designed for anyone interested in cybersecurity, from
            beginners to professionals. Learn about the latest security trends,
            best practices, and how to safeguard digital systems against cyber
            threats. Engage in discussions, ask questions, and explore
            real-world case studies to enhance your understanding of
            cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
