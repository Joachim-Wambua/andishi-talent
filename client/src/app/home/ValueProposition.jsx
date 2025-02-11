import { whyJoinAndishi } from "@/constants";

export default function ValueProposition() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">
          Why Join Andishi Academy
        </h2>
        <p className="text-gray-600 text-lg my-2">
          Learn, Build, Launch: Your Pathway to Success - Gain Practical Skills,
          Work on Real Projects, and Master the Latest Tech
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {whyJoinAndishi.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 shadow-lg rounded-lg text-center border border-gray-200"
          >
            <div className="flex justify-center">
              <item.icon className="text-5xl text-blue-600" />{" "}
              {/* Render React Icon */}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className=" w-1/3 my-4 bg-blue-500 transition hover:bg-blue-800 hover:text-white font-bold text-black px-6 py-4 rounded-full">
          Explore More Courses
        </button>
      </div>
    </section>
  );
}
