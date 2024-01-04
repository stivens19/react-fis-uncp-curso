"use client"
import { useSession } from 'next-auth/react';
import React from 'react'

const page = () => {
  const { data: session, status } = useSession();
  return (
    <div>
        <h2>Dashboard</h2>
        <p>
            {JSON.stringify(session)}
        </p>
    </div>
  )
}

export default page