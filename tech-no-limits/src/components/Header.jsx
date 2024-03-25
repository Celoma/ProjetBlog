import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-custom-purple flex">  
      <div> {/* boutons vers pages de contenus */}
        <a href="" className="text-slate-100">ACCUEIL</a>
        <a href="" className="text-slate-100">ACTUS</a>
        <a href="" className="text-slate-100">CATEGORIES</a>
      </div>
      <img src="images/logo1.png" alt="Logo" />
      <div> {/* boutons vers pages de log-in sign-in*/}
        <a href="" className="text-slate-100">Login</a>
        <a href="" className="text-slate-100">Sign up</a>
      </div>
    </div>
  )
}

export default Header;