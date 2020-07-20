import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedListingImageComponent } from './components/featured-listing-image/featured-listing-image.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [FeaturedListingImageComponent],
  imports: [
    // vendor
    RouterModule,
    CommonModule,
    SwiperModule,
  ],
  exports: [
    // vendor
    RouterModule,
    CommonModule,
    SwiperModule,

    // local
    FeaturedListingImageComponent,
  ],
})
export class SharedModule {}
