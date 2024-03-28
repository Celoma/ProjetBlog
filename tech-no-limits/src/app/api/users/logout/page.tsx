"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"
import {signOut} from "next-auth/react"

const LogoutPage = () => {
    const router = useRouter()
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const logoutUser = async (e:any) => {
        e.preventDefault()
        signOut({
            redirect:false,
        }).then(() => {
            router.push("/")
        }).catch((error) => {
            throw new Error(error)
        })
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Logout from your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={logoutUser}>
            <div>
                Are you sure ?
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log out
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default LogoutPage;