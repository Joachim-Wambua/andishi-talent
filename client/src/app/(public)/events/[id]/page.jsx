import React from "react";
import { EventsList, PastEventsList } from "@/constants";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventDetailHero from "./components/EventDetailHero";
import EventInfo from "./components/EventInfo";
import EventRegistration from "./components/EventRegistration";

// ✅ Define static paths for export
export async function generateStaticParams() {
  const allEvents = [...EventsList, ...PastEventsList];
  return allEvents.map((event) => ({ id: event.id.toString() }));
}

const EventDetails = ({ params }) => {
  const { id } = params;

  // Merge both lists & find the event
  const allEvents = [...EventsList, ...PastEventsList];
  const event = allEvents.find((event) => event.id.toString() === id);

  if (!event) {
    return notFound();
  }

  return (
    <section className="bg-white w-full min-h-screen">
      <Navbar />
      <EventDetailHero
        imageURL={event.image}
        title={event.title}
        date={event.date}
        time={event.time}
      />
      <EventRegistration
        title={event.title}
        imgURL={event.image}
        date={event.date}
        time={event.time}
      />
      <EventInfo />
      <Footer />
    </section>
  );
};

export default EventDetails;
