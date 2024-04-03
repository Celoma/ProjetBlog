"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useRouter} from "next/navigation"
import {signIn, signOut, useSession} from "next-auth/react"


const createUser = async (username, email, sex, password) => {
    const response = await axios.post('/api/users/register', {
      username,
      email,
      sex,
      password,
    });
    console.log(response);
    const dataSignIn = {email, password}
    signIn('credentials',{
      ...dataSignIn,
      redirect:false,
  }).then(authenticated => {
    if(authenticated.status == 200){
      console.log("La connexion au nouveau compte est un succès !")
    }
  }).catch((error) => {
    console.log("Erreur e-mail our mot de passe incorrect")
  })
};

export { createUser };

function loginClick(event) {
  const loginElement = document.getElementById("login")
  const signinElement = document.getElementById("signin");
  document.documentElement.style.overflow = 'hidden';
  if (signinElement) {
    document.documentElement.style.overflow = 'hidden';
      signinElement.classList.add("hidden");
  }
  if (loginElement) {
    loginElement.classList.remove("hidden");
  }
}

export {loginClick};

function loginClose(event) {
  const loginElement = document.getElementById("login");
  if (loginElement) {
    loginElement.classList.add("hidden");
    document.documentElement.style.overflow = 'visible';
  }
}

export {loginClose};

function signinClick(event) {
  const loginElement = document.getElementById("login")
  const signinElement = document.getElementById("signin");
  document.documentElement.style.overflow = 'hidden';
  if (loginElement) {
    loginElement.classList.add("hidden");
    document.documentElement.style.overflow = 'hidden';
  }
  if (signinElement) {
    signinElement.classList.remove("hidden");
  }
}

export {signinClick};

function signinClose(event) {
  const signinElement = document.getElementById("signin");
  if (signinElement) {
    signinElement.classList.add("hidden");
    document.documentElement.style.overflow = 'visible';
  }
}

export {signinClose};

const Header = () => {
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
  if (status === 'loading') {
    return(
    <header className='select-none'>
      <div className="bg-custom-purple flex items-center justify-between h-15">
        <div>
            <a href="/" className="text-slate-100 mr-2 ml-5 font-semibold hover:text-gray-400">ACCUEIL</a>
            <a href="/pages/blogList" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">ACTUS</a>
            <a href="/pages/categories" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">CATEGORIES</a>
        </div>
        <img src="/images/logo2.png" alt="Logo" className="h-15 w-auto absolute left-2/4 -translate-x-2/4"/>
        <div className='flex items-center'>
          <p className="text-slate-200 text-right mr-6 ml-5 font-bold text-xl hover:text-gray-200">Chargement en cours...</p>
        </div>
      </div>
    </header>);
  }

  return (
    <header className='select-none'>
      <div className="bg-custom-purple flex items-center justify-between h-15">
        <div>
          <a href="/" className="text-slate-100 mr-2 ml-5 font-semibold hover:text-gray-400">ACCUEIL</a>
          <a href="/pages/blogList" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">ACTUS</a>
          <a href="/pages/categories" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">CATEGORIES</a> 
        </div>
        <a href="/pages/about" className=' absolute left-2/4 -translate-x-2/4'>
          <img src="/images/logo2.png" alt="Logo" className="h-15 w-auto"/>
        </a>
        {connected ? ( 
        <>
        <div className='flex items-center'>
          {session.user.permission === "admin" && ( // Vérifiez la permission de l'utilisateur
            <a href='/pages/admin' className="text-slate-200 text-right mr-2 ml-5 font-bold text-xl hover:text-slate-400">Admin Panel</a>
          )}
          <a href={`/pages/author/${session.user.id}`} className="text-slate-200 text-right mr-2 ml-5 font-bold text-xl hover:text-slate-400">{session.user.username}</a>
          <button onClick={signOut} className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
              <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Déconnexion
              </span>
          </button>
        </div>
        </>) : (<>        <div>
          
          <button onClick={loginClick} className="text-slate-100 mr-2 font-semibold hover:text-gray-400">Connexion</button>
          <button onClick={signinClick} className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
            <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              Inscription
            </span>
          </button>
      </div>
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
                <label htmlFor="text" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">E-mail</label>
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
      <div id='login' className='hidden backdrop-filter backdrop-blur-md fixed w-full h-full z-20 top-0'>
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
      </div></>)}


      </div>

    </header>
  );
};

export default Header;