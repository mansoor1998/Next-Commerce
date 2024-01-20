"use client"

import { Example } from "./components/example";
import { ProductDetails } from "./components/productDetail";

export function Product() {
    return (
        <div>
            <section className="font-poppins ">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="sticky top-0 z-20 overflow-hidden ">
                                {/* <div className="relative mb-6 lg:mb-10 ">
                                <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
asd                                </a>
                                <img className="object-cover w-full lg:h-1/2" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="" />
                                <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
asd
                                </a>
                                </div>
                                <div className="flex-wrap hidden -mx-2 md:flex">
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a className="block border border-transparent hover:border-blue-400" href="#">
                                            <img className="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a className="block border border-transparent hover:border-blue-400" href="#">
                                            <img className="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a className="block border border-transparent hover:border-blue-400" href="#">
                                            <img className="object-cover w-full lg:h-32" src="https://storeganjiswag.com/cdn/shop/files/13-600x600_81d79b67-c3fa-4b37-ab00-ce2f1a62c4d6_550x.png?v=1689343091" alt="" />
                                        </a>
                                    </div>
                                    <div className="w-1/2 p-2 sm:w-1/4">
                                        <a className="block border border-transparent hover:border-blue-400" href="#">
                                            <img className="object-cover w-full lg:h-32" src="https://i.postimg.cc/prW7DGkK/R-14.png" alt="" />
                                        </a>
                                    </div>
                                </div> */}
                                <ProductDetails />
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="">
                                    <p className="mb-4 text-lg font-semibold ">Choose your finish</p>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 ">
                                        <div>
                                            <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300   hover:border-blue-400">
                                                <div>
                                                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-emerald-400"></div>
                                                    <p className="text-xs text-center text-gray-700 ">Pearl Green</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div>
                                            <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300   hover:border-blue-400">
                                                <div>
                                                    <div className="w-8 h-8 mx-auto mb-2 bg-gray-700 rounded-full "></div>
                                                    <p className="text-xs text-center text-gray-700 ">Mattee Black</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div>
                                            <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300   hover:border-blue-400">
                                                <div>
                                                    <div className="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full"></div>
                                                    <p className="text-xs text-center text-gray-700 ">Red</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div>
                                            <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300   hover:border-blue-400">
                                                <div>
                                                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-stone-200"></div>
                                                    <p className="text-xs text-center text-gray-700 ">Silver</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="mb-2 text-lg font-semibold ">Choose your Capacity</p>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 ">
                                        <div>
                                            <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300   hover:border-blue-400">
                                                <div className="font-semibold ">128 GB</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 ">
                                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">Continue</button>
                                </div>
                                <div className="flex items-center mt-6 ">
                                    <div>
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 ">Still deciding?</h2>
                                        <p className="mb-2 text-sm ">Add this item to a list and easily come back to it later</p>
                                    </div>
                                    <span className="ml-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600  bi bi-bookmark " viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}