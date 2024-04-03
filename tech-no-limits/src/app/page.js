"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import { signinClick, loginClick, signinClose, loginClose } from "@/components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';


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
                <input type="text" id="mailreg" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
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

