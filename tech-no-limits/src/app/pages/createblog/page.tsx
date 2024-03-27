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
                        <button onClick={createblog} className='bg-custom-purple p-10 m-14 rounded-full text-3xl font-semibold'>Je partage mon article</button>
                    </div>
                    <img src="/images/createblog.png" alt="" className='max-w-[725px]'/> 
                </div>
            </div>
            <div id="createblog" className='hidden backdrop-filter backdrop-blur-md absolute w-full h-full z-10 top-0'>
                <div className='bg-white'>
                    <p>coucou</p>
                </div>
            </div>
        </div>
    );
};

export default page;