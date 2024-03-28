"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {

  const router = useRouter()
  const [data,setData] = useState({
      email:'',
      password:''
  })
  const logoutUser = async (e) => {
      e.preventDefault()
      signOut({
          redirect:false,
      }).then(() => {
      }).catch((error) => {
          throw new Error(error)
      })
  }

  return (
    <button onClick={logoutUser} className="text-slate-100 mr-2 font-semibold hover:text-gray-400">
      Déconnexion
    </button>
  );
};

export default LogoutButton;
