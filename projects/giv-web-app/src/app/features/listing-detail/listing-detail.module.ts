import { NgModule } from '@angular/core';
import { ListingDetailRoutingModule } from './listing-detail-routing.module';
import { ListingDetailComponent } from './component/listing-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ListingDetailComponent],
  imports: [SharedModule, ListingDetailRoutingModule],
})
export class ListingDetailModule {}
