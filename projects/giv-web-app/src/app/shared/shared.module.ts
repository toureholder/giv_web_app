import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedListingImageComponent } from './components/featured-listing-image/featured-listing-image.component';

@NgModule({
  declarations: [FeaturedListingImageComponent],
  imports: [CommonModule],
  exports: [CommonModule, FeaturedListingImageComponent],
})
export class SharedModule {}
