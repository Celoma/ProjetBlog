"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import { signinClick, loginClick, signinClose, loginClose } from "@/components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function home() {
  const { data: session, status } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const [allBlog, setAllBlog] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  let connected = false;

  if (status === "authenticated") {
      connected = true;
  }
  let [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("mailreg").value;
    const password = document.getElementById("passwordreg").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      return;
    }
    signinClose()
    try {
      const newUser = await createUser(username, email, selectedOption, password);
      document.getElementById("username").value = "";
      document.getElementById("mailreg").value = "";
      document.getElementById("passwordreg").value = "";
      document.getElementById("confirm-password").value = "";
      selectedOption = null;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
  };

  useEffect(() => {
    const addEvent = (element, type, listener) => {
        if (element.addEventListener)
            element.addEventListener(type, listener, false);
        else if (element.attachEvent)
            element.attachEvent('on' + type, function () { return listener.apply(element, arguments); });
    }

    const escapeKey = (event) => {
        if (event.keyCode == 27) {
            document.getElementById('signin').classList.add("hidden");
            document.getElementById('login').classList.add("hidden");
            document.documentElement.style.overflow = 'visible';
        }
    }

    const closeElements = (event) => {
        const signinElement = document.getElementById('signin');
        const loginElement = document.getElementById('login');
        if (event.target === signinElement || event.target === loginElement) {
            signinElement.classList.add("hidden");
            loginElement.classList.add("hidden");
            document.documentElement.style.overflow = 'visible';
        }
    }

    const initEscape = () => {
        addEvent(document, 'keydown', escapeKey);
        addEvent(document, 'click', closeElements);
    }

    if (typeof window !== 'undefined') {
        initEscape();
    }

}, []);


const router = useRouter()
const [datalog,setData] = useState({
    email:'',
    password:''
})

const loginUser = async (e) => {
  e.preventDefault()
  signIn('credentials',{
      ...datalog,
      redirect:false,
  }).then(authenticated => {
    if(authenticated.status == 200){
      loginClose()
    }
  }).catch((error) => {
    console.log("Erreur e-mail our mot de passe incorrect")
  })
}

  return (
    <main>
      <div className='bg-custom-gray w-full h-full'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col ml-14 pt-28'>
            <h1 className='text-custom-purple font-semibold text-6xl text-center max-w-[500px]'>Tu as envie de partager une actualité ?</h1>
            { connected ? (<><a href='../pages/createblog' className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
            <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
            <span className="relative invisible">Je partage mon article</span>
          </a></>):(
            <><button onClick={loginClick} className="relative inline-flex items-center justify-center overflow-hidden transition duration-300 ease-out rounded-full shadow-md group text-slate-100 bg-custom-purple p-8 m-14 text-3xl font-semibold border-solid border-2 border-custom-purple">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom-orange group-hover:translate-x-0 ease">
            <svg className="w-6 h-6 stroke-custom-purple" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Je partage mon article</span>
            <span className="relative invisible">Je partage mon article</span>
          </button>
            </>)}
          </div>
          <img src="/images/createblog.png" alt="" className='max-w-[725px]'/>
        </div>
      </div>
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
            </div>
      </section>
    </main>
  );
}

