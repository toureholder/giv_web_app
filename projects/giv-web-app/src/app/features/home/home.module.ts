import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeCategorySectionComponent } from './home-category-section/home-category-section.component';
import { HomeService } from './home.service';
import { HomeLoadingStateComponent } from './home-loading-state/home-loading-state.component';

@NgModule({
  declarations: [HomeComponent, HomeCategorySectionComponent, HomeLoadingStateComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [HomeService],
})
export class HomeModule {}
