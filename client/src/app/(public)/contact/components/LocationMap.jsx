import React from "react";

const LocationMap = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center w-full px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl my-6 text-[#0D1216] font-semibold text-center">
        View Our Offices
      </h2>
      <div className="w-full max-w-4xl rounded-xl bg-[#E2E9EE] bg-opacity-50 p-4">
        <iframe
          className="w-full h-[300px] sm:h-[360px] md:h-[420px] rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.62580373069!2d-73.85390415!3d40.720571399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f2b05f8b6b5%3A0x4329c39b88cf44!2sForest%20Hills%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
