import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unsubcriber } from '@core/Observables/unsubscriber.observable';
import { Product, productGenderEnum } from '@core/data/models/product.model';
import { ProductFacade } from '@core/facades/product.facade';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent extends Unsubcriber implements OnInit {
    private productFacade = inject(ProductFacade);
    private activatedRoute = inject(ActivatedRoute);

    invalidSlug = signal(false);
    notFoundProduct = signal(false);

    theProduct: Product[] = [];

    recommendations: Product[] = [
        {
            id: 1,
            name: "T-shirt Neutro Masculino",
            slug: "t-shirt-neutro-masculino",
            description: "Camiseta de algodão básica disponível em várias cores.",
            price: 18000,
            inStock: true,
            bestSeller: true,
            highlighted: true,
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
        },
        {
            id: 2,
            name: "Short Neutro Feminino",
            slug: "calca-jeans-fminino",
            description: "Short Neutro confortável e resistente.",
            price: 18000,
            inStock: true,
            bestSeller: true,
            highlighted: true,
            gender: productGenderEnum.WOMAN,
            promotionalPrice: 100.00,
            categories: [
                {
                    name: 'Calção',
                    slug: 'calcao'
                }
            ],
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
            inStock: true,
            bestSeller: true,
            highlighted: true,
        gender: productGenderEnum.MAN,
        promotionalPrice: 45000,
        categories: [
            {
                name: 'Calção',
                slug: 'calcao'
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
        this.activatedRoute.params.subscribe(param => {
            const slug = param['slug'];
            if(slug === null){ this.invalidSlug.update(val => val = true); return; };
            
            this.invalidSlug.update(val => val = false);
            this.productFacade.productBySlug(slug ?? '')
                .pipe(takeUntil(this.unsubcribe$))
                .subscribe({
                    next: (incomingProduct: Product[]) => {
                        this.theProduct = incomingProduct;
                    }
                });
        })
    }
  
}
