"use client";
import React from "react";
import withAuth from "@/hoc/withAuth";

const StudentDashboard = ({ user }) => {
  return (
    <div>
      <h1 className="font-bold text-black">Welcome, {user?.name.split(" ")[0]}!</h1>
      <p className="text-sm text-black">Only students can see this page.</p>
    </div>
  );
};

export default withAuth(StudentDashboard, ["user"]);
