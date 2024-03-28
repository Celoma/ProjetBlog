"use client"
// Component.jsx
import React from 'react';

export default function Component({ session }) {
    console.log(session)
  if (session && session.user && session.user.email) {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
}

