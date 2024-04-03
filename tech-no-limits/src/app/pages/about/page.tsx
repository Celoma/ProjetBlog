import React from 'react';

const page = () => {
    return (
            /*<section className="bg-cover bg-center py-[450px] flex items-center justify-center flex flex-col items-center justify-center h-screen flex-wrap" style={{ backgroundImage: 'url("/images/aboutbg.png")' }}>*/
                <section className="flex flex-col items-center justify-center h-screen text-slate-100"style={{ backgroundImage: 'url("/images/aboutbg.png")' }}>
                <h1 className="text-5xl font-bold mb-6">À propos de nous</h1>
                <p className="text-xl text-center w-2/6 mb-6 block ">
                    Nous sommes quatre étudiants à Sup de Vinci Rennes en deuxième année du
                    cycle préparatoire. Nous réalisons ce projet pour completer le module
                    Base de donnée.
                </p>
                <a href="/" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-custom-orange opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-custom-orange opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-custom-orange transition-colors duration-200 ease-in-out group-hover:text-custom-purple">Rejoins nous !</span>
                    <span className="absolute inset-0 border-2 border-custom-orange rounded-full"></span>
                </a>
            
                </section>
                
    );
};

export default page;  