const Header = () => {

  return (
    <div className="bg-custom-purple flex items-center justify-between h-15 sticky">  
      <div> {/* boutons vers pages de contenus */}
        <a href="" className="text-slate-100 mr-2 ml-5 font-semibold hover:text-gray-400">ACCUEIL</a>
        <a href="" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">ACTUS</a>
        <a href="" className="text-slate-100 mx-2 font-semibold hover:text-gray-400">CATEGORIES</a> 
      </div>
      <img src="images/logo2.png" alt="Logo" className="h-15 w-auto absolute left-2/4 -translate-x-2/4"/>
      <div> {/* boutons vers pages de log-in sign-in*/}
        <button className="text-slate-100 mr-2 font-semibold hover:text-gray-400">Login</button>

        <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded hover:bg-custom-orange group mr-5 ml-2 p-2 font-semibold">
          <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            Sign-up
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
