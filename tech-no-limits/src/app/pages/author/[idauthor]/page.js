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
            <section className="bg-cover bg-center bg-[url('/images/authorbg.png')]" >
            </section>

            {author && <p className='text-justify whitespace-pre-line'>{author.username}</p>}
            <div>
                {authorBlogs.map(blog => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default page;