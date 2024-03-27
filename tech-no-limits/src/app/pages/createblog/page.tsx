"use client"
import React, { useState } from 'react';

const page = () => {

    function createblog() {
        const loginElement = document.getElementById("createblog");
        if (loginElement) {
          loginElement.classList.remove("hidden");
        }
      }

    return (
        <div>
            <div className='bg-custom-gray w-full h-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col ml-14 pt-28'>
                        <h1 className='text-custom-purple font-semibold text-6xl text-center max-w-[500px]'>Tu as envie de partager une actualité ?</h1>
                        <button onClick={createblog} className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
                            <span className="relative invisible">Je partage mon article</span>
                        </button>
                    </div>
                    <img src="/images/createblog.png" alt="" className='max-w-[725px]'/> 
                </div>
            </div>
            <div id="createblog" className='hidden backdrop-filter backdrop-blur-md w-full h-full z-10 top-0 fixed'>
                <div className='bg-custom-gray border-solid border-custom-purple border-2 h-auto w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4'>
                    <form action="">
                        <div>
                            <div className="w-64 relative group cursor-text mt-6 ml-4">
                                <input type="text" id="title" required className="w-full h-10 px-4 text-sm peer bg-custom-purple outline-none border-b-2 border-custom-orange" />
                                <label htmlFor="title" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Titre</label>
                            </div>
                            <select>
                                <option value="">--Choisissez le thème de votre article--</option>
                                <option value="developpement">Développement</option>
                                <option value="reseau">Réseau</option>
                                <option value="gaming">Gaming</option>
                                <option value="gadget">Gadget</option>
                                <option value="github">GitHub</option>
                                <option value="musique">Musique</option>
                                <option value="cloud">Cloud</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="article">Article</label>
                            <input type="text" id='article'/>
                        </div>
                        <div>
                            <label htmlFor="imagePost">Inserez vos images ici</label>
                            <input type="file" accept='image/jpeg, image/png' id='imagePost'/>
                        </div>
                        <button>valider</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;