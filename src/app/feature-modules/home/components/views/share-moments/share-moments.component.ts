import { Component, Input } from '@angular/core';
import { Testimonial } from '@core/data/models/testimonial.model';

@Component({
  selector: 'app-share-moments',
  templateUrl: './share-moments.component.html',
  styleUrl: './share-moments.component.css'
})
export class ShareMomentsComponent {
  @Input() testimonials: Testimonial[] = [
    {
      client: '@afropupo',
      message: 'Uma mensagem do Dj Afro Pupo para o site da Neutro, como testemunho',
      photo: {
        genericPath: 'assets/images/home/testimonials/dj_afro.png',
        allSizes: {
          '1536x1536': 'assets/images/home/testimonials/dj_afro.png',
          '1536x1536-height': 2372,
          '1536x1536-width': 1830,
          '2048x2048': 'assets/images/home/testimonials/dj_afro.png',
          '2048x2048-height': 2372,
          '2048x2048-width': 1830,
          large: 'assets/images/home/testimonials/dj_afro.png',
          'large-height': 2372,
          'large-width': 1830,
          medium: 'assets/images/home/testimonials/dj_afro.png',
          'medium-height': 2372,
          'medium-width': 1830,
          medium_large: 'assets/images/home/testimonials/dj_afro.png',
          'medium_large-height': 2372,
          'medium_large-width': 1830,
          thumbnail: 'assets/images/home/testimonials/dj_afro.png',
          'thumbnail-height': 2372,
          'thumbnail-width': 1830
        }
      }
    },
    {
      client: '@unknown1',
      message: 'Uma mensagem do Unknown1 para o site da Neutro, como testemunho',
      photo: {
        genericPath: 'assets/images/home/testimonials/unknown_1.png',
        allSizes: {
          '1536x1536': 'assets/images/home/testimonials/unknown_1.png',
          '1536x1536-height': 2024,
          '1536x1536-width': 1320,
          '2048x2048': 'assets/images/home/testimonials/unknown_1.png',
          '2048x2048-height': 2024,
          '2048x2048-width': 1320,
          large: 'assets/images/home/testimonials/unknown_1.png',
          'large-height': 2024,
          'large-width': 1320,
          medium: 'assets/images/home/testimonials/unknown_1.png',
          'medium-height': 2024,
          'medium-width': 1320,
          medium_large: 'assets/images/home/testimonials/unknown_1.png',
          'medium_large-height': 2024,
          'medium_large-width': 1320,
          thumbnail: 'assets/images/home/testimonials/unknown_1.png',
          'thumbnail-height': 2024,
          'thumbnail-width': 1320
        }
      }
    },
    {
      client: '@pequena_aiko',
      message: 'Adoro como a T-shirt Neutro combina com tudo do meu guarda-roupa!',
      photo: {
        genericPath: 'assets/images/home/testimonials/pequena_aiko.png',
        allSizes: {
          '1536x1536': 'assets/images/home/testimonials/unknown_1.png',
          '1536x1536-height': 1718,
          '1536x1536-width': 1294,
          '2048x2048': 'assets/images/home/testimonials/unknown_1.png',
          '2048x2048-height': 1718,
          '2048x2048-width': 1294,
          large: 'assets/images/home/testimonials/unknown_1.png',
          'large-height': 1718,
          'large-width': 1294,
          medium: 'assets/images/home/testimonials/unknown_1.png',
          'medium-height': 1718,
          'medium-width': 1294,
          medium_large: 'assets/images/home/testimonials/unknown_1.png',
          'medium_large-height': 1718,
          'medium_large-width': 1294,
          thumbnail: 'assets/images/home/testimonials/unknown_1.png',
          'thumbnail-height': 1718,
          'thumbnail-width': 1294
        }
      }
    },
    {
      client: '@unknown2',
      message: 'Uma mensagem do Unknown2 para o site da Neutro, como testemunho',
      photo: {
        genericPath: 'assets/images/home/testimonials/unknown_2.png',
        allSizes: {
          '1536x1536': 'assets/images/home/testimonials/unknown_1.png',
          '1536x1536-height': 1824,
          '1536x1536-width': 1330,
          '2048x2048': 'assets/images/home/testimonials/unknown_1.png',
          '2048x2048-height': 1824,
          '2048x2048-width': 1330,
          large: 'assets/images/home/testimonials/unknown_1.png',
          'large-height': 1824,
          'large-width': 1330,
          medium: 'assets/images/home/testimonials/unknown_1.png',
          'medium-height': 1824,
          'medium-width': 1330,
          medium_large: 'assets/images/home/testimonials/unknown_1.png',
          'medium_large-height': 1824,
          'medium_large-width': 1330,
          thumbnail: 'assets/images/home/testimonials/unknown_1.png',
          'thumbnail-height': 1824,
          'thumbnail-width': 1330
        }
      }
    },
    {
      client: '@unknown3',
      message: 'Uma mensagem do Unknown3 para o site da Neutro, como testemunho',
      photo: {
        genericPath: 'assets/images/home/testimonials/unknown_3.png',
        allSizes: {
          '1536x1536': 'assets/images/home/testimonials/unknown_1.png',
          '1536x1536-height': 1624,
          '1536x1536-width': 1262,
          '2048x2048': 'assets/images/home/testimonials/unknown_1.png',
          '2048x2048-height': 1624,
          '2048x2048-width': 1262,
          large: 'assets/images/home/testimonials/unknown_1.png',
          'large-height': 1624,
          'large-width': 1262,
          medium: 'assets/images/home/testimonials/unknown_1.png',
          'medium-height': 1624,
          'medium-width': 1262,
          medium_large: 'assets/images/home/testimonials/unknown_1.png',
          'medium_large-height': 1624,
          'medium_large-width': 1262,
          thumbnail: 'assets/images/home/testimonials/unknown_1.png',
          'thumbnail-height': 1624,
          'thumbnail-width': 1262
        }
      }
    },
  ];
}
