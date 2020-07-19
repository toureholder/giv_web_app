import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedListingImageComponent } from './components/featured-listing-image/featured-listing-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeaturedListingImageComponent],
  imports: [RouterModule, CommonModule],
  exports: [RouterModule, CommonModule, FeaturedListingImageComponent],
})
export class SharedModule {}
