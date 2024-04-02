"use client"
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = ({ params }) => {
    const { idblog } = params;
    const [allBlog, setAllBlog] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [comment, setComment] = useState(''); // Ajoutez un état pour stocker la valeur du commentaire

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await axios.get('/api/blog/get');
                setAllBlog(blogResponse.data);
                
                const userResponse = await axios.get('/api/users/get');
                setAllUsers(userResponse.data);
            } catch (error) {
                console.error('Error fetching dataaaaaa:', error);
            }
        };

        fetchData();
    }, []);

    // Recherche du titre du blog correspondant à l'identifiant extrait de params
    const blog = allBlog.find(post => post.id === idblog);

    const author = allUsers.find(user => user.id === blog?.authorId);

    const handleNewComment = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire

        try {
            // Envoi du commentaire au serveur
            await axios.post('/api/comment/create', { idblog, comment });

            // Effacer le commentaire après l'envoi
            setComment('');

            // Ajouter ici toute autre logique après l'envoi du commentaire, comme rafraîchir les commentaires, afficher un message de confirmation, etc.
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    return (
        <main className='bg-slate-100'>
            {blog && (
                <section className='bg-custom-gray text-center py-24'>
                    <p className='bg-slate-100 rounded font-semibold left-2/4 w-min relative -translate-x-2/4 mb-10 text-lg'>{blog.theme}</p>
                    <h1 className='text-6xl font-semibold text-center mb-10'>{blog.title}</h1>
                    {author && <p className='text-[#777777]'>Rédigé par <a href={`/pages/author/${author.id}`} className='cursor-pointer text-custom-orange font-semibold underline'>{author.username}</a>  -  Publié le </p>}
                </section>
            )}
            <section className='flex p-10 justify-between'>
                <div className='pr-5'>
                    {blog && <p className='text-justify whitespace-pre-line'>{blog.body}</p>}
                </div>
                <aside className='pl-5'>
                    <img src='/images/defaultblog.jpg' className='max-w-[800px] rounded'>
                    </img>
                    <div className='mt-10 border-l-4 border-custom-purple rounded p-2'>
                        <h2 className='text-4xl font-semibold'>Espace commentaire</h2>
                    </div>
                </aside>
            </section>
            <section className='bg-[#ECECEC50] flex justify-between'>
                <div className='pl-10'>
                    <h2 className='font-semibold text-3xl mb-2 mt-2'>Donne ton avis sur l'article</h2>
                    <h3 className='text-xl mb-2'>Bienvenue dans la zone de commentaire, restez courtois et respectueux</h3>
                    <form className='flex flex-col' onSubmit={handleNewComment}>
                        <textarea 
                            name="comment" // Ajoutez cet attribut
                            placeholder='Que voulez-vous partager ?' 
                            className='p-2 resize-none h-[170px] w-[830px] rounded-xl bg-custom-gray mb-2'
                            value={comment} // Assurez-vous de lier la valeur à l'état comment
                            onChange={(e) => setComment(e.target.value)} // Gérez le changement de la valeur
                        ></textarea>                        
                        <div className='flex'>
                            <button className='bg-[#D9D9D9] py-2 text-custom-purple rounded-full px-4'>Annuler</button>
                            <button type='submit' className='flex bg-custom-purple py-2 text-slate-100 rounded-full px-4'>
                                Ajouter un commentaire
                                <svg className='ml-4'width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_217_1155)">
                                    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" className='fill-current'/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_217_1155">
                                    <rect width="24" height="24" className='fill-current'/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <img src='/images/comment.png' className='h-[340px] mr-28'></img>
            </section>
        </main>
    );
};

export default Page;
