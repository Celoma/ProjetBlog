"use client"
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [allBlog, setAllBlog] = useState([]);
    const [allUsers, setAllUsers] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const blogResponse = await axios.get('/api/blog');
          const sortedBlog = blogResponse.data.sort((a, b) => b.likes - a.likes);
          setAllBlog(sortedBlog);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

    const startIndex = (currentPage - 1) * 6;
    const endIndex = Math.min(startIndex + 6, allBlog.length);

    const changePage = (page) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    


  return (
    <main>
      <section className='bg-custom-gray w-full h-full'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col ml-14 pt-28'>
            <h1 className='text-custom-purple font-semibold text-6xl text-center max-w-[500px]'>Tu as envie de partager une actualité ?</h1>
            <a href='../pages/createblog' className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
              <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
              <span className="relative invisible">Je partage mon article</span>
            </a>
          </div>
          <img src="/images/createblog.png" alt="" className='max-w-[725px]'/>
        </div>
      </section>
      <section>
      <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h1 className='ml-[140px] font-bold text-3xl'>Les articles les plus aimé</h1>
                </div>
                <div className="grid grid-cols-3 gap-16 mb-8 mt-16 px-[140PX]">
                    {allBlog.slice(startIndex, endIndex).map((Post, index) => (
                        <React.Fragment key={index}>
                            <a href={`/pages/blog/${Post.id}`} className='cursor-pointer hover:bg-[#D9D9D9] flex flex-col p-4 bg-white rounded'>
                                <img className="max-h-64 w-auto rounded" src="/images/defaultblog.jpg" alt="" />
                                <p className='text-sm ml-2 w-min text-white bg-custom-blue p-0.5 rounded-md mt-4 mb-2'>{Post.theme}</p>
                                <h1 className='ml-2 font-bold text-3xl truncate mb-2'>{Post.title}</h1>
                                {allUsers && allUsers.find(user => user.id === Post.authorId) && (
                                    <p className='text-sm ml-2 text-[#777777] mb-2'>{allUsers.find(user => user.id === Post.authorId)?.username}</p>
                                )}
                                <p className='ml-2 truncate mb-2'>{Post.body}</p>
                            </a>
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg' onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                        <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.574229 3.35372C0.378967 3.54898 0.378967 3.86557 0.574229 4.06083L3.75621 7.24281C3.95147 7.43807 4.26805 7.43807 4.46332 7.24281C4.65858 7.04755 4.65858 6.73096 4.46332 6.5357L1.63489 3.70727L4.46332 0.878847C4.65858 0.683585 4.65858 0.367002 4.46332 0.17174C4.26805 -0.0235219 3.95147 -0.023522 3.75621 0.17174L0.574229 3.35372ZM18.9766 3.20728L0.927782 3.20727L0.927782 4.20727L18.9766 4.20728L18.9766 3.20728Z" className='fill-current'/>
                        </svg>
                        <p>Prev.</p>
                    </button>
                    <p className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg'>{currentPage}</p>
                    <button className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg' onClick={() => changePage(currentPage + 1)} disabled={endIndex >= allBlog.length}>
                        <p>Suiv.</p>
                        <svg className="ml-2" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3291 4.06083C19.5244 3.86556 19.5244 3.54898 19.3291 3.35372L16.1471 0.171739C15.9518 -0.0235233 15.6353 -0.0235233 15.44 0.171739C15.2447 0.367001 15.2447 0.683584 15.44 0.878846L18.2684 3.70727L15.44 6.5357C15.2447 6.73096 15.2447 7.04754 15.44 7.24281C15.6353 7.43807 15.9518 7.43807 16.1471 7.24281L19.3291 4.06083ZM0.926758 4.20728L18.9755 4.20727L18.9755 3.20727L0.926758 3.20728L0.926758 4.20728Z" className='fill-current'/>
                        </svg>
                    </button>
                </div>
            </div>
      </section>
    </main>
  );
                                }
=======
import {signIn, signOut, useSession} from "next-auth/react"
import { signinClick, loginClick, signinClose, loginClose } from "@/components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function home() {
  const { data: session, status } = useSession();
  let connected = false;

  if (status === "authenticated") {
      connected = true;
  }
  let [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const handleRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("mailreg").value;
    const password = document.getElementById("passwordreg").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      return;
    }
    signinClose()
    try {
      const newUser = await createUser(username, email, selectedOption, password);
      document.getElementById("username").value = "";
      document.getElementById("mailreg").value = "";
      document.getElementById("passwordreg").value = "";
      document.getElementById("confirm-password").value = "";
      selectedOption = null;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
  };

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
const [datalog,setData] = useState({
    email:'',
    password:''
})

const loginUser = async (e) => {
  e.preventDefault()
  signIn('credentials',{
      ...datalog,
      redirect:false,
  }).then(authenticated => {
    if(authenticated.status == 200){
      loginClose()
    }
  }).catch((error) => {
    console.log("Erreur e-mail our mot de passe incorrect")
  })
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
          <div id='signin' className='hidden backdrop-filter backdrop-blur-md fixed w-full h-full z-20 top-0'>
        <div className="p-10 border-2 flex items-center justify-between text-white bg-custom-purple w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 rounded-2xl overflow-hidden">
          <section className='text-center'>
            <h1 className='text-3xl mt-4'>Inscription</h1>
            <form action="" onSubmit={handleRegister}>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="text" id="username" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="username" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nom d'utilisateur</label>
              </div>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="email" id="mailreg" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="mailreg" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">E-mail</label>
              </div>
              <div className='flex items-center justify-between px-2 mt-6 ml-4 w-64'>
                <p className="mr-2">Sexe :</p>
                <div>
                  <input 
                    type="radio" 
                    name="sexe" 
                    id="men" 
                    className="cursor-pointer hidden" 
                    value="homme"
                    onChange={handleOptionChange}
                    checked={selectedOption === "true"}
                  />
                  <label 
                    htmlFor="men" 
                    className={`ml-2 cursor-pointer border border-solid border-custom-orange px-2 py-1 border-1 rounded ${selectedOption === "homme" ? ' border-2' : ''}`}
                  >
                    Homme
                  </label>
                </div>
                <div>
                  <input 
                    type="radio" 
                    name="sexe" 
                    id="women" 
                    className="cursor-pointer hidden" 
                    value="femme"
                    onChange={handleOptionChange}
                    checked={selectedOption === "femme"}
                  />
                  <label 
                    htmlFor="women" 
                    className={`ml-2 cursor-pointer border border-solid border-custom-orange px-2 py-1 rounded ${selectedOption === "femme" ? ' border-2' : ''} `}
                  >
                    Femme
                  </label>
                </div>
              </div>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input
                  type="password"
                  id="passwordreg"
                  required
                  className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange"
                />
                <label
                  htmlFor="passwordreg"
                  className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
                >
                  Mot de passe
                </label>
              </div>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="password" id="confirm-password" required className="w-full h-10 px-4 text-sm peer outline-none bg-custom-purple border-b-2 border-custom-orange" />
                <label htmlFor="confirm-password" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Confirmer le mot de passe</label>
              </div>
              <button type="submit" className="w-64 mt-6 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
                <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Inscription
                </span>
              </button>
            </form>
            <p className='cursor-default mt-6 mx-4 mb-4'>Tu as déjà un compte ? <em onClick={loginClick} className='cursor-pointer text-custom-orange font-semibold underline'>Connecte-toi</em></p>
          </section>
          <section className='z-2'>
            <button onClick={signinClose} className="absolute top-0 right-0 btn bg-custom-red rounded mr-2 mt-1 p-1 text-white font-semibold hover:bg-red-700">X</button>
            <img className='absolute end-0 bottom-0 h-5/6 w-2/6 -z-10' src='/images/connexionRectangle.png' alt="decoration"/>
            <img src="/images/mecInscription.png" alt="photoInscription" className='h-64'/>
          </section>
        </div>
      </div>
      <div id='login' className='hidden backdrop-filter backdrop-blur-md absolute w-full h-full z-20 top-0'>
        <div className="rounded-2xl overflow-hidden p-10 border-2 flex items-center justify-between text-white bg-custom-purple h-auto w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4">
          <section className='text-center'>
            <h1 className='text-3xl mt-4'>Bonjour !</h1>
            <form action="" onSubmit={loginUser}>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input
                value={datalog.email}
                onChange={(e) => {setData({...datalog, email:e.target.value})}}
                id="email"
                name="email"
                type="email"
                required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="email" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">E-mail</label>
              </div>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={datalog.password}
                onChange={(e) => {setData({...datalog, password: e.target.value})}}
                onFocus={(e) => {if (e.target.value === '') e.target.value = '';}}
                onBlur={(e) => {if (e.target.value === '') e.target.value = '';}}
                className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange"
              />
              <label
                htmlFor="password"
                className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Mot de passe
              </label>
              </div>
              <button type="submit" className="w-64 mt-6 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
                <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Connnexion
                </span>
              </button>
            </form>
            <p className='cursor-default mt-6 mx-4 mb-4'>Tu n'as pas de compte ? <em onClick={signinClick} className='cursor-pointer text-custom-orange font-semibold underline'>Inscris-toi</em></p>
          </section>
          <section className='px-10'>
            <button onClick={loginClose} className="absolute top-0 right-0 btn bg-custom-red rounded mr-2 mt-1 p-1 text-white font-semibold hover:bg-red-700">X</button>
            <img src="/images/mecConnexion.png" alt="photoConnexion" className='h-64'/>
            <img className='absolute end-0 bottom-0 h-5/6 w-2/6 -z-10' src='/images/connexionRectangle.png' alt="decoration"/>

          </section>
        </div>
      </div>
            </>)}
          </div>
          <img src="/images/createblog.png" alt="" className='max-w-[725px]'/>
        </div>
      </div>
    </main>
  );
}

>>>>>>> c379a9f1540d4e06633f31567955dd183c4621f5
