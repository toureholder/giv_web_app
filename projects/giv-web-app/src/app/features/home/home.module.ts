import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeCategorySectionComponent } from './components/home-category-section/home-category-section.component';
import { HomeService } from './service/home.service';
import { HomeLoadingStateComponent } from './components/home-loading-state/home-loading-state.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCategorySectionComponent,
    HomeLoadingStateComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
  providers: [HomeService],
})
export class HomeModule {}
