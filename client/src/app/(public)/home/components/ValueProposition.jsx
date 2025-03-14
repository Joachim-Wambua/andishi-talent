import { whyJoinAndishi } from "@/constants";

export default function ValueProposition() {
  return (
    <section className="py-16 bg-radial-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[32px] mb-4 font-semibold text-[#0D1216]">
          Why Join Andishi Academy
        </h2>
        <p className="text-[#314453] mt-2 font-nunito text-[16px]">
          Gain product skills, work on real-world projects, and stay ahead in tech. 
          Master the latest tools and trends to build a successful career.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {whyJoinAndishi.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col text-center items-center ${
              whyJoinAndishi.length === 4 && index === 3 ? "md:col-span-3" : ""
            }`}
          >
            <div className="flex justify-center items-center w-20 h-20 bg-blue-100 rounded-full">
              <item.icon className="text-4xl text-[#E65C21]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#314453]">
              {item.title}
            </h3>
            <p className="mt-2 text-[#314453] font-nunito">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
