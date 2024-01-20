"use client"

import { Product } from "@/components";
import { RangeSlider } from "@/components";
import ObjectID from "bson-objectid";
import { useState } from "react";

export function Collections() {


    const [brands, _] = useState<string[]>(['Apple', 'Sony', 'Samsung', 'Xiaomi', 'Brand 3' ]);

    return (
        <div className="bg-white">
            <div className="mdc-slider"></div>

            <div className="overflow-hidden">
                {/* <!--
                Mobile filter dialog
                Off-canvas filters for mobile, show/hide based on off-canvas filters state. &
                
                Off-canvas menu backdrop, show/hide based on off-canvas menu state.
                --> */}

                {/* TODO: will use it afterwards. */}
                {/* <div className="relative z-50 lg:hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                    <div className="fixed inset-0 z-50 flex">
                        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Heading</h2>
                            <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                            <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                </div> */}

                {/* end of mobile section */}



            <h2 className="text-3xl text-center my-8">All Products</h2>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-4">
                            {/* <!-- Filters --> */}
                            <form className="hidden md:block">
                                {/* <!-- filter section --> */}
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        {/* <!-- Expand/collapse section button --> */}
                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">Brands</span>
                                            <span className="ml-6 flex items-center">
                                            </span>
                                        </button>
                                    </h3>

                                    {/* <!-- Filter section, show/hide based on section state. --> */}
                                    <div className="pt-6" id="filter-section-0">
                                            <div className="space-y-4">
                                                {
                                                    brands.map(brand => (
                                                        <div
                                                            key={ new ObjectID().toHexString() }  
                                                            className="flex items-center"
                                                        >
                                                            <input id="filter-color-0" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                            <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">{brand}</label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    </div>
                                </div>
                                {/* <!-- filter section --> */}
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">
                                        {/* <!-- Expand/collapse section button --> */}
                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-gray-900">Price</span>
                                        <span className="ml-6 flex items-center">
                                            {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                            {/*  */}
                                        </span>
                                        </button>
                                    </h3>

                                    {/* <!-- Filter section, show/hide based on section state. --> */}
                                    <div className="pt-6" id="filter-section-0">
                                        <RangeSlider max={1000} min={0} step={1} onChange={(value) => {
                                            console.log(value);
                                        }} />
                                    </div>
                                </div>
                            </form>

                            {/* <!-- Product grid --> */}
                            <div className="md:col-span-3 mt-3">
                                <div className="mt-2">
                                    <div className="grid md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 my-5">
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                        <Product />
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}