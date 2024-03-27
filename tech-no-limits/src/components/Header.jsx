"use client"
import React, { useState } from 'react';
import axios from 'axios';

const createUser = async (username, email, sex, password) => {

    const response = await axios.post('/api/users/register', {
      username,
      email,
      sex,
      password,
    });
    // Ici dans le console.log on affiche tous les champs de l'utilisateur qui vient d'être créé
    console.log(response.data);
};

export { createUser };

const Header = () => {

  let [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function loginClick(event) {
    const loginElement = document.getElementById("login")
    const signinElement = document.getElementById("signin");
    if (signinElement) {
      signinElement.classList.add("hidden");
    }
    if (loginElement) {
      loginElement.classList.remove("hidden");
    }
  }

  function loginClose(event) {
    const loginElement = document.getElementById("login");
    if (loginElement) {
      loginElement.classList.add("hidden");
    }
  }

  function signinClick(event) {
    const loginElement = document.getElementById("login")
    const signinElement = document.getElementById("signin");
    if (loginElement) {
      loginElement.classList.add("hidden");
    }
    if (signinElement) {
      signinElement.classList.remove("hidden");
    }
  }

  function signinClose(event) {
    const signinElement = document.getElementById("signin");
    if (signinElement) {
      signinElement.classList.add("hidden");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      return;
    }
    try {
      const newUser = await createUser(username, email, selectedOption, password);
      document.getElementById("username").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirm-password").value = "";
      selectedOption = null;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
  };

  return (
    <header className='select-none'>
      <div className="bg-custom-purple flex items-center justify-between h-15">  
        <div> {/* boutons vers pages de contenus */}
          <a href="../" className="text-slate-100 mr-2 ml-5 font-semibold hover:text-gray-400">ACCUEIL</a>
          <a href="" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">ACTUS</a>
          <a href="./pages/categories" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">CATEGORIES</a> 
        </div>
        <img src="&/images/logo2.png" alt="Logo" className="h-15 w-auto absolute left-2/4 -translate-x-2/4"/>
        <div> {/* boutons vers pages de log-in sign-in*/}
          <button onClick={loginClick} className="text-slate-100 mr-2 font-semibold hover:text-gray-400">Connexion</button>

          <button onClick={signinClick} className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
            <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              Inscription
            </span>
          </button>
        </div>
      </div>
      <div id='signin' className='hidden backdrop-filter backdrop-blur-md absolute w-full h-full z-10 top-0'>
        <div className="p-10 border-2 flex items-center justify-between text-white bg-custom-purple w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 rounded-2xl overflow-hidden">
          <section className='text-center'>
            <h1 className='text-3xl mt-4'>Inscription</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="text" id="username" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="username" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nom d'utilisateur</label>
              </div>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="text" id="mail" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="mail" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">E-mail</label>
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
                <input type="password" id="password" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="password" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Mot de passe</label>
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
            <img className='absolute end-0 bottom-0 h-5/6 w-2/6 -z-10' src='images/connexionRectangle.png' alt="decoration"/>
            <img src="images/mecInscription.png" alt="photoInscription" className='h-64'/>
          </section>
        </div>
      </div>
      <div id='login' className='hidden backdrop-filter backdrop-blur-md absolute w-full h-full z-10 top-0'>
        <div className="rounded-2xl overflow-hidden p-10 border-2 flex items-center justify-between text-white bg-custom-purple h-auto w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 rounded-md">
          <section className='text-center'>
            <h1 className='text-3xl mt-4'>Bonjour !</h1>
            <form action="">
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="text" id="usernamelog" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="usernamelog" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nom d'utilisateur</label>
              </div>
              <div className="w-64 relative group cursor-text mt-6 ml-4">
                <input type="password" id="passwordlog" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label htmlFor="passwordlog" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Mot de passe</label>
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
            <img src="images/mecConnexion.png" alt="photoConnexion" className='h-64'/>
            <img className='absolute end-0 bottom-0 h-5/6 w-2/6 -z-10' src='images/connexionRectangle.png' alt="decoration"/>

          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;