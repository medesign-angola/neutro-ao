import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export interface IMeta{
  title: string,
  description: string,
  image: string,
  url?: string,
}

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  private url: string = '';

  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if(isPlatformBrowser(this.platformId)){
      this.url = window.location.href;
    }
  }

  addMetaTags(metaTag: IMeta): boolean{

    this.meta.updateTag({ name: 'og:title', content: metaTag.title });
    this.meta.updateTag({ name: 'og:description', content: metaTag.description });
    this.meta.updateTag({ name: 'og:image', content: metaTag.image });
    this.meta.updateTag({ name: 'og:url', content: metaTag.url ?? this.url });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: metaTag.title });
    this.meta.updateTag({ name: 'twitter:description', content: metaTag.description });
    this.meta.updateTag({ name: 'twitter:image', content: metaTag.image });
    this.meta.updateTag({ name: 'twitter:url', content: metaTag.url ?? this.url });

    return true;

  }

}
