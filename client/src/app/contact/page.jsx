import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "./components/ContactHero";
import LocationMap from "./components/LocationMap";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <section className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <Footer />
    </section>
  );
};

export default ContactPage;
