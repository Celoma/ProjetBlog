"use client"
import React, { useState } from 'react';

const page = () => {

    return (
        <div className='relative'>
            <div className='bg-custom-trans-gray rounded py-[1px] mx-40 p-6 my-10 z-10 backdrop-blur-md'>
                <h1 className='text-custom-purple text-4xl mt-6 text-center'>Ajouter un nouveau blog</h1>
                <form action="">
                    <div>
                        <div className="mb-6 w-3/4 relative group cursor-text  mt-6">
                            <input type="text" id="title" required className="text-2xl w-full h-10 px-4 text-sm peer bg-custom-gray outline-none border-b-2 border-custom-purple" />
                            <label htmlFor="title" className="text-2xl cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Titre</label>
                        </div>
                        <select className='mb-6 text-2xl bg-custom-gray text-custom-purple border-b-2 border-solid border-custom-purple'>
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
                    <div className='mb-6 flex flex-col rounded-full'>
                        <label className='text-2xl' htmlFor="story">Votre article:</label>
                        <textarea id="story" name="story" className='min-h-[400px] resize-y' >
                        </textarea>
                       </div>
                    <div className='text-2xl'>
                        <label htmlFor="imagePost">Inserez vos images ici</label>
                        <input type="file" accept='image/jpeg, image/png' id='imagePost' multiple/>
                    </div>
                    <button>valider</button>

                </form>
            </div>
            <img src="/images/cube1.png" alt="" className='fixed -z-10 top-12 -left-72 h-full'/>
            <img src="/images/cube2.png" alt="" className='fixed -z-10 top-6 -right-72 h-full'/>
        </div>
    );
};

export default page;