"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="w-5/6 container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#0D1216]">
            Get in Touch with Us
          </h2>
          <p className="mb-6 text-[#314453] font-nunito">
            To get in touch with us, fill out the contact form below. We'll
            respond as soon as possible.
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-[#E8F7FC] bg-opacity-30 font-nunito p-6 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field text-[#0D1216] p-4 border rounded-lg bg-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input-field text-[#0D1216] p-4 border rounded-lg bg-transparent"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field text-[#0D1216] p-4 border rounded-lg bg-transparent"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="input-field text-[#0D1216] p-4 border rounded-lg bg-transparent"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              className="input-field text-[#0D1216] h-28 w-full p-4 border rounded-lg bg-transparent"
              required
            />
            <button
              type="submit"
              className="my-4 bg-[#21B1E6] hover:bg-blue-800 hover:text-white font-bold text-black px-6 py-4 rounded-full transition"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="bg-[#E8F7FC] bg-opacity-30 p-6 rounded-lg ">
          <h3 className="text-xl font-bold mb-4 text-[#0D1216] text-[24px]">
            Contact details
          </h3>
          <div className="w-1/2">
            <div className="mb-4 my-8">
              <h4 className="text-[#314453] font-semibold text-[18px]">
                Our location
              </h4>
              <p className="text-[#0D1216] text-[24px] font-bold">
                58 Lorem Point Rd, Ipsum Lorem, 94124
              </p>
            </div>
            <div className="mb-4 my-8">
              <h4 className="text-[#314453] font-semibold text-[18px]">
                Call us
              </h4>
              <p className="text-[#0D1216] text-[24px] font-bold">
                (123) 456 - 789
              </p>
            </div>
            <div className="mb-4 my-8">
              <h4 className="text-[#314453] font-semibold text-[18px]">
                Email us
              </h4>
              <p className="text-[#0D1216] text-[24px] font-bold">
                contact@company.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
