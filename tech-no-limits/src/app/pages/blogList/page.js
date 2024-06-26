"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Post from '@/components/Post';

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [allBlog, setAllBlog] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState("");
    const [filteredArticles, setFilteredArticles] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await axios.get('/api/blog/get');
                setAllBlog(blogResponse.data);
                
                const userResponse = await axios.get('/api/users/get');
                setAllUsers(userResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Filter articles based on the selected theme
        const filterArticles = () => {
            if (selectedTheme && selectedTheme !== "All") {
                const filtered = allBlog.filter(article => article.theme === selectedTheme);
                setFilteredArticles(filtered);
            } else {
                setFilteredArticles(allBlog);
            }
        };

        filterArticles();
    }, [selectedTheme, allBlog]);

    useEffect(() => {
        // Get the theme from the URL and set it as the selected theme
        const getThemeFromURL = () => {
            const searchParams = new URLSearchParams(window.location.search);
            const themeParam = searchParams.get('theme');
            if (themeParam) {
                setSelectedTheme(themeParam);
            }
        };

        getThemeFromURL();
    }, []);

    const startIndex = (currentPage - 1) * 9;
    const endIndex = Math.min(startIndex + 9, filteredArticles.length);

    const changePage = (page) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const reloadPageWithTheme = (theme) => {
        const urlWithTheme = window.location.pathname + '?theme=' + encodeURIComponent(theme);
    };
    if (status === 'loading') {
        return (<main className='h-screen bg-custom-trans-gray'>
                    <p className='text-center font-semibold  text-lg'>Chargement en cours...</p>
                </main>
        )
    }
    return (
        <div>
            <div className='flex flex-col bg-custom-trans-gray'>
                <div className='mt-8 ml-[140px]'>
                    <h1 className="font-bold text-2xl">Annuaire des articles</h1>
                    <select
                        id="categorie"
                        className='bg-custom-trans-gray text-2xl mt-8 text-custom-purple border-b-2 border-solid border-custom-purple'
                        value={selectedTheme}
                        onChange={(e) => {
                            setSelectedTheme(e.target.value); // Update the selected theme state
                            reloadPageWithTheme(e.target.value); // Reload the page with the selected theme
                        }}>
                        <option value="All">Tous les thèmes</option>
                        <option value="Développement">Développement</option>
                        <option value="Réseau">Réseau</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Gadget">Gadget</option>
                        <option value="Github">GitHub</option>
                        <option value="Musique">Musique</option>
                        <option value="Cloud">Cloud</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-16 mb-8 mt-16 px-[140PX]">
                    {filteredArticles.slice(startIndex, endIndex).map((post, index) => (
                        <React.Fragment key={index}>
                          <Post
                            id={post.id}
                            theme={post.theme}
                            title={post.title}
                            authorId={post.authorId}
                            body={post.body}
                            likes={post.likes}
                            allUsers={allUsers}
                            images={post.images}
                          />
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg' onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                        <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.574229 3.35372C0.378967 3.54898 0.378967 3.86557 0.574229 4.06083L3.75621 7.24281C3.95147 7.43807 4.26805 7.43807 4.46332 7.24281C4.65858 7.04755 4.65858 6.73096 4.46332 6.5357L1.63489 3.70727L4.46332 0.878847C4.65858 0.683585 4.65858 0.367002 4.46332 0.17174C4.26805 -0.0235219 3.95147 -0.023522 3.75621 0.17174L0.574229 3.35372ZM18.9766 3.20728L0.927782 3.20727L0.927782 4.20727L18.9766 4.20728L18.9766 3.20728Z" className='fill-current'/>
                        </svg>
                        <p>Prev.</p>
                    </button>
                    <p className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg'>{currentPage}</p>
                    <button className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg' onClick={() => changePage(currentPage + 1)} disabled={endIndex >= filteredArticles.length}>
                        <p>Suiv.</p>
                        <svg className="ml-2" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3291 4.06083C19.5244 3.86556 19.5244 3.54898 19.3291 3.35372L16.1471 0.171739C15.9518 -0.0235233 15.6353 -0.0235233 15.44 0.171739C15.2447 0.367001 15.2447 0.683584 15.44 0.878846L18.2684 3.70727L15.44 6.5357C15.2447 6.73096 15.2447 7.04754 15.44 7.24281C15.6353 7.43807 15.9518 7.43807 16.1471 7.24281L19.3291 4.06083ZM0.926758 4.20728L18.9755 4.20727L18.9755 3.20727L0.926758 3.20728L0.926758 4.20728Z" className='fill-current'/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
