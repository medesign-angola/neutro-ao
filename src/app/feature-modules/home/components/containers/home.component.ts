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
      imagePath: 'assets/images/home/banner/img-1.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-2.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-3.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-4.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-5.png',
    },
    {
      imagePath: 'assets/images/home/banner/img-6.png',
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
                    { imagePath: "assets/images/general/products/male-tshirt-white-1.png" },
                ]
            },
            {
                name: "Preto",
                representationalImages: [
                    { imagePath: "assets/images/general/products/male-tshirt-black-1.png" },
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
                    { imagePath: "assets/images/general/products/female-short-1.png" },
                    { imagePath: "assets/images/general/products/female-short-2.png" },
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
                  { imagePath: "assets/images/general/products/male-short-1.png" },
                  // { imagePath: "assets/images/general/products/male-short-2.png" },
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
                    { imagePath: "assets/images/general/products/male-tshirt-white-1.png" },
                ]
            },
            {
                name: "Preto",
                representationalImages: [
                    { imagePath: "assets/images/general/products/male-tshirt-black-1.png" },
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
                    { imagePath: "assets/images/general/products/female-short-1.png" },
                    { imagePath: "assets/images/general/products/female-short-2.png" },
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
                  { imagePath: "assets/images/general/products/male-short-1.png" },
                  // { imagePath: "assets/images/general/products/male-short-2.png" },
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
