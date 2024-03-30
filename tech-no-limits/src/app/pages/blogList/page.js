import { prisma } from "@/db/prisma";
import Post from '@/components/Post';

export default async function Home() {
  const allUsers = await prisma.user.findMany();
  const allBlog = await prisma.post.findMany();


  return (
    <main>
      <div className="flex flex-col">
        <h1 className="font-bold text-5xl mt-7 mb-5 text-center">Retrouve tous nos blogs</h1>
        <div className="grid grid-cols-3 gap-4 px-[140PX] m-16">
          {blogs.map((blog) => (
            <Post key={blog.id} blog={blog} />
          ))}
        </div>
        <div className='flex justify-center'>
          <button className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg'>
            <svg className="mr-2" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.574229 3.35372C0.378967 3.54898 0.378967 3.86557 0.574229 4.06083L3.75621 7.24281C3.95147 7.43807 4.26805 7.43807 4.46332 7.24281C4.65858 7.04755 4.65858 6.73096 4.46332 6.5357L1.63489 3.70727L4.46332 0.878847C4.65858 0.683585 4.65858 0.367002 4.46332 0.17174C4.26805 -0.0235219 3.95147 -0.023522 3.75621 0.17174L0.574229 3.35372ZM18.9766 3.20728L0.927782 3.20727L0.927782 4.20727L18.9766 4.20728L18.9766 3.20728Z" className='fill-current'/>
            </svg>
            <p>Prev.</p>
          </button>
          <p className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg'>{currentPage}</p>
          <button id="testation" onClick={handleNextPage} className='hover:text-slate-100 hover:bg-custom-purple mx-4 my-3 flex p-4 items-center text-custom-puple border-solid border-[1px] border-custom-purple rounded-lg'>
            <p>Suiv.</p>
            <svg className="ml-2" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3291 4.06083C19.5244 3.86556 19.5244 3.54898 19.3291 3.35372L16.1471 0.171739C15.9518 -0.0235233 15.6353 -0.0235233 15.44 0.171739C15.2447 0.367001 15.2447 0.683584 15.44 0.878846L18.2684 3.70727L15.44 6.5357C15.2447 6.73096 15.2447 7.04754 15.44 7.24281C15.6353 7.43807 15.9518 7.43807 16.1471 7.24281L19.3291 4.06083ZM0.926758 4.20728L18.9755 4.20727L18.9755 3.20727L0.926758 3.20728L0.926758 4.20728Z" className='fill-current'/>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
