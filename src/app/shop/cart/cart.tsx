"use client"

import Link from 'next/link';
import './cart.css'
import { RouteEnum } from '../../../enums/route.enum';
import { useState } from 'react';

export function Cart() {

    const [ value, setValue ] = useState(false);

    return (
        <>
            <div className="overflow-hidden">
                {
                    value &&
                    (
                        <div className="cart-section pointer-events-none m-auto">
                            <div className="pointer-events-auto">
                                <div className="flex h-full flex-col bg-white">
                                    <div className="flex-1 px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Close panel</span>
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                            <ul role="list" className="divide-y divide-gray-200">
                                                <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                        <a href="#">Throwback Hip Bag</a>
                                                        </h3>
                                                        <p className="ml-4">$90.00</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>

                                                    <div className="flex">
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </li>
                                                <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                        <a href="#">Medium Stuff Satchel</a>
                                                        </h3>
                                                        <p className="ml-4">$32.00</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">Blue</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>

                                                    <div className="flex">
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </li>

                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>$262.00</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                <span className="mx-1">or</span>
                                                <Link href={RouteEnum.COLLECTIONS} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    !value &&
                    (
                        <div className="w-full mt-10">
                        <div className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-transparent border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                          <h2 className="mt-1 font-medium tracking-wide text-gray-700 my-7">Your Shopping cart is empty</h2>
                          <span>
                            {/* href={`/${RouteEnum.COLLECTIONS}`} */}
                            <Link href={RouteEnum.CART} onClick={() => setValue(!value)}>
                                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 py-3 border border-gray-400 rounded shadow">
                                    Continue Shopping
                                </button>
                            </Link>
                          </span>
                        </div>
                      </div>
                    )
                }
            </div>
        </>
    );
}