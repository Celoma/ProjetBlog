"use client"
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const page = ({ params }) => {
    const { idauthor } = params;
    const [allBlog, setAllBlog] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

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
    const authorBlogs = allBlog.filter(post => post.authorId === idauthor);

    const author = allUsers.find(user => user.id === idauthor);

    return (
        <main>
            <section className="bg-cover bg-center py-[50px] flex items-center justify-center" style={{ backgroundImage: 'url("/images/authorbg.png")' }}>
                <div className='bg-[#D9D9D985] rounded-[80px] text-center px-[220px] py-[100px] backdrop-blur-[3px]'>
                    <div className='w-[255px] h-[220px] bg-custom-purple justify-center flex rounded'>
                        <img src='/images/avatar-user.png' className='h-[200px] mt-[20px]'></img>
                    </div>
                    {author && <p>{author.username}</p>}
                    <p>Suivez moi sur mes réseaux</p>
                    <div className='flex justify-center gap-2'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 12.0453C25 5.68673 19.4052 0.534851 12.5 0.534851C5.59476 0.534851 0 5.68673 0 12.0453C0 17.7904 4.57107 22.5524 10.5469 23.4166V15.3727H7.37147V12.0453H10.5469V9.50933C10.5469 6.62474 12.4118 5.03137 15.2681 5.03137C16.6361 5.03137 18.0665 5.25601 18.0665 5.25601V8.08722H16.4899C14.9375 8.08722 14.4531 8.97464 14.4531 9.88481V12.0453H17.9199L17.3654 15.3727H14.4531V23.4166C20.4289 22.5524 25 17.7904 25 12.0453Z" fill="#A15E49"/>
                        </svg>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 11.183C0 15.7621 2.88823 19.696 7.02116 21.4256C6.98817 20.6447 7.0153 19.7073 7.22533 18.8577C7.45085 17.9499 8.7346 12.7641 8.7346 12.7641C8.7346 12.7641 8.35989 12.0501 8.35989 10.9948C8.35989 9.33755 9.36735 8.09984 10.622 8.09984C11.689 8.09984 12.2044 8.86385 12.2044 9.77874C12.2044 10.8013 11.5204 12.3308 11.1686 13.7474C10.8747 14.9337 11.7924 15.9012 13.0199 15.9012C15.2423 15.9012 16.7391 13.1799 16.7391 9.95557C16.7391 7.50462 15.0076 5.67011 11.8583 5.67011C8.30023 5.67011 6.08362 8.19987 6.08362 11.0256C6.08362 11.9999 6.38492 12.687 6.85685 13.219C7.07385 13.4634 7.104 13.5617 7.02547 13.8423C6.9692 14.048 6.83999 14.5434 6.78648 14.7397C6.7084 15.0229 6.46767 15.1242 6.19917 15.0196C4.56033 14.3818 3.79708 12.6707 3.79708 10.7473C3.79708 7.57058 6.60723 3.76144 12.1803 3.76144C16.6586 3.76144 19.6061 6.85103 19.6061 10.1675C19.6061 14.5544 17.0479 17.8318 13.2771 17.8318C12.0107 17.8318 10.8195 17.1791 10.4115 16.4378C10.4115 16.4378 9.73051 19.0144 9.58627 19.512C9.33757 20.3742 8.85079 21.2359 8.40571 21.9076C9.48497 22.2119 10.6046 22.3663 11.73 22.3662C18.2073 22.3662 23.4592 17.3594 23.4592 11.183C23.4592 5.00683 18.2073 0 11.73 0C5.2521 0 0 5.00683 0 11.183Z" fill="#A15E49"/>
                        </svg>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3448 6.60149C23.3317 5.66238 23.1473 4.73261 22.7999 3.85376C22.4986 3.11246 22.0385 2.43923 21.4488 1.87707C20.8592 1.31492 20.1531 0.876211 19.3755 0.588976C18.4656 0.263312 17.5043 0.0872196 16.5325 0.0681973C15.2814 0.0148795 14.8847 0 11.7088 0C8.53288 0 8.12581 8.31451e-08 6.88379 0.0681973C5.91249 0.0873595 4.95163 0.26345 4.0421 0.588976C3.26445 0.876011 2.5582 1.31465 1.96855 1.87683C1.3789 2.43901 0.918822 3.11234 0.617759 3.85376C0.275496 4.72065 0.0911984 5.63695 0.0728306 6.56305C0.0169071 7.75712 0 8.13531 0 11.1633C0 14.1912 -9.68982e-09 14.5781 0.0728306 15.7635C0.0923388 16.691 0.275716 17.606 0.617759 18.4752C0.919327 19.2164 1.37974 19.8895 1.96959 20.4514C2.55944 21.0134 3.26575 21.4518 4.0434 21.7388C4.95044 22.0775 5.91147 22.2662 6.88509 22.2968C8.13752 22.3501 8.53418 22.3662 11.7101 22.3662C14.8861 22.3662 15.2931 22.3662 16.5351 22.2968C17.5069 22.2785 18.4682 22.1028 19.3781 21.7772C20.1555 21.4897 20.8614 21.0508 21.451 20.4887C22.0406 19.9266 22.5009 19.2535 22.8025 18.5124C23.1445 17.6445 23.3279 16.7294 23.3474 15.8007C23.4033 14.6078 23.4202 14.2297 23.4202 11.2005C23.4176 8.1725 23.4176 7.78812 23.3448 6.60149ZM11.701 16.8893C8.37942 16.8893 5.68859 14.3239 5.68859 11.1571C5.68859 7.99023 8.37942 5.42478 11.701 5.42478C13.2956 5.42478 14.8249 6.02871 15.9524 7.10372C17.08 8.17874 17.7134 9.63676 17.7134 11.1571C17.7134 12.6774 17.08 14.1354 15.9524 15.2104C14.8249 16.2854 13.2956 16.8893 11.701 16.8893ZM17.9527 6.54941C17.7686 6.54957 17.5862 6.51511 17.416 6.448C17.2458 6.38088 17.0912 6.28243 16.961 6.15827C16.8308 6.03412 16.7275 5.8867 16.6571 5.72446C16.5867 5.56221 16.5506 5.38832 16.5507 5.21275C16.5507 5.03729 16.587 4.86356 16.6574 4.70146C16.7278 4.53937 16.8311 4.39208 16.9612 4.26802C17.0913 4.14396 17.2458 4.04554 17.4158 3.9784C17.5858 3.91126 17.7681 3.8767 17.9521 3.8767C18.1361 3.8767 18.3183 3.91126 18.4884 3.9784C18.6584 4.04554 18.8129 4.14396 18.943 4.26802C19.0731 4.39208 19.1763 4.53937 19.2468 4.70146C19.3172 4.86356 19.3534 5.03729 19.3534 5.21275C19.3534 5.95176 18.7266 6.54941 17.9527 6.54941Z" fill="#A15E49"/>
                            <path d="M11.7014 14.8798C13.8584 14.8798 15.607 13.2127 15.607 11.1562C15.607 9.09975 13.8584 7.43266 11.7014 7.43266C9.54447 7.43266 7.7959 9.09975 7.7959 11.1562C7.7959 13.2127 9.54447 14.8798 11.7014 14.8798Z" fill="#A15E49"/>
                        </svg> 
                    </div>
                </div>
            </section>
            <h2 className='pl-[140px] text-2xl font-semibold'><em className='bg-custom-blue text-slate-100 not-italic'> Lire</em> les blogs de l'auteur</h2>
            <div className="grid grid-cols-3 gap-4 px-[140PX]">
                {authorBlogs.map((Post) => (
                        <a href={`/pages/blog/${Post.id}`} className='cursor-pointer hover:bg-[#D9D9D9] flex flex-col bg-custom-gray w-[400px] rounded'>
                            <img className="w-[400px] h-[255PX] rounded" src="/images/defaultblog.jpg" alt="" />
                            <p className='text-sm ml-2 w-min text-white bg-custom-blue p-0.5 rounded-md mt-4 mb-2'>{Post.theme}</p>
                            <h1 className='ml-2 font-bold text-3xl truncate mb-2'>{Post.title}</h1>
                            {author && <p className='text-sm ml-2 text-[#777777] mb-2'>{author.username}</p>}
                            <p className='ml-2 truncate mb-2'>{Post.body}</p>
                        </a>
                ))}
            </div>
        </main>
    );
};

export default page;