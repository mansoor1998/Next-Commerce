"use client"
export default function Footer() {
    return (
        <footer className="text-gray-600 body-font border">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center align-top justify-center">
                    <div className="md:w-1/3 sm:w-1/2 w-full px-4">
                        <h2 className="title-font text-xl font-medium text-gray-900 tracking-widest mb-3">About Us</h2>
                        <nav className="list-none mb-10">
                            {/* <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li> */}
                        </nav>
                    </div>
                    <div className="md:w-1/3 sm:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Menu</h2>
                        <nav className="list-none mb-10">
                            <li className="my-2">
                                <a className="text-gray-600 hover:text-gray-800">Shop</a>
                            </li>
                            <li className="my-2">
                                <a className="text-gray-600 hover:text-gray-800">Collection</a>
                            </li>
                        </nav>
                    </div>
                    <div className="md:w-1/3 sm:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Quick Links</h2>
                        <nav className="list-none mb-10">
                            <li className="my-2">
                                <a className="text-gray-600 hover:text-gray-800">Facebook</a>
                            </li>
                            <li className="my-2">
                                <a className="text-gray-600 hover:text-gray-800">Insta</a>
                            </li>
                            <li className="my-2">
                                <a className="text-gray-600 hover:text-gray-800">Tiktok</a>
                            </li>
                        </nav>
                    </div>
                </div>
                {/* news letter form */}
                <div className="flex-shrink-0 md:mx-0 mx-auto text-center">
                    <div className="mb-3 mt-10 md:mt-0">
                        <p className="ml-3 text-xl text-gray-900">NewsLetter</p>
                        <p className="mt-2 text-sm text-gray-500">Sign in to recive our newsletter about gaming products.</p>                        
                    </div>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Email" className="bg-gray-50 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Soomro Corporation</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="text-gray-500">
                        <img className="w-5" src="assets/icons/facebook.svg" alt="facebook" />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <img className="w-5" src="assets/icons/x.svg" alt="X" />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <img className="w-5" src="assets/icons/instagram.svg" alt="instagram" />
                    </a>
                    <a className="ml-3 text-gray-500">
                        <img className="w-5" src="assets/icons/linkedin.svg" alt="linkedin" />
                    </a>
                </span>
                </div>
            </div>
        </footer>
    );
}