import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedListingImageComponent } from './components/featured-listing-image/featured-listing-image.component';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [FeaturedListingImageComponent],
  imports: [RouterModule, CommonModule, SwiperModule],
  exports: [
    RouterModule,
    CommonModule,
    FeaturedListingImageComponent,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class SharedModule {}
