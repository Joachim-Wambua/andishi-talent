"use client"
import React from 'react'
import withAuth from '@/hoc/withAuth';

const AdminDashboard = () => {
  return (
    <div>
      Admin Dashboard
    </div>
  )
}

export default withAuth(AdminDashboard, ["admin"]);
