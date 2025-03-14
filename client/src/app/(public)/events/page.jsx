import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import EventsHero from "./components/EventsHero";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";

const Events = () => {
  return (
    <section className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
      <Footer />
    </section>
  );
};

export default Events;
