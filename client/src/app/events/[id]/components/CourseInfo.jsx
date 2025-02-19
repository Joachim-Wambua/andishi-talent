import React from "react";

const CourseInfo = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center w-full py-12">
      <div className="flex w-3/4 rounded-xl my-8 p-8 bg-[#E2E9EE] bg-opacity-50">
        <div className="text-start">
          <h2 className="text-[24px] mt-6 mb-4 text-[#314453]  font-semibold">
            Introduction
          </h2>
          <p className="text-[16px] text-[#314453] font-nunito">
            Cyber threats are evolving every day, making cybersecurity more
            important than ever. Join us for an insightful session where
            industry experts will share their knowledge, strategies, and
            experiences in tackling cybersecurity challenges.
          </p>
          <h2 className="text-[24px] mt-6 mb-4 text-[#314453] font-semibold">
            Talk with Experts in Cyber Security
          </h2>
          <p className="text-[16px] text-[#314453] font-nunito">
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

export default CourseInfo;
