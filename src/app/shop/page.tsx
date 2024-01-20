import { Product, Slider } from "@/components";
import ObjectID from "bson-objectid";

export default function ShopPage() {
    return (
        <>
            <main className="overflow-hidden">
                <div className="content text-black">
                    <Slider></Slider>
                    <section className="max-w-6xl m-auto">
                    
                        {/* promotions products. */}
                        <div
                            className="promotions my-28 overflow-hidden sm:mx-2"
                        >
                            <h2 className="font-semibold text-slate-800 text-5xl text-center">Promotions</h2>
                            <p className="my-6 max-w-5xl m-auto text-center">
                            Discover unbeatable deals and exclusive offers on a wide range of products in our promotion section, making online shopping even more rewarding.
                            </p>

                            <div className="grid md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 my-5">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>

                        {/* design */}
                        <div className="my-36">
                            <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
                            {/*  */}
                            {
                                [1,2,3].map(() => (
                                    <div key={new ObjectID().toHexString()} className="relative overflow-hidden rounded div-box">
                                        <img className="transition-all w-screen object-cover" src="https://storeganjiswag.com/cdn/shop/files/Web_540x.jpg?v=1689432686" alt="Hanging Planters" />
                                        <div className="font-roboto absolute inset-0 w-full h-full cursor-pointer items-center justify-center bg-slate-400 bg-opacity-20 text-center text-2xl font-medium text-white transition group-hover:bg-opacity-60">
                                        <div className="relative w-full h-full">
                                            <div className="absolute bottom-10 text-center w-full">
                                            <p className="mb-3">
                                                Watches
                                            </p>
                                            <button className="hover:opacity-60 text-gray-100 font-semibold py-3 px-3 border border-gray-400 rounded shadow">
                                                Subscribe
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/*  */}
                            </div>
                        </div>

                        {/* flash deals products. */}
                        <div
                            className="Flash Deals my-28 overflow-hidden sm:mx-2"
                        >
                            <h2 className="font-semibold text-slate-800 text-5xl text-center">Flash Deals</h2>
                            <p className="my-6 max-w-5xl m-auto text-center">
                            Discover unbeatable deals and exclusive offers on a wide range of products in our promotion section, making online shopping even more rewarding.
                            </p>

                            <div className="grid md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 my-5">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    );
}