"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import { signinClick, loginClick, signinClose, loginClose } from "@/components/Header";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import Post from '@/components/Post'

export default function home() {
  const { data: session, status } = useSession();
  const [allBlog, setAllBlog] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  let connected = status === "authenticated"
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const userResponse = await axios.get('/api/users/get');
            setAllUsers(userResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogResponse = await axios.get('/api/blog/sortedByLikes');
        setAllBlog(blogResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const addEvent = (element, type, listener) => {
        if (element.addEventListener)
            element.addEventListener(type, listener, false);
        else if (element.attachEvent)
            element.attachEvent('on' + type, function () { return listener.apply(element, arguments); });
    }

    const escapeKey = (event) => {
        if (event.keyCode == 27) {
            document.getElementById('signin').classList.add("hidden");
            document.getElementById('login').classList.add("hidden");
            document.documentElement.style.overflow = 'visible';
        }
    }

    const closeElements = (event) => {
        const signinElement = document.getElementById('signin');
        const loginElement = document.getElementById('login');
        if (event.target === signinElement || event.target === loginElement) {
            signinElement.classList.add("hidden");
            loginElement.classList.add("hidden");
            document.documentElement.style.overflow = 'visible';
        }
    }

    const initEscape = () => {
        addEvent(document, 'keydown', escapeKey);
        addEvent(document, 'click', closeElements);
    }

    if (typeof window !== 'undefined') {
        initEscape();
    }

}, []);


const router = useRouter()

if (status === 'loading') {
  return (<div className='h-screen bg-custom-trans-gray'>
              <p className='text-center font-semibold  text-lg'>Chargement en cours...</p>
          </div>
  )
}
  return (
    <main>
      <div className='bg-custom-gray w-full h-full'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col ml-14 pt-28'>
            <h1 className='text-custom-purple font-semibold text-6xl text-center max-w-[500px]'>Tu as envie de partager une actualité ?</h1>
            { connected ? (<><a href='../pages/createblog' className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
            <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
            <span className="relative invisible">Je partage mon article</span>
          </a></>):(
            <><button onClick={loginClick} className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
            <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
            <span className="relative invisible">Je partage mon article</span>
          </button>
            </>)}
          </div>
          <img src="/images/createblog.png" alt="" className='max-w-[725px]'/>
        </div>
      </div>
      <section>
          <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h1 className='ml-[140px] font-bold text-3xl'>Les articles les plus aimé</h1>
                </div>
                <div className="grid grid-cols-3 gap-16 mb-8 mt-16 px-[140PX]">
                    {allBlog.map((post, index) => (
                        <React.Fragment key={index}>
                          <Post
                            id={post.id}
                            theme={post.theme}
                            title={post.title}
                            authorId={post.authorId}
                            body={post.body}
                            likes={post.likes}
                            allUsers={allUsers}
                          />
                        </React.Fragment>
                    ))}
                </div>
            </div>
      </section>
    </main>
  );
}

