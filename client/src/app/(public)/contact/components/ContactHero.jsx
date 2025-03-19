import React from "react";

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1740054072/unsplash_Nnv0DHFG1Ds_nwtexm.png')",
        minHeight: "240px",
      }}
    >
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Get in Touch with Andishi
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium px-4 sm:px-0">
          Need assistance? Contact Andishi for inquiries about programs, admissions, 
          or partnerships. We're here to help!
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
