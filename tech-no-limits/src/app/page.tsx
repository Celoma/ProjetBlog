import {prisma} from "@/db/prisma"
import Logout from '../components/Logout'

export default async function home() {



  const allUsers = await prisma.user.findMany()

  return (
    <main>
      <a href="api/users/logout" id="test">cocou</a>
      <Logout />
      <div className="text-center"><ul>{allUsers.map((User) => (<li>{User.email} {User.password}</li>))}</ul></div>
      <a href="../pages/createblog">Créer un blog</a>
        <div className='bg-custom-gray w-full h-full'>
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
      </div>
    </main>
  );
}
