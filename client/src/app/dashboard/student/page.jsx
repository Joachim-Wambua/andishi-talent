"use client"
import React from "react";
import withAuth from "@/hoc/withAuth";

const StudentDashboard = () => {
  return (
    <div>
      <h1>Welcome, Student!</h1>
      <p>Only students can see this page.</p>
    </div>
  );
};

export default withAuth(StudentDashboard, ["user"]);
