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
      photo: 'assets/images/home/testimonials/dj_afro.png'
    },
    {
      client: '@unknown1',
      message: 'Uma mensagem do Unknown1 para o site da Neutro, como testemunho',
      photo: 'assets/images/home/testimonials/unknown_1.png'
    },
    {
      client: '@pequena_aiko',
      message: 'Adoro como a T-shirt Neutro combina com tudo do meu guarda-roupa!',
      photo: 'assets/images/home/testimonials/pequena_aiko.png'
    },
    {
      client: '@unknown2',
      message: 'Uma mensagem do Unknown2 para o site da Neutro, como testemunho',
      photo: 'assets/images/home/testimonials/unknown_2.png'
    },
    {
      client: '@unknown3',
      message: 'Uma mensagem do Unknown3 para o site da Neutro, como testemunho',
      photo: 'assets/images/home/testimonials/unknown_3.png'
    },
  ];
}
