"use client"
import { useSession } from "next-auth/react"

const UserProfilePage = () => {
    const { data: session, status } = useSession();
    let connected = false;

    if (status === "authenticated") {
        connected = true;
    }

    return (
        <div>
            <h1>User profile Page</h1>
            {connected ? (
                <>
                    <p>Username: {session?.user?.username}</p>
                    <p>Sex: {session?.user?.sex ? "Female" : "Male"}</p>
                    <p>Email: {session?.user?.email}</p>
                    <p>Permission: {session?.user?.permission}</p>
                    <p>Posts: {session?.user?.posts ? "Full" : "Empty"}</p>
                </>
            ) : (
                <p>Please sign in to view your profile.</p>
            )}
        </div>
    );
}

export default UserProfilePage;
