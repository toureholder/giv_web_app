import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingDetailRoutingModule } from './listing-detail-routing.module';
import { ListingDetailComponent } from './listing-detail.component';


@NgModule({
  declarations: [ListingDetailComponent],
  imports: [
    CommonModule,
    ListingDetailRoutingModule
  ]
})
export class ListingDetailModule { }
