"use client"
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import axios from 'axios';

const Page = () => {
    const { data: session, status } = useSession();
    
    useEffect(() => {
        if ((session && session.user.permission !== "admin" || status === "unauthenticated")) {
            window.location.href = '/';
        }
    }, [status, session]);

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get('/api/users/get');
                setAllUsers(userResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteUser = async (userId, username) => {
        const confirmation = window.confirm(`Voulez-vous vraiment supprimer définitivement l'utilisateur ${username} ? Cette action est définitive et l'utilisateur ainsi que tous ses posts et commentaires seront supprimés.`);
        if (confirmation) {
            try {
                const response = await axios.post('/api/users/delete', {userId});
                console.log(response.data);

                const updatedUsers = allUsers.filter(user => user.id !== userId);
                setAllUsers(updatedUsers);
                alert(`L'utilisateur ${username} a été supprimé avec succès.`);
            } catch (error) {
                console.error('Error deleting user:', error);
                alert(`Une erreur s'est produite lors de la suppression de l'utilisateur ${username}.`);
            }
        }
    };

    const handleUpgradeUser = async (userId, username) => {
        const confirmation = window.confirm(`Voulez-vous vraiment passer définitivement l'utilisateur ${username} en temps qu'administratuer ?`)
        if (confirmation) {
            try {
                const response = await axios.post('/api/users/upgrade', {userId});
                console.log(response.data);
                alert(`L'utilisateur ${username} a été passé administrateur avec succès.`);
            } catch (error) {
                console.error('Error upgrading user:', error);
                alert(`Une erreur s'est produite lors de l'upgrade de l'utilisateur ${username}.`);
            }
        }
    }

    if (status === 'loading') {
        return (<main className='h-screen bg-custom-trans-gray'>
                    <p className='text-center font-semibold  text-lg'>Chargement en cours...</p>
                </main>
        )
    }

    return (
        <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allUsers.map((user, index) => (
                <div key={index} className="bg-slate-100 rounded p-4 transition duration-300 ease-in-out hover:bg-custom-brown hover:text-slate-100 flex items-center flex-col">
                    <p className="text-lg font-semibold mb-2">{user.username}</p>
                    <p className="text-sm mb-1">{user.email}</p>
                    <p className="text-sm mb-1">Permission: {user.permission}</p>
                    <p className="text-sm mb-1">Nombre de post: {user.posts.length}</p>
                    <button onClick={() => handleDeleteUser(user.id, user.username)} className="p-2 rounded">
                        <span className="hover:text-[#FE1616]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 11H19V15C19 16.8856 19 17.8284 18.4142 18.4142C17.8284 19 16.8856 19 15 19H9C7.11438 19 6.17157 19 5.58579 18.4142C5 17.8284 5 16.8856 5 15V11Z" className='fill-current'/>
                                <path d="M2.8153 7.8153L5 10L9 6L6.58869 4.39246C6.23591 4.15728 5.77317 4.17012 5.43399 4.42451L2.92241 6.30819C2.43557 6.67332 2.38499 7.38499 2.8153 7.8153Z" className='fill-current'/>
                                <path d="M21.1847 7.8153L19 10L15 6L17.4113 4.39246C17.7641 4.15728 18.2268 4.17012 18.566 4.42451L21.0776 6.30819C21.5644 6.67332 21.615 7.38499 21.1847 7.8153Z" className='fill-current'/>
                                <path d="M18 10V11H6V10L9 7H15L18 10Z" className='stroke-current' strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </button>
                    <button onClick={() => handleUpgradeUser(user.id, user.username)}>
                        <span className='hover:text-custom-blue'>
                            <svg width="39" height="42" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.25 30.8311L19.5 20.5541L9.75 30.8311" className='stroke-current' strokeWidth="2"/>
                                <path d="M29.25 20.554L19.5 10.277L9.75 20.554" className='stroke-current' strokeWidth="2"/>
                            </svg>
                        </span>
                    </button>
                </div>
            ))}
        </div>
    )
};

export default Page;
