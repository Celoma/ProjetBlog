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
            <div className='bg-custom-gray'>
                <form action="">
                    <div>
                        <div className="w-64 relative group cursor-text mt-6 ml-4">
                            <input type="text" id="title" required className="w-full h-10 px-4 text-sm peer bg-custom-gray outline-none border-b-2 border-custom-purple" />
                            <label htmlFor="title" className="cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Titre</label>
                        </div>
                        <select className='bg-custom-gray text-custom-purple'>
                            <option value="" hidden disabled selected>Choisissez le thème de votre article</option>
                            <option value="developpement">Développement</option>
                            <option value="reseau">Réseau</option>
                            <option value="gaming">Gaming</option>
                            <option value="gadget">Gadget</option>
                            <option value="github">GitHub</option>
                            <option value="musique">Musique</option>
                            <option value="cloud">Cloud</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="story">Votre article:</label>
                        <textarea id="story" name="story" className='h-[400px] resize-none' >
                        </textarea>
                       </div>
                    <div>
                        <label htmlFor="imagePost">Inserez vos images ici</label>
                        <input type="file" accept='image/jpeg, image/png' id='imagePost'/>
                    </div>
                    <button>valider</button>
                </form>
            </div>
        </div>
    );
};

export default page;