"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const Page = ({ params }) => {
    const { idblog } = params;
    const [allBlog, setAllBlog] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [allComment, setAllComment] = useState([]);
    const [comment, setComment] = useState(''); // Ajoutez un état pour stocker la valeur du commentaire
    const [nblikes, setLikes] = useState(0);
    const { data: session, status } = useSession();
    const [data, setData] = useState({
        author: session?.user?.id || '',
    });

    useEffect(() => {
        if (status === 'authenticated') {
            setData(prevData => ({ ...prevData, author: session?.user?.id || '' }));
            try {
                setLikes(blog.likes.length)
            } catch (e) {
            }
        }
    }, [status, session]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await axios.get('/api/blog/get');
                setAllBlog(blogResponse.data);
                
                const userResponse = await axios.get('/api/users/get');
                setAllUsers(userResponse.data);

                const commentResponse = await axios.get('/api/comment/get');
                setAllComment(commentResponse.data)
            } catch (error) {
                console.error('Error fetching dataaaaaa:', error);
            }
        };

        fetchData();
    }, []);
    const blog = allBlog.find(post => post.id === idblog);
    const author = allUsers.find(user => user.id === blog?.authorId);
    const commentBlog = allComment.find(comment => comment.postID === idblog)
    const handleNewComment = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/comment/create', { comment, ...data, idblog});

            setComment('');

        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    const handleLike = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('/api/like/managment', {...data, idblog});
            setLikes(response.data.length);
            let isLiked = response.data.includes(data.author);
            const liker = document.getElementById("liker")
            const pasLiker = document.getElementById("pasLiker");
            if(isLiked){
                liker.classList.remove("hidden");
                pasLiker.classList.add("hidden");
            } else {
                pasLiker.classList.remove("hidden");
                liker.classList.add("hidden");
            }
        } catch (error) {
            console.error('Error updating like:', error);
        }
    }

    if (status === 'loading') {
        return (<main className='h-screen'>
                    <p className='text-center font-semibold  text-lg'>Chargement en cours...</p>
                </main>
        )
    }
    let isLiked = blog && blog.likes ? blog.likes.includes(data.author) : false;

    return (
        <main >
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
                    { isLiked ? <>
                    <button onClick={handleLike} id='liker' className="py-1.5 px-3 text-green-600 hover:text-red-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                        </svg>
                        <span>{nblikes}</span>
                    </button>
                    <button onClick={handleLike} id="pasLiker" className="py-1.5 hidden px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                        </svg>
                        <span>{nblikes}</span>
                    </button>
                    </> : <>
                    <button onClick={handleLike} id="pasLiker" className="py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                        </svg>
                        <span>{nblikes}</span>
                    </button>
                    <button onClick={handleLike} id='liker' className="py-1.5 hidden px-3 text-green-600 hover:text-red-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                        </svg>
                        <span>{nblikes}</span>
                    </button>
                    </>

                    }

                </div>
                <aside className='pl-5'>
                    <img src='/images/defaultblog.jpg' className='max-w-[800px] rounded'>
                    </img>
                    <div className='my-10 border-l-4 border-custom-purple rounded p-2'>
                        <h2 className='text-4xl font-semibold m-2'>Espace commentaire</h2>
                    </div>
                    <div>
                        {allComment.filter(comment => comment.postId === idblog).map((comment, index) => {
                            const authorComment = allUsers.find(user => user.id === comment.authorID);
                            return (
                                <div key={index} className="bg-white rounded p-4 mb-4">
                                    {authorComment && <p className="font-semibold">{authorComment.username}</p> }
                                    <p className='mb-4'>{comment.comment}</p>
                                    {(blog.authorId === session?.user?.id && authorComment.permission === 'user')|| session?.user?.id === authorComment.id || session?.user?.permission === 'admin' ? (
                                    <>
                                    <button onClick={() => handleDeleteCom(comment.id)} className="ml-2 p-2 bg-slate-500 hover:bg-slate-600 rounded">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 11H19V15C19 16.8856 19 17.8284 18.4142 18.4142C17.8284 19 16.8856 19 15 19H9C7.11438 19 6.17157 19 5.58579 18.4142C5 17.8284 5 16.8856 5 15V11Z" fill="#222222"/>
                                            <path d="M2.8153 7.8153L5 10L9 6L6.58869 4.39246C6.23591 4.15728 5.77317 4.17012 5.43399 4.42451L2.92241 6.30819C2.43557 6.67332 2.38499 7.38499 2.8153 7.8153Z" fill="#222222"/>
                                            <path d="M21.1847 7.8153L19 10L15 6L17.4113 4.39246C17.7641 4.15728 18.2268 4.17012 18.566 4.42451L21.0776 6.30819C21.5644 6.67332 21.615 7.38499 21.1847 7.8153Z" fill="#222222"/>
                                            <path d="M18 10V11H6V10L9 7H15L18 10Z" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <p>Supprimer</p>
                                    </button>
                                    </>):(<></>)}
                                </div>
                            );
                        })}
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
                                    <g clipPath="url(#clip0_217_1155)">
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
