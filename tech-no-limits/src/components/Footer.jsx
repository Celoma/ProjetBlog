const Footer = () => {
    return (
        <footer className="h-footer bg-custom-purple ">
            <div className="flex place-content-between">
                <img src="images/logo1.png" alt="Logo de l'entreprise" className="mt-4 h-90"/>
                <div className="mt-28">
                    <h4 className="text-lg font-medium text-custom-orange mb-4">Blogs</h4>
                    <ul className="text-custom-gray font-size-sm">
                        <li className="mb-2.5">Gadgets</li>
                        <li className="mb-2.5">Technologie</li>
                        <li className="mb-2.5">Linux</li>
                        <li className="mb-2.5">Développement</li>
                        <li className="mb-2.5">Gaming</li>
                    </ul>
                </div>
                <div className="mt-28">
                    <h4 className="text-lg font-medium text-custom-orange mb-4">Quick links</h4>
                    <ul className="text-custom-gray">
                        <li className="mb-2.5">FAQ</li>
                        <li className="mb-2.5">Conditions d'utilisation</li>
                        <li className="mb-2.5">Support</li>
                        <li className="mb-2.5">Politique privée</li>
                    </ul>
                </div>
                <div className="mt-28 mr-40">
                    <h4 className="text-lg font-medium text-custom-orange mb-4">Abonne toi à la newsletter</h4>
                    <form class="max-w-lg mx-auto flex">
                        <input type="email" id="email" class="bg-custom-gray border border-gray-300 text-custom-purple text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rentre ton email" required />
                        <button type="submit" className="w-36 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-custom-orange rounded-r-lg hover:bg-custom-orange group p-2">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-custom-brown absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                            Abonne-toi
                            </span>
                        </button>
                    </form>
                    <h4 className="text-lg font-medium text-custom-orange mb-4 mt-8">Rejoins nos réseaux :</h4>
                </div>
            </div>
            <hr className="mx-36"/>
            <p className="text-center text-custom-orange mt-4">Designed by Clément, Matéo, Florian & Swathi</p>
        </footer>
    )
}

export default Footer;