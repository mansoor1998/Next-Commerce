"use client"

export default function Product() {
    return (
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all top-0 hover:-top-2 duration-100">
            <a href="">
                <img className="rounded-t-lg object-cover" src="https://storeganjiswag.com/cdn/shop/files/ee49fa24f55d5ac5aa79bf7761483b2a_0d1cb96d-a76a-4703-82c5-73c803bcf116_533x.jpg?v=1703864344" alt="product image" />
            </a>
            {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span> */}
            <div className="mt-4 px-5 pb-5">
                <a href="">
                    <h5 className="text-xl font-semibold tracking-tight text-slate-900">Playstation 5</h5>
                </a>
                <div className="flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-semibold text-slate-900">$300</span>
                        {/* <span className="text-sm text-slate-900 line-through">$299</span> */}
                    </p>
                    <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-md shadow">
                        <img className="w-5" src="../assets/icons/cart.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}