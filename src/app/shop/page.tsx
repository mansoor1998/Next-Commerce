import { Product, Slider } from "@/components";
import ObjectID from "bson-objectid";
import { useQuery, gql } from '@apollo/client';
import client from "@/apollo-client";
import { GraphqlModel } from "@/models/Graphql.model";
import { ProductModel } from "@/models/Products.model";
import createApolloClient from "@/apollo-client";


const GET_PRODUCT_DATA = gql`
    query {
        products(first: 6, reverse: true) {
            edges {
                node {
                        id
                        title
                        handle
                        images(first: 6) {
                            edges {
                                node {
                                originalSrc
                                altText
                                }
                            }
                        }
                        resourcePublicationOnCurrentPublication {
                            publication {
                                name
                                id
                            }
                            publishDate
                            isPublished
                        }
                }
            }
        }    
    }
`;


export default async function ShopPage() {

   const client = createApolloClient();

    const { data } = await client.query({
        query: GET_PRODUCT_DATA
    });

    const porductData = (data as GraphqlModel<ProductModel>)['products']?.edges?.map(x => x.node);

    console.log(porductData.at(0)?.images.edges.at(0));

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
                                {
                                    porductData.map(
                                        p => <Product product={p} />
                                    )
                                }
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
                                <Product product={{
                                    description:"",
                                    handle: "",
                                    id: "",
                                    images: null,
                                    title: ""
                                }} />
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    );
}