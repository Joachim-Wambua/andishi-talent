import React from "react";
import Footer from "../../components/Footer";
import DarkNavbar from "../../components/DarkNavbar";
import ApplicationForm from "./components/ApplicationForm";

const ApplicationPage = () => {
  return (
    <section className="min-h-screen flex flex-col bg-white">
      <DarkNavbar />
      <ApplicationForm />
      <Footer />
    </section>
  );
};

export default ApplicationPage;
