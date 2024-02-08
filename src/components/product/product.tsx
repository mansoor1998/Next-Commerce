"use client"

import { ProductModel } from "@/models/Products.model";

export default function Product({
    product
}: { product: ProductModel }) {
    return (
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all top-0 hover:-top-2 duration-100">
            <a href="">
                <img className="rounded-t-lg object-cover" src={product?.images?.edges?.at(0)?.node.originalSrc} alt={product?.images?.edges?.at(0)?.node.altText} />
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="">
                    <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product?.title}</h5>
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