"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [allBlog, setAllBlog] = useState([]);
    const [allUsers, setAllUsers] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const blogResponse = await axios.get('/api/blog');
          const sortedBlog = blogResponse.data.sort((a, b) => b.likes - a.likes);
          setAllBlog(sortedBlog);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

    const startIndex = (currentPage - 1) * 6;
    const endIndex = Math.min(startIndex + 6, allBlog.length);

    const changePage = (page) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    


  return (
    <main>
      <section className='bg-custom-gray w-full h-full'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col ml-14 pt-28'>
            <h1 className='text-custom-purple font-semibold text-6xl text-center max-w-[500px]'>Tu as envie de partager une actualité ?</h1>
            <a href='../pages/createblog' className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
              <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
              <span className="relative invisible">Je partage mon article</span>
            </a>
          </div>
          <img src="/images/createblog.png" alt="" className='max-w-[725px]'/>
        </div>
      </section>
      <section>
      <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <h1 className='ml-[140px] font-bold text-3xl'>Les articles les plus aimé</h1>
                </div>
                <div className="grid grid-cols-3 gap-16 mb-8 mt-16 px-[140PX]">
                    {allBlog.slice(startIndex, endIndex).map((Post, index) => (
                        <React.Fragment key={index}>
                            <a href={`/pages/blog/${Post.id}`} className='cursor-pointer hover:bg-[#D9D9D9] flex flex-col p-4 bg-white rounded'>
                                <img className="max-h-64 w-auto rounded" src="/images/defaultblog.jpg" alt="" />
                                <p className='text-sm ml-2 w-min text-white bg-custom-blue p-0.5 rounded-md mt-4 mb-2'>{Post.theme}</p>
                                <h1 className='ml-2 font-bold text-3xl truncate mb-2'>{Post.title}</h1>
                                {allUsers && allUsers.find(user => user.id === Post.authorId) && (
                                    <p className='text-sm ml-2 text-[#777777] mb-2'>{allUsers.find(user => user.id === Post.authorId)?.username}</p>
                                )}
                                <p className='ml-2 truncate mb-2'>{Post.body}</p>
                            </a>
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
                    <button className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg' onClick={() => changePage(currentPage + 1)} disabled={endIndex >= allBlog.length}>
                        <p>Suiv.</p>
                        <svg className="ml-2" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3291 4.06083C19.5244 3.86556 19.5244 3.54898 19.3291 3.35372L16.1471 0.171739C15.9518 -0.0235233 15.6353 -0.0235233 15.44 0.171739C15.2447 0.367001 15.2447 0.683584 15.44 0.878846L18.2684 3.70727L15.44 6.5357C15.2447 6.73096 15.2447 7.04754 15.44 7.24281C15.6353 7.43807 15.9518 7.43807 16.1471 7.24281L19.3291 4.06083ZM0.926758 4.20728L18.9755 4.20727L18.9755 3.20727L0.926758 3.20728L0.926758 4.20728Z" className='fill-current'/>
                        </svg>
                    </button>
                </div>
            </div>
      </section>
    </main>
  );
                                }
