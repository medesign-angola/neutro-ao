import { Component } from '@angular/core';
import { Product, productGenderEnum } from '@core/data/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  theProduct: Product[] = [
    {
        id: 1,
        name: "T-shirt Neutro Masculino",
        slug: "t-shirt-neutro-masculino",
        description: "Camiseta de algodão básica disponível em várias cores.",
        price: 18000,
        gender: productGenderEnum.MAN,
        promotionalPrice: 45000,
        categories: [
            {
                name: 'Camiseta',
                slug: 'camiseta'
            }
        ],
        details: [
            {
                name: 'Tecido',
                description: 'Material: 98% algodão, 2% elastano, Corte reto, Bolsos frontais e traseiros'
            }
        ],
        sizes: [
            { name: "S" },
            { name: "M" },
            { name: "X" },
            { name: "XL" }
        ],
        colors: [
            {
                name: "Branco",
                representationalImages: [
                    {
                        imagePath: {
                            genericPath: "assets/images/general/products/male-tshirt-white-1.png",
                            allSizes: {
                                '1536x1536': 'assets/images/general/products/male-tshirt-white-1.png',
                                '1536x1536-height': 2585,
                                '1536x1536-width': 1218,
                                '2048x2048': 'assets/images/general/products/male-tshirt-white-1.png',
                                '2048x2048-height': 2585,
                                '2048x2048-width': 1218,
                                large: 'assets/images/general/products/male-tshirt-white-1.png',
                                'large-height': 2585,
                                'large-width': 1218,
                                medium: 'assets/images/general/products/male-tshirt-white-1.png',
                                'medium-height': 2585,
                                'medium-width': 1218,
                                medium_large: 'assets/images/general/products/male-tshirt-white-1.png',
                                'medium_large-height': 2585,
                                'medium_large-width': 1218,
                                thumbnail: 'assets/images/general/products/male-tshirt-white-1.png',
                                'thumbnail-height': 2585,
                                'thumbnail-width': 1218
                            }
                        }
                    },
                ]
            },
            {
                name: "Preto",
                representationalImages: [
                    {
                        imagePath: {
                            genericPath: "assets/images/general/products/male-tshirt-black-1.png",
                            allSizes: {
                                '1536x1536': 'assets/images/general/products/male-tshirt-black-1.png',
                                '1536x1536-height': 2943,
                                '1536x1536-width': 1296,
                                '2048x2048': 'assets/images/general/products/male-tshirt-black-1.png',
                                '2048x2048-height': 2943,
                                '2048x2048-width': 1296,
                                large: 'assets/images/general/products/male-tshirt-black-1.png',
                                'large-height': 2943,
                                'large-width': 1296,
                                medium: 'assets/images/general/products/male-tshirt-black-1.png',
                                'medium-height': 2943,
                                'medium-width': 1296,
                                medium_large: 'assets/images/general/products/male-tshirt-black-1.png',
                                'medium_large-height': 2943,
                                'medium_large-width': 1296,
                                thumbnail: 'assets/images/general/products/male-tshirt-black-1.png',
                                'thumbnail-height': 2943,
                                'thumbnail-width': 1296
                            }
                        }
                    },
                ]
            }
        ],
        onelineObservation: "Entrega grátis em Luanda acima de 50.000,00 AOA"
    }
  ];
}
