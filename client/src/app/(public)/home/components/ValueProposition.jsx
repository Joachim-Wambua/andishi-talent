import { whyJoinAndishi } from "@/constants";

export default function ValueProposition() {
  return (
    <section className="py-16 px-4 bg-radial-gradient">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0D1216]">
          Why Join Andishi Academy
        </h2>
        <p className="text-[#314453] mt-3 font-nunito text-sm sm:text-base md:text-lg">
          Gain product skills, work on real-world projects, and stay ahead in tech. 
          Master the latest tools and trends to build a successful career.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {whyJoinAndishi.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col text-center items-center p-4 ${
              whyJoinAndishi.length === 4 && index === 3 ? "md:col-span-3" : ""
            }`}
          >
            {/* Icon Wrapper */}
            <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full">
              <item.icon className="text-3xl sm:text-4xl text-[#E65C21]" />
            </div>
            
            {/* Title */}
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#314453]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm sm:text-base text-[#314453] font-nunito">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
