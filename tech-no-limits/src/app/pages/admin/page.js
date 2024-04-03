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

    // Côté client - fonction de suppression de l'utilisateur
    const handleDeleteUser = async (userId, username) => {
        const confirmation = window.confirm(`Voulez-vous vraiment supprimer définitivement l'utilisateur ${username} ? Cette action est définitive et l'utilisateur ainsi que tous ses posts et commentaires seront supprimés.`);
        if (confirmation) {
            try {
                // Supprimer l'utilisateur avec l'ID userId
                const response = await axios.delete(`/api/users/delete/${userId}`);
                console.log(response.data); // Affiche la réponse du serveur après la suppression
                // Mettre à jour la liste des utilisateurs après la suppression
                const updatedUsers = allUsers.filter(user => user.id !== userId);
                setAllUsers(updatedUsers);
                alert(`L'utilisateur ${username} a été supprimé avec succès.`);
            } catch (error) {
                console.error('Error deleting user:', error);
                alert(`Une erreur s'est produite lors de la suppression de l'utilisateur ${username}.`);
            }
        }
    };


    return (
        <div>
            {allUsers.map((user, index) => (
                <div key={index} className="flex flex-row items-center border-b border-gray-200 py-2">
                    <div className="flex-grow">
                        <p className="text-lg font-semibold">{user.username}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm">Permission: {user.permission}</p>
                        <p className="text-sm">Nombre de post: {user.posts.length}</p>
                    </div>
                    <button onClick={() => handleDeleteUser(user.id, user.username)} className="ml-2 p-2 hover:bg-gray-200 rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 11H19V15C19 16.8856 19 17.8284 18.4142 18.4142C17.8284 19 16.8856 19 15 19H9C7.11438 19 6.17157 19 5.58579 18.4142C5 17.8284 5 16.8856 5 15V11Z" fill="#222222"/>
                            <path d="M2.8153 7.8153L5 10L9 6L6.58869 4.39246C6.23591 4.15728 5.77317 4.17012 5.43399 4.42451L2.92241 6.30819C2.43557 6.67332 2.38499 7.38499 2.8153 7.8153Z" fill="#222222"/>
                            <path d="M21.1847 7.8153L19 10L15 6L17.4113 4.39246C17.7641 4.15728 18.2268 4.17012 18.566 4.42451L21.0776 6.30819C21.5644 6.67332 21.615 7.38499 21.1847 7.8153Z" fill="#222222"/>
                            <path d="M18 10V11H6V10L9 7H15L18 10Z" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Page;
