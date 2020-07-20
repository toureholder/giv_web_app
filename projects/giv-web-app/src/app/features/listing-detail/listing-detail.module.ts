import { NgModule } from '@angular/core';
import { ListingDetailRoutingModule } from './listing-detail-routing.module';
import { ListingDetailComponent } from './component/listing-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { ListingDetailLoadingStateComponent } from './components/listing-detail-loading-state/listing-detail-loading-state.component';

@NgModule({
  declarations: [ListingDetailComponent, ListingDetailLoadingStateComponent],
  imports: [SharedModule, ListingDetailRoutingModule],
})
export class ListingDetailModule {}
