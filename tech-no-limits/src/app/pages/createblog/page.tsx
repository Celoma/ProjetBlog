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
                        <button onClick={createblog} className='text-slate-100 bg-custom-purple p-10 m-14 rounded-full text-3xl font-semibold'>Je partage mon article</button>
                    </div>
                    <img src="/images/createblog.png" alt="" className='max-w-[725px]'/> 
                </div>
            </div>
            <div id="createblog" className='hidden backdrop-filter backdrop-blur-md w-full h-full z-10 top-0 fixed'>
                <div className='bg-white h-auto w-auto absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4'>
                    <form action="">
                        <div>
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
                            <label htmlFor="title">Titre</label>
                            <input type="text" id="title" />
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