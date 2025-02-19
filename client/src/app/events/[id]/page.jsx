"use client";
import React from "react";
import { EventsList, PastEventsList } from "@/constants";
import { notFound } from "next/navigation";
import Navbar from "@/app/home/Navbar";
import Footer from "@/app/home/Footer";
import EventDetailHero from "./components/EventDetailHero";
import CourseInfo from "./components/CourseInfo";

const EventDetails = ({ params }) => {
  const { id } = params;

  // Merge both lists & find the event
  const allEvents = [...EventsList, ...PastEventsList];
  const event = allEvents.find((event) => event.id.toString() === id);

  if (!event) {
    return notFound(); // Show 404 if event not found
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
      <CourseInfo />
      
      <Footer />
    </section>
  );
};

export default EventDetails;
