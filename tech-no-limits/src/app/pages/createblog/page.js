"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [data, setData] = useState({
        title: '',
        body: '',
        author: session?.user?.id || '', 
        category: '',
        images: []
    });

    useEffect(() => {
        if (status === 'authenticated') {
            setData(prevData => ({ ...prevData, author: session?.user?.id || '' }));
        }
    }, [status, session]);

    const handleNewBlog = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/blog/create', { ...data });
            const id = response.data.id || null
            const authorId = response.data.authorId || null
            const dataSet = {"id":id, "authorId":authorId}
            const response2 = await axios.post('/api/blog/updateUser', { dataSet });
            router.push('/');
            alert('Blog created successfully!'); // Utilisation de l'alerte native
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        setData({ ...data, images: files });
    };

    return (
        <div className='relative'>
            <div className='bg-custom-trans-gray rounded-xl max-w-[1100px] py-[1px] mx-auto p-6 my-10 z-10 backdrop-blur-[3px]'>
                <h1 className='text-custom-purple text-4xl mt-6 text-center'>Ajoutez votre nouvel article !</h1>
                <form action="" onSubmit={handleNewBlog}>
                <div>
                    <div className="mb-6 w-3/4 relative group cursor-text mt-6">
                        <input
                            id="title"
                            type="text"
                            name="title"
                            required
                            className="text-xl w-full h-10 px-4 text-sm peer bg-custom-gray outline-none border-b-2 border-custom-purple"
                            value={data.title}
                            onChange={(e) => { setData({ ...data, title: e.target.value }) }}
                        />
                        <label htmlFor="title" className="text-xl cursor-text transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Titre</label>
                    </div>
                    <select
                        id="categorie"
                        className='mb-6 text-2xl bg-custom-gray text-custom-purple border-b-2 border-solid border-custom-purple'
                        value={data.category}
                        onChange={(e) => { setData({ ...data, category: e.target.value }) }}>
                        <option value="" hidden>Choisissez le thème de votre article</option>
                        <option value="Développement">Développement</option>
                        <option value="Réseau">Réseau</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Gadget">Gadget</option>
                        <option value="Github">GitHub</option>
                        <option value="Musique">Musique</option>
                        <option value="Cloud">Cloud</option>
                    </select>
                    </div>
                    <div className='mb-6 flex flex-col'>
                    <label className='text-2xl' htmlFor="body">Votre article:</label>
                    <textarea id="body" name="body"
                        className='min-h-[400px] resize-y rounded-lg p-2 bg-custom-gray whitespace-pre-wrap'
                        value={data.body}
                        onChange={(e) => { setData({ ...data, body: e.target.value }) }}
                    >
                    </textarea>
                    </div>
                    <div className='text-2xl'>
                    <label htmlFor="imagePost">Inserez vos images ici</label>
                    <input
                        type="file"
                        accept='image/jpeg, image/png'
                        id='imagePost'
                        multiple
                        onChange={handleImageChange} // Gérer le changement d'images
                    />
                    </div>
                    <button type='submit' className="m-8 text-2xl left-2/4 -translate-x-2/4 overflow-hidden rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-custom-purple active:shadow-none shadow-lg bg-gradient-to-tr from-[#521F52] to-purple-700 border-[#3E1E3E] text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-96 group-hover:h-full opacity-10"></span>
                        <span className="relative">Ajouter votre article</span>
                    </button>
                </form>
            </div>
            <img src="/images/cube1.png" alt="" className='fixed -z-10 top-12 -left-72 h-full' />
            <img src="/images/cube2.png" alt="" className='fixed -z-10 top-6 -right-72 h-full' />
        </div>
    );
};

export default Page;

