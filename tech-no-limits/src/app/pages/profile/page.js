"use client"
import { useSession } from "next-auth/react"

const UserProfilePage = () => {
    const {data:session,status} = useSession({
        required: true,
    onUnauthenticated() {
        throw new Error('Not authenticated !')
    },
    })
    return (
        <div>
            <h1>User profile Page</h1>
            <p>{session?.user?.username}</p>
            <p>{session?.user?.sex ? "femme" : "homme" }</p>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.permission}</p>
            <p>{session?.user?.posts ? "plein" : "vide"}</p>
        </div>
    );
}

export default UserProfilePage;