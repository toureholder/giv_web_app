import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDetailComponent } from './component/listing-detail.component';

const routes: Routes = [{ path: '', component: ListingDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingDetailRoutingModule {}
