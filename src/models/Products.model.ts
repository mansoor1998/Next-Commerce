export interface ProductModel {
    id: string;
    title: string;
    handle: string;
    description: string
    images: {
        edges: {
            node: {
                originalSrc: string;
                altText: string;
            }
        }[]
    }
}