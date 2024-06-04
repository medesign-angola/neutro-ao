import { Component, OnInit } from '@angular/core';
import { CarouselItemsModel } from '@core/data/models/carousel-items.model';
import { Product, productGenderEnum } from '@core/data/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bannerItems: CarouselItemsModel[] = [
    {
      imagePath: {
        genericPath: 'assets/images/home/banner/img-1.png',
        allSizes: {
            '1536x1536': 'assets/images/home/banner/img-1.png',
            '1536x1536-height': 876,
            '1536x1536-width': 516,
            '2048x2048': 'assets/images/home/banner/img-1.png',
            '2048x2048-height': 876,
            '2048x2048-width': 516,
            large: 'assets/images/home/banner/img-1.png',
            'large-height': 876,
            'large-width': 516,
            medium: 'assets/images/home/banner/img-1.png',
            'medium-height': 876,
            'medium-width': 516,
            medium_large: 'assets/images/home/banner/img-1.png',
            'medium_large-height': 876,
            'medium_large-width': 516,
            thumbnail: 'assets/images/home/banner/img-1.png',
            'thumbnail-height': 876,
            'thumbnail-width': 516
        }
      },
    },
    {
      imagePath: {
        genericPath: 'assets/images/home/banner/img-2.png',
        allSizes: {
            '1536x1536': 'assets/images/home/banner/img-2.png',
            '1536x1536-height': 876,
            '1536x1536-width': 516,
            '2048x2048': 'assets/images/home/banner/img-2.png',
            '2048x2048-height': 876,
            '2048x2048-width': 516,
            large: 'assets/images/home/banner/img-2.png',
            'large-height': 876,
            'large-width': 516,
            medium: 'assets/images/home/banner/img-2.png',
            'medium-height': 876,
            'medium-width': 516,
            medium_large: 'assets/images/home/banner/img-2.png',
            'medium_large-height': 876,
            'medium_large-width': 516,
            thumbnail: 'assets/images/home/banner/img-2.png',
            'thumbnail-height': 876,
            'thumbnail-width': 516
        }
      },
    },
    {
      imagePath: {
        genericPath: 'assets/images/home/banner/img-3.png',
        allSizes: {
            '1536x1536': 'assets/images/home/banner/img-3.png',
            '1536x1536-height': 876,
            '1536x1536-width': 441,
            '2048x2048': 'assets/images/home/banner/img-3.png',
            '2048x2048-height': 876,
            '2048x2048-width': 441,
            large: 'assets/images/home/banner/img-3.png',
            'large-height': 876,
            'large-width': 441,
            medium: 'assets/images/home/banner/img-3.png',
            'medium-height': 876,
            'medium-width': 441,
            medium_large: 'assets/images/home/banner/img-3.png',
            'medium_large-height': 876,
            'medium_large-width': 441,
            thumbnail: 'assets/images/home/banner/img-3.png',
            'thumbnail-height': 876,
            'thumbnail-width': 441
        }
      },
    },
    {
      imagePath: {
        genericPath: 'assets/images/home/banner/img-4.png',
        allSizes: {
            '1536x1536': 'assets/images/home/banner/img-4.png',
            '1536x1536-height': 900,
            '1536x1536-width': 545,
            '2048x2048': 'assets/images/home/banner/img-4.png',
            '2048x2048-height': 900,
            '2048x2048-width': 545,
            large: 'assets/images/home/banner/img-4.png',
            'large-height': 900,
            'large-width': 545,
            medium: 'assets/images/home/banner/img-4.png',
            'medium-height': 900,
            'medium-width': 545,
            medium_large: 'assets/images/home/banner/img-4.png',
            'medium_large-height': 900,
            'medium_large-width': 545,
            thumbnail: 'assets/images/home/banner/img-4.png',
            'thumbnail-height': 900,
            'thumbnail-width': 545
        }
      },
    },
    {
      imagePath: {
        genericPath: 'assets/images/home/banner/img-5.png',
        allSizes: {
            '1536x1536': 'assets/images/home/banner/img-5.png',
            '1536x1536-height': 900,
            '1536x1536-width': 521,
            '2048x2048': 'assets/images/home/banner/img-5.png',
            '2048x2048-height': 900,
            '2048x2048-width': 521,
            large: 'assets/images/home/banner/img-5.png',
            'large-height': 900,
            'large-width': 521,
            medium: 'assets/images/home/banner/img-5.png',
            'medium-height': 900,
            'medium-width': 521,
            medium_large: 'assets/images/home/banner/img-5.png',
            'medium_large-height': 900,
            'medium_large-width': 521,
            thumbnail: 'assets/images/home/banner/img-5.png',
            'thumbnail-height': 900,
            'thumbnail-width': 521
        }
      },
    },
    {
      imagePath: {
        genericPath: 'assets/images/home/banner/img-6.png',
        allSizes: {
            '1536x1536': 'assets/images/home/banner/img-6.png',
            '1536x1536-height': 876,
            '1536x1536-width': 427,
            '2048x2048': 'assets/images/home/banner/img-6.png',
            '2048x2048-height': 876,
            '2048x2048-width': 427,
            large: 'assets/images/home/banner/img-6.png',
            'large-height': 876,
            'large-width': 427,
            medium: 'assets/images/home/banner/img-6.png',
            'medium-height': 876,
            'medium-width': 427,
            medium_large: 'assets/images/home/banner/img-6.png',
            'medium_large-height': 876,
            'medium_large-width': 427,
            thumbnail: 'assets/images/home/banner/img-6.png',
            'thumbnail-height': 876,
            'thumbnail-width': 427
        }
      },
    },
  ];
  betterSaleHeadercategories: productGenderEnum[] = [];
  productsHeadercategories: productGenderEnum[] = [];

  betterSaleProducts: Product[] = [
    {
        id: 1,
        name: "T-shirt Neutro Masculino",
        slug: "t-shirt-neutro-masculino",
        description: "Camiseta de algodão básica disponível em várias cores.",
        price: 18000,
        gender: productGenderEnum.MAN,
        promotionalPrice: 45000,
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
    },
    {
        id: 2,
        name: "Short Neutro Feminino",
        slug: "calca-jeans-fminino",
        description: "Short Neutro confortável e resistente.",
        price: 18000,
        gender: productGenderEnum.WOMAN,
        promotionalPrice: 100.00,
        details: [
            {
                name: 'Tecido',
                description: 'Material: 98% algodão, 2% elastano, Corte reto, Bolsos frontais e traseiros'
            },
            {
                name: 'Envio e Devoluções',
                description: 'Frete padrão gratuito para pedidos acima de 50.000,00 e devoluções gratuitas em 60 dias para membros Neutro.'
            }
        ],
        sizes: [
            { name: "S" },
            { name: "M" },
        ],
        colors: [
            {
                name: "Preto",
                representationalImages: [
                    {
                        imagePath: {
                            genericPath: "assets/images/general/products/female-short-1.png",
                            allSizes: {
                                '1536x1536': 'assets/images/general/products/female-short-1.png',
                                '1536x1536-height': 4016,
                                '1536x1536-width': 2566,
                                '2048x2048': 'assets/images/general/products/female-short-1.png',
                                '2048x2048-height': 4016,
                                '2048x2048-width': 2566,
                                large: 'assets/images/general/products/female-short-1.png',
                                'large-height': 4016,
                                'large-width': 2566,
                                medium: 'assets/images/general/products/female-short-1.png',
                                'medium-height': 4016,
                                'medium-width': 2566,
                                medium_large: 'assets/images/general/products/female-short-1.png',
                                'medium_large-height': 4016,
                                'medium_large-width': 2566,
                                thumbnail: 'assets/images/general/products/female-short-1.png',
                                'thumbnail-height': 4016,
                                'thumbnail-width': 2566
                            }
                        }
                    },
                    {
                        imagePath: {
                            genericPath: "assets/images/general/products/female-short-2.png",
                            allSizes: {
                                '1536x1536': 'assets/images/general/products/female-short-2.png',
                                '1536x1536-height': 3929,
                                '1536x1536-width': 1776,
                                '2048x2048': 'assets/images/general/products/female-short-2.png',
                                '2048x2048-height': 3929,
                                '2048x2048-width': 1776,
                                large: 'assets/images/general/products/female-short-2.png',
                                'large-height': 3929,
                                'large-width': 1776,
                                medium: 'assets/images/general/products/female-short-2.png',
                                'medium-height': 3929,
                                'medium-width': 1776,
                                medium_large: 'assets/images/general/products/female-short-2.png',
                                'medium_large-height': 3929,
                                'medium_large-width': 1776,
                                thumbnail: 'assets/images/general/products/female-short-2.png',
                                'thumbnail-height': 3929,
                                'thumbnail-width': 1776
                            }
                        }
                    },
                ]
            },
        ],
        onelineObservation: "Entrega grátis em Luanda acima de 50.000,00 AOA"
    },
    {
      id: 1,
      name: "Short Neutro Masculino",
      slug: "short-neutro-masculino",
      description: "Calção de algodão básica disponível.",
      price: 18000,
      gender: productGenderEnum.MAN,
      promotionalPrice: 45000,
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
              name: "Preto",
              representationalImages: [
                  {
                    imagePath: {
                        genericPath: "assets/images/general/products/male-short-1.png",
                        allSizes: {
                            '1536x1536': 'assets/images/general/products/male-short-1.png',
                            '1536x1536-height': 2860,
                            '1536x1536-width': 2472,
                            '2048x2048': 'assets/images/general/products/male-short-1.png',
                            '2048x2048-height': 2860,
                            '2048x2048-width': 2472,
                            large: 'assets/images/general/products/male-short-1.png',
                            'large-height': 2860,
                            'large-width': 2472,
                            medium: 'assets/images/general/products/male-short-1.png',
                            'medium-height': 2860,
                            'medium-width': 2472,
                            medium_large: 'assets/images/general/products/male-short-1.png',
                            'medium_large-height': 2860,
                            'medium_large-width': 2472,
                            thumbnail: 'assets/images/general/products/male-short-1.png',
                            'thumbnail-height': 2860,
                            'thumbnail-width': 2472
                        }
                    }
                },
                {
                    imagePath: {
                        genericPath: "assets/images/general/products/male-short-2.png",
                        allSizes: {
                            '1536x1536': 'assets/images/general/products/male-short-2.png',
                            '1536x1536-height': 3392,
                            '1536x1536-width': 3184,
                            '2048x2048': 'assets/images/general/products/male-short-2.png',
                            '2048x2048-height': 3392,
                            '2048x2048-width': 3184,
                            large: 'assets/images/general/products/male-short-2.png',
                            'large-height': 3392,
                            'large-width': 3184,
                            medium: 'assets/images/general/products/male-short-2.png',
                            'medium-height': 3392,
                            'medium-width': 3184,
                            medium_large: 'assets/images/general/products/male-short-2.png',
                            'medium_large-height': 3392,
                            'medium_large-width': 3184,
                            thumbnail: 'assets/images/general/products/male-short-2.png',
                            'thumbnail-height': 3392,
                            'thumbnail-width': 3184
                        }
                    }
                },
              ]
          },
      ],
      onelineObservation: "Entrega grátis em Luanda acima de 50.000,00 AOA"
    },
  ];

  allProducts: Product[] = [
    {
        id: 1,
        name: "T-shirt Neutro Masculino",
        slug: "t-shirt-neutro-masculino",
        description: "Camiseta de algodão básica disponível em várias cores.",
        price: 18000,
        gender: productGenderEnum.MAN,
        promotionalPrice: 45000,
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
    },
    {
        id: 2,
        name: "Short Neutro Feminino",
        slug: "calca-jeans-fminino",
        description: "Short Neutro confortável e resistente.",
        price: 18000,
        gender: productGenderEnum.WOMAN,
        promotionalPrice: 100.00,
        details: [
            {
                name: 'Tecido',
                description: 'Material: 98% algodão, 2% elastano, Corte reto, Bolsos frontais e traseiros'
            },
            {
                name: 'Envio e Devoluções',
                description: 'Frete padrão gratuito para pedidos acima de 50.000,00 e devoluções gratuitas em 60 dias para membros Neutro.'
            }
        ],
        sizes: [
            { name: "S" },
            { name: "M" },
        ],
        colors: [
            {
                name: "Preto",
                representationalImages: [
                    {
                        imagePath: {
                            genericPath: "assets/images/general/products/female-short-1.png",
                            allSizes: {
                                '1536x1536': 'assets/images/general/products/female-short-1.png',
                                '1536x1536-height': 4016,
                                '1536x1536-width': 2566,
                                '2048x2048': 'assets/images/general/products/female-short-1.png',
                                '2048x2048-height': 4016,
                                '2048x2048-width': 2566,
                                large: 'assets/images/general/products/female-short-1.png',
                                'large-height': 4016,
                                'large-width': 2566,
                                medium: 'assets/images/general/products/female-short-1.png',
                                'medium-height': 4016,
                                'medium-width': 2566,
                                medium_large: 'assets/images/general/products/female-short-1.png',
                                'medium_large-height': 4016,
                                'medium_large-width': 2566,
                                thumbnail: 'assets/images/general/products/female-short-1.png',
                                'thumbnail-height': 4016,
                                'thumbnail-width': 2566
                            }
                        }
                    },
                    {
                        imagePath: {
                            genericPath: "assets/images/general/products/female-short-2.png",
                            allSizes: {
                                '1536x1536': 'assets/images/general/products/female-short-2.png',
                                '1536x1536-height': 3929,
                                '1536x1536-width': 1776,
                                '2048x2048': 'assets/images/general/products/female-short-2.png',
                                '2048x2048-height': 3929,
                                '2048x2048-width': 1776,
                                large: 'assets/images/general/products/female-short-2.png',
                                'large-height': 3929,
                                'large-width': 1776,
                                medium: 'assets/images/general/products/female-short-2.png',
                                'medium-height': 3929,
                                'medium-width': 1776,
                                medium_large: 'assets/images/general/products/female-short-2.png',
                                'medium_large-height': 3929,
                                'medium_large-width': 1776,
                                thumbnail: 'assets/images/general/products/female-short-2.png',
                                'thumbnail-height': 3929,
                                'thumbnail-width': 1776
                            }
                        }
                    },
                ]
            },
        ],
        onelineObservation: "Entrega grátis em Luanda acima de 50.000,00 AOA"
    },
    {
      id: 1,
      name: "Short Neutro Masculino",
      slug: "short-neutro-masculino",
      description: "Calção de algodão básica disponível.",
      price: 18000,
      gender: productGenderEnum.MAN,
      promotionalPrice: 45000,
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
              name: "Preto",
              representationalImages: [
                  {
                    imagePath: {
                        genericPath: "assets/images/general/products/male-short-1.png",
                        allSizes: {
                            '1536x1536': 'assets/images/general/products/male-short-1.png',
                            '1536x1536-height': 2860,
                            '1536x1536-width': 2472,
                            '2048x2048': 'assets/images/general/products/male-short-1.png',
                            '2048x2048-height': 2860,
                            '2048x2048-width': 2472,
                            large: 'assets/images/general/products/male-short-1.png',
                            'large-height': 2860,
                            'large-width': 2472,
                            medium: 'assets/images/general/products/male-short-1.png',
                            'medium-height': 2860,
                            'medium-width': 2472,
                            medium_large: 'assets/images/general/products/male-short-1.png',
                            'medium_large-height': 2860,
                            'medium_large-width': 2472,
                            thumbnail: 'assets/images/general/products/male-short-1.png',
                            'thumbnail-height': 2860,
                            'thumbnail-width': 2472
                        }
                    }
                },
                {
                    imagePath: {
                        genericPath: "assets/images/general/products/male-short-2.png",
                        allSizes: {
                            '1536x1536': 'assets/images/general/products/male-short-2.png',
                            '1536x1536-height': 3392,
                            '1536x1536-width': 3184,
                            '2048x2048': 'assets/images/general/products/male-short-2.png',
                            '2048x2048-height': 3392,
                            '2048x2048-width': 3184,
                            large: 'assets/images/general/products/male-short-2.png',
                            'large-height': 3392,
                            'large-width': 3184,
                            medium: 'assets/images/general/products/male-short-2.png',
                            'medium-height': 3392,
                            'medium-width': 3184,
                            medium_large: 'assets/images/general/products/male-short-2.png',
                            'medium_large-height': 3392,
                            'medium_large-width': 3184,
                            thumbnail: 'assets/images/general/products/male-short-2.png',
                            'thumbnail-height': 3392,
                            'thumbnail-width': 3184
                        }
                    }
                },
              ]
          },
      ],
      onelineObservation: "Entrega grátis em Luanda acima de 50.000,00 AOA"
    },
  ];

  ngOnInit(): void {
    this.fullfillBetterSaleProductCategories();
    this.fullfillAllProductsCategories();
  }

  fullfillBetterSaleProductCategories(){
    this.betterSaleProducts.forEach(product => {
      if(this.betterSaleHeadercategories.includes(product.gender)) return;
      this.betterSaleHeadercategories = [...this.betterSaleHeadercategories, product.gender];
    });
  }

  fullfillAllProductsCategories(){
    this.allProducts.forEach(product => {
      if(this.productsHeadercategories.includes(product.gender)) return;
      this.productsHeadercategories = [...this.productsHeadercategories, product.gender];
    });
  }

}
