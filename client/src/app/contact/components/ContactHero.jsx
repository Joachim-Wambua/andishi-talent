import React from "react";

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[240px] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dltjv8zbh/image/upload/v1740054072/unsplash_Nnv0DHFG1Ds_nwtexm.png')",
      }}
    >
      <div className="text-center w-2/3">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl secondary-text font-bold">
            Get in Touch with Andishi
          </h1>
          <p className="mt-4 w-2/3 secondary-text font-medium text-[18px]">
            Need assistance? Contact Andishi for inquiries about programs,
            admissions, or partnerships. We're here to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
