"use client"

import React from 'react';

const Header = () => {

  function handleClick(event) {
    const loginElement = document.getElementById("login");
    if (loginElement) {
      loginElement.classList.remove("hidden");
    }
  }
 
  return (
    <header className='select-none'>
      <div className="bg-custom-purple flex items-center justify-between h-15 sticky z-2">  
        <div> {/* boutons vers pages de contenus */}
          <a href="" className="text-slate-100 mr-2 ml-5 font-semibold hover:text-gray-400">ACCUEIL</a>
          <a href="" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">ACTUS</a>
          <a href="" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">CATEGORIES</a> 
        </div>
        <img src="images/logo2.png" alt="Logo" className="h-15 w-auto absolute left-2/4 -translate-x-2/4"/>
        <div> {/* boutons vers pages de log-in sign-in*/}
          <button onClick={handleClick} className="text-slate-100 mr-2 font-semibold hover:text-gray-400">Connexion</button>

          <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
            <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              Inscription
            </span>
          </button>
        </div>
      </div>
      <div id='login' className='hidden backdrop-filter backdrop-blur-md absolute w-full h-full z-10 top-0'>
        <div className="text-white bg-custom-purple h-auto w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 rounded-md">
          <section className='text-center'>
            <h2>Inscription</h2>
            <form action="">
              <div class="w-64 relative group cursor-text mt-6 ml-4">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label for="username" class="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nom d'utilisateur</label>
              </div>
              <div class="w-64 relative group cursor-text mt-6 ml-4">
                <input type="text" id="mail" required class="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label for="mail" class="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">E-mail</label>
              </div>
              <div className='flex items-center justify-between px-2 mt-6 ml-4 w-64'>
                <p>Sexe :</p>
                <div>
                  <input type="radio" name="sexe" id="men" className='cursor-pointer'/>
                  <label htmlFor="men" className='ml-2 cursor-pointer'>Homme</label>
                </div>
                <div>
                  <input type="radio" name ="sexe" id="women" className='cursor-pointer'/>
                  <label htmlFor="women" className='ml-2 cursor-pointer'>Femme</label>
                </div>
              </div>
              <div class="w-64 relative group cursor-text mt-6 ml-4">
                <input type="password" id="password" required class="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                <label for="password" class="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Mot de passe</label>
              </div>
              <div class="w-64 relative group cursor-text mt-6 ml-4">
                <input type="password" id="confirm-password" required class="w-full h-10 px-4 text-sm peer outline-none bg-custom-purple border-b-2 border-custom-orange" />
                <label for="confirm-password" class="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Confirmer le mot de passe</label>
              </div>
              <button type="submit" className="w-64 mt-6 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
                <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Inscription
                </span>
              </button>
            </form>
            <p className='cursor-default mt-6 mx-4 mb-4'>Tu as déjà un compte ? <em className='cursor-pointer text-custom-orange underline'>Connecte-toi</em></p>
          </section>
          <section>

          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
