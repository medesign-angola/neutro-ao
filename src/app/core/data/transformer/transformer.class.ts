import { ImagePath } from "../models/image-path.model";
import { Product, colorRepresentionalImage, productCategory, productColor, productDetail, productGenderEnum, productSize } from "../models/product.model";

export class Transformer{

    static products(incoming: any[]): Product[]{
        let transformed: Product[] = [];
        incoming.forEach((item) => {

            let genders = item['product-genres'];
            let productGender: productGenderEnum = (genders[0].slug === 'homem') ? productGenderEnum.MAN : productGenderEnum.WOMAN;

            let categories: productCategory[] = [];
            item['product-categories'].forEach((category: any) => {
                categories.push({
                    name: category.name,
                    slug: category.slug
                });
            });

            let details: productDetail[] = [];
            item.acf['detalhes_do_produto'].forEach((detail: any) => {
                details.push({
                    name: detail.nome_do_detalhe,
                    description: detail.descricao_do_detalhe
                })
            });
            
            let sizes: productSize[] = [];
            item.acf['tamanhos_do_produto'].forEach((size: any) => {
                sizes.push({
                    name: size.nome_do_tamanho
                });
            });

            let colors: productColor[] = [];
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


            transformed.push({
                id: item.id,
                name: item.title.rendered,
                slug: item.slug,
                description: item.acf.descricao,
                price: item.acf.preco,
                inStock: item.acf.disponivel_em_stock,
                highlighted: item.acf.destaque,
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

}