import { ImagePath } from "./image-path.model"

export interface productSize{
    name: string
}

export interface colorRepresentionalImage{
    imagePath: ImagePath
}

export interface productColor{
    name: string,
    representationalImages: colorRepresentionalImage[]
}

export interface productDetail{
    name: string,
    description: string
}

export enum productGenderEnum{
    MAN = 'man',
    WOMAN = 'woman'
}

export interface productCategory{
    id?: number,
    name: string,
    slug: string
}


export type ProductSlug = Pick<Product, "slug">;

export interface Product{
    id: number,
    name: string,
    slug: string,
    description: string,
    price: number,
    inStock: boolean,
    bestSeller: boolean,
    highlighted: boolean,
    isInShoppingBag: boolean,
    categories: productCategory[],
    gender: productGenderEnum,
    promotionalPrice: number,
    details: productDetail[],
    sizes: productSize[],
    colors: productColor[],
    onelineObservation: string,
}