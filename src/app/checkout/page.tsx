// alo/aiq - bg-opacity-100
// z - position: fixed (fixed)
// cg - left: 0px (left-0)
// dn - top: 0px (top-0)
// md - display: none (hidden)
// ph - h-screen
// rg - w-1/2
// de - right: 0px
// ab - relative
// gx - m-auto
// mb - grid
// ua - max-width: 80rem (max-w-7xl)
// yg - grid-cols-1
// aab - gap-16
// t - 
// ari - px-1
// ask - pb-10

import { Header } from "@/components";
import ObjectID from "bson-objectid";

export default function CheckoutPage() {
    return (
        <>
            <div className="header-top-margin">
                {/* add show nav on top */}
                <Header  />
            </div>
            <div className="w-full bg-gray-100 min-h-screen flex flex-grow text-black">
                <div className="bg-white w-full lg:w-1/2 flex flex-col">
                    <div className="max-w-lg w-full ml-auto px-6 py-6 sm:py-10">
                        <div className="mb-10">
                            <label htmlFor="input-number" className="block text-sm font-medium mb-2">Contact Information</label>
                            <input type="text" id="input-number" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="your@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 ">Delivery</label>
                            <div className="mb-5">
                                <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="Email" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                                <div className="mb-5">
                                    <input type="text" id="input-exp" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="First Name" />
                                </div>
                                <div className="mb-5">
                                    <input type="text" id="input-exp" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-5">
                            <div className="mb-5">
                                <input type="text" id="input-exp" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="City" />
                            </div>
                            <div className="mb-5">
                                <input type="text" id="input-exp" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="Postal Code" />
                            </div>
                        </div>

                        <div>
                            <div className="mb-5">
                                <input type="text" id="input-exp" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="Phone" />
                            </div>
                        </div>



                        <div className="mb-5">
                            <label htmlFor="input-number" className="block text-sm font-medium mb-2 ">Cardholder name</label>
                            <input type="text" id="input-number" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="John Doe" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="input-country" className="block text-sm font-medium mb-2 ">Billing address</label>
                            <select id="input-country" className="py-3 px-4 block w-full border-gray-200 rounded-t-lg text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300 ">
                                <option>Country</option>
                                <option>Country</option>
                                <option>Country</option>
                                <option>Country</option>
                                <option>Country</option>
                                <option>Country</option>
                                <option>Country</option>
                            </select>
                            <input type="text" id="input-zip" className="py-3 px-4 block w-full border-gray-200 rounded-b-lg border-t-0 text-sm focus:border-blue-500 focus:ring-blue-500  placeholder-gray-300  shadow-sm" placeholder="Zip Code" />
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between py-1 text-gray-700  font-medium">
                                <div>Subtotal</div>
                                <div>$9.99</div>
                            </div>
                            <div className="flex justify-between py-1 text-gray-700  font-medium">
                                <div>Total</div>
                                <div>$9.99</div>
                            </div>
                        </div>
                        <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all ">
                            Pay $9.99
                        </button>
                    </div>
                </div>
                <div className="bg-gray-100 lg:flex flex-col w-1/2">
                    <div className="max-w-lg w-full px-6 py-6 sm:py-10">
                        <ul role="list" className="divide-y divide-gray-100">
                            {
                                [1,2,3,4,6,7,8].map(x => (
                                    <li key={new ObjectID().toHexString()} className="flex justify-between gap-x-6 py-4 border-b">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-14 w-14 flex-none bg-gray-50" src="https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg" alt="" />
                                            <div className="min-w-0 flex-auto">
                                                <p className="p-0 text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                                            </div>
                                        </div>
                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                            <p className="text-sm leading-6 text-gray-900">70.0$</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
              
    );
}