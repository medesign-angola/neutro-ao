import { CarouselItemsModel } from "../models/carousel-items.model";
import { ImagePath } from "../models/image-path.model";
import { Product, colorRepresentionalImage, productCategory, productColor, productDetail, productGenderEnum, productSize } from "../models/product.model";
import { Testimonial } from "../models/testimonial.model";

export class Transformer{

    static products(incoming: any[]): Product[]{
        let transformed: Product[] = [];
        incoming.forEach((item) => {

            let genders = item['product-genres'];
            let productGender: productGenderEnum = (genders[0].slug === 'homem') ? productGenderEnum.MAN : productGenderEnum.WOMAN;

            let categories: productCategory[] = [];
            if(item['product-categories']){
                item['product-categories'].forEach((category: any) => {
                    categories.push({
                        name: category.name,
                        slug: category.slug
                    });
                });
            }

            let details: productDetail[] = [];
            if(item.acf['detalhes_do_produto']){
                item.acf['detalhes_do_produto'].forEach((detail: any) => {
                    details.push({
                        name: detail.nome_do_detalhe,
                        description: detail.descricao_do_detalhe
                    })
                });
            }
            
            let sizes: productSize[] = [];
            if(item.acf['tamanhos_do_produto']){
                item.acf['tamanhos_do_produto'].forEach((size: any) => {
                    sizes.push({
                        name: size.nome_do_tamanho
                    });
                });
            }

            let colors: productColor[] = [];
            if(item.acf['cores_do_produto']){
                item.acf['cores_do_produto'].forEach((color: any) => {
    
                    let colorRepresentationalImages: colorRepresentionalImage[] = [];
                    color['imagens_do_produto'].forEach((imageItem: any) => {
                        const imagePathObject: ImagePath = {
                            genericPath: imageItem['imagem'].url,
                            allSizes: imageItem['imagem'].sizes
                        }
                        colorRepresentationalImages.push({
                            imagePath: imagePathObject,
                        });
                    });
    
                    colors.push({
                        name: color.nome_da_cor,
                        representationalImages: colorRepresentationalImages
                    });
                });
            }


            transformed.push({
                id: item.id,
                name: item.title.rendered,
                slug: item.slug,
                description: item.acf.descricao,
                price: item.acf.preco,
                inStock: item.acf.disponivel_em_stock,
                highlighted: item.acf.destaque,
                isInShoppingBag: false,
                bestSeller: item.acf.incluir_nos_mais_vendidos,
                onelineObservation: item.acf.observacao_de_linha_unica,
                promotionalPrice: 0,
                gender: productGender,
                categories: categories,
                details: details,
                sizes: sizes,
                colors: colors,
            });
        });
        return transformed;
    }

    static genders(incoming: any[]): productGenderEnum[]{
        let genderEnum = productGenderEnum;
        let transformedData: productGenderEnum[] = [];
        incoming.forEach(item => {
            switch(item.slug){
                case 'homem' || 'homens':
                    transformedData.push(genderEnum.MAN);
                    break;
                case 'mulher' || 'mulheres':
                    transformedData.push(genderEnum.WOMAN);
                    break;
                default:
                    break;
            }
        })
        return transformedData;
    }

    static testimonials(incoming: any[]): Testimonial[]{
        let transformedData: Testimonial[] = [];

        incoming.forEach(element => {
            transformedData.push({
                client: element.nome_do_cliente,
                message: element.mensagem_do_cliente,
                photo: {
                    genericPath: element.imagem.url,
                    allSizes: element.imagem.sizes
                }
            });
        });

        return transformedData;
    }

    static covers(incoming: any[]): CarouselItemsModel[]{
        let transformedData: CarouselItemsModel[] = [];
        incoming.forEach(element => {
            transformedData.push({
                alternativeDescription: element.descricao_alternativa,
                isActive: false,
                imagePath: {
                    genericPath: element.imagem_de_capa.url,
                    allSizes: element.imagem_de_capa.sizes,
                },
            });
        });
        return transformedData;
    }

    static slugfy(text: string): string{
        let slug = text.toLowerCase();
        
        // Remove acentos e caracteres especiais
        slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
        // Substitui espaços e outros caracteres por hífens
        slug = slug.replace(/[^a-z0-9]+/g, '-');
    
        // Remove hífens do início e do fim
        slug = slug.replace(/^-+|-+$/g, '');
        
        return slug;
    }

}