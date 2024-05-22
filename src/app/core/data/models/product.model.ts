export interface productSize{
    name: string
}

export interface colorRepresentionalImage{
    imagePath: string
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

export interface Product{
    id: number,
    name: string,
    slug: string,
    description: string,
    price: number,
    gender: productGenderEnum,
    promotionalPrice: number,
    details: productDetail[],
    sizes: productSize[],
    colors: productColor[],
    onelineObservation: string,
}